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
      icon: <MapPinIcon className="w-6 h-6 text-white" />,
      title: "Location",
      content:
        "Cairo, Maadi, Al-Ma'arag City, Building No. 5158, Ground Floor, behind Carrefour Maadi",
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-white" />,
      title: "Phone",
      content: "+20 127 984 7374 - +966 53 750 7578",
    },
    {
      icon: <MailIcon className="w-6 h-6 text-white" />,
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
    <footer className="flex flex-col w-full items-start justify-center gap-20 px-0 py-[50px] bg-zinc-950 relative z-20">
      <div className="flex items-start justify-between px-[250px] py-20 w-full">
        <div className="inline-flex flex-col items-start gap-[34px]">
          <img
            className="w-[137px] h-10 object-cover"
            alt="Logo white"
            src="/logo-white-1-1.png"
          />
          <div className="w-[371px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px]">
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
              className="w-6 h-6" 
            />
          </div>
        </div>
        <div className="flex w-[579px] items-start gap-[84px]">
          <div className="flex flex-col w-[327px] items-start gap-6">
            <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Black',Helvetica] font-black text-white text-xl tracking-[0.40px] leading-8 whitespace-nowrap">
              Contact Us
            </div>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-[327px] items-start gap-2.5"
              >
                <div className="inline-flex items-start gap-2.5 mr-[-21.00px]">
                  {item.icon}
                  <div className="w-[314px] mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-base tracking-[0.32px] leading-[25.6px]">
                    {item.title}
                  </div>
                </div>
                <div className="w-[327px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="inline-flex flex-col h-[312px] items-start gap-6">
            <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Black',Helvetica] font-black text-white text-xl tracking-[0.40px] leading-8 whitespace-nowrap">
              Quick Link
            </div>
            <div className="inline-flex flex-col items-start gap-2.5">
              {quickLinks.map((link, index) => (
                <div key={index} className="relative" ref={link.hasDropdown ? solutionsRef : null}>
                  {link.href ? (
                    <Link
                      to={link.href}
                      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                      className={`w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px] whitespace-nowrap cursor-pointer hover:text-white transition-colors`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      type="button"
                      onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                      className={`flex items-center gap-1 w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px] whitespace-nowrap cursor-pointer hover:text-white transition-colors bg-transparent border-none p-0`}
                    >
                      {link.label}
                      {link.hasDropdown && (
                        <ChevronDownIcon
                          className={`w-4 h-4 text-grey transition-transform duration-200 ${
                            isSolutionsOpen ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      )}
                    </button>
                  )}
                  {link.hasDropdown && isSolutionsOpen && (
                    <div className="absolute bottom-full left-0 mb-2 w-max min-w-[200px] bg-white rounded-lg shadow-lg z-10 py-2">
                      {link.dropdownItems?.map((dropdownItem, dIndex) => (
                        <Link
                          key={dIndex}
                          to={dropdownItem.href}
                          className={`block w-full text-left px-4 py-2 text-sm [font-family:'Satoshi-Medium',Helvetica] whitespace-nowrap transition-colors ${
                            selectedDropdownItem === dropdownItem.href 
                              ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold' 
                              : 'text-gray-800 hover:bg-gray-100 hover:text-gray-900'
                          }`}
                          onClick={() => {
                            setIsSolutionsOpen(false);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                        >
                          {dropdownItem.label}
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