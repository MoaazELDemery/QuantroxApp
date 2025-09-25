import { Button } from "../../../components/ui/button";
import { Header } from "../../../components/layout/Header";

export const FeaturesSection = (): JSX.Element => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-[url(/illusionGIF.gif)] bg-cover bg-center">
      <div className="relative h-full min-h-screen [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        <div className="absolute w-full h-full top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(1,1,1,1)_63%)]" />
        <Header />
        
        {/* Logo - responsive sizing and positioning */}
        <img
          className="absolute w-[380px] h-[400px] top-[170px] left-1/2 transform -translate-x-1/2 
                     md:w-[500px] md:h-[525px] md:top-[180px]
                     lg:w-[600px] lg:h-[630px] lg:top-[216px]"
          alt="Logo SVG"
          src="/logo-svg-1.svg"
        />
        
        {/* Content container - responsive positioning and spacing */}
  <div className="absolute top-[240px] left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center gap-6 px-4
      md:top-[290px] md:gap-8
      lg:top-[326px] lg:gap-10 lg:px-0">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Title - responsive text sizing and width */}
            <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              The Architecture of Alpha
            </h1>
            
            {/* Description - responsive text sizing and width */}
            <p className="w-[98vw] max-w-[98vw] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base text-center tracking-[0] leading-relaxed
                          sm:text-lg
                          md:text-xl md:max-w-[700px] md:leading-normal
                          lg:text-[28px] lg:max-w-[817px]">
              The definitive end-to-end platform for institutional quantitative
              investment. We engineer the native technology that powers
              Egypt&#39;s most sophisticated financial leaders.
            </p>
          </div>
          
          {/* Button - responsive sizing */}
          <Button className="w-[200px] h-auto justify-center py-3 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90
                             md:w-[220px] md:py-3.5
                             lg:w-[250px] lg:py-4">
            <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base text-[#ffffff] tracking-[0] leading-6
                             lg:text-lg">
              Request a demo
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};