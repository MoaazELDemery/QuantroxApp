import { Link } from "react-router-dom";
import { Button } from "../../../components/ui/button";

export const FinalActionSection = (): JSX.Element => {
    return (
        <section className="w-full py-32 px-6 flex flex-col items-center justify-center text-center gap-12">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f0f0f0] 
          text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[0] leading-tight max-w-[1000px] uppercase">
                YOUR INFRASTRUCTURE IS READY. IS YOUR LOGIC?
            </h2>

            <Link to="/request-demo">
                <Button className="h-auto px-8 py-3 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90
                                         md:py-3.5
                                         lg:py-4 transition-colors duration-300">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base 
                               text-[#ffffff] tracking-[0] leading-6
                               lg:text-lg">
                        Schedule a Platform Overview
                    </span>
                </Button>
            </Link>
        </section>
    );
};
