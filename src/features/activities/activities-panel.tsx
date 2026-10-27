import { CheckCircle2Icon, GraduationCapIcon } from 'lucide-react'
import { useCallback, useState } from 'react'
import { toast } from 'sonner'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { useProgress } from '@/features/progress/use-progress'
import type { QuranWord } from '@/types/word'

import { ACTIVITIES, type ActivityDefinition } from './activity-registry'

interface ActivitiesPanelProps {
  word: QuranWord
  today: string
}

export function ActivitiesPanel({ word, today }: ActivitiesPanelProps) {
  const { state } = useProgress()
  const done = state.activityLog[today] ?? []

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCapIcon className="size-4 text-primary" />
          Apprendre le mot
        </CardTitle>
        <CardDescription>
          Cinq exercices courts pour mémoriser le mot sous tous ses angles.
        </CardDescription>
        <div className="flex items-center gap-3 pt-2 text-xs text-muted-foreground">
          <Progress value={(done.length / ACTIVITIES.length) * 100} className="flex-1" />
          <span className="tabular-nums">
            {done.length} / {ACTIVITIES.length} terminés
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue={ACTIVITIES[0].id}>
          <TabsList className="grid h-auto w-full grid-cols-5">
            {ACTIVITIES.map(({ id, label, icon: Icon }) => (
              <TabsTrigger key={id} value={id} aria-label={label}>
                {done.includes(id) ? <CheckCircle2Icon className="text-emerald-600" /> : <Icon />}
                <span className="max-sm:sr-only">{label}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {ACTIVITIES.map((activity) => (
            <TabsContent key={activity.id} value={activity.id} className="pt-4">
              <p className="mb-4 text-sm font-medium">{activity.description}</p>
              {/* La clé réinitialise l'activité quand le mot du jour change. */}
              <ActivityRunner key={`${word.id}:${activity.id}`} activity={activity} word={word} today={today} />
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  )
}

interface ActivityRunnerProps {
  activity: ActivityDefinition
  word: QuranWord
  today: string
}

/** Gère les tentatives successives d'une activité et l'enregistrement de sa réussite. */
function ActivityRunner({ activity, word, today }: ActivityRunnerProps) {
  const { dispatch } = useProgress()
  const [attempt, setAttempt] = useState(0)
  const Activity = activity.component

  const handleComplete = useCallback(
    (success: boolean) => {
      dispatch({ type: 'complete-activity', activity: activity.id, today })
      if (success) toast.success(`Exercice « ${activity.label} » réussi !`)
    },
    [dispatch, activity, today],
  )

  return (
    <Activity
      key={attempt}
      word={word}
      seed={`${today}:${activity.id}:${attempt}`}
      onComplete={handleComplete}
      onRetry={() => setAttempt(attempt + 1)}
    />
  )
}
