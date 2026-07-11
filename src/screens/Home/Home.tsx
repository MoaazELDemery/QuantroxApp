import {
  FeaturesSection,
  ManifestoSection,
  CortexSection,
  ProductDetailsSection,
  TickerSection,
  MetricsSection,
  ProductShowcaseSection,
  CTABannerSection,
} from "./sections";
import { Footer } from "../../components/layout/Footer";
import { ChapterRail } from "../../components/layout/ChapterRail";
import { ScrollCue } from "../../components/layout/ScrollCue";
import { FilmChip } from "../../components/layout/FilmChip";
import { StoryCube } from "../../components/three/StoryCube";

/**
 * Home - dark editorial canvas. The platform cube is rendered live in
 * three.js (hero + Cortex engine room); the 4K macro film powers the takeover.
 * Every section's motion is scroll-driven via GSAP + Lenis.
 */
export const Home = (): JSX.Element => {
  return (
    <div className="bg-[#060010] w-full min-h-screen flex flex-col relative overflow-x-clip">
      {/* The persistent protagonist - travels through every chapter below */}
      <StoryCube />

      {/* Journey UX: chapter scrollspy, scroll cue, floating film chip */}
      <ChapterRail />
      <ScrollCue />
      <FilmChip />
      <div className="relative flex flex-col">
        {/* Hero - live 3D cube */}
        <FeaturesSection />

        {/* 01 · Manifesto: scroll-inked reading text */}
        <ManifestoSection />

        {/* 02 · The Digital Workforce: pinned horizontal gallery */}
        <ProductDetailsSection />

        {/* Cortex - dark engine room, live cube fracture */}
        <CortexSection />

        {/* Oversized marquee divider */}
        <TickerSection />

        {/* 03 · Metrics: editorial count-ups */}
        <MetricsSection />

        {/* 04 · Foundation: pinned 4K film takeover */}
        <ProductShowcaseSection />

        {/* 05 · Under the Hood + CTA card */}
        <CTABannerSection />

        <Footer />
      </div>
    </div>
  );
};
