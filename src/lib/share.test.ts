import { describe, expect, it } from 'vitest'

import { WORDS } from '@/data/words'

import { buildShareContent, formatShareText } from './share'

describe('share', () => {
  const word = WORDS[0]

  it('mentionne le mot, sa translittération, son sens et sa fréquence', () => {
    const { title, text } = buildShareContent(word, 'https://exemple.fr/')
    expect(title).toContain(word.arabic)
    expect(text).toContain(word.arabic)
    expect(text).toContain(word.transliteration)
    expect(text).toContain(`« ${word.meaning} »`)
    expect(text).toMatch(/cité .+ fois dans le Coran/)
  })

  it("ajoute l'adresse à la fin du texte copié", () => {
    const content = buildShareContent(word, 'https://exemple.fr/')
    expect(formatShareText(content)).toBe(`${content.text}\nhttps://exemple.fr/`)
  })
})
