import { ChallengesSection } from "./sections/ChallengesSection";
import { DataHubSection } from "./sections/DataHubSection";
import { FooterSection } from "../../Home/sections/FooterSection";
import { MainContentSection } from "./sections/MainContentSection";
import { TechnologyOverviewSection } from "./sections/TechnologyOverviewSection";

export const SolutionsForAsset = (): JSX.Element => {
  return (
    <div
      className="bg-black overflow-hidden w-full min-w-[1512px] relative"
      data-model-id="637:8726"
    >
      <div className="absolute h-[48.86%] top-[2.58%] left-[calc(50.00%_-_1173px)] w-[2346px] rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)]" />

      <div className="h-[44.19%] top-[41.00%] left-[calc(50.00%_-_1445px)] w-[1728px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

      <div className="h-[24.38%] top-[43.38%] left-[calc(50.00%_+_68px)] w-[1200px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] w-full relative">
        <ChallengesSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full relative">
        <TechnologyOverviewSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] w-full relative">
        <DataHubSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] w-full relative">
        <MainContentSection />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms] w-full relative">
        <FooterSection />
      </div>
    </div>
  );
};
