import { describe, expect, it } from 'vitest'

import { toLetters } from '@/lib/arabic'

import { WORDS } from './words'

describe('données des mots', () => {
  it('possède des identifiants uniques', () => {
    expect(new Set(WORDS.map((w) => w.id)).size).toBe(WORDS.length)
  })

  it('est triée par fréquence décroissante', () => {
    for (let i = 1; i < WORDS.length; i++) {
      expect(WORDS[i - 1].occurrences).toBeGreaterThanOrEqual(WORDS[i].occurrences)
    }
  })

  it.each(WORDS.map((w) => [w.id, w] as const))('%s : verset et racine cohérents', (_, word) => {
    expect(word.examples.length).toBeGreaterThanOrEqual(2)
    expect(new Set(word.examples.map((e) => `${e.surah}:${e.ayah}`)).size).toBe(word.examples.length)
    for (const example of word.examples) {
      expect(example.targetIndex).toBeGreaterThanOrEqual(0)
      expect(example.targetIndex).toBeLessThan(example.words.length)
      expect(example.translation.length).toBeGreaterThan(0)
      expect(example.globalAyah).toBeGreaterThanOrEqual(1)
      expect(example.globalAyah).toBeLessThanOrEqual(6236)
    }
    expect(word.pronunciation.wordIndex).toBeGreaterThanOrEqual(0)
    expect(word.pronunciation.form.length).toBeGreaterThan(0)

    expect(word.senses.length).toBeGreaterThanOrEqual(1)
    expect(new Set(word.senses.map((s) => s.meaning)).size).toBe(word.senses.length)
    for (const sense of word.senses) {
      // Le passage mis en valeur doit figurer tel quel dans la traduction affichée.
      expect(sense.example.translation).toContain(sense.example.highlight)
      expect(sense.example.targetIndex).toBeGreaterThanOrEqual(0)
    }
    expect(word.rootOccurrences).toBeGreaterThanOrEqual(word.occurrences)
    expect(toLetters(word.arabic).length).toBeGreaterThanOrEqual(2)
  })
})
