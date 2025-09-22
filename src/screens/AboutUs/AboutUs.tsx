import { ContactSection } from "./sections/ContactSection";
import { FooterSection } from "../Home/sections/FooterSection";
import { LeadershipSection } from "./sections/LeadershipSection";
import { MissionSection } from "./sections/MissionSection";
import { VisionSection } from "./sections/VisionSection";
import { ScrollReveal } from "../../components";

export const AboutUs = (): JSX.Element => {
    return (
        <main
            className="bg-black overflow-hidden w-full min-w-[1512px] relative"
            data-model-id="717:2640"
        >
            <div className="absolute h-[56.95%] top-[3.01%] left-[calc(50.00%_-_1173px)] w-[2346px] rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)]" />

            <div className="h-[51.50%] top-[47.79%] left-[calc(50.00%_-_1445px)] w-[1728px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

            <div className="h-[28.42%] top-[50.56%] left-[calc(50.00%_+_68px)] w-[1200px] absolute rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

            <ScrollReveal>
                <VisionSection />
            </ScrollReveal>

            <ScrollReveal>
                <ContactSection />
            </ScrollReveal>

            <ScrollReveal>
                <LeadershipSection />
            </ScrollReveal>

            <ScrollReveal>
                <MissionSection />
            </ScrollReveal>
            
            <FooterSection />
        </main>
    );
};
