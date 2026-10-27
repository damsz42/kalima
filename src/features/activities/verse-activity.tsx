import { ArrowRightIcon } from 'lucide-react'
import { useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { Button } from '@/components/ui/button'
import { Progress } from '@/components/ui/progress'
import { TranslationText } from '@/components/verse-text'
import { cn } from '@/lib/utils'
import { formatVerseRef } from '@/lib/words'

import { ActivityResult } from './activity-result'
import type { ActivityProps } from './types'

/** Lecture en contexte : repérer le mot du jour dans chacun de ses versets d'exemple. */
export function VerseActivity({ word, onComplete, onRetry }: ActivityProps) {
  const { examples } = word
  const [step, setStep] = useState(0)
  /** Mots touchés à tort dans le verset en cours. */
  const [wrong, setWrong] = useState<number[]>([])
  const [found, setFound] = useState(false)
  const [totalErrors, setTotalErrors] = useState(0)

  const finished = step >= examples.length
  const example = examples[Math.min(step, examples.length - 1)]
  const isLast = step === examples.length - 1

  const select = (index: number) => {
    if (found || wrong.includes(index)) return
    if (index === example.targetIndex) setFound(true)
    else {
      setWrong([...wrong, index])
      setTotalErrors(totalErrors + 1)
    }
  }

  const next = () => {
    if (isLast) onComplete(totalErrors === 0)
    setWrong([])
    setFound(false)
    setStep(step + 1)
  }

  if (finished) {
    return (
      <ActivityResult
        success={totalErrors === 0}
        message={
          totalErrors === 0
            ? `Trouvé du premier coup dans les ${examples.length} versets !`
            : `Trouvé dans les ${examples.length} versets, avec ${totalErrors} erreur${totalErrors > 1 ? 's' : ''}.`
        }
        onRetry={onRetry}
      />
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span className="tabular-nums">
          Verset {step + 1} / {examples.length}
        </span>
        <Progress value={((step + (found ? 1 : 0)) / examples.length) * 100} className="flex-1" />
      </div>

      <p className="text-sm text-muted-foreground">
        Retrouve <strong>{word.transliteration}</strong> ({word.meaning}) dans ce verset (
        {formatVerseRef(example)}). Attention : il peut porter un préfixe (wa-, fa-, bi-, li-, al-…)
        ou un suffixe.
      </p>

      <div
        lang="ar"
        dir="rtl"
        className="flex flex-wrap justify-center gap-x-1 gap-y-2 rounded-xl border bg-muted/30 p-4"
      >
        {example.words.map((form, index) => {
          const isTarget = index === example.targetIndex
          return (
            <button
              key={`${step}:${index}`}
              type="button"
              disabled={found}
              onClick={() => select(index)}
              className={cn(
                'rounded-md px-1.5 transition-colors hover:bg-accent focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none',
                wrong.includes(index) && 'bg-destructive/10 text-destructive line-through',
                found && isTarget && 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
              )}
            >
              <ArabicText quranic className="text-3xl">
                {form}
              </ArabicText>
            </button>
          )
        })}
      </div>

      {found && (
        <div className="space-y-3">
          <TranslationText text={example.translation} />
          <Button onClick={next} className="w-full sm:w-auto">
            {isLast ? 'Terminer' : 'Verset suivant'}
            <ArrowRightIcon />
          </Button>
        </div>
      )}
    </div>
  )
}
