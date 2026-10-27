export type ChoiceState = 'idle' | 'correct' | 'wrong' | 'dimmed'

/** État visuel d'une option une fois la réponse choisie. */
export function getChoiceState(isCorrect: boolean, isSelected: boolean, answered: boolean): ChoiceState {
  if (!answered) return 'idle'
  if (isCorrect) return 'correct'
  return isSelected ? 'wrong' : 'dimmed'
}
