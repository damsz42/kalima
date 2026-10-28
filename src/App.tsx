import { useEffect } from 'react'

import { SiteFooter } from '@/components/site-footer'
import { SiteHeader } from '@/components/site-header'
import { WORDS } from '@/data/words'
import { ActivitiesPanel } from '@/features/activities/activities-panel'
import { LexiconPanel } from '@/features/lexicon/lexicon-panel'
import { ProgressPanel } from '@/features/progress/progress-panel'
import { useProgress } from '@/features/progress/use-progress'
import { ReviewPanel } from '@/features/review/review-panel'
import { RootCard } from '@/features/today/root-card'
import { SensesCard } from '@/features/today/senses-card'
import { VerseCard } from '@/features/today/verse-card'
import { WordHero } from '@/features/today/word-hero'
import { useToday } from '@/hooks/use-today'
import { getDailyItem } from '@/lib/daily-word'
import { computeStreak } from '@/lib/progress'

export default function App() {
  const { date, key: today } = useToday()
  const word = getDailyItem(date, WORDS)
  const { state, dispatch } = useProgress()

  // Le mot du jour entre dans le système de révision dès qu'il est affiché.
  useEffect(() => {
    dispatch({ type: 'introduce', wordId: word.id, today })
  }, [dispatch, word.id, today])

  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader streak={computeStreak(state.activityLog, today)} />
      <main className="mx-auto w-full max-w-5xl flex-1 space-y-6 px-4 py-6">
        <WordHero word={word} date={date} total={WORDS.length} />
        <SensesCard word={word} />
        <div className="grid gap-6 md:grid-cols-2">
          <VerseCard word={word} />
          <RootCard word={word} />
        </div>
        <ActivitiesPanel word={word} today={today} />
        <div className="grid gap-6 md:grid-cols-2">
          <ReviewPanel today={today} currentWordId={word.id} />
          <ProgressPanel today={today} />
        </div>
        <LexiconPanel />
      </main>
      <SiteFooter />
    </div>
  )
}
