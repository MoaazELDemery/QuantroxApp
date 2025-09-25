import { Button } from "../../../components/ui/button";

export const MissionSection = (): JSX.Element => {
  return (
    <section className="w-full py-10 px-2 sm:px-4 relative">
      <div className="flex flex-col items-center gap-8 max-w-full mx-auto">
        <div className="flex flex-col items-center justify-center gap-6 w-full">
          <h2 className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-xl sm:text-3xl md:text-5xl text-center tracking-[0] leading-[normal]">
            Contact Us
          </h2>

          <p className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] w-full max-w-[95vw] sm:max-w-[700px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base sm:text-lg md:text-[28px] text-center tracking-[0] leading-[normal]">
            See the architecture in action. Our team will arrange a technical
            conversation or partnership discussion tailored to your mandate.
          </p>
        </div>

        <Button className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] h-auto inline-flex items-center gap-4 px-6 py-3 sm:px-[72px] sm:py-4 bg-[#4a0082] rounded-[32px] hover:bg-[#5a0092] transition-colors">
          <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-base sm:text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
            Contact Us
          </span>
        </Button>
      </div>
    </section>
  );
};
