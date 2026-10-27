import { createContext, type Dispatch } from 'react'

import type { ProgressAction, ProgressState } from '@/lib/progress'

export interface ProgressContextValue {
  state: ProgressState
  dispatch: Dispatch<ProgressAction>
}

export const ProgressContext = createContext<ProgressContextValue | null>(null)
