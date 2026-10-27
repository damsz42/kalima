const MS_PER_DAY = 86_400_000

/** Jour de référence de la rotation : le jour 0 affiche le premier mot de la liste. */
const ROTATION_EPOCH = Date.UTC(2026, 0, 1)

/** Clé de date locale au format AAAA-MM-JJ (indépendante du fuseau UTC). */
export function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

/**
 * Nombre de jours calendaires locaux écoulés depuis l'époque de rotation.
 * On passe par Date.UTC pour neutraliser les changements d'heure.
 */
export function daysSinceEpoch(date: Date): number {
  const localMidnight = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  return Math.floor((localMidnight - ROTATION_EPOCH) / MS_PER_DAY)
}

export function daysBetween(fromKey: string, toKey: string): number {
  return Math.round((Date.parse(toKey) - Date.parse(fromKey)) / MS_PER_DAY)
}

export function addDays(dateKey: string, days: number): string {
  const [y, m, d] = dateKey.split('-').map(Number)
  return toDateKey(new Date(y, m - 1, d + days))
}

/** Millisecondes restantes avant le prochain minuit local. */
export function msUntilNextDay(now: Date): number {
  const next = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1)
  return next.getTime() - now.getTime()
}

export function formatCountdown(ms: number): string {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000))
  const h = Math.floor(totalSeconds / 3600)
  const m = Math.floor((totalSeconds % 3600) / 60)
  const s = totalSeconds % 60
  return [h, m, s].map((n) => String(n).padStart(2, '0')).join(':')
}
