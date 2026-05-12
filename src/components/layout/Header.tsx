import { ChevronDownIcon, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Link, useLocation } from "react-router-dom";

// ── Types ────────────────────────────────────────────────────────────────────

type SimpleItem = { label: string; href: string; description: string };
type NavItem =
  | { kind: "link"; label: string; href: string }
  | { kind: "simple-dropdown"; label: string; href: string; items: SimpleItem[] }
  | { kind: "megamenu"; label: string; href: string; groups: { heading: string; items: SimpleItem[] }[] };

// ── Navigation data ──────────────────────────────────────────────────────────

const nav: NavItem[] = [
  { kind: "link", label: "Home", href: "/" },
  {
    kind: "megamenu",
    label: "Solutions",
    href: "/solutions",
    groups: [
      {
        heading: "Enterprise AI Agents",
        items: [
          { label: "Nexus AI", href: "/solutions/nexus-ai", description: "The bank's digital brain" },
          { label: "Axon AI", href: "/solutions/axon-ai", description: "The geographic brain" },
          { label: "PayGate™", href: "/solutions/paygate", description: "AI-powered merchant onboarding" },
          { label: "Geek™", href: "/solutions/geek", description: "The wealth management brain" },
        ],
      },
      {
        heading: "Enterprise Solutions",
        items: [
          { label: "Enterprise Solutions", href: "/solutions/enterprise-solutions", description: "Quantitative engines & integration" },
        ],
      },
    ],
  },
  {
    kind: "simple-dropdown",
    label: "Platform",
    href: "/technology",
    items: [
      { label: "CORTEX™", href: "/technology/ai-platform", description: "The agentic cognitive engine" },
      { label: "LLM Masonry™", href: "/technology/llm-studio", description: "Fine-tune sovereign language models" },
      { label: "AI Cloud", href: "/technology/ai-cloud", description: "MENA-region managed infrastructure" },
    ],
  },
  { kind: "link", label: "Insights", href: "/insights" },
  {
    kind: "simple-dropdown",
    label: "About",
    href: "/about",
    items: [
      { label: "About QuantorX", href: "/about", description: "Our mission & values" },
      { label: "Why Us", href: "/technology/why-quantorx", description: "How we clone enterprise expertise" },
      { label: "Team", href: "/about/team", description: "Leadership & talent" },
    ],
  },
];

const getActiveIndex = (pathname: string): number => {
  if (pathname.startsWith("/solutions")) return 1;
  if (pathname === "/technology/why-quantorx") return 4;
  if (pathname.startsWith("/technology")) return 2;
  if (pathname.startsWith("/insights")) return 3;
  if (pathname.startsWith("/about")) return 4;
  return 0;
};

// ── MegaMenu component ───────────────────────────────────────────────────────

const MegaMenu = ({ groups }: { groups: { heading: string; items: SimpleItem[] }[] }) => {
  const [activeGroup, setActiveGroup] = useState(0);

  return (
    <div className="flex w-[540px] bg-[#1a0a2e] rounded-2xl shadow-2xl z-20 overflow-hidden border border-white/10 backdrop-blur-lg">
      {/* Left: category sidebar */}
      <div className="w-52 bg-white/[0.03] border-r border-white/10 py-4 px-2 flex flex-col gap-1 shrink-0">
        {groups.map((g, gi) => (
          <button
            key={gi}
            onMouseEnter={() => setActiveGroup(gi)}
            onClick={() => setActiveGroup(gi)}
            className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-150 ${
              activeGroup === gi
                ? "bg-[#4a0082]/40 text-white"
                : "text-white/60 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-xs uppercase tracking-[0.15em]">
              {g.heading}
            </span>
            <ChevronDownIcon className={`w-3 h-3 inline-block ml-1 -rotate-90 transition-opacity ${activeGroup === gi ? "opacity-100" : "opacity-40"}`} />
          </button>
        ))}
      </div>

      {/* Right: items for active group */}
      <div className="flex-1 py-4 px-2">
        {groups[activeGroup]?.items.map((item, ii) => (
          <Link
            key={ii}
            to={item.href}
            className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-150"
          >
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-sm text-white font-semibold">{item.label}</span>
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-xs text-white/65 mt-0.5">{item.description}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

// ── SimpleDropdown component ─────────────────────────────────────────────────

const SimpleDropdown = ({ items }: { items: SimpleItem[] }) => (
  <div className="w-[280px] bg-[#1a0a2e] rounded-2xl shadow-2xl z-20 py-4 px-2 flex flex-col gap-1 border border-white/10 backdrop-blur-lg">
    {items.map((d, di) => (
      <Link
        key={di}
        to={d.href}
        className="flex flex-col px-4 py-3 rounded-xl hover:bg-white/5 transition-all duration-150"
      >
        <span className="[font-family:'Satoshi-Medium',Helvetica] text-sm text-white font-semibold">{d.label}</span>
        <span className="[font-family:'Satoshi-Regular',Helvetica] text-xs text-white/65 mt-0.5">{d.description}</span>
      </Link>
    ))}
  </div>
);

// ── Header ───────────────────────────────────────────────────────────────────

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const activeIndex = getActiveIndex(location.pathname);

  useEffect(() => {
    setOpenIndex(null);
    setMobileOpen(false);
    setMobileExpandedIndex(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenIndex(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[138px] py-4 sm:py-4 md:py-6 lg:py-8 z-50">
      {/* Logo + mobile toggle */}
      <div className="flex items-center h-12 w-full lg:w-auto justify-between lg:justify-start" style={{ minWidth: 140 }}>
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img
            className="object-contain -ml-2 sm:ml-0 cursor-pointer"
            alt="QuantorX"
            src="/FullLogo_Transparent_NoBuffer.png"
            style={{ filter: "brightness(0) invert(1)", height: "48px", width: "auto", maxWidth: "180px" }}
          />
        </Link>
        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:bg-white/10 rounded-lg transition-colors ml-auto"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex flex-1 items-center justify-center" ref={navRef}>
        <div className="inline-flex items-center justify-center px-2 py-[7px] bg-black/50 backdrop-blur-md border border-white/10 rounded-[40px] gap-0.5">
          {nav.map((item, index) => {
            const isActive = activeIndex === index;
            const labelClass = `[font-family:'Satoshi-Medium',Helvetica] text-sm xl:text-base tracking-[0] leading-normal whitespace-nowrap ${isActive ? "font-bold text-white" : "font-medium text-white/95 hover:text-white"}`;

            if (item.kind === "link") {
              return (
                <Link
                  key={index}
                  to={item.href}
                  className="flex items-center justify-center px-3 xl:px-4 h-10 focus:outline-none rounded-[32px] hover:bg-white/5 transition-colors"
                >
                  <span className={labelClass}>{item.label}</span>
                </Link>
              );
            }

            return (
              <div key={index} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="flex items-center justify-center px-3 xl:px-4 h-10 gap-1 focus:outline-none rounded-[32px] hover:bg-white/5 transition-colors"
                >
                  <span className={labelClass}>{item.label}</span>
                  <ChevronDownIcon className={`w-3.5 h-3.5 text-white/60 transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
                </button>

                {openIndex === index && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2">
                    {item.kind === "megamenu" ? (
                      <MegaMenu groups={item.groups} />
                    ) : (
                      <SimpleDropdown items={item.items} />
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </nav>

      {/* Desktop CTA */}
      <Link to="/demo">
        <Button className="hidden lg:inline-flex items-center gap-4 px-6 xl:px-10 py-2 bg-[#4a0082] rounded-[32px] h-auto hover:bg-[#4a0082]/90 transition-colors">
          <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
            Request Demo
          </span>
        </Button>
      </Link>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm border-t border-white/10 shadow-lg">
          <nav className="flex flex-col py-4 px-4 sm:px-6 max-h-[calc(100vh-80px)] overflow-y-auto">
            {nav.map((item, index) => (
              <div key={index} className="border-b border-white/5 last:border-b-0">
                {item.kind === "link" ? (
                  <Link
                    to={item.href}
                    className={`block w-full text-left py-4 px-2 transition-colors [font-family:'Satoshi-Medium',Helvetica] font-medium text-base ${activeIndex === index ? "text-white" : "text-white/70 hover:text-white"}`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setMobileExpandedIndex(mobileExpandedIndex === index ? null : index)}
                      className={`flex items-center justify-between w-full text-left py-4 px-2 transition-colors [font-family:'Satoshi-Medium',Helvetica] font-medium text-base ${activeIndex === index ? "text-white" : "text-white/70 hover:text-white"}`}
                    >
                      {item.label}
                      <ChevronDownIcon className={`w-4 h-4 transition-transform duration-200 ${mobileExpandedIndex === index ? "rotate-180" : "rotate-0"}`} />
                    </button>
                    {mobileExpandedIndex === index && (
                      <div className="bg-white/5 rounded-lg mx-2 mb-2 overflow-hidden">
                        {item.kind === "megamenu"
                          ? item.groups.map((g) => (
                              <div key={g.heading}>
                                <div className="px-4 pt-3 pb-1">
                                  <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.15em] text-[#9b5cf6]">
                                    {g.heading}
                                  </span>
                                </div>
                                {g.items.map((d) => (
                                  <Link
                                    key={d.href}
                                    to={d.href}
                                    className="block py-3 px-4 text-white/65 hover:text-white hover:bg-white/10 [font-family:'Satoshi-Regular',Helvetica] text-sm transition-colors"
                                  >
                                    {d.label}
                                  </Link>
                                ))}
                              </div>
                            ))
                          : item.items.map((d) => (
                              <Link
                                key={d.href}
                                to={d.href}
                                className="block py-3 px-4 text-white/65 hover:text-white hover:bg-white/10 [font-family:'Satoshi-Regular',Helvetica] text-sm transition-colors"
                              >
                                {d.label}
                              </Link>
                            ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-6 pb-2">
              <div className="flex justify-center">
                <Link to="/demo">
                  <Button className="w-[60vw] max-w-xs bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 py-3 transition-colors">
                    <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-base text-white">
                      Request Demo
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
