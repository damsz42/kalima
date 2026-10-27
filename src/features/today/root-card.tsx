import { LightbulbIcon, SproutIcon } from 'lucide-react'

import { ArabicText } from '@/components/arabic-text'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { formatNumber, getRootSiblings } from '@/lib/words'
import type { QuranWord } from '@/types/word'

export function RootCard({ word }: { word: QuranWord }) {
  const siblings = getRootSiblings(word)
  const letters = word.root.split(' ')

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <SproutIcon className="size-4 text-primary" />
          La racine
        </CardTitle>
        <CardDescription>
          La plupart des mots arabes dérivent d'une racine de trois lettres porteuse d'un sens
          commun.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex justify-center gap-2" dir="rtl">
          {letters.map((letter, index) => (
            <ArabicText
              key={index}
              className="flex size-14 items-center justify-center rounded-lg border bg-muted text-3xl"
            >
              {letter}
            </ArabicText>
          ))}
        </div>
        <p className="text-center text-sm text-muted-foreground">
          Les mots de cette racine apparaissent{' '}
          <strong className="text-foreground">{formatNumber(word.rootOccurrences)} fois</strong> dans
          le Coran.
        </p>

        {siblings.length > 0 && (
          <div className="space-y-2">
            <p className="text-xs font-medium text-muted-foreground uppercase">
              De la même famille
            </p>
            <div className="flex flex-wrap gap-2">
              {siblings.map((sibling) => (
                <Badge key={sibling.id} variant="secondary" className="h-auto py-1">
                  <ArabicText className="text-base">{sibling.arabic}</ArabicText>
                  <span>{sibling.meaning}</span>
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <p className="flex gap-2 text-sm">
          <LightbulbIcon className="mt-0.5 size-4 shrink-0 text-amber-500" />
          <span>{word.note}</span>
        </p>
      </CardContent>
    </Card>
  )
}
