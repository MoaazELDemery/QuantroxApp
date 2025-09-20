import { ChevronDownIcon } from "lucide-react";
import { Button } from "../../../../components/ui/button";

const navigationItems = [
  { name: "Home", active: false },
  { name: "Solutions", active: true, hasDropdown: true },
  { name: "Platform", active: false },
  { name: "Insights", active: false },
  { name: "About us", active: false },
];

export const ChallengesSection = (): JSX.Element => {
  return (
    <section className="relative w-full h-[850px] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        {/* Navigation Bar */}
        <header className="absolute top-0 left-0 right-0 flex w-full items-center justify-between px-[138px] py-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <img
            className="w-[137px] h-10 object-cover"
            alt="Logo white"
            src="/logo-white-1-1.png"
          />

          <nav className="flex-1 flex justify-center">
            <div className="flex items-center justify-center px-2.5 py-[7px] bg-[#ffffff0d] rounded-[40px]">
              {navigationItems.map((item, index) => (
                <div
                  key={item.name}
                  className="flex w-[100px] h-11 items-center justify-center gap-0.5"
                >
                  <span
                    className={`[font-family:'Satoshi-Medium',Helvetica] font-medium text-base tracking-[0] leading-[normal] ${
                      item.active ? "text-[#ffffff]" : "text-[#a9a9a9]"
                    }`}
                  >
                    {item.name}
                  </span>
                  {item.hasDropdown && (
                    <ChevronDownIcon className="w-4 h-4 text-white" />
                  )}
                </div>
              ))}
            </div>
          </nav>

          <Button className="inline-flex items-center gap-4 px-10 py-2 bg-[#4a0082] rounded-[32px] h-auto hover:bg-[#4a0082]/90 transition-colors">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
              Request a Demo
            </span>
          </Button>
        </header>

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
