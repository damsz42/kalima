import {
  BookOpenTextIcon,
  EarIcon,
  GalleryVerticalEndIcon,
  ListChecksIcon,
  PuzzleIcon,
  type LucideIcon,
} from 'lucide-react'
import type { ComponentType } from 'react'

import type { ActivityId } from '@/lib/progress'

import { FlashcardActivity } from './flashcard-activity'
import { LettersActivity } from './letters-activity'
import { ListeningActivity } from './listening-activity'
import { MeaningQuizActivity } from './meaning-quiz-activity'
import type { ActivityProps } from './types'
import { VerseActivity } from './verse-activity'

export interface ActivityDefinition {
  id: ActivityId
  label: string
  description: string
  icon: LucideIcon
  component: ComponentType<ActivityProps>
}

/** Ordre pédagogique : mémoriser, reconnaître, écouter, écrire, puis lire en contexte. */
export const ACTIVITIES: readonly ActivityDefinition[] = [
  {
    id: 'flashcard',
    label: 'Carte',
    description: 'Retrouve le sens de mémoire, puis retourne la carte.',
    icon: GalleryVerticalEndIcon,
    component: FlashcardActivity,
  },
  {
    id: 'meaning-quiz',
    label: 'Quiz',
    description: 'Sens, écriture, prononciation, racine et versets : tout le mot en une série de questions.',
    icon: ListChecksIcon,
    component: MeaningQuizActivity,
  },
  {
    id: 'listening',
    label: 'Écoute',
    description: 'Reconnais le mot à l\'oreille, récité dans chacun de ses versets.',
    icon: EarIcon,
    component: ListeningActivity,
  },
  {
    id: 'letters',
    label: 'Lettres',
    description: 'Reconstitue le mot lettre par lettre.',
    icon: PuzzleIcon,
    component: LettersActivity,
  },
  {
    id: 'verse',
    label: 'Verset',
    description: 'Repère le mot dans chacun de ses versets.',
    icon: BookOpenTextIcon,
    component: VerseActivity,
  },
]
