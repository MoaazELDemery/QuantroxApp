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
    <div className="bg-black w-full min-h-screen min-w-[1512px] flex flex-col">
      <div className="bg-black w-full flex-1 flex flex-col">
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
