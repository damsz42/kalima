import { describe, expect, it } from 'vitest'

import { BOX_INTERVALS, MAX_BOX, createCard, isDue, reviewCard } from './leitner'
import {
  INITIAL_PROGRESS,
  computeStreak,
  isProgressState,
  mergeProgress,
  progressReducer,
  sameProgress,
  type ProgressState,
} from './progress'

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

  it("renvoie la carte en première boîte en cas d'erreur", () => {
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
    const once = progressReducer(INITIAL_PROGRESS, {
      type: 'introduce',
      wordId: 'rabb',
      today: '2026-10-26',
    })
    const twice = progressReducer(once, { type: 'introduce', wordId: 'rabb', today: '2026-10-28' })
    expect(twice).toBe(once)
  })

  it("n'enregistre pas deux fois la même activité le même jour", () => {
    const action = { type: 'complete-activity', activity: 'letters', today: '2026-10-26' } as const
    const state = progressReducer(progressReducer(INITIAL_PROGRESS, action), action)
    expect(state.activityLog['2026-10-26']).toEqual(['letters'])
  })

  it('réinitialise la progression', () => {
    const state = progressReducer(INITIAL_PROGRESS, {
      type: 'introduce',
      wordId: 'rabb',
      today: '2026-10-26',
    })
    const at = '2026-10-30T12:00:00.000Z'
    expect(progressReducer(state, { type: 'reset', at })).toEqual({
      ...INITIAL_PROGRESS,
      resetAt: at,
    })
  })
})

describe('mergeProgress', () => {
  const pc: ProgressState = {
    version: 1,
    cards: {
      rabb: { box: 2, due: '2026-11-03', lastReviewed: '2026-10-30' },
      ilm: { box: 0, due: '2026-10-28' },
    },
    activityLog: { '2026-10-29': ['letters'], '2026-10-30': ['verse'] },
  }
  const iphone: ProgressState = {
    version: 1,
    cards: {
      rabb: { box: 3, due: '2026-11-02', lastReviewed: '2026-10-26' },
      qawl: { box: 0, due: '2026-10-31' },
    },
    activityLog: { '2026-10-28': ['flashcard'], '2026-10-30': ['letters', 'verse'] },
  }

  it('additionne les jours et garde chaque mot dans sa version la plus récente', () => {
    const merged = mergeProgress(pc, iphone)
    expect(merged.cards).toEqual({
      ilm: pc.cards.ilm,
      qawl: iphone.cards.qawl,
      rabb: pc.cards.rabb,
    })
    expect(merged.activityLog).toEqual({
      '2026-10-28': ['flashcard'],
      '2026-10-29': ['letters'],
      '2026-10-30': ['letters', 'verse'],
    })
  })

  it("donne le même résultat quel que soit l'ordre des appareils", () => {
    expect(sameProgress(mergeProgress(pc, iphone), mergeProgress(iphone, pc))).toBe(true)
    expect(JSON.stringify(mergeProgress(pc, iphone))).toBe(
      JSON.stringify(mergeProgress(iphone, pc)),
    )
  })

  it('fusionner deux fois ne change plus rien', () => {
    const merged = mergeProgress(pc, iphone)
    expect(sameProgress(mergeProgress(merged, iphone), merged)).toBe(true)
  })

  it("une réinitialisation plus récente efface l'autre appareil", () => {
    const reset = progressReducer(pc, { type: 'reset', at: '2026-10-30T12:00:00.000Z' })
    expect(mergeProgress(iphone, reset)).toEqual(reset)
    expect(mergeProgress(reset, iphone)).toEqual(reset)
  })

  it("ignore l'ordre des clés pour comparer deux progressions", () => {
    const reordered = { ...pc, cards: { ilm: pc.cards.ilm, rabb: pc.cards.rabb } }
    expect(sameProgress(pc, reordered)).toBe(true)
    expect(sameProgress(pc, iphone)).toBe(false)
  })
})

describe('computeStreak', () => {
  const log = {
    '2026-10-23': ['flashcard' as const],
    '2026-10-24': ['verse' as const],
    '2026-10-25': ['letters' as const],
  }

  it("compte les jours consécutifs jusqu'à hier si rien n'est fait aujourd'hui", () => {
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
