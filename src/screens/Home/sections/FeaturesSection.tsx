import { Button } from "../../../components/ui/button";
import { Header } from "../../../components/layout/Header";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-[url(/illusionGIF.gif)] bg-cover bg-[50%_50%]">
      <div className="relative h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        <div className="absolute w-full h-[1250px] top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(1,1,1,1)_63%)]" />
        <Header />
        <img
          className="absolute w-[600px] h-[630px] top-[216px] left-1/2 transform -translate-x-1/2"
          alt="Logo SVG"
          src="/logo-svg-1.svg"
        />
        <div className="absolute top-[286px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-10">
          <div className="flex flex-col items-center gap-8">
            <h1 className="w-[817px] bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-transparent text-7xl text-center tracking-[-1.80px] leading-normal">
              The Architecture of Alpha
            </h1>
            <p className="w-[817px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-normal">
              The definitive end-to-end platform for institutional quantitative
              investment. We engineer the native technology that powers
              Egypt&#39;s most sophisticated financial leaders.
            </p>
          </div>
          <Button className="w-[250px] h-auto justify-center py-4 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-lg text-[#ffffff] tracking-[0] leading-6">
              Request a demo
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};