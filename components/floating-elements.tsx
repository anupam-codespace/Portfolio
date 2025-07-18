"use client"

import { useEffect, useState } from "react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Minimal floating elements */}
      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
      <div
        className="absolute top-1/2 left-1/4 w-1 h-1 bg-primary/30 rounded-full animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-3/4 left-1/2 w-1 h-1 bg-primary/20 rounded-full animate-pulse"
        style={{ animationDelay: "3s" }}
      ></div>

      {/* Floating Code Snippets */}
      <div className="absolute top-20 right-20 opacity-[0.08] animate-float-slow text-primary">
        <div className="font-mono text-sm">
          <div>{"const developer = {"}</div>
          <div className="ml-4">{"name: 'Anupam Saha',"}</div>
          <div className="ml-4">{"passion: 'Creating Magic',"}</div>
          <div className="ml-4">{"skills: ['React', 'Node.js']"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div
        className="absolute top-1/3 left-10 opacity-[0.08] animate-float-slow text-primary"
        style={{ animationDelay: "2s" }}
      >
        <div className="font-mono text-sm">
          <div>{"function buildDreams() {"}</div>
          <div className="ml-4">{"const code = 'Clean & Scalable';"}</div>
          <div className="ml-4">{"return innovation + passion;"}</div>
          <div>{"}"}</div>
        </div>
      </div>

      <div
        className="absolute bottom-1/4 right-1/4 opacity-[0.08] animate-float-slow text-primary"
        style={{ animationDelay: "4s" }}
      >
        <div className="font-mono text-sm">
          <div>{"<Portfolio>"}</div>
          <div className="ml-4">{"<Skills expertise='Full Stack' />"}</div>
          <div className="ml-4">{"<Experience years='4+' />"}</div>
          <div>{"</Portfolio>"}</div>
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/3 opacity-[0.08] animate-float-slow text-primary"
        style={{ animationDelay: "6s" }}
      >
        <div className="font-mono text-xs">
          <div>{"// Turning ideas into reality"}</div>
          <div>{"const magic = creativity + code;"}</div>
          <div>{"export default excellence;"}</div>
        </div>
      </div>
    </div>
  )
}
