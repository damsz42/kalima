/**
 * Signes diacritiques arabes : harakāt et tanwīn (U+064B–U+065F),
 * alif suscrit (U+0670) et signes coraniques (U+06D6–U+06ED).
 */
const DIACRITICS = /[ً-ٰٟۖ-ۭ]/g

export function stripDiacritics(text: string): string {
  return text.normalize('NFC').replace(DIACRITICS, '')
}

/** Découpe un mot en lettres de base, sans voyelles ni shadda. */
export function toLetters(word: string): string[] {
  return [...stripDiacritics(word)]
}
