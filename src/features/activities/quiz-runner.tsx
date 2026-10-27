import { ArrowRightIcon, CheckIcon, ScrollTextIcon, XIcon } from 'lucide-react'
import { useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { AudioButton } from '@/components/audio-button'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { TranslationText, VerseText } from '@/components/verse-text'
import { wordAudioUrl } from '@/lib/audio'
import { ARABIC_CHOICE_KINDS, correctAnswer, targetForm, type QuizQuestion } from '@/lib/quiz'
import { cn } from '@/lib/utils'
import { formatVerseRef } from '@/lib/words'

import { ActivityResult } from './activity-result'
import { ChoiceButton } from './choice-button'
import { getChoiceState } from './choice-state'

interface QuizRunnerProps {
  questions: readonly QuizQuestion[]
  onComplete: (success: boolean) => void
  onRetry: () => void
}

/**
 * Enchaîne des questions à choix multiples. Après chaque réponse, une correction explique
 * la bonne réponse ; l'élève passe à la suite quand il est prêt. Un bilan termine la série.
 */
export function QuizRunner({ questions, onComplete, onRetry }: QuizRunnerProps) {
  const [step, setStep] = useState(0)
  const [selected, setSelected] = useState<number | null>(null)
  /** Réussite de chaque question déjà répondue. */
  const [results, setResults] = useState<boolean[]>([])

  const finished = step >= questions.length
  const score = results.filter(Boolean).length

  if (finished) {
    return <QuizSummary questions={questions} results={results} onRetry={onRetry} />
  }

  const question = questions[step]
  const answered = selected !== null
  const isLast = step === questions.length - 1
  const arabicChoices = ARABIC_CHOICE_KINDS.includes(question.kind)

  const answer = (index: number) => {
    if (answered) return
    setSelected(index)
    setResults([...results, question.choices[index].correct])
  }

  const next = () => {
    if (isLast) onComplete(score === questions.length)
    setSelected(null)
    setStep(step + 1)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="tabular-nums">
          Question {step + 1} / {questions.length}
        </span>
        <Progress value={((step + (answered ? 1 : 0)) / questions.length) * 100} className="flex-1" />
        <span className="tabular-nums">
          {score} bonne{score > 1 ? 's' : ''} réponse{score > 1 ? 's' : ''}
        </span>
      </div>

      {/* La clé remet le lecteur audio à zéro d'une question à l'autre. */}
      <QuestionPrompt key={step} question={question} answered={answered} />

      <div className="grid gap-2 sm:grid-cols-2">
        {question.choices.map((choice, index) => (
          <ChoiceButton
            key={choice.item}
            state={getChoiceState(choice.correct, selected === index, answered)}
            disabled={answered}
            onClick={() => answer(index)}
            className={arabicChoices ? 'justify-center' : undefined}
          >
            {arabicChoices ? (
              <ArabicText quranic className="block text-center text-2xl">
                {choice.item}
              </ArabicText>
            ) : question.kind === 'root' ? (
              <RootText root={choice.item} className="justify-center text-2xl" />
            ) : (
              choice.item
            )}
          </ChoiceButton>
        ))}
      </div>

      {answered && (
        <div
          role="status"
          className={cn(
            'space-y-3 rounded-xl border p-4',
            question.choices[selected].correct ? 'border-emerald-500/50 bg-emerald-500/5' : 'border-amber-500/50 bg-amber-500/5',
          )}
        >
          <p className="flex items-center gap-2 font-medium">
            {question.choices[selected].correct ? (
              <>
                <CheckIcon className="size-4 text-emerald-600" /> Bonne réponse !
              </>
            ) : (
              <>
                <XIcon className="size-4 text-amber-600" /> Pas tout à fait.
              </>
            )}
          </p>
          <QuestionExplanation question={question} />
          <Button onClick={next} className="w-full sm:w-auto">
            {isLast ? 'Voir le bilan' : 'Question suivante'}
            <ArrowRightIcon />
          </Button>
        </div>
      )}
    </div>
  )
}

/**
 * Lettres d'une racine, de droite à gauche. Une boîte flex en rtl garantit l'ordre :
 * une simple chaîne « ص - ل - و » peut s'afficher à l'envers selon le contexte bidirectionnel.
 */
function RootText({ root, className }: { root: string; className?: string }) {
  return (
    <ArabicText className={cn('inline-flex gap-3', className)}>
      {root.split(' ').map((letter, index) => (
        <span key={index}>{letter}</span>
      ))}
    </ArabicText>
  )
}

/** Énoncé de la question, propre à chaque type. */
function QuestionPrompt({ question, answered }: { question: QuizQuestion; answered: boolean }) {
  const { word } = question

  switch (question.kind) {
    case 'meaning':
      return (
        <p className="text-center text-lg">
          Que signifie <ArabicText className="text-3xl font-bold">{word.arabic}</ArabicText> ?
        </p>
      )
    case 'arabic':
      return (
        <p className="text-center text-lg">
          Comment dit-on « <strong>{word.meaning}</strong> » en arabe ?
        </p>
      )
    case 'pronunciation':
      return (
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg">Écoute ce mot récité, puis choisis ce que tu as entendu.</p>
          <AudioButton url={wordAudioUrl(word.pronunciation)} label="Écouter le mot" size="lg">
            Écouter
          </AudioButton>
        </div>
      )
    case 'root':
      return (
        <p className="text-center text-lg">
          De quelle racine vient <ArabicText className="text-3xl font-bold">{word.arabic}</ArabicText> ?
        </p>
      )
    case 'sense':
      return (
        <div className="space-y-3">
          <p className="text-center text-lg">
            Dans ce verset ({formatVerseRef(question.sense.example)}), quel sens prend{' '}
            <strong>{word.transliteration}</strong> ?
          </p>
          <div className="rounded-xl border bg-muted/30 p-4 text-center">
            <VerseText example={question.sense.example} className="text-2xl" />
          </div>
          <TranslationText
            text={question.sense.example.translation}
            passage={question.sense.example.highlight}
            mode={answered ? 'emphasis' : 'mask'}
          />
        </div>
      )
    case 'missing-word':
      return (
        <div className="space-y-3">
          <p className="text-center text-lg">
            Quel mot manque dans ce verset ({formatVerseRef(question.example)}) ?
          </p>
          <div className="rounded-xl border bg-muted/30 p-4 text-center">
            <VerseText example={question.example} target={answered ? 'highlight' : 'blank'} className="text-2xl" />
          </div>
          <TranslationText text={question.example.translation} />
        </div>
      )
    case 'listen-verse':
      return (
        <div className="flex flex-col items-center gap-3 text-center">
          <p className="text-lg">
            Écoute le mot tel qu'il est récité dans le verset {formatVerseRef(question.example)}, puis
            choisis la forme entendue.
          </p>
          <AudioButton
            url={wordAudioUrl({ ...question.example, wordIndex: question.example.targetIndex })}
            label="Écouter le mot dans le verset"
            size="lg"
          >
            Écouter
          </AudioButton>
          {answered && <VerseText example={question.example} className="text-2xl" />}
        </div>
      )
  }
}

/** Correction affichée après la réponse. */
function QuestionExplanation({ question }: { question: QuizQuestion }) {
  const { word } = question
  const arabic = <ArabicText className="text-xl">{word.arabic}</ArabicText>

  switch (question.kind) {
    case 'meaning':
    case 'arabic':
      return (
        <p className="text-sm">
          {arabic} ({word.transliteration}) signifie « {word.meaning} ».
        </p>
      )
    case 'pronunciation':
      return (
        <p className="text-sm">
          Tu as entendu <ArabicText quranic className="text-xl">{word.pronunciation.form}</ArabicText>, le
          mot {arabic} récité dans le verset {formatVerseRef(word.pronunciation)}.
        </p>
      )
    case 'root':
      return (
        <p className="text-sm">
          {arabic} vient de la racine <RootText root={word.root} className="text-xl" />,
          que l'on retrouve {word.rootOccurrences} fois dans le Coran.
        </p>
      )
    case 'sense':
      return (
        <div className="space-y-2 text-sm">
          <p>
            Ici, {word.transliteration} signifie « <strong>{question.sense.meaning}</strong> ».{' '}
            {question.sense.note}
          </p>
          {question.sense.tafsir && (
            <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <ScrollTextIcon className="size-3.5 shrink-0" />
              Tafsir al-Muyassar :
              <ArabicText className="text-sm text-foreground">« {question.sense.tafsir} »</ArabicText>
            </p>
          )}
        </div>
      )
    case 'missing-word':
    case 'listen-verse':
      return (
        <p className="text-sm">
          Dans ce verset, le mot s'écrit{' '}
          <ArabicText quranic className="text-xl">{targetForm(question.example)}</ArabicText> : c'est une
          forme de {arabic} ({word.meaning}).
        </p>
      )
  }
}

/** Libellé court de chaque type de question, pour le bilan. */
const KIND_LABELS: Record<QuizQuestion['kind'], string> = {
  meaning: 'Sens du mot',
  arabic: 'Écriture arabe',
  pronunciation: 'Prononciation',
  root: 'Racine',
  sense: 'Sens en contexte',
  'missing-word': 'Mot manquant',
  'listen-verse': 'Écoute',
}

interface QuizSummaryProps {
  questions: readonly QuizQuestion[]
  results: readonly boolean[]
  onRetry: () => void
}

function QuizSummary({ questions, results, onRetry }: QuizSummaryProps) {
  const score = results.filter(Boolean).length
  const success = score === questions.length

  return (
    <div className="space-y-4">
      <ActivityResult
        success={success}
        message={
          success
            ? `Sans faute : ${score} / ${questions.length} !`
            : `Score : ${score} / ${questions.length}. Revois les réponses ci-dessous puis réessaie.`
        }
        onRetry={onRetry}
      />
      <ul className="divide-y rounded-xl border">
        {questions.map((question, index) => {
          const answer = correctAnswer(question)
          return (
            <li key={index} className="flex items-center gap-3 px-4 py-2 text-sm">
              {results[index] ? (
                <CheckIcon className="size-4 shrink-0 text-emerald-600" aria-label="Réussie" />
              ) : (
                <XIcon className="size-4 shrink-0 text-destructive" aria-label="Manquée" />
              )}
              <span className="flex-1 text-muted-foreground">
                {KIND_LABELS[question.kind]}
                {question.kind === 'sense' && ` (${formatVerseRef(question.sense.example)})`}
              </span>
              {ARABIC_CHOICE_KINDS.includes(question.kind) ? (
                <ArabicText quranic className="text-lg">
                  {answer}
                </ArabicText>
              ) : question.kind === 'root' ? (
                <RootText root={answer} className="text-lg" />
              ) : (
                <span className="font-medium">{answer}</span>
              )}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
