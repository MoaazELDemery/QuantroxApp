import { ChallengesSection } from "./sections/ChallengesSection";
import { DataHubSection } from "./sections/DataHubSection";
import { FooterSection } from "../../Home/sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TechnologyOverviewSection } from "./sections/TechnologyOverviewSection";
import { ScrollReveal } from "../../../components";

export const SolutionsForBrokerages = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-h-screen flex flex-col relative"
      data-model-id="637:8726"
    >
      <div className="absolute h-[48.86%] top-[2.58%] left-[calc(50.00%_-_1173px)] w-[2346px] rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)]" />

      <div className="h-[44.19%] top-[41.00%] left-[calc(50.00%_-_1445px)] w-[1728px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

      <div className="h-[24.38%] top-[43.38%] left-[calc(50.00%_+_68px)] w-[1200px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

      <ScrollReveal>
        <ChallengesSection />
      </ScrollReveal>

      <ScrollReveal>
        <TechnologyOverviewSection />
      </ScrollReveal>

      <ScrollReveal>
        <DataHubSection />
      </ScrollReveal>

      <ScrollReveal>
        <MainContentSection />
      </ScrollReveal>

      <FooterSection />
    </div>
  );
};