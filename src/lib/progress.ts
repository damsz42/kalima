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
  /** Date ISO de la dernière réinitialisation, pour qu'elle s'applique à tous les appareils. */
  resetAt?: string
}

export const INITIAL_PROGRESS: ProgressState = { version: 1, cards: {}, activityLog: {} }

export type ProgressAction =
  | { type: 'introduce'; wordId: string; today: string }
  | { type: 'complete-activity'; activity: ActivityId; today: string }
  | { type: 'review'; wordId: string; correct: boolean; today: string }
  | { type: 'reset'; at: string }
  | { type: 'replace'; state: ProgressState }

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
      return { ...INITIAL_PROGRESS, resetAt: action.at }
    case 'replace':
      return action.state
  }
}

/** Garde la carte révisée le plus récemment, ou à défaut celle de la boîte la plus haute. */
function newerCard(a: LeitnerCard, b: LeitnerCard): LeitnerCard {
  const reviewedA = a.lastReviewed ?? ''
  const reviewedB = b.lastReviewed ?? ''
  if (reviewedA !== reviewedB) return reviewedA > reviewedB ? a : b
  return b.box > a.box ? b : a
}

/**
 * Fusionne les progressions de deux appareils sans rien perdre : les jours d'activité
 * s'additionnent et chaque mot garde sa version la plus récente. Une réinitialisation plus
 * récente d'un côté l'emporte sur tout l'autre côté. Le résultat ne dépend pas de l'ordre des
 * arguments et ses clés sont triées, pour pouvoir le comparer avec `sameProgress`.
 */
export function mergeProgress(a: ProgressState, b: ProgressState): ProgressState {
  const resetA = a.resetAt ?? ''
  const resetB = b.resetAt ?? ''
  if (resetA !== resetB) return normalizeProgress(resetA > resetB ? a : b)

  const cards: ProgressState['cards'] = { ...a.cards }
  for (const [id, card] of Object.entries(b.cards)) {
    cards[id] = cards[id] ? newerCard(cards[id], card) : card
  }

  const activityLog: ProgressState['activityLog'] = { ...a.activityLog }
  for (const [day, list] of Object.entries(b.activityLog)) {
    activityLog[day] = [...new Set([...(activityLog[day] ?? []), ...list])]
  }

  return normalizeProgress({ ...a, cards, activityLog })
}

const sortKeys = <T>(record: Record<string, T>) =>
  Object.fromEntries(Object.entries(record).sort(([x], [y]) => x.localeCompare(y)))

/** Trie les clés et les activités de chaque jour, pour une forme unique à contenu égal. */
function normalizeProgress(state: ProgressState): ProgressState {
  const activityLog = sortKeys(state.activityLog)
  for (const day of Object.keys(activityLog)) activityLog[day] = [...activityLog[day]].sort()
  return {
    version: 1,
    cards: sortKeys(state.cards),
    activityLog,
    ...(state.resetAt ? { resetAt: state.resetAt } : {}),
  }
}

/** Vrai si les deux progressions ont le même contenu, quel que soit l'ordre des clés. */
export function sameProgress(a: ProgressState, b: ProgressState): boolean {
  return JSON.stringify(normalizeProgress(a)) === JSON.stringify(normalizeProgress(b))
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
    candidate.activityLog !== null &&
    (candidate.resetAt === undefined || typeof candidate.resetAt === 'string')
  )
}
