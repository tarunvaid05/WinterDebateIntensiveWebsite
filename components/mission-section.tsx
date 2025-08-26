"use client"

import { useEffect, useState } from "react"

export function MissionSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("mission")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="mission" className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url('/subtle-winter-snowflake-pattern.png')`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div
          className={`text-center transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Mission</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>

          {/* Mission Banner */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-12 hover-lift">
            <div
              className="h-96 bg-cover bg-center relative"
              style={{
                backgroundImage: `url('/winter-debate-camp.png')`,
              }}
            >
              <div className="absolute inset-0 bg-primary/80 flex items-center justify-center">
                <div className="text-center text-white px-6">
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">Debate's First Winter Camp</h3>
                  <p className="text-xl md:text-2xl opacity-90 max-w-3xl">Our camp turns weeks into years of growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
