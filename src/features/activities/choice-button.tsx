import { CheckIcon, XIcon } from 'lucide-react'
import type { ReactNode } from 'react'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

import type { ChoiceState } from './choice-state'

interface ChoiceButtonProps {
  state: ChoiceState
  disabled?: boolean
  onClick: () => void
  children: ReactNode
  className?: string
}

const STATE_CLASSES: Record<ChoiceState, string> = {
  idle: '',
  correct:
    'border-emerald-500 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/10 dark:text-emerald-300',
  wrong: 'border-destructive bg-destructive/10 text-destructive hover:bg-destructive/10',
  dimmed: 'opacity-50',
}

export function ChoiceButton({ state, disabled, onClick, children, className }: ChoiceButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      disabled={disabled}
      aria-pressed={state === 'correct' || state === 'wrong'}
      onClick={onClick}
      className={cn(
        'h-auto min-h-12 justify-between gap-3 px-4 py-2 text-left whitespace-normal disabled:opacity-100',
        STATE_CLASSES[state],
        className,
      )}
    >
      <span className="flex-1">{children}</span>
      {state === 'correct' && <CheckIcon />}
      {state === 'wrong' && <XIcon />}
    </Button>
  )
}

