import { stripDiacritics } from '@/lib/arabic'
import { sample, shuffle } from '@/lib/random'
import type { QuranWord, VerseExample, WordSense } from '@/types/word'

export interface Choice<T> {
  item: T
  correct: boolean
}

/**
 * Construit un QCM : la bonne réponse et des distracteurs tirés du pool,
 * sans doublon selon `keyOf` (deux options ne peuvent pas afficher le même texte).
 * Les candidats de `priority` sont essayés avant ceux du pool.
 */
export function buildChoices<T>(
  answer: T,
  pool: readonly T[],
  count: number,
  random: () => number,
  keyOf: (item: T) => string,
  priority: readonly T[] = [],
): Choice<T>[] {
  const seen = new Set([keyOf(answer)])
  const distractors: T[] = []
  for (const candidate of [...shuffle(priority, random), ...shuffle(pool, random)]) {
    if (distractors.length >= count - 1) break
    const key = keyOf(candidate)
    if (seen.has(key)) continue
    seen.add(key)
    distractors.push(candidate)
  }
  const choices = [answer, ...distractors].map((item) => ({ item, correct: item === answer }))
  return shuffle(choices, random)
}

export const CHOICES_PER_QUESTION = 4

/** Une question de quiz : son énoncé dépend de `kind`, les options sont des textes. */
export type QuizQuestion =
  | { kind: 'meaning'; word: QuranWord; choices: Choice<string>[] }
  | { kind: 'arabic'; word: QuranWord; choices: Choice<string>[] }
  | { kind: 'pronunciation'; word: QuranWord; choices: Choice<string>[] }
  | { kind: 'root'; word: QuranWord; choices: Choice<string>[] }
  | { kind: 'sense'; word: QuranWord; sense: WordSense; choices: Choice<string>[] }
  | { kind: 'missing-word'; word: QuranWord; example: VerseExample; choices: Choice<string>[] }
  | { kind: 'listen-verse'; word: QuranWord; example: VerseExample; choices: Choice<string>[] }

export type QuizKind = QuizQuestion['kind']

/** Les options de ces questions sont en arabe. */
export const ARABIC_CHOICE_KINDS: readonly QuizKind[] = [
  'arabic',
  'pronunciation',
  'missing-word',
  'listen-verse',
]

/** Comparaison des formes arabes sans voyelles : deux options ne doivent pas se lire pareil. */
const arabicKey = (text: string) => stripDiacritics(text)
const textKey = (text: string) => text.toLowerCase()

/** Forme du mot telle qu'elle apparaît dans un verset. */
export const targetForm = (example: VerseExample) => example.words[example.targetIndex]

function textChoices(
  answer: string,
  pool: readonly string[],
  random: () => number,
  keyOf: (text: string) => string,
  priority: readonly string[] = [],
) {
  return buildChoices(answer, pool, CHOICES_PER_QUESTION, random, keyOf, priority)
}

const STOP_WORDS = new Set(['avec', 'dans', 'pour', 'vers', 'sous', 'chez'])

/** Mots significatifs d'un sens en français, sans accents : « la Vérité (nom d'Allah) » → verite, allah. */
function meaningTokens(meaning: string): Set<string> {
  const plain = meaning.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
  return new Set(plain.split(/[^a-z]+/).filter((token) => token.length >= 4 && !STOP_WORDS.has(token)))
}

/**
 * Sens des autres mots utilisables comme pièges : on écarte ceux qui partagent un mot
 * avec la bonne réponse (« Coran » ne doit pas piéger « le Coran »), car ils seraient aussi justes.
 */
export function distinctMeanings(answer: string, candidates: readonly string[]): string[] {
  const tokens = meaningTokens(answer)
  return candidates.filter((candidate) => ![...meaningTokens(candidate)].some((t) => tokens.has(t)))
}

/** Sens d'un mot replacé dans un verset : les autres sens du même mot sont les meilleurs pièges. */
function senseQuestion(word: QuranWord, sense: WordSense, others: readonly QuranWord[], random: () => number): QuizQuestion {
  const sameWord = word.senses.filter((s) => s !== sense).map((s) => s.meaning)
  const pool = distinctMeanings(sense.meaning, others.map((w) => w.meaning))
  return {
    kind: 'sense',
    word,
    sense,
    choices: textChoices(sense.meaning, pool, random, textKey, sameWord),
  }
}

/**
 * Quiz complet du mot du jour, du plus simple au plus exigeant :
 * sens, écriture, écoute, racine, sens en contexte puis mot manquant dans un verset.
 */
export function buildWordQuiz(word: QuranWord, words: readonly QuranWord[], random: () => number): QuizQuestion[] {
  const others = words.filter((w) => w.id !== word.id)
  const otherRoots = others.filter((w) => w.root !== word.root)
  // Au plus deux sens par quiz, tirés au hasard : chaque tentative en montre d'autres.
  const senses = sample(word.senses, 2, random)
  const example = sample(word.examples, 1, random)[0]

  return [
    {
      kind: 'meaning',
      word,
      choices: textChoices(word.meaning, distinctMeanings(word.meaning, others.map((w) => w.meaning)), random, textKey),
    },
    {
      kind: 'arabic',
      word,
      choices: textChoices(word.arabic, others.map((w) => w.arabic), random, arabicKey),
    },
    {
      kind: 'pronunciation',
      word,
      choices: textChoices(
        word.pronunciation.form,
        others.map((w) => w.pronunciation.form),
        random,
        arabicKey,
      ),
    },
    {
      kind: 'root',
      word,
      choices: textChoices(word.root, otherRoots.map((w) => w.root), random, textKey),
    },
    ...senses.map((sense) => senseQuestion(word, sense, others, random)),
    {
      kind: 'missing-word',
      word,
      example,
      choices: textChoices(targetForm(example), others.map((w) => targetForm(w.examples[0])), random, arabicKey),
    },
  ]
}

/** Écoute : reconnaître le mot récité dans chacun de ses versets d'exemple. */
export function buildListeningQuiz(word: QuranWord, words: readonly QuranWord[], random: () => number): QuizQuestion[] {
  const pool = words
    .filter((w) => w.id !== word.id)
    .flatMap((w) => w.examples.map(targetForm))
  return word.examples.map((example) => ({
    kind: 'listen-verse',
    word,
    example,
    choices: textChoices(targetForm(example), pool, random, arabicKey),
  }))
}

/** Bonne réponse d'une question, pour le bilan final. */
export function correctAnswer(question: QuizQuestion): string {
  return question.choices.find((choice) => choice.correct)!.item
}
