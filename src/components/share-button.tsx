import { Share2Icon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { toast } from 'sonner'

import { Button } from '@/components/ui/button'
import { buildShareContent, formatShareText } from '@/lib/share'
import type { QuranWord } from '@/types/word'

interface ShareButtonProps extends Omit<ComponentProps<typeof Button>, 'onClick'> {
  word: QuranWord
}

export function ShareButton({ word, children, ...props }: ShareButtonProps) {
  async function share() {
    const content = buildShareContent(word, window.location.origin + window.location.pathname)

    // Partage natif (mobile surtout), sinon copie dans le presse-papiers.
    if (navigator.share && navigator.canShare?.(content) !== false) {
      try {
        await navigator.share(content)
        return
      } catch (error) {
        // L'utilisateur a fermé la feuille de partage : rien à signaler.
        if (error instanceof DOMException && error.name === 'AbortError') return
      }
    }

    try {
      await navigator.clipboard.writeText(formatShareText(content))
      toast.success('Mot du jour copié dans le presse-papiers.')
    } catch {
      toast.error('Impossible de partager le mot du jour.')
    }
  }

  return (
    <Button type="button" title="Partager le mot du jour" onClick={() => void share()} {...props}>
      <Share2Icon />
      {children}
    </Button>
  )
}
