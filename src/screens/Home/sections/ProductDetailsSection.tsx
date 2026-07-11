import { Link } from "react-router-dom";
import { gsap, ScrollTrigger } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";
import { ScrubVideo } from "../../../components/scroll/ScrubVideo";
import { storyState } from "../../../lib/storyState";

const agents = [
  {
    index: "01",
    label: "Nodus · The Digital Factory",
    title: "From demand to delivery.",
    description:
      "A structured AI workforce that covers the software delivery lifecycle end to end - inside your JIRA, GitHub and GitLab. Goal in, tested deliverable out, in hours instead of weeks.",
    href: "/solutions/nodus",
    accent: "#38bdf8",
    accentRgb: "56, 189, 248",
    accentSoft: "#a5e3ff",
    bg: "/agents/bg-nodus.webp",
  },
  {
    index: "02",
    label: "Axon · The Urban Intelligence Unit",
    title: "From maps to masterplans.",
    description:
      "Plain-language questions become validated SQL, real spatial analysis and live map layers - grounded in your actual data, in English and Arabic, with the map doing the talking.",
    href: "/solutions/axon-ai",
    accent: "#00c9a7",
    accentRgb: "0, 201, 167",
    accentSoft: "#8af2dd",
    bg: "/agents/bg-axon.webp",
  },
  {
    index: "03",
    label: "Nexus · The Customer Success Squad",
    title: "From VOC to action.",
    description:
      "A customer's own words - by voice or text, in Arabic or English - become completed banking: transfers, cards, bills and proactive guidance, with a human confirmation on every action.",
    href: "/solutions/nexus-ai",
    accent: "#9b5cf6",
    accentRgb: "155, 92, 246",
    accentSoft: "#c9adff",
    bg: "/agents/bg-nexus.webp",
  },
  {
    index: "04",
    label: "PayGate · The Partner Enablement Hub",
    title: "From 1st contact to 1st transaction.",
    description:
      "A Saudi merchant goes from CR number to live payments in minutes - built around Wathiq, Yakeen, Nafath, SPL and Tahakouk, with human confirmation at every step.",
    href: "/solutions/paygate",
    accent: "#f59e0b",
    accentRgb: "245, 158, 11",
    accentSoft: "#ffd28a",
    bg: "/agents/bg-paygate.webp",
  },
  {
    index: "05",
    label: "Nextra · The Strategy Advisory Office",
    title: "From data to decisions.",
    description:
      "A household's finances covered end to end - lending, saving, investing, and insurance & protection - proactively, personally, Sharia-aware by default.",
    href: "/solutions/nextra",
    accent: "#d946ef",
    accentRgb: "217, 70, 239",
    accentSoft: "#f2a9ff",
    bg: "/agents/bg-geek.webp",
  },
];


/**
 * ProductDetailsSection - pinned horizontal gallery on the paper canvas.
 * An intro panel plus five numbered agent panels slide past as you scroll;
 * mobile degrades to a vertical editorial stack.
 */
export const ProductDetailsSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const panelCount = agents.length + 1;
      const track = gsap.to("[data-agents-track]", {
        xPercent: -100 * ((panelCount - 1) / panelCount),
        ease: "none",
        scrollTrigger: {
          trigger: scope.current,
          start: "top top",
          end: "+=400%",
          scrub: 0.5,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      });

      // Intro copy settles in as the chapter arrives
      gsap.from("[data-agents-intro] > *", {
        opacity: 0,
        y: 44,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: scope.current, start: "top 92%", end: "top 40%", scrub: 0.4 },
      });

      // Per-panel choreography, timed to the horizontal journey itself:
      // copy cascades in, the world plate pans, the numeral halo lights up.
      gsap.utils.toArray<HTMLElement>("[data-agent-panel]").forEach((panel) => {
        const copy = panel.querySelector<HTMLElement>("[data-agent-copy]");
        const bg = panel.querySelector<HTMLElement>("[data-agent-bg]");
        const halo = panel.querySelector<HTMLElement>("[data-agent-halo]");
        if (copy) {
          gsap.fromTo(
            copy.children,
            { opacity: 0, x: 70 },
            {
              opacity: 1,
              x: 0,
              duration: 0.9,
              stagger: 0.09,
              ease: "power3.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: track,
                start: "left 85%",
                end: "left 40%",
                scrub: 0.4,
              },
            },
          );
        }
        if (bg) {
          gsap.fromTo(
            bg,
            { xPercent: 4, scale: 1.1 },
            {
              xPercent: -4,
              scale: 1.1,
              ease: "none",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: track,
                start: "left right",
                end: "right left",
                scrub: true,
              },
            },
          );
        }
        if (halo) {
          gsap.fromTo(
            halo,
            { opacity: 0 },
            {
              opacity: 1,
              duration: 1.4,
              ease: "power2.out",
              scrollTrigger: {
                trigger: panel,
                containerAnimation: track,
                start: "left 80%",
                end: "left 40%",
                scrub: 0.4,
              },
            },
          );
        }
      });

      // Journey progress bar
      gsap.fromTo(
        "[data-agents-progress]",
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          transformOrigin: "left center",
          scrollTrigger: { trigger: scope.current, start: "top top", end: "+=400%", scrub: 0.3 },
        },
      );

      // The protagonist parks low-right and retints as each agent passes
      const ACCENTS: [number, number, number][] = [
        [0.22, 0.741, 0.973],  // sky - Nodus
        [0.0, 0.788, 0.655],   // teal - Axon
        [0.608, 0.361, 0.965], // violet - Nexus
        [0.961, 0.62, 0.043],  // amber - PayGate
        [0.851, 0.275, 0.937], // magenta - Nextra
      ];
      const LAST = ACCENTS.length - 1;
      gsap.timeline({
        scrollTrigger: { trigger: scope.current, start: "top bottom", end: "top top", scrub: 0.4 },
      }).fromTo(
        storyState,
        { x: 2.6, y: -1.9, scale: 0.55, camZ: 9.15 },
        { x: 3.6, y: -1.75, scale: 0.5, camZ: 9.6, ease: "none", immediateRender: false },
        0,
      );

      const glowEl = scope.current?.querySelector<HTMLElement>("[data-agents-glow]");
      const calloutEl = scope.current?.querySelector<HTMLElement>("[data-agent-callout]");
      const calloutLabel = scope.current?.querySelector<HTMLElement>("[data-agent-callout-label]");
      let lastIdx = -1;

      ScrollTrigger.create({
        trigger: scope.current,
        start: "top top",
        end: "+=400%",
        scrub: true,
        onUpdate: (self) => {
          const p = self.progress;
          storyState.rot = p * Math.PI * 2.2;
          // panel i centers at p = i/panels, so its accent (ACCENTS[i-1]) peaks there
          const seg = Math.max(0, Math.min(LAST, p * ACCENTS.length - 1));
          const i = Math.floor(seg);
          const frac = seg - i;
          const a0 = ACCENTS[Math.min(i, LAST)];
          const a1 = ACCENTS[Math.min(i + 1, LAST)];
          storyState.accentR = a0[0] + (a1[0] - a0[0]) * frac;
          storyState.accentG = a0[1] + (a1[1] - a0[1]) * frac;
          storyState.accentB = a0[2] + (a1[2] - a0[2]) * frac;

          // Environment + callout follow the object's accent
          const r = Math.round(storyState.accentR * 255);
          const g = Math.round(storyState.accentG * 255);
          const b = Math.round(storyState.accentB * 255);
          if (glowEl) {
            glowEl.style.background = `radial-gradient(42% 38% at 79% 74%, rgba(${r},${g},${b},0.14) 0%, transparent 70%)`;
          }
          if (calloutEl && calloutLabel) {
            const idx = Math.max(0, Math.min(LAST, Math.round(seg)));
            if (idx !== lastIdx) {
              lastIdx = idx;
              calloutLabel.textContent = agents[idx].label;
            }
            calloutEl.style.color = `rgb(${r},${g},${b})`;
            calloutEl.style.opacity = p > 0.1 && p < 0.98 ? "1" : "0";
          }
        },
      });

      gsap.utils.toArray<HTMLElement>("[data-agent-index]").forEach((el) => {
        gsap.fromTo(
          el,
          { xPercent: 30 },
          {
            xPercent: -30,
            ease: "none",
            scrollTrigger: { trigger: scope.current, start: "top top", end: "+=400%", scrub: 0.5 },
          },
        );
      });
    });

    mm.add("(max-width: 1023px)", () => {
      gsap.utils.toArray<HTMLElement>("[data-agent-panel]").forEach((panel) => {
        gsap.from(panel.children, {
          opacity: 0,
          y: 48,
          duration: 1,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: panel, start: "top 92%", end: "top 55%", scrub: 0.4 },
        });
      });
    });

    return () => mm.revert();
  });

  return (
    // z-0 pins this section into its own stacking context so the fixed cube
    // canvas (z-5) stays in front both before and during the pin; without it
    // the inner z-10 track paints over the cube while the section scrolls in.
    <section ref={scope} data-chapter="agents" className="relative z-0 w-full lg:h-screen overflow-hidden bg-[#060010]">
      <div className="absolute inset-0 dot-grid opacity-25" aria-hidden="true" />

      {/* Environment light - the room retints with the agent passing by */}
      <div data-agents-glow className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Journey progress */}
      <div className="hidden lg:block absolute bottom-14 left-1/2 -translate-x-1/2 z-20 w-56 h-px bg-white/10 rounded-full">
        <div
          data-agents-progress
          className="h-full w-full rounded-full bg-gradient-to-r from-[#9b5cf6] to-[#d946ef] scale-x-0 shadow-[0_0_12px_1px_rgba(155,92,246,0.6)]"
        />
      </div>

      {/* Live tracking callout above the parked object */}
      <div
        data-agent-callout
        className="hidden lg:flex items-center gap-3 absolute right-[13%] bottom-[38%] z-20 pointer-events-none opacity-0 transition-opacity duration-500"
        style={{ color: "#9b5cf6" }}
        aria-hidden="true"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
        <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em]">
          Tracking · <span data-agent-callout-label>Nodus · The Digital Factory</span>
        </span>
      </div>

      <div data-agents-track className="relative z-10 flex flex-col lg:flex-row lg:h-full lg:w-max">
        {/* Intro panel */}
        <div data-agent-panel className="relative w-full lg:w-screen shrink-0 flex flex-col justify-center px-6 sm:px-10 lg:px-24 py-24 lg:py-0 min-h-[60vh] lg:h-full">
          {/* Ambient reading light behind the copy */}
          <div
            className="hidden lg:block absolute -left-[6%] top-[28%] w-[700px] h-[520px] rounded-full pointer-events-none qx-breathe"
            style={{ background: "radial-gradient(ellipse at center, rgba(155,92,246,0.10) 0%, transparent 70%)", filter: "blur(50px)" }}
            aria-hidden="true"
          />

          {/* The agent constellation ignites only once the chapter is pinned
              and fully on screen, playing at an unhurried pace across 60vh -
              it finishes just before the intro panel finishes sliding out
              (the intro exits over the first 80vh of the 400% journey) */}
          <div data-agents-constellation className="hidden lg:block absolute inset-0 pointer-events-none" aria-hidden="true">
            <ScrubVideo
              src="/videos/agents-constellation.mp4"
              triggerRef={scope}
              start="top top"
              end="+=60%"
              scrub={0.4}
              className="w-full h-full object-cover object-right"
            />
            {/* Legibility wash: copy column stays readable, the schematic breathes right */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#060010] via-[#060010]/60 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-[#060010]/85" />
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-t from-transparent to-[#060010]/70" />
          </div>

          <div data-agents-intro className="relative">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-6">
              02 · The Digital Workforce
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-5xl sm:text-6xl lg:text-7xl tracking-[-0.03em] leading-[1.02] max-w-4xl mb-8">
              <span className="text-gradient-silver">Five squads.</span>
              <br />
              <span className="text-[#a679ff] [text-shadow:0_0_44px_rgba(155,92,246,0.4)]">Every action governed.</span>
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-lg lg:text-2xl max-w-2xl leading-normal">
              Five purpose-built agentic squads on one cognitive platform. They do not just
              answer questions - they do the work, and a human approves every sensitive action.
            </p>
            <div className="hidden lg:flex items-center gap-3 mt-14 text-white/40">
              <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
              <span className="block h-px w-16 bg-gradient-to-r from-[#9b5cf6] to-transparent" />
            </div>
          </div>
        </div>

        {/* Agent panels */}
        {agents.map((agent) => (
          <div
            key={agent.index}
            data-agent-panel
            className="group relative w-full lg:w-screen shrink-0 flex flex-col justify-center px-6 sm:px-8 lg:px-16 py-20 lg:py-0 min-h-[60vh] lg:h-full border-t border-white/[0.06] lg:border-t-0 lg:border-l lg:border-white/[0.06]"
          >
            {/* The agent's world - generated environment plate, panning with the journey */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
              <img
                data-agent-bg
                src={agent.bg}
                alt=""
                loading="lazy"
                className="w-full h-full object-cover opacity-[0.32] group-hover:opacity-45 transition-opacity duration-700"
              />
              {/* Legibility wash: copy column stays readable, the world breathes right */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#060010] via-[#060010]/70 to-[#060010]/20" />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[#060010]/80" />
            </div>

            {/* Numeral backlight in the agent's color */}
            <div
              data-agent-halo
              className="hidden lg:block pointer-events-none absolute right-[6%] top-1/2 -translate-y-1/2 w-[520px] h-[520px]"
              aria-hidden="true"
            >
              <div
                className="w-full h-full rounded-full qx-breathe"
                style={{ background: `radial-gradient(ellipse at center, ${agent.accent}1f 0%, transparent 68%)`, filter: "blur(44px)" }}
              />
            </div>

            {/* Hover light in the agent's own color */}
            <div
              className="pointer-events-none absolute left-[10%] top-1/2 -translate-y-1/2 w-[560px] h-[420px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: `radial-gradient(ellipse at center, ${agent.accent}29 0%, transparent 70%)`, filter: "blur(30px)" }}
              aria-hidden="true"
            />
            {/* Numeral drawn as SVG text so light pulses can travel its outline */}
            <svg
              data-agent-index
              viewBox="0 0 460 360"
              className="pointer-events-none select-none absolute right-4 lg:right-16 top-10 lg:top-1/2 lg:-translate-y-1/2 w-32 lg:w-[27rem] h-auto [font-family:'Satoshi-Black',Helvetica] font-black"
              aria-hidden="true"
            >
              <defs>
                {/* Aurora filters: fractal noise displaces each stroke into
                    wavy curtains before blurring - organic light, not lines. */}
                <filter id={`qx-aur1-${agent.index}`} x="-45%" y="-45%" width="190%" height="190%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.02" numOctaves="2" seed="7" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="30" />
                  <feGaussianBlur stdDeviation="11" />
                </filter>
                <filter id={`qx-aur2-${agent.index}`} x="-40%" y="-40%" width="180%" height="180%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.016 0.026" numOctaves="2" seed="3" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="20" />
                  <feGaussianBlur stdDeviation="7" />
                </filter>
                <filter id={`qx-aur3-${agent.index}`} x="-30%" y="-30%" width="160%" height="160%">
                  <feTurbulence type="fractalNoise" baseFrequency="0.02 0.032" numOctaves="2" seed="11" result="n" />
                  <feDisplacementMap in="SourceGraphic" in2="n" scale="14" />
                  <feGaussianBlur stdDeviation="3.5" />
                </filter>
              </defs>
              {/* Base outline, always faintly lit */}
              <text
                x="230"
                y="196"
                textAnchor="middle"
                dominantBaseline="central"
                fontSize="330"
                fill="none"
                stroke={`${agent.accent}42`}
                strokeWidth="2"
              >
                {agent.index}
              </text>
              {/* Aurora curtains: three displaced, blurred strokes in two tints
                  drift at different speeds and directions - overlapping waves
                  of light breathing along the letterforms */}
              {[
                { w: 11, o: 0.4, color: agent.accent, cls: "qx-aurora-a", f: `qx-aur1-${agent.index}` },
                { w: 8, o: 0.32, color: agent.accentSoft, cls: "qx-aurora-b", f: `qx-aur2-${agent.index}` },
                { w: 3.5, o: 0.5, color: agent.accentSoft, cls: "qx-aurora-c", f: `qx-aur3-${agent.index}` },
              ].map((layer) => (
                <text
                  key={layer.f}
                  x="230"
                  y="196"
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize="330"
                  fill="none"
                  stroke={layer.color}
                  strokeWidth={layer.w}
                  strokeOpacity={layer.o}
                  strokeLinecap="round"
                  filter={`url(#${layer.f})`}
                  className={layer.cls}
                >
                  {agent.index}
                </text>
              ))}
            </svg>

            <div data-agent-copy className="relative max-w-2xl">
              <p
                className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-xs uppercase tracking-[0.25em] mb-5 flex items-center gap-3"
                style={{ color: agent.accent, textShadow: `0 0 18px ${agent.accent}59` }}
              >
                <span className="block h-px w-8" style={{ background: `linear-gradient(90deg, ${agent.accent}, transparent)` }} />
                {agent.label}
              </p>
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-gradient-silver text-4xl sm:text-5xl lg:text-6xl tracking-[-0.02em] leading-[1.06] mb-6 pb-1">
                {agent.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-base lg:text-xl leading-relaxed mb-9">
                {agent.description}
              </p>
              <Link
                to={agent.href}
                style={{ "--glass-accent": agent.accentRgb } as React.CSSProperties}
                className="glass-panel glass-hover group inline-flex items-center gap-3 rounded-full px-7 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] text-sm"
              >
                Explore {agent.label.split(" · ")[0]}
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </div>

            <span className="absolute bottom-8 left-6 sm:left-10 lg:left-28 [font-family:'Satoshi-Medium',Helvetica] text-white/35 text-[10px] uppercase tracking-[0.3em]">
              {agent.index} / 05
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
