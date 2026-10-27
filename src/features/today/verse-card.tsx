import { BookOpenIcon } from 'lucide-react'
import { Fragment } from 'react'

import { ArabicText } from '@/components/arabic-text'
import { AudioButton } from '@/components/audio-button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { TranslationText, VerseText } from '@/components/verse-text'
import { verseAudioUrl } from '@/lib/audio'
import { formatVerseRef } from '@/lib/words'
import type { QuranWord, VerseExample } from '@/types/word'

export function VerseCard({ word }: { word: QuranWord }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <BookOpenIcon className="size-4 text-primary" />
          Dans le Coran
        </CardTitle>
        <CardDescription>
          {word.examples.length} versets où apparaît <strong>{word.transliteration}</strong>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-5">
        {word.examples.map((example, index) => (
          <Fragment key={formatVerseRef(example)}>
            {index > 0 && <Separator />}
            <VerseExampleBlock example={example} />
          </Fragment>
        ))}
      </CardContent>
    </Card>
  )
}

function VerseExampleBlock({ example }: { example: VerseExample }) {
  return (
    <section className="space-y-3">
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
        <VerseText example={example} />
      </p>
      <TranslationText text={example.translation} />
    </section>
  )
}
