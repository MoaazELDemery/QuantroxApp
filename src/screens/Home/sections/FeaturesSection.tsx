import { ChevronDownIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";

export const FeaturesSection = (): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const solutionsNavRef = useRef<HTMLDivElement>(null);
  
  // <-- UPDATED: Changed the href for "For Assets Managers" -->
  const navigationItems = [
    { label: "Home" },
    {
      label: "Solutions",
      hasDropdown: true,
      dropdownItems: [
          { label: "For Assets Managers", href: "/solutions/asset-managers" },
        { label: "For Brokerages", href: "#" },
        { label: "For Hedge Funds", href: "#" },
        { label: "B2B Robo-Advisory", href: "#" },
      ],
    },
    { label: "Platform" },
    { label: "Insights" },
    { label: "About us" },
  ];

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    if (navigationItems[index].hasDropdown) {
      setIsSolutionsOpen((prev) => !prev);
    } else {
      setIsSolutionsOpen(false);
    }
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsNavRef.current &&
        !solutionsNavRef.current.contains(event.target as Node)
      ) {
        setIsSolutionsOpen(false);
      }
    };
    if (isSolutionsOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSolutionsOpen]);
  return (
    <section className="relative w-full h-[1000px] overflow-hidden bg-[url(/illusionGIF.gif)] bg-cover bg-[50%_50%]">
      <div className="relative h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
        
        <div className="absolute w-full h-[1250px] top-0 left-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(1,1,1,1)_63%)]" />

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
        <header className="absolute top-0 left-0 w-full flex items-center justify-between px-[138px] py-8">
          <img
            className="w-[137px] h-10 object-cover"
            alt="Logo white"
            src="/logo-white-1-1.png"
          />
          <nav className="flex-1 flex items-center justify-center">
            <div className="inline-flex items-center justify-center px-2.5 py-[7px] bg-[#ffffff0d] rounded-[40px]">
              {navigationItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  ref={item.hasDropdown ? solutionsNavRef : null}
                >
                  <button
                    type="button"
                    onClick={() => handleNavClick(index)}
                    className={`flex items-center justify-center w-[100px] h-11 focus:outline-none ${
                      item.hasDropdown ? "gap-0.5" : ""
                    }`}
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <span
                      className={`[font-family:'Satoshi-Medium',Helvetica] text-base tracking-[0] leading-normal ${
                        activeIndex === index
                          ? "font-bold text-[#ffffff]"
                          : "font-medium text-[#a9a9a9]"
                      }`}
                    >
                      {item.label}
                    </span>
                    {item.hasDropdown && (
                      <ChevronDownIcon
                        className={`w-4 h-4 text-[#a9a9a9] transition-transform duration-200 ${
                          isSolutionsOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    )}
                  </button>
                  {item.hasDropdown && isSolutionsOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[180px] bg-white rounded-lg shadow-lg z-10 py-1">
                      {item.dropdownItems?.map((dropdownItem, dIndex) => (
                        dropdownItem.href && dropdownItem.href.startsWith("/") ? (
                          <Link
                            key={dIndex}
                            to={dropdownItem.href}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 [font-family:'Satoshi-Medium',Helvetica] whitespace-nowrap"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {dropdownItem.label}
                          </Link>
                        ) : (
                          <a
                            key={dIndex}
                            href={dropdownItem.href}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 [font-family:'Satoshi-Medium',Helvetica] whitespace-nowrap"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {dropdownItem.label}
                          </a>
                        )
                      ))}
                    </div>
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
      </div>
    </section>
  );
};