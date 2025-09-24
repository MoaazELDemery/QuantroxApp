import { Header } from "../../../../components/layout/Header";

export const ChallengesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        {/* Navigation Bar */}
        <div className="absolute top-0 left-0 right-0 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms] z-50">
          <Header />
        </div>

        {/* Main Content */}
        <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-[1001px] mx-auto px-6 sm:px-8">
          <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center tracking-tight leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] px-2">
            The New Standard for Execution
          </h1>

          <p className="w-full max-w-[900px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center tracking-[0] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-2">
            Provide your clients with superior execution quality and sophisticated trading tools through our institutional-grade EMS and Smart Order Router.
          </p>
        </main>
      </div>
    </section>
  );
};
