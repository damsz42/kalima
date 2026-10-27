import { useCallback, useEffect, useRef, useState } from 'react'

export type AudioStatus = 'idle' | 'loading' | 'playing' | 'error'

/** Lecture d'un fichier audio distant, avec un état exploitable par l'interface. */
export function useAudio(url: string) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [status, setStatus] = useState<AudioStatus>('idle')

  // Un lecteur par URL ; il est coupé au changement de mot ou au démontage.
  useEffect(() => {
    const audio = new Audio(url)
    audio.preload = 'none'
    const onPlaying = () => setStatus('playing')
    const onEnded = () => setStatus('idle')
    const onError = () => setStatus('error')
    audio.addEventListener('playing', onPlaying)
    audio.addEventListener('ended', onEnded)
    audio.addEventListener('error', onError)
    audioRef.current = audio

    return () => {
      audio.pause()
      audio.removeEventListener('playing', onPlaying)
      audio.removeEventListener('ended', onEnded)
      audio.removeEventListener('error', onError)
      audioRef.current = null
      setStatus('idle')
    }
  }, [url])

  const play = useCallback(() => {
    const audio = audioRef.current
    if (!audio) return
    setStatus('loading')
    audio.load()
    audio.play().catch(() => setStatus('error'))
  }, [])

  const stop = useCallback(() => {
    audioRef.current?.pause()
    setStatus('idle')
  }, [])

  return { status, play, stop }
}
