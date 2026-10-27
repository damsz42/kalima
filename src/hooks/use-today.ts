import { useEffect, useState } from 'react'

import { msUntilNextDay, toDateKey } from '@/lib/date'

/**
 * Date du jour qui se met à jour d'elle-même à minuit,
 * et au retour sur l'onglet (les minuteurs sont suspendus quand l'ordinateur dort).
 */
export function useToday() {
  const [now, setNow] = useState(() => new Date())
  const key = toDateKey(now)

  useEffect(() => {
    const timer = window.setTimeout(() => setNow(new Date()), msUntilNextDay(now) + 500)

    const refreshIfDayChanged = () => {
      if (document.visibilityState === 'visible' && toDateKey(new Date()) !== key) {
        setNow(new Date())
      }
    }
    document.addEventListener('visibilitychange', refreshIfDayChanged)

    return () => {
      window.clearTimeout(timer)
      document.removeEventListener('visibilitychange', refreshIfDayChanged)
    }
  }, [now, key])

  return { date: now, key }
}
