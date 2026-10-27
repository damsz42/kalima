import { describe, expect, it } from 'vitest'

import { getDailyIndex } from './daily-word'
import { WORDS } from '@/data/words'

import { buildChoices, buildListeningQuiz, buildWordQuiz, CHOICES_PER_QUESTION, correctAnswer, distinctMeanings } from './quiz'
import { createRandom, shuffle } from './random'

describe('random', () => {
  it('est déterministe pour une même graine', () => {
    const a = createRandom('2026-10-26')
    const b = createRandom('2026-10-26')
    expect([a(), a(), a()]).toEqual([b(), b(), b()])
  })

  it('mélange sans perdre ni dupliquer d\'élément', () => {
    const items = [1, 2, 3, 4, 5, 6]
    expect(shuffle(items, createRandom('x')).sort()).toEqual(items)
  })
})

describe('buildChoices', () => {
  const pool = ['a', 'b', 'b', 'c', 'd', 'e']

  it('contient la bonne réponse une seule fois et des options uniques', () => {
    const choices = buildChoices('a', pool, 4, createRandom('seed'), (x) => x)
    expect(choices).toHaveLength(4)
    expect(choices.filter((c) => c.correct).map((c) => c.item)).toEqual(['a'])
    expect(new Set(choices.map((c) => c.item)).size).toBe(4)
  })
})

describe('getDailyIndex', () => {
  it('avance d\'un mot par jour et boucle sur la liste', () => {
    const total = 62
    const first = getDailyIndex(new Date(2026, 0, 1), total)
    expect(first).toBe(0)
    expect(getDailyIndex(new Date(2026, 0, 2), total)).toBe(1)
    expect(getDailyIndex(new Date(2026, 0, 1 + total), total)).toBe(0)
    expect(getDailyIndex(new Date(2025, 11, 31), total)).toBe(total - 1)
  })
})

describe('distinctMeanings', () => {
  it('écarte les sens qui partagent un mot avec la réponse, accents compris', () => {
    expect(distinctMeanings('le Coran', ['Coran (lecture)', 'jour', 'Vérité'])).toEqual(['jour', 'Vérité'])
    expect(distinctMeanings('la Vérité (nom d\'Allah)', ['vérité', 'ciel'])).toEqual(['ciel'])
  })
})

describe('buildWordQuiz', () => {
  it.each(WORDS.map((w) => [w.id, w] as const))('%s : questions valides', (_, word) => {
    const questions = buildWordQuiz(word, WORDS, createRandom(`quiz:${word.id}`))
    expect(questions.length).toBeGreaterThanOrEqual(6)
    for (const question of questions) {
      expect(question.choices).toHaveLength(CHOICES_PER_QUESTION)
      expect(question.choices.filter((c) => c.correct)).toHaveLength(1)
      expect(new Set(question.choices.map((c) => c.item)).size).toBe(CHOICES_PER_QUESTION)
    }
  })

  it('donne un quiz stable pour une même graine', () => {
    const word = WORDS[5]
    const a = buildWordQuiz(word, WORDS, createRandom('jour'))
    const b = buildWordQuiz(word, WORDS, createRandom('jour'))
    expect(a.map(correctAnswer)).toEqual(b.map(correctAnswer))
    expect(a.map((q) => q.choices.map((c) => c.item))).toEqual(b.map((q) => q.choices.map((c) => c.item)))
  })

  it('propose les autres sens du mot comme pièges dans les questions de contexte', () => {
    const word = WORDS.find((w) => w.senses.length >= 3)!
    const senseQuestions = buildWordQuiz(word, WORDS, createRandom('sens')).filter((q) => q.kind === 'sense')
    expect(senseQuestions.length).toBe(2)
    for (const question of senseQuestions) {
      const items = question.choices.map((c) => c.item)
      expect(word.senses.filter((s) => items.includes(s.meaning)).length).toBeGreaterThanOrEqual(3)
    }
  })
})

describe('buildListeningQuiz', () => {
  it('pose une question par verset d\'exemple', () => {
    const word = WORDS[0]
    const questions = buildListeningQuiz(word, WORDS, createRandom('écoute'))
    expect(questions).toHaveLength(word.examples.length)
    expect(questions.every((q) => q.kind === 'listen-verse')).toBe(true)
  })
})
