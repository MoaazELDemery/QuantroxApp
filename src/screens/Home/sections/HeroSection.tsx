import { Button } from "../../../components/ui/button";

export const HeroSection = (): JSX.Element => {
  return (
    <section className="relative w-full bg-black min-h-[600px] h-[80vh] max-h-[800px] py-20">
      <div className="relative w-full max-w-[1099px] mx-auto px-4 h-full flex items-center">
        <div className="absolute w-[688px] h-80 top-[74px] left-1/2 transform -translate-x-1/2 bg-[#ffffff01] overflow-hidden blur-[192px]">
          <div className="relative w-[1108px] h-[632px] left-[126px] bg-[linear-gradient(90deg,rgba(126,6,212,1)_0%,rgba(117,30,175,1)_100%)] opacity-20" />
        </div>
        <div className="absolute w-[500px] h-px top-[102px] left-1/2 transform -translate-x-1/2 bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(81,2,199,0.65)_50%,rgba(0,0,0,0)_100%)]" />
        <div className="absolute w-[600px] h-[200px] top-0 left-1/2 transform -translate-x-1/2 [background:radial-gradient(50%_50%_at_50%_50%,rgba(199,199,199,0.05)_0%,rgba(0,0,0,0)_70%)]" />
        <div className="flex flex-col w-full items-center justify-center gap-[20px] relative z-10">
          <div className="flex flex-col items-center gap-3 w-full">
            <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f2f2f2] text-5xl text-center tracking-[-1.80px] leading-normal">
              Schedule a Technical Demonstration
            </h1>
            <p className="max-w-[961px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-normal">
              See the architecture in action. Understand how our platform can be
              configured to solve your specific challenges.
            </p>
          </div>
          <Button className="w-[266px] h-auto justify-center px-[72px] py-4 bg-[#4a0082] hover:bg-[#4a0082]/90 rounded-[32px] border-0">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-lg text-[#ffffff] text-center tracking-[0] leading-6 whitespace-nowrap">
              Request A Demo
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
