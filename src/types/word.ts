export type WordKind = 'noun' | 'verb' | 'adjective' | 'proper'

export interface VerseExample {
  surah: number
  ayah: number
  /** Numéro absolu du verset (1 à 6236), utilisé pour l'audio de récitation. */
  globalAyah: number
  surahName: string
  /** Mots du verset en écriture ʿuthmānī, dans l'ordre de lecture. */
  words: readonly string[]
  /** Index (base 0) du mot étudié dans `words`. */
  targetIndex: number
  translation: string
}

export interface SenseExample extends VerseExample {
  /** Passage de la traduction de Hamidullah qui rend le mot dans ce sens. */
  highlight: string
}

/** Un des sens que prend le mot dans le Coran, illustré par un verset vérifié. */
export interface WordSense {
  meaning: string
  note?: string
  /** Passage du Tafsir al-Muyassar qui confirme ce sens, pour les sens exégétiques. */
  tafsir?: string
  example: SenseExample
}

/** Position d'un mot dans le Coran, pour sa récitation mot à mot. */
export interface WordLocation {
  surah: number
  ayah: number
  /** Index (base 0) du mot dans le verset. */
  wordIndex: number
}

export interface Pronunciation extends WordLocation {
  /** Forme récitée, en écriture ʿuthmānī (au plus proche de la forme de dictionnaire). */
  form: string
}

export interface QuranWord {
  id: string
  /** Forme de dictionnaire, entièrement vocalisée. */
  arabic: string
  transliteration: string
  meaning: string
  kind: WordKind
  note: string
  /** Lettres de la racine séparées par des espaces, ex. « ع ل م ». */
  root: string
  /** Nombre d'occurrences du lemme dans le Coran (Quranic Arabic Corpus). */
  occurrences: number
  /** Nombre d'occurrences de tous les mots dérivés de la racine. */
  rootOccurrences: number
  /** Occurrence du mot seul, sans préfixe ni suffixe, utilisée pour l'écoute. */
  pronunciation: Pronunciation
  /** Versets d'exemple : celui de curated-words.json, puis des versets courts choisis automatiquement. */
  examples: readonly VerseExample[]
  /** Sens du mot dans le Coran, du plus courant au plus particulier. */
  senses: readonly WordSense[]
}
