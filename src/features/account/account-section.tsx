import { LogInIcon, LogOutIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { signInWithGoogle, supabase } from '@/lib/supabase'

import { useSession } from './use-session'

/** Connexion facultative, pour retrouver sa progression sur tous ses appareils. */
export function AccountSection() {
  const session = useSession()
  const [error, setError] = useState<string | null>(null)

  const signIn = async () => {
    setError(null)
    const { error } = await signInWithGoogle()
    if (error) setError('Connexion impossible. Vérifie ta connexion Internet et réessaie.')
  }

  if (session === undefined) return null

  return (
    <div className="space-y-2 rounded-lg border p-3 text-sm">
      {session ? (
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span>
            Connecté : <strong>{session.user.email}</strong>
          </span>
          <Button variant="outline" size="sm" onClick={() => supabase.auth.signOut()}>
            <LogOutIcon />
            Se déconnecter
          </Button>
        </div>
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
      <p className="text-xs text-muted-foreground">
        <a href={`${import.meta.env.BASE_URL}confidentialite.html`} className="underline">
          Confidentialité
        </a>
      </p>
    </div>
  )
}
