import { RotateCwIcon } from 'lucide-react'
import { useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { KIND_LABELS } from '@/lib/words'

import { ActivityResult } from './activity-result'
import type { ActivityProps } from './types'

/** Rappel actif : se souvenir du sens avant de retourner la carte, puis s'auto-évaluer. */
export function FlashcardActivity({ word, onComplete, onRetry }: ActivityProps) {
  const [flipped, setFlipped] = useState(false)
  const [knew, setKnew] = useState<boolean | null>(null)

  const grade = (value: boolean) => {
    setKnew(value)
    onComplete(value)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Essaie de te souvenir du sens <strong>avant</strong> de retourner la carte : l'effort de
        rappel ancre le mot dans la mémoire.
      </p>

      <button
        type="button"
        onClick={() => setFlipped((value) => !value)}
        aria-label={flipped ? 'Afficher le recto' : 'Retourner la carte'}
        className="group block h-64 w-full perspective-distant focus-visible:outline-none"
      >
        <div
          className={cn(
            'relative size-full transition-transform duration-500 transform-3d',
            flipped && 'rotate-y-180',
          )}
        >
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 rounded-xl border bg-card backface-hidden group-focus-visible:ring-3 group-focus-visible:ring-ring/50">
            <ArabicText className="text-6xl font-bold">{word.arabic}</ArabicText>
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
              <RotateCwIcon className="size-3" /> Toucher pour retourner
            </span>
          </div>
          <div className="absolute inset-0 flex rotate-y-180 flex-col items-center justify-center gap-2 rounded-xl border bg-primary p-4 text-primary-foreground backface-hidden">
            <span className="text-xs uppercase opacity-80">{KIND_LABELS[word.kind]}</span>
            <span className="text-3xl font-semibold">{word.meaning}</span>
            <span className="text-lg italic opacity-90">{word.transliteration}</span>
            {word.senses.length > 1 && (
              <span className="text-xs opacity-90">
                Dans le Coran : {word.senses.map((sense) => sense.meaning).join(' · ')}
              </span>
            )}
          </div>
        </div>
      </button>

      {knew === null ? (
        <div className="grid grid-cols-2 gap-2">
          <Button variant="outline" disabled={!flipped} onClick={() => grade(false)}>
            Je ne savais pas
          </Button>
          <Button disabled={!flipped} onClick={() => grade(true)}>
            Je savais !
          </Button>
        </div>
      ) : (
        <ActivityResult
          success={knew}
          message={
            knew
              ? 'Excellente mémoire. Le mot reviendra dans tes révisions pour bien le fixer.'
              : 'Pas de souci : relis la fiche et le verset, puis réessaie.'
          }
          onRetry={onRetry}
        />
      )}
    </div>
  )
}
