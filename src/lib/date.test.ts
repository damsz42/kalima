import { describe, expect, it } from 'vitest'

import { addDays, daysBetween, daysSinceEpoch, formatCountdown, msUntilNextDay, toDateKey } from './date'

describe('date', () => {
  it('formate une date locale en AAAA-MM-JJ', () => {
    expect(toDateKey(new Date(2026, 9, 5, 23, 59))).toBe('2026-10-05')
  })

  it("compte les jours depuis l'époque, quelle que soit l'heure", () => {
    expect(daysSinceEpoch(new Date(2026, 0, 1, 0, 0))).toBe(0)
    expect(daysSinceEpoch(new Date(2026, 0, 1, 23, 59))).toBe(0)
    expect(daysSinceEpoch(new Date(2026, 0, 2, 0, 1))).toBe(1)
    expect(daysSinceEpoch(new Date(2025, 11, 31))).toBe(-1)
  })

  it('reste exact de part et d\'autre des changements d\'heure', () => {
    expect(daysSinceEpoch(new Date(2026, 2, 30)) - daysSinceEpoch(new Date(2026, 2, 28))).toBe(2)
    expect(daysSinceEpoch(new Date(2026, 9, 26)) - daysSinceEpoch(new Date(2026, 9, 24))).toBe(2)
  })

  it('ajoute des jours en changeant de mois et d\'année', () => {
    expect(addDays('2026-01-31', 1)).toBe('2026-02-01')
    expect(addDays('2026-12-31', 1)).toBe('2027-01-01')
    expect(addDays('2026-03-01', -1)).toBe('2026-02-28')
    expect(daysBetween('2026-02-27', '2026-03-02')).toBe(3)
  })

  it('calcule le temps restant avant minuit', () => {
    expect(msUntilNextDay(new Date(2026, 4, 10, 23, 59, 30))).toBe(30_000)
    expect(formatCountdown(3_723_000)).toBe('01:02:03')
    expect(formatCountdown(-5)).toBe('00:00:00')
  })
})
