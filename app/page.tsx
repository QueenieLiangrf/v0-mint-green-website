import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AdvantagesSection } from "@/components/advantages-section"
import { ProcessSection } from "@/components/process-section"
import CasesSection from "@/components/cases-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="bg-background py-6">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground">软件定制开发与AI智能体服务专家</h1>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
          <main>
            <HeroSection />
            <ServicesSection />
            <AdvantagesSection />
            <ProcessSection />
            <CasesSection />
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
