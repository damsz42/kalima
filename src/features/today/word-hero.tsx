import { CalendarDaysIcon, HashIcon, TimerIcon } from 'lucide-react'

import { ArabicText } from '@/components/arabic-text'
import { AudioButton } from '@/components/audio-button'
import { Countdown } from '@/components/countdown'
import { ShareButton } from '@/components/share-button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { wordAudioUrl } from '@/lib/audio'
import { formatNumber, getFrequencyRank, KIND_LABELS } from '@/lib/words'
import type { QuranWord } from '@/types/word'

const dateFormat = new Intl.DateTimeFormat('fr-FR', {
  weekday: 'long',
  day: 'numeric',
  month: 'long',
})

interface WordHeroProps {
  word: QuranWord
  date: Date
  total: number
}

export function WordHero({ word, date, total }: WordHeroProps) {
  return (
    <Card className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--color-primary)/12%,transparent_65%)]"
      />
      <CardContent className="relative flex flex-col items-center gap-5 py-6 text-center">
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarDaysIcon className="size-3.5" />
            Mot du jour · {dateFormat.format(date)}
          </span>
          <span aria-hidden>•</span>
          <span className="inline-flex items-center gap-1">
            <TimerIcon className="size-3.5" />
            Prochain mot dans <Countdown />
          </span>
        </div>

        <ArabicText className="text-7xl leading-[1.4]! font-bold text-primary sm:text-8xl">{word.arabic}</ArabicText>

        <div className="space-y-1">
          <p className="text-xl font-medium italic">{word.transliteration}</p>
          <p className="text-2xl font-semibold tracking-tight">{word.meaning}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <Badge>{KIND_LABELS[word.kind]}</Badge>
          <Badge variant="secondary">
            Cité {formatNumber(word.occurrences)} fois dans le Coran
          </Badge>
          <Badge variant="outline">
            <HashIcon />
            {getFrequencyRank(word)} sur {total} par fréquence
          </Badge>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <AudioButton
            url={wordAudioUrl(word.pronunciation)}
            label={`Écouter la prononciation de ${word.transliteration}`}
            variant="outline"
            size="lg"
          >
            Écouter la prononciation
          </AudioButton>
          <ShareButton word={word} variant="outline" size="lg">
            Partager
          </ShareButton>
        </div>
      </CardContent>
    </Card>
  )
}
