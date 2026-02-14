import Header from "@/components/Header";
import { HeroSection, TrustBar } from "@/components/sections/HeroAndTrust";
import { ProblemSection, ServicesSection, ProcessSection } from "@/components/sections/ServicesAndProcess";
import { CasesSection } from "@/components/sections/CasesSection";
import { PricingSection, FAQSection } from "@/components/sections/PricingAndFAQ";
import { AboutSection } from "@/components/sections/AboutSection";
import { CTASection, Footer } from "@/components/sections/CTAAndFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <TrustBar />
      <ProblemSection />
      <ServicesSection />
      <CasesSection />
      <ProcessSection />
      <PricingSection />
      <AboutSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
}