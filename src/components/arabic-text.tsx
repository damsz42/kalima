import { cn } from '@/lib/utils'
import type { ComponentProps } from 'react'

interface ArabicTextProps extends ComponentProps<'span'> {
  /** Police coranique (Amiri Quran) pour le texte ʿuthmānī des versets. */
  quranic?: boolean
}

/** Texte arabe correctement balisé : langue, sens de lecture et police adaptée. */
export function ArabicText({ quranic = false, className, ...props }: ArabicTextProps) {
  return (
    <span
      lang="ar"
      dir="rtl"
      // L'interligne vient après className : tailwind-merge le supprimerait derrière un text-*.
      className={cn(quranic ? 'font-quran' : 'font-arabic', className, 'leading-[1.9]')}
      {...props}
    />
  )
}
