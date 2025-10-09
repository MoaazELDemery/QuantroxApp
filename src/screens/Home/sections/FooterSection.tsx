import { MailIcon, MapPinIcon, PhoneIcon, ChevronDownIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const FooterSection = (): JSX.Element => {
  const location = useLocation();
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [selectedDropdownItem, setSelectedDropdownItem] = useState<string | null>(null);
  const solutionsRef = useRef<HTMLDivElement>(null);

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

  // Update selected dropdown item when route changes
  useEffect(() => {
    setSelectedDropdownItem(getSelectedDropdownItem());
  }, [location.pathname]);

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Location",
      content:
        "Cairo, Maadi, Al-Ma'arag City, Building No. 5158, Ground Floor, behind Carrefour Maadi",
    },
    {
      icon: <PhoneIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Phone",
      content: "+20 127 984 7374 - +966 53 750 7578",
    },
    {
      icon: <MailIcon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />,
      title: "Email",
      content: "technology.team@quantorx.com",
    },
  ];

  const quickLinks = [
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        solutionsRef.current &&
        !solutionsRef.current.contains(event.target as Node)
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
    <footer className="flex flex-col w-full items-start justify-center gap-8 sm:gap-12 lg:gap-20 px-4 
    sm:px-8 lg:px-[250px] py-8 sm:py-12 lg:py-[50px] bg-zinc-950 relative z-20">
      {/* Main Footer Content */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-12 lg:gap-0 
      py-4 sm:py-8 lg:py-20 w-full">

        {/* Company Info Section */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:gap-[34px] w-full lg:w-auto">
          <img
            className="w-28 h-8 sm:w-32 sm:h-9 lg:w-[137px] lg:h-10 object-cover"
            alt="Logo white"
            src="/logo-white-1-1.png"
          />
          <div className="w-full max-w-md lg:w-[371px] [font-family:'Satoshi-Regular',Helvetica] font-normal 
          text-grey text-sm sm:text-base tracking-[0.32px] leading-relaxed lg:leading-[25.6px]">
            Experts shaping markets with precision, offering deep insights into
            regional and global finance.
            <br />
            Specializing in quantitative modeling, valuation, and business
            consulting
          </div>
          <div className="flex items-start gap-6 w-full">
            <img
              src="/linkedinPlain.svg"
              alt="LinkedIn"
              className="w-5 h-5 sm:w-6 sm:h-6 hover:opacity-80 transition-opacity cursor-pointer"
            />
          </div>
        </div>

        {/* Contact & Links Section */}
        <div className="flex flex-col sm:flex-row lg:flex-row items-start gap-8 sm:gap-12 lg:gap-[84px] 
        w-full lg:w-[579px]">

          {/* Contact Info */}
          <div className="flex flex-col w-full sm:w-auto lg:w-[327px] items-start gap-4 sm:gap-5 lg:gap-6">
            <div className="w-fit [font-family:'Satoshi-Black',Helvetica] font-black text-white text-lg 
            sm:text-xl tracking-[0.40px] leading-6 sm:leading-8 whitespace-nowrap">
              Contact Us
            </div>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-full lg:w-[327px] items-start gap-2 lg:gap-2.5"
              >
                <div className="inline-flex items-start gap-2 sm:gap-2.5">
                  {item.icon}
                  <div className="flex-1 lg:w-[314px] [font-family:'Satoshi-Bold',Helvetica] font-bold 
                  text-[#ffffff] text-sm sm:text-base tracking-[0.32px] leading-relaxed lg:leading-[25.6px]">
                    {item.title}
                  </div>
                </div>
                <div className="w-full lg:w-[327px] [font-family:'Satoshi-Regular',Helvetica] font-normal 
                text-grey text-sm sm:text-base tracking-[0.32px] leading-relaxed lg:leading-[25.6px]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>

          {/* Quick Links */}
          <div className="inline-flex flex-col items-start gap-4 sm:gap-5 lg:gap-6 w-full sm:w-auto">
            <div className="w-fit [font-family:'Satoshi-Black',Helvetica] font-black text-white text-lg 
            sm:text-xl tracking-[0.40px] leading-6 sm:leading-8 whitespace-nowrap">
              Quick Link
            </div>
            <div className="inline-flex flex-col items-start gap-2 lg:gap-2.5">
              {quickLinks.map((link, index) => (
                <div key={index} className="relative" ref={link.hasDropdown ? solutionsRef : null}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className={`w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey 
                        text-sm sm:text-base tracking-[0.32px] leading-relaxed lg:leading-[25.6px] 
                        whitespace-nowrap cursor-pointer hover:text-white transition-colors`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className={`flex items-center gap-1 w-fit [font-family:'Satoshi-Regular',Helvetica] 
                        font-normal text-grey text-sm sm:text-base tracking-[0.32px] leading-relaxed 
                        lg:leading-[25.6px] whitespace-nowrap cursor-pointer hover:text-white 
                        transition-colors bg-transparent border-none p-0`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDownIcon
                          className={`w-3 h-3 sm:w-4 sm:h-4 text-grey transition-transform duration-200 ${isSolutionsOpen ? "rotate-180" : "rotate-0"
                            }`}
                        />
                      )}
                    </button>
                  )}
                  {link.hasDropdown && isSolutionsOpen && (
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-[270px] 
                    bg-[#290E3F33] rounded-2xl shadow-2xl z-20 py-4 px-2 flex 
                    flex-col gap-2 backdrop-blur-md backdrop-saturate-150">
                      {link.dropdownItems?.map((dropdownItem, dIndex) => (
                        <Link
                          key={dIndex}
                          to={dropdownItem.href}
                          className={`flex items-center gap-4 px-4 py-3 rounded-xl 
                            transition-all duration-150 ${selectedDropdownItem === dropdownItem.href ? 'bg-white/10' : 'hover:bg-white/5'}`}
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-white/10 text-white">
                            {dIndex === 0 ? (
                              <img src="/vuesax-linear-wallet-money.svg" alt="Assets Managers" className="w-6 h-6" />
                            ) : dIndex === 1 ? (
                              <img src="/vuesax-linear-trade.svg" alt="Brokerages" className="w-6 h-6" />
                            ) : dIndex === 2 ? (
                              <img src="/vuesax-linear-kyber-network--knc-.svg" alt="Hedge Funds" className="w-6 h-6" />
                            ) : dIndex === 3 ? (
                              <img src="/vuesax-linear-hashtag.svg" alt="Robo-Advisory" className="w-6 h-6" />
                            ) : (
                              <svg width="24" height="24" fill="none" stroke="currentColor"
                                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="w-6 h-6 opacity-80">
                                <rect x="4" y="4" width="16" height="16" rx="4" />
                              </svg>
                            )}
                          </span>
                          <span className="flex flex-col">
                            <span className="[font-family:'Satoshi-Medium',Helvetica] text-lg 
                            text-white font-semibold">{dropdownItem.label.replace('For ', '').replace('B2B ', '')}</span>
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};