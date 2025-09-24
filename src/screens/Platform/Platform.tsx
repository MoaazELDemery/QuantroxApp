import { ApiAccessSection } from "./sections/ApiAccessSection";
import { ExecutionEngineSection } from "./sections/ExecutionEngineSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { ResearchEnvironmentSection } from "./sections/ResearchEnvironmentSection";
import { ScrollReveal } from "../../components/ui/scroll-reveal";

export const Platform = (): JSX.Element => {
  return (
    <main
      className="bg-black overflow-hidden w-full min-w-[1512px] min-h-screen flex flex-col relative"
      data-model-id="637:8890"
    >
      {/* Background gradient elements */}
      <div className="h-[57.33%] top-[3.03%] left-[calc(50.00%_-_1173px)] w-[2346px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)] absolute rounded-[1857.89px]" />

      <div className="h-[51.84%] top-[48.10%] left-[calc(50.00%_-_1445px)] w-[1728px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)] absolute rounded-[1857.89px]" />

      <div className="h-[28.61%] top-[50.90%] left-[calc(50.00%_+_68px)] w-[1200px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)] absolute rounded-[1857.89px]" />

      <ScrollReveal>
        <ResearchEnvironmentSection />
      </ScrollReveal>

      <ScrollReveal>
        <ApiAccessSection />
      </ScrollReveal>

      <ScrollReveal>
        <ExecutionEngineSection />
      </ScrollReveal>

      <FooterSection />
    </main>
  );
};
