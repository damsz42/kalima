import { WORDS } from '@/data/words'
import type { LeitnerCard } from '@/lib/leitner'
import type { QuranWord, VerseExample, WordKind } from '@/types/word'

export const KIND_LABELS: Record<WordKind, string> = {
  noun: 'Nom',
  verb: 'Verbe',
  adjective: 'Adjectif',
  proper: 'Nom propre',
}

const numberFormat = new Intl.NumberFormat('fr-FR')
export const formatNumber = (n: number) => numberFormat.format(n)

/** Rang de fréquence du mot dans la sélection (la liste est triée par occurrences). */
export function getFrequencyRank(word: QuranWord): number {
  return WORDS.indexOf(word) + 1
}

/** Autres mots de la sélection partageant la même racine. */
export function getRootSiblings(word: QuranWord): QuranWord[] {
  return WORDS.filter((other) => other.root === word.root && other.id !== word.id)
}

export function getWordById(id: string): QuranWord | undefined {
  return WORDS.find((word) => word.id === id)
}

/** Mots déjà vus avec leur carte de révision, du plus fréquent au moins fréquent. */
export function getSeenWords(
  cards: Record<string, LeitnerCard>,
): { word: QuranWord; card: LeitnerCard }[] {
  return WORDS.flatMap((word) => {
    const card = cards[word.id]
    return card ? [{ word, card }] : []
  })
}

export function formatVerseRef(example: Pick<VerseExample, 'surah' | 'ayah'>): string {
  return `${example.surah}:${example.ayah}`
}
