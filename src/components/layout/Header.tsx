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
    } else if (location.pathname.startsWith('/insights')) {
      return 3; // Insights tab
    } else if (location.pathname.startsWith('/about-us')) {
      return 4; // About us tab
    }
    return 0; // Home tab (default)
  };
  
  const [activeIndex, setActiveIndex] = useState(getActiveIndex());
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string | null>(null);
  const solutionsNavRef = useRef<HTMLDivElement>(null);

  // Function to get the currently selected dropdown item based on current route
  const getSelectedDropdownItem = () => {
    if (location.pathname.startsWith('/solutions/asset-managers')) {
      return '/solutions/asset-managers';
    } else if (location.pathname.startsWith('/solutions/brokerages')) {
      return '/solutions/brokerages';
    } else if (location.pathname.startsWith('/solutions/hedge-funds')) {
      return '/solutions/hedge-funds';
    } else if (location.pathname.startsWith('/solutions/robo-advisory')) {
      return '/solutions/robo-advisory';
    }
    return null;
  };
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
    setSelectedDropdownItem(getSelectedDropdownItem());
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
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[138px] py-3 sm:py-4 md:py-6 lg:py-8 z-50">
      <img
        className="object-contain -ml-2 sm:ml-0 scale-[0.7]"
        alt="Logo white"
        src="/logo-white-1-1.png"
      />
      
      {/* Mobile Menu Button */}
      <button 
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
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
                  className={`flex items-center justify-center w-20 lg:w-24 h-11 focus:outline-none ${
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
                  className={`flex items-center justify-center w-20 lg:w-24 h-11 focus:outline-none ${
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-max min-w-44 bg-white rounded-lg shadow-lg z-10 py-1">
                  {item.dropdownItems?.map((dropdownItem, dIndex) =>
                    dropdownItem.href && dropdownItem.href.startsWith("/") ? (
                      <Link
                        key={dIndex}
                        to={dropdownItem.href}
                        className={`block w-full text-left px-4 py-2 text-sm [font-family:'Satoshi-Medium',Helvetica] whitespace-nowrap transition-colors ${
                          selectedDropdownItem === dropdownItem.href 
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold' 
                            : 'text-gray-800 hover:bg-gray-100 hover:text-gray-900'
                        }`}
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
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-4 px-4 sm:px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            {navigationItems.map((item, index) => (
              <div key={index} className="border-b border-white/5 last:border-b-0">
                {item.href ? (
                  <Link
                    to={item.href}
                    onClick={() => {
                      handleNavClick(index);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`block w-full text-left py-4 transition-colors [font-family:'Satoshi-Medium',Helvetica] font-medium text-base ${
                      activeIndex === index 
                        ? 'text-white bg-white/5' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => {
                        setOpenDropdownIndex(openDropdownIndex === index ? null : index);
                        setIsSolutionsOpen(openDropdownIndex !== index);
                      }}
                      className={`flex items-center justify-between w-full text-left py-4 transition-colors [font-family:'Satoshi-Medium',Helvetica] font-medium text-base ${
                        activeIndex === index 
                          ? 'text-white bg-white/5' 
                          : 'text-gray-300 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                      <ChevronDownIcon
                        className={`w-4 h-4 text-current transition-transform duration-200 ${
                          openDropdownIndex === index ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>
                    {openDropdownIndex === index && (
                      <div className="bg-white/5 rounded-lg mx-2 mb-2">
                        {item.dropdownItems?.map((dropdownItem, dIndex) => (
                          dropdownItem.href && dropdownItem.href.startsWith("/") ? (
                            <Link
                              key={dIndex}
                              to={dropdownItem.href}
                              className={`block py-3 px-4 transition-colors [font-family:'Satoshi-Regular',Helvetica] text-sm first:rounded-t-lg last:rounded-b-lg ${
                                selectedDropdownItem === dropdownItem.href
                                  ? 'text-white bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-l-2 border-blue-500'
                                  : 'text-gray-400 hover:text-white hover:bg-white/10'
                              }`}
                              onClick={() => {
                                setIsSolutionsOpen(false);
                                setIsMobileMenuOpen(false);
                                setOpenDropdownIndex(null);
                                setActiveIndex(1);
                              }}
                            >
                              {dropdownItem.label}
                            </Link>
                          ) : (
                            <a
                              key={dIndex}
                              href={dropdownItem.href}
                              className="block py-3 px-4 text-gray-400 hover:text-white hover:bg-white/10 [font-family:'Satoshi-Regular',Helvetica] text-sm first:rounded-t-lg last:rounded-b-lg transition-colors"
                              onClick={() => {
                                setIsSolutionsOpen(false);
                                setIsMobileMenuOpen(false);
                                setOpenDropdownIndex(null);
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
                    className={`block w-full text-left py-4 transition-colors [font-family:'Satoshi-Medium',Helvetica] font-medium text-base ${
                      activeIndex === index 
                        ? 'text-white bg-white/5' 
                        : 'text-gray-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
            <div className="pt-6 pb-2">
              <Button className="w-full bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 py-3 transition-colors">
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base text-[#ffffff]">
                  Request a Demo
                </span>
              </Button>
            </div>
          </nav>
        </div>
      )}
      
      {/* Desktop CTA Button */}
      <Button className="hidden lg:inline-flex items-center gap-4 px-6 xl:px-10 py-2 bg-[#4a0082] rounded-[32px] h-auto hover:bg-[#4a0082]/90 transition-colors">
        <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
          Request a Demo
        </span>
      </Button>
    </header>
  );
};