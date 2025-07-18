"use client"

import { useState, useEffect } from "react"

interface LoadingScreenProps {
  onLoadingComplete: () => void
}

export default function LoadingScreen({ onLoadingComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          setTimeout(() => {
            onLoadingComplete()
            // Play subtle sound effect after loading completes
            playLoadingCompleteSound()
          }, 500)
          return 100
        }
        return prev + 2
      })
    }, 60)

    return () => clearInterval(timer)
  }, [onLoadingComplete])

  const playLoadingCompleteSound = () => {
    try {
      const audio = new Audio("https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3")
      audio.volume = 0.3 // Keep it subtle
      audio.play().catch(() => {
        // Silently handle if audio fails to play (user hasn't interacted yet)
      })
    } catch (error) {
      // Silently handle audio errors
    }
  }

  return (
    <div className="fixed inset-0 bg-background flex items-center justify-center z-50">
      <div className="text-center space-y-12">
        {/* Modern Block Animation */}
        <div className="relative w-24 h-24 mx-auto">
          <div className="grid grid-cols-3 gap-1 w-full h-full">
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                className="bg-primary/20 rounded-sm animate-pulse"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  animationDuration: "1.2s",
                }}
              />
            ))}
          </div>

          {/* Center highlight block */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-primary rounded-sm animate-pulse" />
        </div>

        {/* Clean Typography */}
        <div className="space-y-4">
          <div className="text-2xl font-bold text-foreground tracking-tight">Loading</div>
          <div className="w-32 h-0.5 bg-border mx-auto rounded-full overflow-hidden">
            <div
              className="h-full bg-primary transition-all duration-100 ease-out rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
