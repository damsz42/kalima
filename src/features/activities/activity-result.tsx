import { PartyPopperIcon, RotateCcwIcon, ThumbsUpIcon } from 'lucide-react'

import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'

interface ActivityResultProps {
  success: boolean
  message: string
  onRetry: () => void
}

export function ActivityResult({ success, message, onRetry }: ActivityResultProps) {
  const Icon = success ? PartyPopperIcon : ThumbsUpIcon

  return (
    <Alert className={success ? 'border-emerald-500/50' : undefined}>
      <Icon className={success ? 'text-emerald-600' : 'text-amber-500'} />
      <AlertTitle>{success ? 'Bravo !' : 'Bien essayé !'}</AlertTitle>
      <AlertDescription className="flex flex-wrap items-center justify-between gap-3">
        <span>{message}</span>
        <Button size="sm" variant="outline" onClick={onRetry}>
          <RotateCcwIcon />
          Recommencer
        </Button>
      </AlertDescription>
    </Alert>
  )
}
