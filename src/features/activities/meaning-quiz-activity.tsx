import { useMemo } from 'react'

import { WORDS } from '@/data/words'
import { buildWordQuiz } from '@/lib/quiz'
import { createRandom } from '@/lib/random'

import { QuizRunner } from './quiz-runner'
import type { ActivityProps } from './types'

/**
 * Quiz complet : sens, écriture, prononciation, racine, sens en contexte
 * puis mot manquant dans un verset.
 */
export function MeaningQuizActivity({ word, seed, onComplete, onRetry }: ActivityProps) {
  const questions = useMemo(() => buildWordQuiz(word, WORDS, createRandom(seed)), [word, seed])
  return <QuizRunner questions={questions} onComplete={onComplete} onRetry={onRetry} />
}
