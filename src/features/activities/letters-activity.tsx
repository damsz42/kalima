import { DeleteIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { Button } from '@/components/ui/button'
import { toLetters } from '@/lib/arabic'
import { createRandom, shuffle } from '@/lib/random'

import { ActivityResult } from './activity-result'
import type { ActivityProps } from './types'

/** Mélange les lettres en évitant, si possible, de retomber sur l'ordre correct. */
function scrambleLetters(letters: string[], seed: string): string[] {
  const random = createRandom(seed)
  const target = letters.join('')
  let scrambled = shuffle(letters, random)
  for (let attempt = 0; attempt < 10 && scrambled.join('') === target; attempt++) {
    scrambled = shuffle(letters, random)
  }
  return scrambled
}

/** Reconstitution : remettre les lettres dans l'ordre pour mémoriser l'orthographe. */
export function LettersActivity({ word, seed, onComplete, onRetry }: ActivityProps) {
  const letters = useMemo(() => toLetters(word.arabic), [word])
  const tiles = useMemo(() => scrambleLetters(letters, seed), [letters, seed])

  /** Index des tuiles choisies, dans l'ordre de sélection. */
  const [picked, setPicked] = useState<number[]>([])
  const [errors, setErrors] = useState(0)

  const answer = picked.map((index) => tiles[index]).join('')
  const isComplete = picked.length === tiles.length
  const isCorrect = answer === letters.join('')

  const pick = (index: number) => {
    const next = [...picked, index]
    setPicked(next)
    if (next.length !== tiles.length) return

    const nextAnswer = next.map((i) => tiles[i]).join('')
    if (nextAnswer === letters.join('')) onComplete(errors === 0)
    else setErrors(errors + 1)
  }

  return (
    <div className="space-y-4">
      <p className="text-sm text-muted-foreground">
        Touche les lettres dans l'ordre pour écrire <strong>{word.meaning}</strong>. L'arabe se
        lit de droite à gauche.
      </p>

      <div
        aria-live="polite"
        className="flex min-h-20 items-center justify-center rounded-xl border-2 border-dashed px-4"
      >
        {answer ? (
          <ArabicText
            className={
              isComplete
                ? isCorrect
                  ? 'text-5xl text-emerald-600'
                  : 'text-5xl text-destructive'
                : 'text-5xl'
            }
          >
            {answer}
          </ArabicText>
        ) : (
          <span className="text-sm text-muted-foreground">Ta réponse apparaîtra ici</span>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-2" dir="rtl">
        {tiles.map((letter, index) => (
          <Button
            key={index}
            variant="secondary"
            className="size-14 text-3xl"
            disabled={picked.includes(index) || (isComplete && isCorrect)}
            onClick={() => pick(index)}
          >
            <ArabicText>{letter}</ArabicText>
          </Button>
        ))}
      </div>

      {isComplete && isCorrect ? (
        <ActivityResult
          success={errors === 0}
          message={`Tu as écrit ${word.arabic} (${word.transliteration}). Voyelles et shadda sont omises ici.`}
          onRetry={onRetry}
        />
      ) : (
        <div className="flex justify-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            disabled={picked.length === 0}
            onClick={() => setPicked(picked.slice(0, -1))}
          >
            <DeleteIcon />
            Effacer
          </Button>
          {isComplete && (
            <Button size="sm" variant="outline" onClick={() => setPicked([])}>
              Ce n'est pas ça, recommence
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
