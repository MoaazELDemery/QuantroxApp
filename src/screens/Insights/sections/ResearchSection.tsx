import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";

export const ResearchSection = (): JSX.Element => {
  return (
    <section className="w-full flex items-center justify-center py-16">
      <div className="flex max-w-[1248px] w-full items-center justify-between gap-8 px-4">
        <div className="flex flex-col max-w-[658px] w-full items-start justify-between gap-6 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#f2f2f2] text-5xl tracking-[0] leading-[normal]">
            Subscribe to Research
          </h2>

          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-2xl tracking-[0] leading-[normal]">
            Understand how Quantorx can be configured to solve your specific
            execution, research, and risk challenges.
          </p>
        </div>

        <div className="inline-flex items-center gap-6 flex-shrink-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <Input
            placeholder="Your email"
            className="w-[300px] h-12 px-4 py-2 rounded-[32px] border-[0.8px] border-solid border-[#a9a9a9] bg-transparent [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#a9a9a9] text-base placeholder:text-[#a9a9a9]"
          />

          <Button className="px-12 py-3 h-auto bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 transition-colors">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
              Subscribe
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};
