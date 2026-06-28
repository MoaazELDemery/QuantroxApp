import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";

const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Nexus AI", href: "/solutions/nexus-ai" },
      { label: "Axon AI", href: "/solutions/axon-ai" },
      { label: "PayGate™", href: "/solutions/paygate" },
      { label: "Geek™", href: "/solutions/geek" },
      { label: "Enterprise Solutions", href: "/solutions/enterprise-solutions" },
      { label: "Case Studies", href: "/case-studies" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "CORTEX™", href: "/technology/ai-platform" },
      { label: "LLM Masonry™", href: "/technology/llm-studio" },
      { label: "AI Cloud", href: "/technology/ai-cloud" },
      { label: "Certifications", href: "/technology/certifications" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Why Us", href: "/technology/why-quantorx" },
      { label: "Team", href: "/about/team" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights", href: "/insights" },
      { label: "Academy", href: "/university" },
      { label: "Documentation", href: "/docs" },
      { label: "Events", href: "/events" },
      { label: "Partner Network", href: "/partner-network" },
    ],
  },
];

export const Footer = (): JSX.Element => (
  <footer className="flex flex-col w-full items-start justify-center gap-8 sm:gap-12 lg:gap-16 px-6 sm:px-8 lg:px-16 xl:px-24 2xl:px-[138px] py-8 sm:py-12 lg:py-[50px] bg-zinc-950 relative z-20">
    <div className="w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-8 lg:gap-6 py-4 sm:py-8 lg:py-16">
      {/* Brand column */}
      <div className="flex flex-col items-start gap-6 sm:gap-8">
        <Link to="/">
          <img
            className="w-28 h-8 sm:w-32 sm:h-9 lg:w-[137px] lg:h-10 object-cover filter invert brightness-0 cursor-pointer hover:opacity-80 transition-opacity"
            alt="QuantorX"
            src="/NewLogoWhite.png"
          />
        </Link>
        <p className="w-full max-w-sm [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm tracking-[0.32px] leading-relaxed">
          No fluff. No cookie-cutter solutions. We design, build, and execute end-to-end AI, machine learning, and quantitative solutions — taking full ownership from problem definition to production.
        </p>
        <div className="flex flex-col gap-3">
          <div className="flex items-start gap-2.5">
            <MapPinIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
            <span className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 leading-relaxed">511 W Cleveland St, STE 414, Tampa, FL 33606</span>
          </div>
          <div className="flex items-start gap-2.5">
            <MailIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
            <a href="mailto:innovation@quantorx.com" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">
              innovation@quantorx.com
            </a>
          </div>
          <div className="flex items-start gap-2.5">
            <PhoneIcon className="w-4 h-4 text-white mt-0.5 shrink-0" />
            <div className="flex flex-col gap-1">
              {["+18134471388", "+966537507578", "+201119974983"].map((p) => (
                <a key={p} href={`tel:${p}`} className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">{p}</a>
              ))}
            </div>
          </div>
        </div>
        <a href="https://www.linkedin.com/company/quantorx/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
          <img src="/linkedinPlain.svg" alt="LinkedIn" className="w-5 h-5 sm:w-6 sm:h-6" />
        </a>
      </div>

      {/* Nav columns */}
      {footerColumns.map((col) => (
        <div key={col.heading} className="flex flex-col gap-4">
          <span className="[font-family:'Satoshi-Black',Helvetica] font-black text-white text-base tracking-[0.40px] leading-6 whitespace-nowrap">
            {col.heading}
          </span>
          <div className="flex flex-col gap-2.5">
            {col.links.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className="w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm tracking-[0.32px] leading-relaxed whitespace-nowrap hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>

    {/* Bottom bar */}
    <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10">
      <span className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75">
        © 2026 QuantorX. All rights reserved.
      </span>
      <div className="flex items-center gap-6">
        <Link to="/legal" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Terms</Link>
        <Link to="/legal" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Privacy</Link>
        <Link to="/security/bulletins" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Security</Link>
      </div>
    </div>
  </footer>
);
