import { useCallback, useEffect, useRef, useState } from 'react'

import { useProgress } from '@/features/progress/use-progress'
import { isProgressState, mergeProgress, sameProgress } from '@/lib/progress'
import { fetchRemoteProgress, saveRemoteProgress } from '@/lib/supabase'

export type SyncStatus = 'syncing' | 'synced' | 'offline' | 'error'

/** Délai après une modification avant d'envoyer la progression, pour grouper les actions. */
const SYNC_DELAY_MS = 2000

/**
 * Synchronise la progression avec la copie en ligne du compte : on fusionne les deux, puis on
 * met à jour le côté qui a changé. Se déclenche après chaque modification, au retour sur
 * l'onglet et au retour de la connexion.
 */
export function useSync(userId: string | undefined): SyncStatus {
  const { state, dispatch } = useProgress()
  const [status, setStatus] = useState<SyncStatus>('syncing')
  const stateRef = useRef(state)
  const running = useRef(false)
  const again = useRef(false)

  useEffect(() => {
    stateRef.current = state
  }, [state])

  const sync = useCallback(async () => {
    if (!userId) return
    if (running.current) {
      again.current = true
      return
    }
    if (!navigator.onLine) {
      setStatus('offline')
      return
    }
    running.current = true
    setStatus('syncing')
    try {
      do {
        again.current = false
        const local = stateRef.current
        const stored = await fetchRemoteProgress(userId)
        const remote = isProgressState(stored) ? stored : null
        const merged = remote ? mergeProgress(local, remote) : local
        if (!remote || !sameProgress(merged, remote)) await saveRemoteProgress(userId, merged)
        // Si la progression a bougé pendant l'envoi, on refait un tour plutôt que de l'écraser.
        if (stateRef.current !== local) again.current = true
        else if (!sameProgress(merged, local)) dispatch({ type: 'replace', state: merged })
      } while (again.current)
      setStatus('synced')
    } catch {
      setStatus(navigator.onLine ? 'error' : 'offline')
    } finally {
      running.current = false
    }
  }, [userId, dispatch])

  useEffect(() => {
    const timer = window.setTimeout(sync, SYNC_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [state, sync])

  useEffect(() => {
    const onVisible = () => {
      if (document.visibilityState === 'visible') void sync()
    }
    const onOnline = () => void sync()
    document.addEventListener('visibilitychange', onVisible)
    window.addEventListener('online', onOnline)
    return () => {
      document.removeEventListener('visibilitychange', onVisible)
      window.removeEventListener('online', onOnline)
    }
  }, [sync])

  return status
}
