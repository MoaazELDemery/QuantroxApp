import { ScrollReveal } from "@/components";
import {
  CallToActionSection,
  FeaturesSection,
  FooterSection,
  HeroSection,
  ProductDetailsSection,
  ProductShowcaseSection,
  TestimonialsSection,
} from "./sections";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-black w-full min-h-screen">
      <div className="bg-black w-full">
        <ScrollReveal>
          <FeaturesSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProductShowcaseSection />
        </ScrollReveal>
        <ScrollReveal>
          <TestimonialsSection />
        </ScrollReveal>
        <ScrollReveal>
          <ProductDetailsSection />
        </ScrollReveal>
        <ScrollReveal>
          <CallToActionSection />
        </ScrollReveal>
        <HeroSection />
        <FooterSection />
      </div>
    </div>
  );
};
