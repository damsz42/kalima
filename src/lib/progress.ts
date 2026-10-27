import { addDays } from '@/lib/date'
import { createCard, reviewCard, type LeitnerCard } from '@/lib/leitner'

export const ACTIVITY_IDS = ['flashcard', 'meaning-quiz', 'listening', 'letters', 'verse'] as const
export type ActivityId = (typeof ACTIVITY_IDS)[number]

export interface ProgressState {
  version: 1
  /** Cartes de révision, indexées par identifiant de mot. */
  cards: Record<string, LeitnerCard>
  /** Activités terminées, par date (AAAA-MM-JJ). */
  activityLog: Record<string, ActivityId[]>
}

export const INITIAL_PROGRESS: ProgressState = { version: 1, cards: {}, activityLog: {} }

export type ProgressAction =
  | { type: 'introduce'; wordId: string; today: string }
  | { type: 'complete-activity'; activity: ActivityId; today: string }
  | { type: 'review'; wordId: string; correct: boolean; today: string }
  | { type: 'reset' }

export function progressReducer(state: ProgressState, action: ProgressAction): ProgressState {
  switch (action.type) {
    case 'introduce': {
      if (state.cards[action.wordId]) return state
      return { ...state, cards: { ...state.cards, [action.wordId]: createCard(action.today) } }
    }
    case 'complete-activity': {
      const done = state.activityLog[action.today] ?? []
      if (done.includes(action.activity)) return state
      return {
        ...state,
        activityLog: { ...state.activityLog, [action.today]: [...done, action.activity] },
      }
    }
    case 'review': {
      const card = state.cards[action.wordId] ?? createCard(action.today)
      return {
        ...state,
        cards: { ...state.cards, [action.wordId]: reviewCard(card, action.correct, action.today) },
      }
    }
    case 'reset':
      return INITIAL_PROGRESS
  }
}

/** Série de jours consécutifs avec au moins une activité, se terminant aujourd'hui ou hier. */
export function computeStreak(activityLog: ProgressState['activityLog'], today: string): number {
  const isActive = (day: string) => (activityLog[day]?.length ?? 0) > 0
  let day = isActive(today) ? today : addDays(today, -1)
  let streak = 0
  while (isActive(day)) {
    streak++
    day = addDays(day, -1)
  }
  return streak
}

/** Vérifie la forme minimale des données relues depuis le stockage. */
export function isProgressState(value: unknown): value is ProgressState {
  if (typeof value !== 'object' || value === null) return false
  const candidate = value as Partial<ProgressState>
  return (
    candidate.version === 1 &&
    typeof candidate.cards === 'object' &&
    candidate.cards !== null &&
    typeof candidate.activityLog === 'object' &&
    candidate.activityLog !== null
  )
}
