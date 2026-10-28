import { describe, expect, it } from 'vitest'

import { WORDS } from '@/data/words'

import { createCard } from './leitner'
import { getSeenWords } from './words'

describe('getSeenWords', () => {
  it('ne garde que les mots vus, rangés par fréquence', () => {
    const card = createCard('2026-10-28')
    const cards = { [WORDS[2].id]: card, [WORDS[0].id]: card }
    expect(getSeenWords(cards).map(({ word }) => word.id)).toEqual([WORDS[0].id, WORDS[2].id])
  })

  it('ignore les identifiants inconnus', () => {
    expect(getSeenWords({ 'mot-inconnu': createCard('2026-10-28') })).toEqual([])
  })
})
