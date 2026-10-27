import { describe, expect, it } from 'vitest'

import { BOX_INTERVALS, MAX_BOX, createCard, isDue, reviewCard } from './leitner'
import { INITIAL_PROGRESS, computeStreak, isProgressState, progressReducer } from './progress'

describe('leitner', () => {
  it('programme une nouvelle carte pour le lendemain', () => {
    expect(createCard('2026-10-26')).toEqual({ box: 0, due: '2026-10-27' })
  })

  it('fait monter la carte en cas de réussite, sans dépasser la dernière boîte', () => {
    let card = createCard('2026-10-26')
    card = reviewCard(card, true, '2026-10-27')
    expect(card).toMatchObject({ box: 1, due: '2026-10-29' })

    for (let i = 0; i < 10; i++) card = reviewCard(card, true, '2026-11-01')
    expect(card.box).toBe(MAX_BOX)
    expect(card.due).toBe('2026-12-01')
    expect(BOX_INTERVALS[MAX_BOX]).toBe(30)
  })

  it('renvoie la carte en première boîte en cas d\'erreur', () => {
    const card = reviewCard({ box: 3, due: '2026-10-26' }, false, '2026-10-26')
    expect(card).toMatchObject({ box: 0, due: '2026-10-27' })
  })

  it('détermine si une carte est à réviser', () => {
    expect(isDue({ box: 0, due: '2026-10-26' }, '2026-10-26')).toBe(true)
    expect(isDue({ box: 0, due: '2026-10-27' }, '2026-10-26')).toBe(false)
  })
})

describe('progressReducer', () => {
  it("n'introduit un mot qu'une seule fois", () => {
    const once = progressReducer(INITIAL_PROGRESS, { type: 'introduce', wordId: 'rabb', today: '2026-10-26' })
    const twice = progressReducer(once, { type: 'introduce', wordId: 'rabb', today: '2026-10-28' })
    expect(twice).toBe(once)
  })

  it("n'enregistre pas deux fois la même activité le même jour", () => {
    const action = { type: 'complete-activity', activity: 'letters', today: '2026-10-26' } as const
    const state = progressReducer(progressReducer(INITIAL_PROGRESS, action), action)
    expect(state.activityLog['2026-10-26']).toEqual(['letters'])
  })

  it('réinitialise la progression', () => {
    const state = progressReducer(INITIAL_PROGRESS, { type: 'introduce', wordId: 'rabb', today: '2026-10-26' })
    expect(progressReducer(state, { type: 'reset' })).toEqual(INITIAL_PROGRESS)
  })
})

describe('computeStreak', () => {
  const log = {
    '2026-10-23': ['flashcard' as const],
    '2026-10-24': ['verse' as const],
    '2026-10-25': ['letters' as const],
  }

  it('compte les jours consécutifs jusqu\'à hier si rien n\'est fait aujourd\'hui', () => {
    expect(computeStreak(log, '2026-10-26')).toBe(3)
  })

  it("inclut aujourd'hui", () => {
    expect(computeStreak({ ...log, '2026-10-26': ['verse'] }, '2026-10-26')).toBe(4)
  })

  it('retombe à zéro après un jour manqué', () => {
    expect(computeStreak(log, '2026-10-27')).toBe(0)
  })
})

describe('isProgressState', () => {
  it('rejette des données corrompues', () => {
    expect(isProgressState(null)).toBe(false)
    expect(isProgressState({ version: 2, cards: {}, activityLog: {} })).toBe(false)
    expect(isProgressState(INITIAL_PROGRESS)).toBe(true)
  })
})
