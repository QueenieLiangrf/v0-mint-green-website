import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import { IndustriesSection } from "@/components/industries-section"
import CasesSection from "@/components/cases-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
          <main>
            <HeroSection />
            <ServicesSection />
            <AdvantagesSection />
            <ProcessSection />
            <IndustriesSection />
          </main>
        </div>
        <CasesSection />
      </div>
      <Footer />
    </div>
  )
}
