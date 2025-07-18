"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // Get the home section element
      const homeSection = document.getElementById("home")
      if (!homeSection) return

      const homeRect = homeSection.getBoundingClientRect()
      const windowHeight = window.innerHeight

      // Show button when user scrolls past the home section
      // Hide when user is in the home section viewport
      const isInHomeSection = homeRect.bottom > windowHeight * 0.3

      setIsVisible(!isInHomeSection)
    }

    // Check on mount
    toggleVisibility()

    // Add scroll listener
    window.addEventListener("scroll", toggleVisibility, { passive: true })

    // Cleanup
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    const homeSection = document.getElementById("home")
    if (homeSection) {
      homeSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    } else {
      // Fallback to top of page
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    }
  }

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ease-in-out transform ${
        isVisible ? "translate-y-0 opacity-100 scale-100" : "translate-y-4 opacity-0 scale-95 pointer-events-none"
      }`}
    >
      <Button
        onClick={scrollToTop}
        size="icon"
        className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 border-2 border-primary/20 hover:border-primary/40 backdrop-blur-sm"
        aria-label="Scroll to top of page"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </div>
  )
}
