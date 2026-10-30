import { AwardIcon, FlameIcon, LibraryIcon, TrophyIcon, type LucideIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { WORDS } from '@/data/words'
import { AccountSection } from '@/features/account/account-section'
import { isMastered } from '@/lib/leitner'
import { computeStreak } from '@/lib/progress'

import { useProgress } from './use-progress'

function Stat({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border p-3 text-center">
      <Icon className="size-5 text-primary" />
      <span className="text-2xl font-semibold tabular-nums">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  )
}

export function ProgressPanel({ today }: { today: string }) {
  const { state, dispatch } = useProgress()
  const entries = Object.entries(state.cards)
  const mastered = entries.filter(([, card]) => isMastered(card)).length
  const totalDays = Object.values(state.activityLog).filter((list) => list.length > 0).length

  const reset = () => {
    if (window.confirm('Effacer toute ta progression ? Cette action est irréversible.')) {
      dispatch({ type: 'reset' })
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrophyIcon className="size-4 text-primary" />
          Ta progression
        </CardTitle>
        <CardDescription>Enregistrée uniquement dans ce navigateur.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stat
            icon={FlameIcon}
            label="Série en cours"
            value={String(computeStreak(state.activityLog, today))}
          />
          <Stat
            icon={LibraryIcon}
            label="Mots découverts"
            value={`${entries.length} / ${WORDS.length}`}
          />
          <Stat icon={AwardIcon} label="Mots maîtrisés" value={String(mastered)} />
          <Stat icon={TrophyIcon} label="Jours d'étude" value={String(totalDays)} />
        </div>

        <AccountSection />

        <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={reset}>
          Réinitialiser la progression
        </Button>
      </CardContent>
    </Card>
  )
}
