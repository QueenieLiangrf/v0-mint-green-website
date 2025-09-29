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
      <div className="decoration-3d w-96 h-96 -top-48 -left-48" />
      <div className="decoration-3d w-64 h-64 top-1/3 -right-32" />
      <div className="decoration-3d w-80 h-80 bottom-0 left-1/4" />

      <Header />

      <div className="container mx-auto px-6 py-12 max-w-7xl relative z-10">
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
    </div>
  )
}
