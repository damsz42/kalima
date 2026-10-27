import { describe, expect, it } from 'vitest'

import { stripDiacritics, toLetters } from './arabic'

describe('arabic', () => {
  it('retire les voyelles, la shadda et le tanwīn', () => {
    expect(stripDiacritics('عَلِمَ')).toBe('علم')
    expect(stripDiacritics('حَقّ')).toBe('حق')
    expect(stripDiacritics('هُدًى')).toBe('هدى')
  })

  it("retire l'alif suscrit et les signes coraniques", () => {
    expect(stripDiacritics('إِلَٰه')).toBe('إله')
    expect(stripDiacritics('كَفَرُوا۟')).toBe('كفروا')
  })

  it('conserve les lettres porteuses de hamza ou de madda', () => {
    expect(toLetters('آمَنَ')).toEqual(['آ', 'م', 'ن'])
    expect(toLetters('شَيْء')).toEqual(['ش', 'ي', 'ء'])
  })
})
