export const TechnologyOverviewSection = (): JSX.Element => {

  return (
    <section className="w-full py-[100px] flex flex-col items-center">
      <div className="flex justify-center items-center gap-[15px] px-[15px] py-0 rounded-[150px] 
      overflow-hidden opacity-60 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
        <div className="w-[60px] h-[1.5px] rounded-[90px] 
        bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />

        <div className="flex items-center justify-center [font-family:'Satoshi-Regular',Helvetica] 
        font-normal text-[#e6e6e6] text-[24.5px] tracking-[0] leading-[normal]">
          Your Challenges
        </div>

        <div className="w-[60px] h-[1.5px] rounded-[90px] rotate-180 
        bg-[linear-gradient(270deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_100%)]" />
      </div>

      <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] 
      flex w-full max-w-[1000px] flex-col items-center gap-6 mt-[67px]">
        <h2 className="flex items-center justify-center text-center [font-family:'Satoshi-Bold',Helvetica] 
        font-bold text-[#ffffff] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight mb-4 px-4">
          Location is a critical driver of growth, risk, and operational efficiency.
        </h2>

        <p className="flex items-center justify-center text-center [font-family:'Satoshi-Medium',Helvetica] 
        font-medium text-[#d9d9d9] text-lg md:text-xl lg:text-[24px] tracking-[0] leading-relaxed px-4">
          Yet in most organizations, spatial data is treated as static visualization—isolated in maps and dashboards, disconnected from decision-making, workflows, and governance. As a result, leaders struggle to turn geographic insight into defensible, repeatable actions.
        </p>
      </div>
    </section>
  );
};
