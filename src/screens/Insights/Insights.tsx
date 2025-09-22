import { FeaturedArticlesSection } from "./sections/FeaturedArticlesSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { HighlightsSection } from "./sections/HighlightsSection";
import { LatestInsightsSection } from "./sections/LatestInsightsSection";
import { ResearchSection } from "./sections/ResearchSection";
import { WhitepapersSection } from "./sections/WhitepapersSection";
import { ScrollReveal } from "../../components";

export const Insights = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1512px] relative flex flex-col"
      data-model-id="717:2528"
    >
      <div className="h-[51.23%] top-[2.71%] left-[calc(50.00%_-_1173px)] w-[2346px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)] absolute rounded-[1857.89px]" />

      <div className="h-[46.33%] top-[42.98%] left-[calc(50.00%_-_1445px)] w-[1728px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)] absolute rounded-[1857.89px]" />

      <div className="h-[25.56%] top-[45.48%] left-[calc(50.00%_+_68px)] w-[1200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)] absolute rounded-[1857.89px]" />

      <ScrollReveal>
        <section className="w-full relative">
          <FeaturedArticlesSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full relative">
          <LatestInsightsSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full relative">
          <HighlightsSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full relative">
          <WhitepapersSection />
        </section>
      </ScrollReveal>

      <ScrollReveal>
        <section className="w-full relative">
          <ResearchSection />
        </section>
        </ScrollReveal>

      <ScrollReveal>
        <section className="w-full relative">
          <FooterSection />
        </section>
      </ScrollReveal>
    </div>
  );
};
