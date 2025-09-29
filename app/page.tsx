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
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Header />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 pt-20 sm:pt-28 max-w-7xl relative z-10">
        <main className="space-y-12 sm:space-y-16">
          <HeroSection />
          <ServicesSection />
          <AdvantagesSection />
          <ProcessSection />
          <IndustriesSection />
        </main>

        <div className="mt-12 sm:mt-16">
          <CasesSection />
        </div>
      </div>

      <Footer />
    </div>
  )
}
