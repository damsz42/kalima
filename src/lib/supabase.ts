import { createClient } from '@supabase/supabase-js'

// Adresse et clé publique du projet Supabase : elles sont faites pour être dans le code du site.
const SUPABASE_URL = 'https://fotaspvzhgrzhoaoqzrh.supabase.co'
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_agkg2OFmhfxWmZxbN0tAuA_QkGGQYIc'

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    // Flux implicite : la session revient dans l'adresse, sans dépendre d'une valeur gardée avant
    // la redirection (l'app iPhone et Safari ne partagent pas leur stockage).
    flowType: 'implicit',
  },
})

/** Progression enregistrée en ligne pour ce compte, ou `null` s'il n'y en a pas encore. */
export async function fetchRemoteProgress(userId: string): Promise<unknown> {
  const { data, error } = await supabase
    .from('progress')
    .select('data')
    .eq('user_id', userId)
    .maybeSingle()
  if (error) throw error
  return data?.data ?? null
}

export async function saveRemoteProgress(userId: string, progress: unknown): Promise<void> {
  const { error } = await supabase
    .from('progress')
    .upsert({ user_id: userId, data: progress, updated_at: new Date().toISOString() })
  if (error) throw error
}

/** Supprime le compte et, par cascade, la progression en ligne (fonction SQL `delete_user`). */
export async function deleteAccount(): Promise<void> {
  const { error } = await supabase.rpc('delete_user')
  if (error) throw error
  await supabase.auth.signOut()
}

/** Connexion Google, avec retour sur la page actuelle (GitHub Pages, Netlify ou localhost). */
export function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + window.location.pathname },
  })
}
