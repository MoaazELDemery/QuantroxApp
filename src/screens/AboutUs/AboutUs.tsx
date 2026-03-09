import { FooterSection } from "../Home/sections/FooterSection";
// import { LeadershipSection } from "./sections/LeadershipSection";
import { MissionSection } from "./sections/MissionSection";
// import { OriginSection } from "./sections/OriginSection";
// import { ValuesSection } from "./sections/ValuesSection";
import { VisionSection } from "./sections/VisionSection";
import { ScrollReveal } from "../../components";
import { ContactSection } from "./sections/ContactSection";

export const AboutUs = (): JSX.Element => {
    return (
        <main
            className="bg-black w-full min-h-screen overflow-x-hidden flex flex-col relative"
            data-model-id="717:2640"
        >
            <div className="absolute h-[56.95%] top-[3.01%] left-1/2 -translate-x-1/2 w-full max-w-[100vw] 
            rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_100%)]" />

            <div className="h-[51.50%] top-[47.79%] left-1/2 -translate-x-1/2 w-full max-w-[100vw] absolute 
            rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

            <div className="h-[28.42%] top-[50.56%] left-1/2 -translate-x-1/2 w-full max-w-[100vw] absolute 
            rounded-[1857.89px] [background:radial-gradient(50%_50%_at_50%_50%,rgba(74,0,130,0.5)_5%,rgba(2,2,3,0.3)_89%,rgba(2,2,3,0)_100%)]" />

            <div className="flex-1 flex flex-col">
                <ScrollReveal>
                    <VisionSection />
                </ScrollReveal>

                <ScrollReveal>
                    <ContactSection />
                </ScrollReveal>

                {/* <ScrollReveal>
                    <LeadershipSection />
                </ScrollReveal> */}

                {/*<ScrollReveal>
                    <ValuesSection />
                </ScrollReveal>*/}

                <ScrollReveal>
                    <MissionSection />
                </ScrollReveal>
            </div>
            <div className="flex-shrink-0">
                <FooterSection />
            </div>
        </main>
    );
};
