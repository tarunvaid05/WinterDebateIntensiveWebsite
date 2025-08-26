"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock } from "lucide-react"
import Link from "next/link"

export function ProgramSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("program")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const programs = [
    {
      name: "Foundations Program",
      dates: "December 27, 2025 - January 2, 2025",
      duration: "6 days",
      description: "Traditional; catered towards debaters looking to increase their lay appeal and strategy for any level of competition.",
    },
    {
      name: "Elite Program",
      dates: "December 27, 2025 - January 2, 2025",
      duration: "6 days",
      description: "Progressive; catered towards debaters looking to hone their skills in K, theory, or technical policy debate.",
    },
  ]

  return (
    <section id="program" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Programs</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the program that matches your experience level and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className={`hover-lift transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-primary mb-2">{program.name}</CardTitle>
                <p className="text-muted-foreground">{program.description}</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="space-y-4 mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{program.dates}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="text-muted-foreground">{program.duration} intensive</span>
                  </div>
                </div>
                <Link href="/pricing">
                  <Button className="w-full hover-lift">View Pricing</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
