import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
// <CHANGE> Removed MissionSection import as it's no longer needed
import { WhyUsSection } from "@/components/why-us-section"
import { ProgramSection } from "@/components/program-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      {/* <CHANGE> Removed MissionSection component since mission content is now in hero */}
      <WhyUsSection />
      <ProgramSection />
      <Footer />
    </main>
  )
}
