

export const TechnologyOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-[100px] flex flex-col items-center">
      <div className="flex justify-center items-center gap-[15px] px-[15px] py-0 rounded-[150px] overflow-hidden opacity-60 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="w-[60px] h-[1.5px] rounded-[90px] bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="flex items-center justify-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] text-[24.5px] tracking-[0] leading-[normal ] opacity-70">
          Your Challenges
        </div>

        <div className="w-[60px] h-[1.5px] rounded-[90px] rotate-180 bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] flex w-full max-w-[1200px] flex-col items-center gap-6 mt-[67px] px-4">
        <h2 className="flex items-center justify-center text-center [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-4xl md:text-5xl tracking-[0] leading-tight">
          Most “banking AI” solutions are positioned as chatbots.
        </h2>

        <p className="flex items-center justify-center text-center [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-xl md:text-[28px] tracking-[0] leading-relaxed max-w-[1000px]">
          They answer questions, but they don’t reduce operational cycle time, improve risk decisions, or enable teams to execute consistent, policy-compliant outcomes at scale. As a result, banks are left with fragmented processes, manual handoffs, and limited governance.
        </p>
      </div>
    </section>
  );
};
