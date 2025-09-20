import { Header } from "../../../../components/layout/Header";

export const ChallengesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[850px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <Header />
        </div>

        {/* Main Content */}
        <main className="flex flex-col items-center justify-center gap-8 max-w-[1001px] mx-auto px-4">
          <h1 className="flex items-center justify-center w-fit bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-transparent text-7xl text-center tracking-[-1.80px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Systematize Alpha Generation
          </h1>

          <p className="flex items-center justify-center w-full max-w-[1001px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            A complete solution for the modern asset manager, from quantitative
            research and factor modeling to portfolio construction and risk
            management.
          </p>
        </main>
      </div>
    </section>
  );
};
