'use client'

import { useEffect, useRef, useState } from 'react'
import { Lottie, type LottieHandle } from 'lottie-react'
import { Pause, Play } from 'lucide-react'

interface ControlledLottieProps {
  animationData: object
  className: string
  label: string
}

export default function ControlledLottie({ animationData, className, label }: ControlledLottieProps) {
  const lottieRef = useRef<LottieHandle>(null)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      lottieRef.current?.pause()
      setPaused(true)
    }
  }, [])

  const togglePlayback = () => {
    if (paused) {
      lottieRef.current?.play()
    } else {
      lottieRef.current?.pause()
    }
    setPaused(!paused)
  }

  return (
    <div className={`portfolio-lottie ${className}`}>
      <Lottie lottieRef={lottieRef} src={animationData} loop autoplay />
      <button
        type="button"
        className="lottie-toggle"
        onClick={togglePlayback}
        aria-label={`${paused ? 'Lire' : 'Mettre en pause'} ${label}`}
        title={`${paused ? 'Lire' : 'Mettre en pause'} ${label}`}
      >
        {paused ? <Play size={14} /> : <Pause size={14} />}
      </button>
    </div>
  )
}