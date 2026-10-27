import { formatNumber } from '@/lib/words'
import type { QuranWord } from '@/types/word'

export interface ShareContent {
  title: string
  text: string
  url: string
}

/** Contenu partagé pour le mot du jour : le mot, son sens et sa fréquence dans le Coran. */
export function buildShareContent(word: QuranWord, url: string): ShareContent {
  return {
    title: `Kalima · ${word.arabic}`,
    text: [
      `Mot du jour sur Kalima : ${word.arabic} (${word.transliteration})`,
      `« ${word.meaning} », cité ${formatNumber(word.occurrences)} fois dans le Coran.`,
    ].join('\n'),
    url,
  }
}

/** Texte complet copié dans le presse-papiers quand le partage natif est indisponible. */
export function formatShareText({ text, url }: ShareContent): string {
  return `${text}\n${url}`
}
