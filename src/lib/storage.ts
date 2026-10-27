/**
 * Accès défensif au localStorage : il peut être indisponible
 * (navigation privée, stockage bloqué) ou contenir des données corrompues.
 */
export function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key)
    return raw === null ? fallback : (JSON.parse(raw) as T)
  } catch {
    return fallback
  }
}

export function writeJson<T>(key: string, value: T): void {
  try {
    window.localStorage.setItem(key, JSON.stringify(value))
  } catch {
    // Stockage indisponible : la progression ne sera simplement pas conservée.
  }
}
