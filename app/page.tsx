import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { IndustriesSection } from "@/components/industries-section"
import CasesSection from "@/components/cases-section"
import { Footer } from "@/components/footer"
import { FloatingContact } from "@/components/floating-contact"
import { VideoAutoplayManager } from "@/components/video-autoplay-manager"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <div className="container mx-auto px-6 py-12 pt-20 max-w-7xl relative z-10">
        <main className="space-y-16">
          <HeroSection />
          <ServicesSection />
          <AdvantagesSection />
          <ProcessSection />
          <IndustriesSection />
        </main>

        <div className="mt-16">
          <CasesSection />
        </div>
      </div>

      <Footer />
      <FloatingContact />
      <VideoAutoplayManager />
    </div>
  )
}
