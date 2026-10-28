import { BookOpenIcon } from 'lucide-react'
import { useState } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { AudioButton } from '@/components/audio-button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { useProgress } from '@/features/progress/use-progress'
import { wordAudioUrl } from '@/lib/audio'
import { isMastered, MAX_BOX } from '@/lib/leitner'
import { getSeenWords } from '@/lib/words'

/** Nombre de mots affichés avant le bouton « Voir tout ». */
const INITIAL_COUNT = 10

/** Liste des mots déjà vus, avec leur niveau de révision. */
export function LexiconPanel() {
  const { state } = useProgress()
  const [showAll, setShowAll] = useState(false)

  const seen = getSeenWords(state.cards)
  const mastered = seen.filter(({ card }) => isMastered(card)).length
  const visible = showAll ? seen : seen.slice(0, INITIAL_COUNT)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpenIcon className="size-4 text-primary" />
          Mes mots
        </CardTitle>
        <CardDescription>
          {seen.length} mot{seen.length > 1 ? 's' : ''} vu{seen.length > 1 ? 's' : ''} · {mastered}{' '}
          maîtrisé{mastered > 1 ? 's' : ''}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        <Accordion type="single" collapsible>
          {visible.map(({ word, card }) => (
            <AccordionItem key={word.id} value={word.id}>
              <AccordionTrigger className="items-center gap-3 hover:no-underline">
                <ArabicText className="w-20 shrink-0 text-2xl">{word.arabic}</ArabicText>
                <span className="flex-1">{word.meaning}</span>
                <span className="flex shrink-0 flex-wrap items-center justify-end gap-1">
                  {isMastered(card) && <Badge>Maîtrisé</Badge>}
                  <span className="text-xs text-muted-foreground tabular-nums">
                    Niveau {card.box + 1}/{MAX_BOX + 1}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="flex flex-wrap items-center gap-x-6 gap-y-3">
                <p className="italic">{word.transliteration}</p>
                <div className="flex items-center gap-2">
                  <span className="text-muted-foreground">Racine</span>
                  <div className="flex gap-1" dir="rtl">
                    {word.root.split(' ').map((letter, index) => (
                      <ArabicText
                        key={index}
                        className="flex size-8 items-center justify-center rounded-md border bg-muted text-lg"
                      >
                        {letter}
                      </ArabicText>
                    ))}
                  </div>
                </div>
                <AudioButton
                  url={wordAudioUrl(word.pronunciation)}
                  label={`Écouter la prononciation de ${word.transliteration}`}
                  variant="outline"
                  size="sm"
                >
                  Écouter
                </AudioButton>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {seen.length > INITIAL_COUNT && (
          <Button variant="ghost" size="sm" onClick={() => setShowAll((value) => !value)}>
            {showAll ? 'Voir moins' : `Voir tout (${seen.length})`}
          </Button>
        )}
      </CardContent>
    </Card>
  )
}
