"use client"

import { useEffect, useState } from "react"

export default function ThreeDShapes() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="absolute right-10 top-1/2 transform -translate-y-1/2 pointer-events-none">
      <div className="relative w-80 h-80">
        {/* Main Blue Cube */}
        <div
          className="absolute w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-2xl animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`,
            top: "20%",
            left: "30%",
          }}
        />

        {/* Secondary Blue Cube */}
        <div
          className="absolute w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg shadow-xl animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -8}deg) rotateY(${mousePosition.x * -8}deg) translateZ(10px)`,
            top: "10%",
            right: "20%",
            animationDelay: "1s",
          }}
        />

        {/* Sphere */}
        <div
          className="absolute w-20 h-20 bg-gradient-to-br from-blue-300 to-blue-500 rounded-full shadow-xl animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 5}deg) rotateY(${mousePosition.x * 5}deg) translateZ(15px)`,
            bottom: "30%",
            left: "10%",
            animationDelay: "2s",
          }}
        />

        {/* Gradient Pill */}
        <div
          className="absolute w-12 h-32 bg-gradient-to-b from-green-400 via-blue-500 to-purple-600 rounded-full shadow-xl animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 12}deg) rotateY(${mousePosition.x * 12}deg) translateZ(25px)`,
            bottom: "10%",
            right: "10%",
            animationDelay: "3s",
          }}
        />

        {/* Small Accent Shapes */}
        <div
          className="absolute w-8 h-8 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-lg shadow-lg animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * 15}deg) rotateY(${mousePosition.x * 15}deg)`,
            top: "60%",
            left: "60%",
            animationDelay: "0.5s",
          }}
        />

        <div
          className="absolute w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full shadow-lg animate-float"
          style={{
            transform: `perspective(1000px) rotateX(${mousePosition.y * -12}deg) rotateY(${mousePosition.x * -12}deg)`,
            top: "80%",
            right: "40%",
            animationDelay: "1.5s",
          }}
        />
      </div>
    </div>
  )
}
