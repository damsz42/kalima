import type { VerseExample, WordLocation } from '@/types/word'

const pad3 = (n: number) => String(n).padStart(3, '0')

/** Récitation mot à mot (quran.com) du mot situé à cette position. */
export function wordAudioUrl({ surah, ayah, wordIndex }: WordLocation): string {
  return `https://audio.qurancdn.com/wbw/${pad3(surah)}_${pad3(ayah)}_${pad3(wordIndex + 1)}.mp3`
}

/** Récitation du verset complet par Mishary Alafasy (islamic.network). */
export function verseAudioUrl(example: VerseExample): string {
  return `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${example.globalAyah}.mp3`
}
