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
        <FeaturesSection />
        <ProductShowcaseSection />
        <TestimonialsSection />
        <ProductDetailsSection />
        <CallToActionSection />
        <HeroSection />
        <FooterSection />
      </div>
    </div>
  );
};
