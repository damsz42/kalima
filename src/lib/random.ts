/** Hachage FNV-1a 32 bits : transforme une graine texte en entier. */
function hashSeed(seed: string): number {
  let hash = 0x811c9dc5
  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i)
    hash = Math.imul(hash, 0x01000193)
  }
  return hash >>> 0
}

/**
 * Générateur pseudo-aléatoire déterministe (mulberry32).
 * Une même graine produit la même suite : les jeux restent stables pendant la journée.
 */
export function createRandom(seed: string): () => number {
  let state = hashSeed(seed)
  return () => {
    state = (state + 0x6d2b79f5) >>> 0
    let t = state
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** Mélange de Fisher-Yates, sans modifier le tableau d'origine. */
export function shuffle<T>(items: readonly T[], random: () => number): T[] {
  const result = [...items]
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export function sample<T>(items: readonly T[], count: number, random: () => number): T[] {
  return shuffle(items, random).slice(0, count)
}
