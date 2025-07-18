"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"

const skillsRow1 = [
  { name: "React", icon: "⚛️", color: "from-blue-400 to-blue-600" },
  { name: "Next.js", icon: "▲", color: "from-gray-700 to-gray-900" },
  { name: "TypeScript", icon: "TS", color: "from-blue-500 to-blue-700" },
  { name: "JavaScript", icon: "JS", color: "from-yellow-400 to-yellow-600" },
  { name: "Node.js", icon: "⬢", color: "from-green-500 to-green-700" },
  { name: "Python", icon: "🐍", color: "from-blue-400 to-yellow-500" },
  { name: "AWS", icon: "☁️", color: "from-orange-400 to-orange-600" },
  { name: "Docker", icon: "🐳", color: "from-blue-400 to-blue-600" },
]

const skillsRow2 = [
  { name: "MongoDB", icon: "🍃", color: "from-green-400 to-green-600" },
  { name: "PostgreSQL", icon: "🐘", color: "from-blue-500 to-blue-700" },
  { name: "Git", icon: "📦", color: "from-red-400 to-red-600" },
  { name: "GitHub", icon: "🐙", color: "from-gray-600 to-gray-800" },
  { name: "GitLab", icon: "🦊", color: "from-orange-500 to-red-600" },
  { name: "Figma", icon: "🎨", color: "from-purple-400 to-pink-500" },
  { name: "Tailwind", icon: "💨", color: "from-cyan-400 to-blue-500" },
  { name: "GraphQL", icon: "◆", color: "from-pink-400 to-purple-600" },
]

export default function SkillsScroll() {
  const [mounted, setMounted] = useState(false)
  const [isPaused1, setIsPaused1] = useState(false)
  const [isPaused2, setIsPaused2] = useState(false)
  const scrollRef1 = useRef<HTMLDivElement>(null)
  const scrollRef2 = useRef<HTMLDivElement>(null)
  const timeoutRef1 = useRef<NodeJS.Timeout>()
  const timeoutRef2 = useRef<NodeJS.Timeout>()

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleScroll = (
    scrollContainer: HTMLDivElement,
    setIsPaused: (paused: boolean) => void,
    timeoutRef: React.MutableRefObject<NodeJS.Timeout | undefined>,
  ) => {
    // Clear existing timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    // Pause animation
    setIsPaused(true)

    // Resume animation after 3 seconds of no interaction
    timeoutRef.current = setTimeout(() => {
      setIsPaused(false)
    }, 3000)
  }

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current
    const scrollContainer2 = scrollRef2.current

    if (scrollContainer1) {
      const handleScroll1 = () => handleScroll(scrollContainer1, setIsPaused1, timeoutRef1)
      scrollContainer1.addEventListener("scroll", handleScroll1, { passive: true })

      return () => {
        scrollContainer1.removeEventListener("scroll", handleScroll1)
        if (timeoutRef1.current) clearTimeout(timeoutRef1.current)
      }
    }
  }, [mounted])

  useEffect(() => {
    const scrollContainer2 = scrollRef2.current

    if (scrollContainer2) {
      const handleScroll2 = () => handleScroll(scrollContainer2, setIsPaused2, timeoutRef2)
      scrollContainer2.addEventListener("scroll", handleScroll2, { passive: true })

      return () => {
        scrollContainer2.removeEventListener("scroll", handleScroll2)
        if (timeoutRef2.current) clearTimeout(timeoutRef2.current)
      }
    }
  }, [mounted])

  // Resume animation when tab becomes visible again
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden) {
        setIsPaused1(false)
        setIsPaused2(false)
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange)
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full space-y-8 py-8">
      {/* First Row - Left to Right */}
      <div className="overflow-x-auto scrollbar-hide" ref={scrollRef1}>
        <div className={`flex space-x-6 ${isPaused1 ? "" : "animate-scroll-left-fast"}`}>
          {/* First set */}
          <div className="flex space-x-6 flex-shrink-0">
            {skillsRow1.map((skill, index) => (
              <div
                key={`first-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group skill-card"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}>
                    {skill.icon}
                  </div>
                  <div className="text-foreground font-bold text-sm text-center">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-6 flex-shrink-0">
            {skillsRow1.map((skill, index) => (
              <div
                key={`second-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group skill-card"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}>
                    {skill.icon}
                  </div>
                  <div className="text-foreground font-bold text-sm text-center">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Second Row - Right to Left */}
      <div className="overflow-x-auto scrollbar-hide" ref={scrollRef2}>
        <div className={`flex space-x-6 ${isPaused2 ? "" : "animate-scroll-right-fast"}`}>
          {/* First set */}
          <div className="flex space-x-6 flex-shrink-0">
            {skillsRow2.map((skill, index) => (
              <div
                key={`third-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group skill-card"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}>
                    {skill.icon}
                  </div>
                  <div className="text-foreground font-bold text-sm text-center">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex space-x-6 flex-shrink-0">
            {skillsRow2.map((skill, index) => (
              <div
                key={`fourth-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 group skill-card"
              >
                <div className="flex flex-col items-center justify-center h-full space-y-3">
                  <div className={`text-3xl bg-gradient-to-r ${skill.color} bg-clip-text text-transparent font-bold`}>
                    {skill.icon}
                  </div>
                  <div className="text-foreground font-bold text-sm text-center">{skill.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Wavy Decoration */}
      <div className="flex justify-center pt-8">
        <svg width="200" height="20" viewBox="0 0 200 20" className="text-primary/30">
          <path d="M0 10 Q25 0 50 10 T100 10 T150 10 T200 10" stroke="currentColor" strokeWidth="2" fill="none" />
        </svg>
      </div>
    </div>
  )
}
