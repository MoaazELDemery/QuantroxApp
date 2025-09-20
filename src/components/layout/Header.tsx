import { ChevronDownIcon, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";

export const Header = (): JSX.Element => {
  const location = useLocation();
  
  // Function to get active index based on current route
  const getActiveIndex = () => {
    if (location.pathname.startsWith('/solutions')) {
      return 1; // Solutions tab
    } else if (location.pathname.startsWith('/platform')) {
      return 2; // Platform tab
    }
    return 0; // Home tab (default)
  };
  
  const [activeIndex, setActiveIndex] = useState(getActiveIndex());
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const solutionsNavRef = useRef<HTMLDivElement>(null);
  const navigationItems = [
    { label: "Home", href: "/" },
    {
      label: "Solutions",
      hasDropdown: true,
      dropdownItems: [
        { label: "For Assets Managers", href: "/solutions/asset-managers" },
        { label: "For Brokerages", href: "/solutions/brokerages" },
        { label: "For Hedge Funds", href: "/solutions/hedge-funds" },
        { label: "B2B Robo-Advisory", href: "/solutions/robo-advisory" },
      ],
    },
    { label: "Platform", href: "/platform" },
    { label: "Insights", href: "/insights" },
    { label: "About us", href: "/about-us" },
  ];

  const handleNavClick = (index: number) => {
    setActiveIndex(index);
    if (navigationItems[index].hasDropdown) {
      setIsSolutionsOpen((prev) => !prev);
    } else {
      setIsSolutionsOpen(false);
    }
  };

  // Update active index when route changes
  useEffect(() => {
    setActiveIndex(getActiveIndex());
  }, [location.pathname]);

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
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-[138px] py-4 md:py-6 lg:py-8 z-50">
      <img
        className="w-[100px] sm:w-[120px] md:w-[137px] h-7 sm:h-8 md:h-10 object-cover"
        alt="Logo white"
        src="/logo-white-1-1.png"
      />
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden flex items-center justify-center w-8 h-8 text-white"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex flex-1 items-center justify-center">
        <div className="inline-flex items-center justify-center px-2.5 py-[7px] bg-[#ffffff0d] rounded-[40px]">
          {navigationItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              ref={item.hasDropdown ? solutionsNavRef : null}
            >
              {item.href ? (
                <Link
                  to={item.href}
                  onClick={() => handleNavClick(index)}
                  className={`flex items-center justify-center w-[100px] h-11 focus:outline-none ${
                    item.hasDropdown ? "gap-0.5" : ""
                  }`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    textDecoration: "none",
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
                </Link>
              ) : (
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
              )}
              {item.hasDropdown && isSolutionsOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-[180px] bg-white rounded-lg shadow-lg z-10 py-1">
                  {item.dropdownItems?.map((dropdownItem, dIndex) =>
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
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>
      
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/10">
          <nav className="flex flex-col py-4">
            {navigationItems.map((item, index) => (
              <div key={index} className="px-6 py-2">
                {item.href ? (
                  <Link
                    to={item.href}
                    onClick={() => {
                      handleNavClick(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-white [font-family:'Satoshi-Medium',Helvetica] font-medium text-base"
                  >
                    {item.label}
                  </Link>
                ) : item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className="flex items-center justify-between w-full text-left py-2 text-white [font-family:'Satoshi-Medium',Helvetica] font-medium text-base"
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 text-white transition-transform duration-200 ${
                          isSolutionsOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {isSolutionsOpen && (
                      <div className="ml-4 mt-2">
                        {item.dropdownItems?.map((dropdownItem, dIndex) => (
                          dropdownItem.href && dropdownItem.href.startsWith("/") ? (
                            <Link
                              key={dIndex}
                              to={dropdownItem.href}
                              className="block py-2 text-gray-300 [font-family:'Satoshi-Regular',Helvetica] text-sm"
                              onClick={() => {
                                setIsSolutionsOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ) : (
                            <a
                              key={dIndex}
                              href={dropdownItem.href}
                              className="block py-2 text-gray-300 [font-family:'Satoshi-Regular',Helvetica] text-sm"
                              onClick={() => {
                                setIsSolutionsOpen(false);
                                setIsMobileMenuOpen(false);
                              }}
                            >
                              {dropdownItem.label}
                            </a>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      handleNavClick(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left py-2 text-white [font-family:'Satoshi-Medium',Helvetica] font-medium text-base"
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="px-6 py-4">
              <Button className="w-full bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 py-3">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base text-[#ffffff]">
                  Request a Demo
                </span>
              </Button>
            </div>
          </nav>
        </div>
      )}
      
      <Button className="hidden lg:flex w-[140px] sm:w-[180px] md:w-[220px] lg:w-[250px] h-auto justify-center py-2 sm:py-3 md:py-4 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90">
        <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-sm sm:text-base md:text-lg text-[#ffffff] tracking-[0] leading-6">
          Request a Demo
        </span>
      </Button>
    </header>
  );
};