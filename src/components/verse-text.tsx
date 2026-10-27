import { ArabicText } from '@/components/arabic-text'
import { cn } from '@/lib/utils'
import type { VerseExample } from '@/types/word'

interface VerseTextProps {
  example: VerseExample
  /** `highlight` surligne le mot étudié, `blank` le remplace par un emplacement vide. */
  target?: 'highlight' | 'blank'
  className?: string
}

/** Texte ʿuthmānī d'un verset, avec le mot étudié mis en évidence ou masqué. */
export function VerseText({ example, target = 'highlight', className }: VerseTextProps) {
  return (
    <ArabicText quranic className={cn('text-3xl', className)}>
      {example.words.map((form, index) => (
        <span key={index}>
          {index > 0 && ' '}
          {index !== example.targetIndex ? (
            form
          ) : target === 'highlight' ? (
            <mark className="rounded-md bg-primary/15 px-1 text-primary">{form}</mark>
          ) : (
            <span
              aria-label="mot manquant"
              className="inline-block min-w-16 rounded-md border-2 border-dashed border-primary/50 align-middle"
            >
              &nbsp;
            </span>
          )}
        </span>
      ))}
    </ArabicText>
  )
}

interface TranslationTextProps {
  text: string
  /** Passage de la traduction qui rend le mot étudié. */
  passage?: string
  /** `emphasis` met le passage en valeur, `mask` le cache pour un exercice. */
  mode?: 'emphasis' | 'mask'
  className?: string
}

/** Traduction d'un verset, dont le passage correspondant au mot peut être souligné ou caché. */
export function TranslationText({ text, passage, mode = 'emphasis', className }: TranslationTextProps) {
  const start = passage ? text.indexOf(passage) : -1
  const classes = cn('border-l-2 border-primary/40 pl-3 text-sm text-muted-foreground italic', className)

  if (!passage || start < 0) return <blockquote className={classes}>{text}</blockquote>

  return (
    <blockquote className={classes}>
      {text.slice(0, start)}
      {mode === 'emphasis' ? (
        <strong className="font-semibold text-foreground not-italic">{passage}</strong>
      ) : (
        <span className="rounded bg-muted px-2 font-semibold text-foreground not-italic">……</span>
      )}
      {text.slice(start + passage.length)}
    </blockquote>
  )
}
