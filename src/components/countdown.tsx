import { useEffect, useState } from 'react'

import { formatCountdown, msUntilNextDay } from '@/lib/date'

/** Temps restant avant le prochain mot ; isolé pour ne pas re-rendre la page chaque seconde. */
export function Countdown() {
  const [remaining, setRemaining] = useState(() => msUntilNextDay(new Date()))

  useEffect(() => {
    const interval = window.setInterval(() => setRemaining(msUntilNextDay(new Date())), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return <time className="font-mono tabular-nums">{formatCountdown(remaining)}</time>
}
