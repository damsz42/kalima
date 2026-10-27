import { useMemo } from 'react'

import { WORDS } from '@/data/words'
import { buildListeningQuiz } from '@/lib/quiz'
import { createRandom } from '@/lib/random'

import { QuizRunner } from './quiz-runner'
import type { ActivityProps } from './types'

/**
 * Discrimination auditive : dans chacun des versets d'exemple, on entend le mot récité
 * et on retrouve sa forme écrite parmi d'autres mots tels qu'ils apparaissent dans le Coran.
 */
export function ListeningActivity({ word, seed, onComplete, onRetry }: ActivityProps) {
  const questions = useMemo(() => buildListeningQuiz(word, WORDS, createRandom(seed)), [word, seed])
  return <QuizRunner questions={questions} onComplete={onComplete} onRetry={onRetry} />
}
