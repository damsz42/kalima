import type { QuranWord } from '@/types/word'

export interface ActivityProps {
  word: QuranWord
  /** Graine propre au jour et à l'activité : les options restent stables dans la journée. */
  seed: string
  onComplete: (success: boolean) => void
  /** Relance l'activité depuis le début avec un nouveau tirage. */
  onRetry: () => void
}
