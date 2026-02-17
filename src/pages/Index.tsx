import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import { HeroSection, TrustBar } from "@/components/sections/HeroAndTrust";

const ServicesAndProcess = lazy(() =>
  import("@/components/sections/ServicesAndProcess").then((m) => ({
    default: () => (
      <>
        <m.ProblemSection />
        <m.ServicesSection />
      </>
    ),
  }))
);

const CasesSection = lazy(() =>
  import("@/components/sections/CasesSection").then((m) => ({
    default: m.CasesSection,
  }))
);

const ProcessSection = lazy(() =>
  import("@/components/sections/ServicesAndProcess").then((m) => ({
    default: m.ProcessSection,
  }))
);

const PricingAndFAQ = lazy(() =>
  import("@/components/sections/PricingAndFAQ").then((m) => ({
    default: () => (
      <>
        <m.PricingSection />
        <m.FAQSection />
      </>
    ),
  }))
);

const AboutSection = lazy(() =>
  import("@/components/sections/AboutSection").then((m) => ({
    default: m.AboutSection,
  }))
);

const CTAAndFooter = lazy(() =>
  import("@/components/sections/CTAAndFooter").then((m) => ({
    default: () => (
      <>
        <m.CTASection />
        <m.Footer />
      </>
    ),
  }))
);

function SectionFallback() {
  return <div className="py-24" />;
}

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <HeroSection />
      <TrustBar />
      <Suspense fallback={<SectionFallback />}>
        <ServicesAndProcess />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CasesSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <ProcessSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <PricingAndFAQ />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <CTAAndFooter />
      </Suspense>
    </div>
  );
}
