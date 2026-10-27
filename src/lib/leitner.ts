import { addDays } from '@/lib/date'

/**
 * Système de Leitner : chaque boîte a son intervalle de révision (en jours).
 * Une bonne réponse fait monter la carte d'une boîte, une erreur la renvoie en boîte 1.
 */
export const BOX_INTERVALS = [1, 2, 4, 7, 15, 30] as const
export const MAX_BOX = BOX_INTERVALS.length - 1

export interface LeitnerCard {
  /** Index de boîte, de 0 à MAX_BOX. */
  box: number
  /** Date (AAAA-MM-JJ) à partir de laquelle la carte est à réviser. */
  due: string
  lastReviewed?: string
}

export function createCard(today: string): LeitnerCard {
  return { box: 0, due: addDays(today, BOX_INTERVALS[0]) }
}

export function reviewCard(card: LeitnerCard, correct: boolean, today: string): LeitnerCard {
  const box = correct ? Math.min(card.box + 1, MAX_BOX) : 0
  return { box, due: addDays(today, BOX_INTERVALS[box]), lastReviewed: today }
}

export function isDue(card: LeitnerCard, today: string): boolean {
  return card.due <= today
}

/** Une carte est considérée « maîtrisée » à partir de la boîte 4 (intervalle ≥ 7 jours). */
export function isMastered(card: LeitnerCard): boolean {
  return card.box >= 3
}
