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
        heading: "The Digital Workforce",
        items: [
          { label: "Nodus", href: "/solutions/nodus", description: "The digital factory" },
          { label: "Axon", href: "/solutions/axon-ai", description: "The urban intelligence unit" },
          { label: "Nexus", href: "/solutions/nexus-ai", description: "The customer success squad" },
          { label: "PayGate", href: "/solutions/paygate", description: "The partner enablement hub" },
          { label: "Nextra", href: "/solutions/nextra", description: "The strategy advisory office" },
        ],
      },
      {
        heading: "Enterprise Solutions",
        items: [
          { label: "BookWorm", href: "/solutions/bookworm", description: "The enterprise brokerage platform" },
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
    <div className="flex w-[540px] bg-[#0d0519]/90 rounded-2xl z-20 overflow-hidden border border-white/10 backdrop-blur-2xl shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8),0_0_48px_-16px_rgba(155,92,246,0.25)]">
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
  <div className="w-[280px] bg-[#0d0519]/90 rounded-2xl z-20 py-4 px-2 flex flex-col gap-1 border border-white/10 backdrop-blur-2xl shadow-[0_24px_80px_-16px_rgba(0,0,0,0.8),0_0_48px_-16px_rgba(155,92,246,0.25)]">
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

export const Header = ({ theme = "dark" }: { theme?: "dark" | "light" }): JSX.Element => {
  const light = theme === "light";
  const location = useLocation();
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpandedIndex, setMobileExpandedIndex] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const lastY = useRef(0);
  const activeIndex = getActiveIndex(location.pathname);

  // Scroll-aware chrome: condense into a glass bar after the top, duck out
  // of the way while scrolling down, return on the first upward scroll.
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 32);
      setHidden(y > 360 && y > lastY.current);
      lastY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 sm:px-6 md:px-8 lg:px-16 xl:px-24 2xl:px-[138px] z-50
        transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${hidden && !mobileOpen ? "-translate-y-full" : "translate-y-0"}
        ${scrolled || mobileOpen
          ? light
            ? "py-2.5 md:py-3 bg-[#F5F2EC]/85 backdrop-blur-xl border-b border-black/[0.06] shadow-[0_8px_40px_-16px_rgba(20,13,31,0.15)]"
            : "py-2.5 md:py-3 bg-[#060010]/70 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
          : "py-4 md:py-6 lg:py-8 bg-transparent border-b border-transparent"}`}
    >
      {/* Logo + mobile toggle */}
      <div className="flex items-center h-12 w-full lg:w-auto justify-between lg:justify-start" style={{ minWidth: 140 }}>
        <Link to="/" className="hover:opacity-80 transition-opacity">
          <img
            className="object-contain -ml-2 sm:ml-0 cursor-pointer"
            alt="QuantorX"
            src="/NewLogoWhite.png"
            style={{ filter: light ? "brightness(0)" : "brightness(0) invert(1)", height: "48px", width: "auto", maxWidth: "180px" }}
          />
        </Link>
        <button
          className={`lg:hidden flex items-center justify-center w-10 h-10 rounded-lg transition-colors ml-auto ${
            light ? "text-[#140D1F] hover:bg-black/5" : "text-white hover:bg-white/10"
          }`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="hidden lg:flex flex-1 items-center justify-center" ref={navRef}>
        <div className={`inline-flex items-center justify-center px-2 py-[7px] backdrop-blur-md rounded-[40px] gap-0.5 border ${
          light ? "bg-black/[0.04] border-black/10" : "bg-black/50 border-white/10"
        }`}>
          {nav.map((item, index) => {
            const isActive = activeIndex === index;
            const labelClass = `[font-family:'Satoshi-Medium',Helvetica] text-sm xl:text-base tracking-[0] leading-normal whitespace-nowrap ${
              light
                ? isActive ? "font-bold text-[#140D1F]" : "font-medium text-[#140D1F]/80 hover:text-[#140D1F]"
                : isActive ? "font-bold text-white" : "font-medium text-white/95 hover:text-white"
            }`;

            const pillClass = `flex items-center justify-center px-3 xl:px-4 h-10 focus:outline-none rounded-[32px] transition-all duration-300 ${
              light
                ? isActive ? "bg-[#4a0082]/10 ring-1 ring-inset ring-[#4a0082]/20" : "hover:bg-black/5"
                : isActive
                  ? "bg-[#4a0082]/50 ring-1 ring-inset ring-[#9b5cf6]/30 shadow-[inset_0_1px_0_rgba(255,255,255,0.1),0_0_20px_-6px_rgba(155,92,246,0.5)]"
                  : "hover:bg-white/5"
            }`;

            if (item.kind === "link") {
              return (
                <Link key={index} to={item.href} className={pillClass}>
                  <span className={labelClass}>{item.label}</span>
                </Link>
              );
            }

            return (
              <div key={index} className="relative">
                <button
                  type="button"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`${pillClass} gap-1`}
                >
                  <span className={labelClass}>{item.label}</span>
                  <ChevronDownIcon className={`w-3.5 h-3.5 ${light ? "text-black/50" : "text-white/60"} transition-transform duration-200 ${openIndex === index ? "rotate-180" : "rotate-0"}`} />
                </button>

                {openIndex === index && (
                  <div className="absolute top-full mt-3 left-1/2 -translate-x-1/2 animate-dropdown-in">
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
        <Button className="hidden lg:inline-flex items-center px-6 xl:px-10 py-2 h-auto">
          <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
            Request Demo
          </span>
        </Button>
      </Link>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className={`lg:hidden absolute top-full left-0 w-full backdrop-blur-xl animate-dropdown-in ${
          light
            ? "bg-[#F5F2EC]/97 border-t border-black/10 shadow-[0_24px_60px_-20px_rgba(20,13,31,0.25)] [&_a]:!text-[#140D1F]/80 [&_button]:!text-[#140D1F]/90 [&_.border-white\\/5]:!border-black/5"
            : "bg-[#060010]/95 border-t border-white/10 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.8)]"
        }`}>
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
                  <Button className="w-[60vw] max-w-xs py-3 h-auto">
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
