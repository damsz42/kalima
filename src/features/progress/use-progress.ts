import { use } from 'react'

import { ProgressContext } from './progress-context'

export function useProgress() {
  const context = use(ProgressContext)
  if (!context) throw new Error('useProgress doit être utilisé dans <ProgressProvider>.')
  return context
}
