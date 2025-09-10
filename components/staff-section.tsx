"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export function StaffSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
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
      name: "Mac Hays",
      title: "Instructor",
      bio: "Mac Hays is the Director of Public Forum at the Argument Institute. As a competitor, he championed several bid tournaments, placed 4th at NSDA Nationals, and had one of the most decorated American Parliamentary Debate careers of his time—earning his graduating class's award for most successful competitive career, placing in the top three at APDA Nationals three years in a row, and winning top speaker in 2023. Over his career, he championed 15 tournaments, competed in over 150 elimination rounds, and ended with a 32-tournament break streak. As a coach, Mac's students have earned over 150 Gold TOC bids, championed and top-spoke major tournaments including Harvard and Yale, and reached the finals stage at both the TOC and NSDA Nationals. He has coached at 12 summer camps, served as Assistant PF Coach at American Heritage Broward, and was awarded a Fulbright grant to teach debate in Taiwan for a year after college.",
      image: "/mac.jpg",
    },
    {
      name: "Jason",
      title: "Instructor",
      image: "/jason.jpg",
      bio: "Jason debated at Strake Jesuit, where he served as a team captain. As a debater, he earned 27 bids to the TOC, qualified all four years, and was ranked as high as #1 in the nation. He won multiple national tournaments, including the TOC, Glenbrooks, Yale, Sunvite, Blake, Lexington, Grapevine, Laird Lewis, UH, and the Harvard RR. He also earned 1st speaker at Glenbrooks and Emory (2x), 2nd speaker at Bronx and Sunvite, and 3rd speaker at UKSO (2x). Jason has extensive experience coaching and working with teams, and he's thrilled to work at VBI this summer!",
    },
    {
      name: "Coming Soon",
      title: "Instructor",
      bio: "More details to be announced soon.",
      placeholder: true as const,
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
        </div>

        <div className="mb-1">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${
              isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
            }`}
          />
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
        <div>
          <h3 className="text-3xl font-bold text-primary text-center mb-12">Instructors</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {instructors.map((instructor, index) => {
              const isPlaceholder = Boolean((instructor as any).placeholder)
              return (
                <Card
                  key={index}
                  className={`hover-lift transition-all duration-700 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0 translate-y-10"
                  } ${isPlaceholder ? "relative" : ""}`}
                  style={{ animationDelay: `${(index + 3) * 150}ms` }}
                >
                  {isPlaceholder && (
                    <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
                      <div className="text-center">
                        <h4 className="text-xl font-bold text-primary mb-2">Coming Soon</h4>
                      </div>
                    </div>
                  )}
                  <CardContent className={`p-6 text-center ${isPlaceholder ? "blur-sm" : ""}`}>
                    <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
                      {instructor.image ? (
                        <Image
                          src={instructor.image || "/placeholder.svg"}
                          alt={instructor.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-300" />
                      )}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-2">{instructor.name}</h4>
                    <p className="text-accent font-semibold mb-4">{instructor.title}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{instructor.bio}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
