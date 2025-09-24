import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Header } from "../../../components/layout/Header";

export const FeaturedArticlesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-auto overflow-hidden">
      <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]" />

      {/* Header */}
      <Header />

      {/* Main content - centered with auto layout */}
      <main className="relative z-10 flex flex-col items-center justify-center px-4 py-20 min-h-[850px]">
        <div className="flex flex-col items-center gap-10 max-w-[1073px] w-full mx-auto">
          {/* Hero text section */}
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              The Operating System for Egypt's Most Sophisticated Investors
            </h1>

            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-lg md:text-xl lg:text-2xl xl:text-[28px] text-center tracking-[0] leading-normal max-w-[1001px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              Research, analysis, and commentary in quantitative finance—engineered
              with precision & power.
            </p>
          </div>

          {/* Subscription section - inline layout */}
          <div className="flex items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="flex w-[300px] h-12 items-center gap-2 px-4 py-2 rounded-[32px] border-[0.8px] border-solid border-[#a9a9a9]">
              <Input
                className="flex-1 bg-transparent border-0 p-0 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#a9a9a9] text-base tracking-[0] leading-6 placeholder:text-[#a9a9a9] focus-visible:ring-0 focus-visible:ring-offset-0"
                placeholder="Your email"
                type="email"
              />
            </div>

            <Button className="px-12 py-3 h-12 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 transition-colors">
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                Subscribe
              </span>
            </Button>
          </div>
        </div>
      </main>
    </section>
  );
};
