import { useEffect, useMemo, useReducer, type ReactNode } from 'react'

import { INITIAL_PROGRESS, isProgressState, progressReducer } from '@/lib/progress'
import { readJson, writeJson } from '@/lib/storage'

import { ProgressContext } from './progress-context'

const STORAGE_KEY = 'kalima:progress'

function loadProgress() {
  const stored = readJson<unknown>(STORAGE_KEY, null)
  return isProgressState(stored) ? stored : INITIAL_PROGRESS
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(progressReducer, undefined, loadProgress)

  useEffect(() => writeJson(STORAGE_KEY, state), [state])

  const value = useMemo(() => ({ state, dispatch }), [state])
  return <ProgressContext value={value}>{children}</ProgressContext>
}
