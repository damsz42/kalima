import { daysSinceEpoch } from '@/lib/date'

/** Modulo toujours positif, y compris pour les dates antérieures à l'époque. */
const mod = (n: number, m: number) => ((n % m) + m) % m

/** Le mot du jour est le même pour tout le monde à une date locale donnée. */
export function getDailyIndex(date: Date, total: number): number {
  return mod(daysSinceEpoch(date), total)
}

export function getDailyItem<T>(date: Date, items: readonly T[]): T {
  return items[getDailyIndex(date, items.length)]
}
