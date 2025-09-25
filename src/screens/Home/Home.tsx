import {
  FeaturesSection,
  FooterSection,
  HeroSection,
  ProductDetailsSection,
  ProductShowcaseSection,
  TestimonialsSection,
} from "./sections";
import { ScrollReveal } from "../../components/ui/scroll-reveal";

export const Home = (): JSX.Element => {
  return (
    <div className="bg-black w-full min-h-screen flex flex-col">
      <div className="">
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
          <HeroSection />
        </ScrollReveal>
        <FooterSection />
      </div>
    </div>
  );
};
