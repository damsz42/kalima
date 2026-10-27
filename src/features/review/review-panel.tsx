import { BrainIcon, CalendarCheckIcon, EyeIcon } from 'lucide-react'
import { useMemo, useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useProgress } from '@/features/progress/use-progress'
import { isDue } from '@/lib/leitner'
import { getWordById, KIND_LABELS } from '@/lib/words'
import type { QuranWord } from '@/types/word'

interface ReviewPanelProps {
  today: string
  /** Le mot du jour est travaillé dans les activités, il est exclu des révisions. */
  currentWordId: string
}

/** Répétition espacée (Leitner) des mots des jours précédents. */
export function ReviewPanel({ today, currentWordId }: ReviewPanelProps) {
  const { state, dispatch } = useProgress()
  const [revealed, setRevealed] = useState(false)

  const dueWords = useMemo(
    () =>
      Object.entries(state.cards)
        .filter(([id, card]) => id !== currentWordId && isDue(card, today))
        .sort(([, a], [, b]) => a.due.localeCompare(b.due))
        .map(([id]) => getWordById(id))
        .filter((word): word is QuranWord => word !== undefined),
    [state.cards, currentWordId, today],
  )

  const current = dueWords[0]

  const grade = (correct: boolean) => {
    if (!current) return
    dispatch({ type: 'review', wordId: current.id, correct, today })
    setRevealed(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BrainIcon className="size-4 text-primary" />
          Révisions
        </CardTitle>
        <CardDescription>
          Les mots déjà vus reviennent à intervalles croissants (1, 2, 4, 7, 15 puis 30 jours) :
          c'est la répétition espacée.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {current ? (
          <div className="space-y-4">
            <p className="text-xs text-muted-foreground">
              {dueWords.length} mot{dueWords.length > 1 ? 's' : ''} à réviser aujourd'hui
            </p>
            <div className="flex min-h-36 flex-col items-center justify-center gap-2 rounded-xl border bg-muted/30 p-4 text-center">
              <ArabicText className="text-5xl font-bold">{current.arabic}</ArabicText>
              {revealed && (
                <>
                  <span className="text-lg font-semibold">{current.meaning}</span>
                  <span className="text-sm text-muted-foreground italic">
                    {current.transliteration} · {KIND_LABELS[current.kind]}
                  </span>
                </>
              )}
            </div>
            {revealed ? (
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => grade(false)}>
                  À revoir
                </Button>
                <Button onClick={() => grade(true)}>Je savais</Button>
              </div>
            ) : (
              <Button className="w-full" variant="secondary" onClick={() => setRevealed(true)}>
                <EyeIcon />
                Afficher le sens
              </Button>
            )}
          </div>
        ) : (
          <div className="flex flex-col items-center gap-2 py-6 text-center text-sm text-muted-foreground">
            <CalendarCheckIcon className="size-8 text-emerald-600" />
            <p>Aucune révision en attente.</p>
            <p>Chaque mot du jour rejoindra tes révisions dès demain.</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
