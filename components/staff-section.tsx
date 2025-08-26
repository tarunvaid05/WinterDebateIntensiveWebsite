"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function StaffSection() {
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

    const element = document.getElementById("staff")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const founders = [
    {
      name: "Aidan Etkin",
      title: "Co-Founder",
      bio: `Aidan coached Berkely Prep RV, the #1 coaches poll team,  3x TOC quarterfinalists, and 2x TOC top ten speakers (T2 and T5 senior year). Berkeley also championed Emory and Michigan, as well as Semied/  Quartered Greenhill, NDCA, Harvard, etc in 2025 alone.\n\nIn LD, as Break Debates primary K coach, his strategies won multiple bid rounds and late elims, including finals of tournaments such as Glenbrooks, Stanford, etc. His students accumulated 60+ bids last year alone, and reached the quarters, semis, and finals at the TOC.`,
      image: "/AidanHeadshot.jpg",
    },
    {
      name: "Ishan Dubey",
      title: "Co-Founder ",
      bio: "Ishan competed for and now coaches at Strake Jesuit. As a competitor, he earned a record 36 bids, including 27 golds, and championed 15 bid-offering tournaments, most notably winning the Barkley Forum twice. He also remains the only person to have won TFA State twice in PF. After graduating, Ishan coached the 2024 and 2025 Gold TOC champions. His team led the 2025 field in qualifiers and had the most elimination round participants in both years.",
      image: "/IshanHeadshot.jpg",
    },
    {
      name: "Eva Redmond",
      title: "Co-Founder",
      bio: "Eva debated in Public Forum for The Blake School for the past 4 years. Throughout that time, she earned 17 TOC bids and championed the UK Season Opener, Apple Valley, the Blake Round Robin (2x), Emory, the Ivy Street Round Robin, and MN State (2x). Ranked as high as #1 nationally, she's also received top 5 speaker awards at the TOC, Emory, and Glenbrooks. Her students have placed 10th at NSDA Nationals.",
      image: "/EvaHeadshot.jpg",
    },
  ]

  const instructors = [
    {
      name: "Alex Thompson",
      title: "Policy Debate Specialist",
      bio: "Recent Yale graduate and former national qualifier. Specializes in policy debate strategy and case construction.",
    },
    {
      name: "Jordan Kim",
      title: "Public Forum Coach",
      bio: "Northwestern alumnus with expertise in PF debate. Known for innovative teaching methods and student success.",
    },
    {
      name: "Taylor Brooks",
      title: "Cross-Ex Specialist",
      bio: "Former national champion in cross-examination. Helps students master the art of strategic questioning.",
    },
    {
      name: "Casey Martinez",
      title: "Research Coordinator",
      bio: "Expert in evidence analysis and research strategy. Teaches students how to find and utilize winning arguments.",
    },
    {
      name: "Riley Johnson",
      title: "Speaking Coach",
      bio: "Professional public speaking trainer with focus on delivery, presence, and persuasive communication.",
    },
    {
      name: "Morgan Davis",
      title: "Tournament Prep Specialist",
      bio: "Former tournament director with deep knowledge of competition strategy and mental preparation techniques.",
    },
  ]

  return (
    <section id="staff" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">Our Expert Staff</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Learn from nationally recognized champions and expert coaches
          </p>
        </div>

        <div className="mb-20">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          >
            <h3 className="text-3xl font-bold text-primary mb-6">Who We Are</h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Winter Debate Intensive brings together the most accomplished coaches and instructors in the debate
                community. Our team combines decades of competitive experience with innovative teaching methods to
                create an unparalleled learning environment.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From national champions to PhD researchers, our staff is united by a passion for debate excellence and a
                commitment to helping students reach their full potential. We believe that great coaching transforms not
                just debate skills, but critical thinking, confidence, and leadership abilities that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        {/* Founders */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Founders</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <Card
                key={index}
                className={`hover-lift transition-all duration-700 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                    <Image src={founder.image || "/placeholder.svg"} alt={founder.name} fill className="object-cover" />
                  </div>
                  <h4 className="text-xl font-bold text-primary mb-2">{founder.name}</h4>
                  <p className="text-accent font-semibold mb-4">{founder.title}</p>
                  {founder.bio.split("\n").map((line, i) =>
                    line.trim() === "" ? (
                      <br key={i} />
                    ) : (
                      <p key={i} className="text-muted-foreground text-sm leading-relaxed">
                        {line}
                      </p>
                    ),
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Instructors */}
        <div className="relative">
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Instructors</h3>
          <div className="relative">
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
              <div className="text-center">
                <h4 className="text-2xl font-bold text-primary mb-2">More to be announced</h4>
                <p className="text-muted-foreground">Stay tuned for our incredible instructor lineup!</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 blur-sm">
              {instructors.map((instructor, index) => (
                <Card
                  key={index}
                  className={`hover-lift transition-all duration-700 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                  }`}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-300"></div>
                    <h4 className="text-lg font-bold text-primary mb-1">{instructor.name}</h4>
                    <p className="text-accent font-semibold mb-3 text-sm">{instructor.title}</p>
                    <p className="text-muted-foreground text-xs leading-relaxed">{instructor.bio}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
