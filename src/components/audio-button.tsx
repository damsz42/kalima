import { Loader2Icon, SquareIcon, Volume2Icon, VolumeXIcon } from 'lucide-react'
import type { ComponentProps } from 'react'

import { Button } from '@/components/ui/button'
import { useAudio } from '@/hooks/use-audio'

interface AudioButtonProps extends Omit<ComponentProps<typeof Button>, 'onClick'> {
  url: string
  label: string
}

export function AudioButton({ url, label, children, ...props }: AudioButtonProps) {
  const { status, play, stop } = useAudio(url)
  const isBusy = status === 'loading' || status === 'playing'

  const Icon =
    status === 'loading'
      ? Loader2Icon
      : status === 'playing'
        ? SquareIcon
        : status === 'error'
          ? VolumeXIcon
          : Volume2Icon

  return (
    <Button
      type="button"
      aria-label={label}
      title={status === 'error' ? 'Audio indisponible (connexion requise)' : label}
      onClick={isBusy ? stop : play}
      {...props}
    >
      <Icon className={status === 'loading' ? 'animate-spin' : undefined} />
      {children}
    </Button>
  )
}
