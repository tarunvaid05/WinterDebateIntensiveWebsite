"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Users, Trophy, Snowflake } from "lucide-react"

export function WhyUsSection() {
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

    const element = document.getElementById("why-us")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const reasons = [
    {
      icon: <Snowflake className="w-8 h-8" />,
      title: "First-of-Its-Kind Experience",
      description:
        " A ‘choose your own’ curriculum adapted to your specific needs and designed around the current circuit meta. ",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Elite Coaching Staff",
      description:
        "40+ hours of instruction from top debaters with 100+ bids accumulated, and the coaches of 1st ranked teams across PF and Policy.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Small Group Focus",
      description:
        "A 1:4 instructor to student ratio.",
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Guest Speakers",
      description:
        "Guest lectures from debaters with proven expertise on specific  strategies.",
    },
  ]

  return (
    <section id="why-us" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Why Choose WDI?</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover what makes Winter Debate Intensive the premier choice for serious debaters
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className={`hover-lift transition-all duration-700 ${
                isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-secondary rounded-xl flex items-center justify-center text-primary">
                    {reason.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-primary mb-3">{reason.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
