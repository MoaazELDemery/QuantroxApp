import {
  FeaturesSection,
  LogoStripSection,
  CortexSection,
  ProductDetailsSection,
  MetricsSection,
  ProductShowcaseSection,
  CTABannerSection,
} from "./sections";
import { Footer } from "../../components/layout/Footer";
import { AmbientBackground } from "../../components/layout/AmbientBackground";
import { ScrollReveal } from "../../components/ui/scroll-reveal";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#060010] w-full min-h-screen flex flex-col relative overflow-x-clip">
      <AmbientBackground />
      <div className="relative z-10 flex flex-col">
        {/* Hero with animated GIF background + nav */}
        <FeaturesSection />

        {/* Trusted by Sovereign Enterprises logo strip */}
        <ScrollReveal>
          <LogoStripSection />
        </ScrollReveal>

        {/* Four Agents: Nexus AI, Axon AI, PayGate™, Geek™ */}
        <ScrollReveal>
          <ProductDetailsSection />
        </ScrollReveal>

        {/* One Brain. Every Agent. Zero Exposure. (Cortex engine) */}
        <ScrollReveal>
          <CortexSection />
        </ScrollReveal>

        {/* Stats: 40+, 3×, 65%, 0% */}
        <ScrollReveal>
          <MetricsSection />
        </ScrollReveal>

        {/* SOVEREIGN AI IS NOT A FEATURE */}
        <ScrollReveal>
          <ProductShowcaseSection />
        </ScrollReveal>

        {/* CTA Banner */}
        <ScrollReveal>
          <CTABannerSection />
        </ScrollReveal>

        <Footer />
      </div>
    </div>
  );
};
