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

/** Connexion Google, avec retour sur la page actuelle (GitHub Pages, Netlify ou localhost). */
export function signInWithGoogle() {
  return supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo: window.location.origin + window.location.pathname },
  })
}
