import { FlameIcon } from 'lucide-react'

import { ArabicText } from '@/components/arabic-text'
import { ThemeToggle } from '@/components/theme-toggle'
import { Badge } from '@/components/ui/badge'

export function SiteHeader({ streak }: { streak: number }) {
  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-4 px-4">
        <a href="/" className="flex items-baseline gap-2">
          <span className="text-lg font-semibold tracking-tight">Kalima</span>
          <ArabicText className="text-xl text-primary">كَلِمَة</ArabicText>
        </a>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" title="Jours d'affilée avec au moins une activité">
            <FlameIcon className="text-orange-500" />
            {streak} {streak > 1 ? 'jours' : 'jour'}
          </Badge>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
