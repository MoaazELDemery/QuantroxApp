import { Header } from "../../../components/layout/Header";

export const ResearchEnvironmentSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[560px] md:min-h-[700px] overflow-visible pb-0">
      {/* Header */}
      <Header />

      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]" />

      {/* Main Content */}
      <main className="flex flex-col items-center justify-center gap-6 sm:gap-8 max-w-[1001px] mx-auto px-6 sm:px-8 pt-32 sm:pt-40 md:pt-48 lg:pt-56 xl:pt-64 pb-0">
        <div className="flex flex-col items-center gap-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            The Quantorx Core: <br />A Technical Deep Dive.
          </h1>

          <p className="w-full max-w-[900px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center tracking-[0] leading-relaxed translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] px-2">
            An open, extensible, and high-performance architecture designed for
            the most demanding quantitative workflows.
          </p>
        </div>
      </main>
    </section>
  );
};