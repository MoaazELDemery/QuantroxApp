import { Header } from "../../../components/layout/Header";

export const VisionSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-[600px] h-auto overflow-hidden px-2 sm:px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]" />

      <Header />

      {/* Main Content */}
      <main className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-6 w-full max-w-full">
        <div className="flex flex-col items-center gap-6 w-full max-w-full">
            <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            Engineering the Future of Finance.
          </h1>

          <p className="w-full max-w-[95vw] sm:max-w-[700px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base sm:text-lg md:text-[28px] text-center tracking-[0] leading-[normal]">
            We build the unified technology powering the next generation of
            <br className="hidden sm:block" />
            institutional investment.
          </p>
        </div>
      </main>
    </section>
  );
};
