"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [snowParticles, setSnowParticles] = useState<Array<{ left: string; delay: string; duration: string }>>([])

  useEffect(() => {
    setIsVisible(true)
    const particles = [...Array(30)].map(() => ({
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 15}s`,
      duration: `${10 + Math.random() * 6}s`,
    }))
    setSnowParticles(particles)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-secondary/20 via-background to-primary/10" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/winter-mountain-landscape.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      {/* Snowfall Animation */}
      <div className="absolute inset-0 pointer-events-none">
        {snowParticles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/60 rounded-full animate-snowfall"
            style={{
              left: particle.left,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className={`relative z-10 text-center px-4 max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? "animate-fade-in-up" : "opacity-0"
        }`}
      >
        <div className="mb-8 animate-float">
          <Image
            src="/logo.png"
            alt="Winter Debate Intensive Logo"
            width={120}
            height={120}
            className="mx-auto rounded-full shadow-2xl"
          />
        </div>

        <h1 className="font-extrabold text-primary mb-12 leading-tight" style={{ fontSize: '79px' }}>
          Winter Debate
          <span className="block text-primary -mt-2 md:-mt-4">Intensive</span>
        </h1>

        <div className="mb-8">
          <div className="relative rounded-2xl overflow-hidden shadow-lg mb-8 hover-lift max-w-2xl mx-auto bg-white/60 backdrop-blur-sm border border-gray-200/30 py-6 px-8">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-3 tracking-wide text-primary">
                Debate's First Winter Camp
              </h3>
              <div className="w-16 h-0.5 bg-primary/60 mx-auto mb-3"></div>
              <p className="text-lg md:text-1xl font-medium leading-relaxed text-primary">
                Summer isn't enough. Reflect on Fall this Winter, and dominate in Spring. 
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pricing">
            <Button size="lg" className="text-lg px-8 py-3 hover-lift">
              Join Winter 2025
            </Button>
          </Link>
          <Link href="/staff">
            <Button variant="outline" size="lg" className="text-lg px-8 py-3 hover-lift bg-transparent">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>
    </section>
  )
}
