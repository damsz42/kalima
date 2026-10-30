import {
  CheckIcon,
  CloudOffIcon,
  Loader2Icon,
  LogInIcon,
  LogOutIcon,
  TriangleAlertIcon,
} from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { deleteAccount, signInWithGoogle, supabase } from '@/lib/supabase'

import { useSession } from './use-session'
import { useSync, type SyncStatus } from './use-sync'

const STATUS_TEXT: Record<SyncStatus, string> = {
  syncing: 'Synchronisation…',
  synced: 'Synchronisé',
  offline: 'Hors ligne : ta progression sera envoyée au retour de la connexion.',
  error: 'Synchronisation impossible pour le moment, nouvel essai plus tard.',
}

const STATUS_ICON = {
  syncing: Loader2Icon,
  synced: CheckIcon,
  offline: CloudOffIcon,
  error: TriangleAlertIcon,
} as const

/** Connexion facultative, pour retrouver sa progression sur tous ses appareils. */
export function AccountSection() {
  const session = useSession()
  const status = useSync(session?.user.id)
  const [error, setError] = useState<string | null>(null)

  const signIn = async () => {
    setError(null)
    const { error } = await signInWithGoogle()
    if (error) setError('Connexion impossible. Vérifie ta connexion Internet et réessaie.')
  }

  const removeAccount = async () => {
    const message =
      'Supprimer ton compte ? Ta progression en ligne sera effacée. Elle restera seulement ' +
      'sur cet appareil.'
    if (!window.confirm(message)) return
    setError(null)
    try {
      await deleteAccount()
    } catch {
      setError('Suppression impossible. Vérifie ta connexion Internet et réessaie.')
    }
  }

  if (session === undefined) return null

  const StatusIcon = STATUS_ICON[status]

  return (
    <div className="space-y-2 rounded-lg border p-3 text-sm">
      {session ? (
        <>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span>
              Connecté : <strong>{session.user.email}</strong>
            </span>
            <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
              <LogOutIcon />
              Se déconnecter
            </Button>
          </div>
          <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
            <StatusIcon className={status === 'syncing' ? 'size-3.5 animate-spin' : 'size-3.5'} />
            {STATUS_TEXT[status]}
          </p>
        </>
      ) : (
        <>
          <p className="text-muted-foreground">
            Facultatif : connecte-toi pour retrouver ta progression sur tous tes appareils.
          </p>
          <Button variant="outline" size="sm" onClick={signIn}>
            <LogInIcon />
            Se connecter avec Google
          </Button>
        </>
      )}
      {error && <p className="text-destructive">{error}</p>}
      <p className="flex flex-wrap gap-x-4 text-xs text-muted-foreground">
        <a href={`${import.meta.env.BASE_URL}confidentialite.html`} className="underline">
          Confidentialité
        </a>
        {session && (
          <button type="button" className="underline" onClick={removeAccount}>
            Supprimer mon compte
          </button>
        )}
      </p>
    </div>
  )
}
