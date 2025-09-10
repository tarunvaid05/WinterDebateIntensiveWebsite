"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
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
      name: "Pathos Program",
      description:
        "Catered towards debaters looking to refine their lay appeal, with a focus on topic specific prep and advanced speaking strategies.",
      image: "/pathos.png",
      fillImage: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Logos Program",
      description:
        'Catered towards debaters looking to succeed "progressively", with a focus on K, theory, and technical policy style argumentation.',
      image: "/logos.png",
      fillImage: true,
      color: "from-indigo-500 to-purple-500",
    },
  ]

  return (
    <section id="program" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-8 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Programs</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the program that matches your experience level and goals
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {programs.map((program, index) => {
            const IconComponent = (program as any).icon
            return (
              <Card
                key={index}
                className={`hover-lift transition-all duration-700 relative overflow-hidden ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-5`}></div>

                <CardHeader className="text-center relative z-10">
                  <div className="flex justify-center mb-4">
                    {program.fillImage ? (
                      <div
                        className={`w-16 h-16 rounded-full shadow-lg relative overflow-hidden ${
                          program.name === "Pathos Program" ||
                          program.name === "Logos Program" ||
                          program.name === "Ethos Program"
                            ? "bg-transparent"
                            : "bg-white"
                        }`}
                      >
                        <Image
                          src={program.image || "/placeholder.svg"}
                          alt={program.name}
                          fill
                          className={`object-center ${
                            program.name === "Pathos Program" ||
                            program.name === "Logos Program" ||
                            program.name === "Ethos Program"
                              ? "object-contain scale-150"
                              : "object-cover"
                          }`}
                        />
                      </div>
                    ) : (
                      <div
                        className={`p-4 rounded-full bg-gradient-to-br ${program.color} shadow-lg relative overflow-hidden`}
                      >
                        {IconComponent ? <IconComponent className="w-8 h-8 text-white" /> : null}
                      </div>
                    )}
                  </div>

                  <CardTitle className="text-2xl font-bold text-primary mb-2">{program.name}</CardTitle>
                  <p className="text-muted-foreground">{program.description}</p>
                </CardHeader>

                <CardContent className="text-center relative z-10">
                  <div className="space-y-4 mb-2">
                    <div className="flex items-center justify-center space-x-2"></div>
                  </div>
                  <Link href="/pricing">
                    <Button className="w-full hover-lift">View Details</Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
