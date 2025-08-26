import { Navbar } from "@/components/navbar"
import { StaffSection } from "@/components/staff-section"
import { Footer } from "@/components/footer"

export default function StaffPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-16">
        <StaffSection />
      </div>
      <Footer />
    </main>
  )
}
