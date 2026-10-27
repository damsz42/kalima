import { LibraryBigIcon, ScrollTextIcon } from 'lucide-react'

import { ArabicText } from '@/components/arabic-text'
import { AudioButton } from '@/components/audio-button'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { TranslationText, VerseText } from '@/components/verse-text'
import { verseAudioUrl } from '@/lib/audio'
import { formatVerseRef } from '@/lib/words'
import type { QuranWord, WordSense } from '@/types/word'

export function SensesCard({ word }: { word: QuranWord }) {
  const { senses } = word

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <LibraryBigIcon className="size-4 text-primary" />
          Ses sens dans le Coran
        </CardTitle>
        <CardDescription>
          {senses.length > 1
            ? `Un même mot peut prendre ${senses.length} sens différents selon le contexte. Chaque sens est illustré par un verset.`
            : 'Ce mot garde le même sens dans tout le Coran.'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Les sens sont résumés d'un coup d'œil, puis détaillés dans l'accordéon. */}
        <ol className="flex flex-wrap gap-2">
          {senses.map((sense, index) => (
            <li key={sense.meaning}>
              <Badge variant="secondary" className="h-auto py-1 text-sm">
                <span className="text-primary tabular-nums">{index + 1}.</span>
                {sense.meaning}
              </Badge>
            </li>
          ))}
        </ol>

        <Accordion type="multiple" defaultValue={[senses[0].meaning]}>
          {senses.map((sense, index) => (
            <AccordionItem key={sense.meaning} value={sense.meaning}>
              <AccordionTrigger>
                <span className="flex items-baseline gap-2">
                  <span className="text-primary tabular-nums">{index + 1}.</span>
                  <span>{sense.meaning}</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    ({formatVerseRef(sense.example)})
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent>
                <SenseDetail sense={sense} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-xs text-muted-foreground">
          Sources : chaque sens est vérifié dans la traduction de Muhammad Hamidullah et dans la
          traduction anglaise Saheeh International. Les sens qui relèvent de l'exégèse sont en plus
          confirmés par le Tafsir al-Muyassar.
        </p>
      </CardContent>
    </Card>
  )
}

function SenseDetail({ sense }: { sense: WordSense }) {
  const { example } = sense

  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm text-muted-foreground">
          Sourate <ArabicText>{example.surahName}</ArabicText> · verset {formatVerseRef(example)}
        </p>
        <AudioButton
          url={verseAudioUrl(example)}
          label={`Écouter la récitation du verset ${formatVerseRef(example)}`}
          variant="ghost"
          size="icon"
        />
      </div>
      <p className="text-center">
        <VerseText example={example} className="text-2xl" />
      </p>
      <TranslationText text={example.translation} passage={example.highlight} />
      {sense.note && <p className="text-sm">{sense.note}</p>}
      {sense.tafsir && (
        <p className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <ScrollTextIcon className="size-3.5 shrink-0" />
          Confirmé par le Tafsir al-Muyassar :
          <ArabicText className="text-sm text-foreground">« {sense.tafsir} »</ArabicText>
        </p>
      )}
    </div>
  )
}
