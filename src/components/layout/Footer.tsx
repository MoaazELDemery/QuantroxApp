import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap, SplitText } from "../../lib/gsap";
import { useGsap } from "../scroll/useGsap";
import { FooterMark } from "../three/FooterMark";

const footerColumns = [
  {
    heading: "Solutions",
    links: [
      { label: "Nodus", href: "/solutions/nodus" },
      { label: "Axon", href: "/solutions/axon-ai" },
      { label: "Nexus", href: "/solutions/nexus-ai" },
      { label: "PayGate", href: "/solutions/paygate" },
      { label: "Nextra", href: "/solutions/nextra" },
      { label: "BookWorm", href: "/solutions/bookworm" },
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

/**
 * Footer - a full-viewport final chapter. The obsidian capsule-mark floats
 * in 3D behind the content (pointer-reactive), nav columns sit on top, and
 * the giant wordmark closes the page like a film title card.
 */
export const Footer = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    gsap.from("[data-footer-cols] > div", {
      opacity: 0,
      y: 36,
      duration: 0.9,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: { trigger: scope.current, start: "top 90%", end: "top 45%", scrub: 0.4 },
    });
    // Title card: the wordmark types itself in, character by character,
    // every time the footer is reached (restart on enter, reset on leave).
    const wordmark = scope.current?.querySelector<HTMLElement>("[data-footer-wordmark]");
    if (wordmark) {
      const split = new SplitText(wordmark, { type: "chars" });
      // bg-clip gradients don't survive on transformed children - each char
      // carries its own copy of the parent's gradient instead.
      split.chars.forEach((c) => {
        const el = c as HTMLElement;
        el.style.backgroundImage = wordmark.style.backgroundImage;
        el.style.webkitBackgroundClip = "text";
        el.style.backgroundClip = "text";
        el.style.color = "transparent";
      });
      gsap.fromTo(
        split.chars,
        { yPercent: 58, opacity: 0, rotateX: -35, transformPerspective: 700 },
        {
          yPercent: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.9,
          stagger: 0.055,
          ease: "power4.out",
          scrollTrigger: {
            trigger: scope.current,
            start: "top 45%",
            toggleActions: "restart none none reset",
          },
        },
      );
    }
    gsap.from("[data-footer-bottom]", {
      opacity: 0,
      duration: 1,
      scrollTrigger: { trigger: scope.current, start: "top 40%", end: "top 12%", scrub: 0.4 },
    });
  });

  return (
    <footer
      ref={scope}
      className="relative flex flex-col w-full lg:min-h-screen justify-between px-6 sm:px-8 lg:px-16 xl:px-24 pt-16 lg:pt-24 pb-8 bg-[#050008] z-20 overflow-hidden"
    >
      {/* Violet horizon hairline */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#9b5cf6]/60 to-transparent" aria-hidden="true" />
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[900px] h-[240px] rounded-full bg-[#4a0082]/20 blur-[100px] pointer-events-none" aria-hidden="true" />

      {/* The signature mark, floating in obsidian behind everything */}
      <div className="hidden lg:block absolute inset-0" aria-hidden="true">
        <FooterMark />
      </div>

      {/* Columns */}
      <div data-footer-cols className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-10 lg:gap-6">
        {/* Brand column */}
        <div className="flex flex-col items-start gap-6 sm:gap-8 lg:pr-10">
          <Link to="/">
            <img
              className="w-28 h-8 sm:w-32 sm:h-9 lg:w-[137px] lg:h-10 object-cover filter invert brightness-0 cursor-pointer hover:opacity-80 transition-opacity"
              alt="QuantorX"
              src="/NewLogoWhite.png"
            />
          </Link>
          <p className="w-full max-w-sm [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm tracking-[0.32px] leading-relaxed">
            No fluff. No cookie-cutter solutions. We design, build, and execute end-to-end AI, machine learning, and quantitative solutions - taking full ownership from problem definition to production.
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
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.18em] leading-6 whitespace-nowrap">
              {col.heading}
            </span>
            <div className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="w-fit [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm tracking-[0.32px] leading-relaxed whitespace-nowrap hover:text-[#c4a8ff] hover:translate-x-0.5 transition-all duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Title card: the wordmark closes the page */}
      <div className="relative z-10 mt-16 lg:mt-0">
        <p
          data-footer-wordmark
          className="[font-family:'Satoshi-Black',Helvetica] font-black text-[17vw] lg:text-[12.5vw] leading-[0.82] tracking-[-0.045em] select-none text-transparent bg-clip-text -mb-[1.5vw]"
          style={{ backgroundImage: "linear-gradient(to bottom, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.24) 55%, rgba(255,255,255,0.03) 100%)" }}
          aria-hidden="true"
        >
          QUANTORX
        </p>

        {/* Bottom bar */}
        <div data-footer-bottom className="w-full flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-6 border-t border-white/10">
          <span className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75">
            © 2026 QuantorX. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link to="/legal" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Terms</Link>
            <Link to="/legal" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Privacy</Link>
            <Link to="/security/bulletins" className="[font-family:'Satoshi-Regular',Helvetica] text-sm text-white/75 hover:text-white transition-colors">Security</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
