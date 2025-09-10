"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Star } from "lucide-react"

export function PricingSection() {
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

    const element = document.getElementById("pricing")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleRegistration = (program: string) => {
    const formUrl =
      program === "Pathos" ? "https://docs.google.com/forms/d/1JkJxzQE0YkWdLu-rm3__Y0uid-Bj-KuJqtA0bnb4sZc/viewform?edit_requested=true" : "https://docs.google.com/forms/d/1JkJxzQE0YkWdLu-rm3__Y0uid-Bj-KuJqtA0bnb4sZc/viewform?edit_requested=true"
    window.open(formUrl, "_blank")
  }

  return (
    <section id="pricing" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Investment in Excellence</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose your program and secure your spot at Winter Debate Intensive
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <Card
            className={`hover-lift transition-all duration-700 h-70 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
              <h3 className="text-3xl font-bold text-primary mb-6">Pathos Program</h3>
              <div className="text-5xl font-bold text-foreground mb-6">$1,350</div>
              <Button className="w-full hover-lift text-lg py-3" onClick={() => handleRegistration("Pathos")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift transition-all duration-700 h-70 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "100ms" }}
          >
            <CardContent className="flex flex-col items-center justify-center h-full p-8 text-center">
              <h3 className="text-3xl font-bold text-primary mb-6">Logos Program</h3>
              <div className="text-5xl font-bold text-foreground mb-6">$1,350</div>
              <Button className="w-full hover-lift text-lg py-3" onClick={() => handleRegistration("Logos")}>
                Apply Now
              </Button>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift transition-all duration-700 h-[32rem] ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "200ms" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Schedule</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 overflow-y-auto max-h-80">
              <div className="space-y-2">
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Dec 27:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Dec 28:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Dec 29:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Dec 30:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-accent/20">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">
                    <strong>Dec 31:</strong> Free day!
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Jan 1:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm">
                    <strong>Jan 2:</strong> 11AM-1PM, 2PM-6PM CST
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-2 rounded-lg bg-blue-50 dark:bg-blue-900/20">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <span className="text-sm font-medium">
                    <strong>Jan 3-4:</strong> Tournament days
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card
            className={`hover-lift transition-all duration-700 h-[32rem] ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
            style={{ animationDelay: "300ms" }}
          >
            <CardHeader className="text-center pb-4">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg">
                <Star className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-primary">Benefits</CardTitle>
            </CardHeader>
            <CardContent className="pt-0 flex-1">
              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">6-day intensive program</span>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">2-day camp tournament</span>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">Custom research packet designed for TOC</span>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">Advanced strategy advice</span>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">Practice rounds with judging and feedback</span>
                </div>
                <div className="flex items-start space-x-3 p-2 rounded-lg bg-muted/30">
                  <div className="w-2 h-2 bg-amber-500 rounded-full flex-shrink-0 mt-2"></div>
                  <span className="text-sm">Lectures from top national coaches</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
