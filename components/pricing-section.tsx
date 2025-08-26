"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

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

  const packages = [
    {
      name: "Foundations Program",
      price: "$1,299",
      description: "Perfect for beginners and intermediate debaters",
      dates: "December 26, 2024 - January 1, 2025",
      features: [
        "7-day intensive program",
        "Daily coaching sessions",
        "Basic research training",
        "Practice rounds",
        "Materials included",
        "Certificate of completion",
      ],
      popular: false,
      googleFormUrl: "https://forms.google.com/foundations-program",
    },
    {
      name: "Elite Program",
      price: "$2,299",
      description: "Advanced training for experienced competitors",
      dates: "December 26, 2024 - January 3, 2025",
      features: [
        "9-day intensive program",
        "Advanced strategy sessions",
        "One-on-one coaching",
        "Tournament simulation",
        "Video analysis",
        "Private coaching sessions",
        "Custom research packet",
        "Year-long mentoring",
      ],
      popular: true,
      googleFormUrl: "https://forms.google.com/elite-program",
    },
  ]

  const curriculum = [
    "Advanced Argumentation Strategies",
    "Research & Evidence Analysis",
    "Cross-Examination Mastery",
    "Rebuttal Techniques",
    "Case Construction Workshop",
    "Tournament Simulation Rounds",
    "Public Speaking Excellence",
    "Winter-Themed Practice Topics",
  ]

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
            Choose the package that best fits your debate goals and budget
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="grid md:grid-cols-2 gap-8">
              {packages.map((pkg, index) => (
                <Card
                  key={index}
                  className={`relative hover-lift transition-all duration-700 ${
                    pkg.popular ? "ring-2 ring-accent shadow-2xl scale-105" : ""
                  } ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{pkg.name}</CardTitle>
                    <div className="text-4xl font-bold text-foreground mb-2">{pkg.price}</div>
                    <p className="text-muted-foreground text-sm mb-2">{pkg.description}</p>
                    <p className="text-accent text-sm font-semibold">{pkg.dates}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {pkg.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <Check className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button
                      className={`w-full hover-lift ${pkg.popular ? "bg-accent hover:bg-accent/90" : ""}`}
                      variant={pkg.popular ? "default" : "outline"}
                      onClick={() => window.open(pkg.googleFormUrl, "_blank")}
                    >
                      Register for {pkg.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"}`}
              style={{ animationDelay: "400ms" }}
            >
              <Card className="hover-lift h-fit">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary text-center">Curriculum Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {curriculum.map((item, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0 mt-2"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
