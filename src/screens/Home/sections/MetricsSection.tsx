import { gsap } from "../../../lib/gsap";
import { useGsap } from "../../../components/scroll/useGsap";

const metrics = [
  {
    end: 40,
    suffix: "+",
    label: "Enterprise deployments",
    desc: "Sovereign agents running in production across banking, payments, and wealth.",
    lead: true,
    art: "/metrics/art-deployments.webp",
  },
  {
    end: 3,
    suffix: "×",
    label: "Faster approval cycles",
    desc: "Credit decisions that took days now clear in hours - governed end to end.",
    art: "/metrics/art-speed.webp",
  },
  {
    end: 65,
    suffix: "%",
    label: "Less manual review",
    desc: "Cortex routes only the true edge-cases to human eyes.",
    art: "/metrics/art-routing.webp",
  },
  {
    end: 0,
    suffix: "%",
    label: "Data egress",
    desc: "Nothing phones home. Ever. Air-gapped inside your walls.",
    art: "/metrics/art-egress.webp",
  },
];

/**
 * MetricsSection - the proof chapter as an editorial card set: one deep-violet
 * lead card and three paper cards. The paper flip is the high-contrast moment
 * of the page (the site stays dark; the evidence is printed).
 */
export const MetricsSection = (): JSX.Element => {
  const scope = useGsap<HTMLElement>(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set("[data-metric-card], [data-metrics-head]", { opacity: 1, y: 0 });
      return;
    }

    // Scrubbed to the scrollbar: the proof chapter assembles and disassembles
    // with every scroll movement - the numbers literally count with scroll.
    gsap.from("[data-metrics-head]", {
      opacity: 0,
      y: 36,
      ease: "power2.out",
      scrollTrigger: { trigger: scope.current, start: "top 88%", end: "top 55%", scrub: 0.4 },
    });

    const tl = gsap.timeline({
      scrollTrigger: { trigger: "[data-metrics-grid]", start: "top 95%", end: "top 40%", scrub: 0.4 },
    });

    tl.from("[data-metric-card]", { y: 64, opacity: 0, duration: 1.05, stagger: 0.11, ease: "power2.out" }, 0);

    gsap.utils.toArray<HTMLElement>("[data-metric-value]").forEach((el, i) => {
      const end = Number(el.dataset.end ?? 0);
      const counter = { v: 0 };
      tl.to(
        counter,
        {
          v: end,
          duration: 1.7,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(counter.v));
          },
        },
        0.3 + i * 0.11,
      );
    });
  });

  return (
    <section ref={scope} data-chapter="proof" className="w-full bg-[#0A0312] py-24 lg:py-36 relative overflow-hidden">
      <div className="glow-rule absolute top-0 inset-x-[10%]" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-[30%] -translate-x-1/2 w-[900px] h-[420px] rounded-full opacity-50"
        style={{ background: "radial-gradient(ellipse at center, rgba(74,0,130,0.25) 0%, transparent 70%)", filter: "blur(48px)" }}
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
        <div data-metrics-head className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-5">
              03 · Proof, Not Promises
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-gradient-silver text-4xl sm:text-5xl lg:text-6xl tracking-[-0.03em] leading-[1.05]">
              The numbers behind sovereignty.
            </h2>
          </div>
          <div className="hidden lg:flex items-center gap-3 pb-2" aria-hidden="true">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c4a8ff]/80" />
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-[10px] uppercase tracking-[0.3em] text-white/40">
              Measured in production
            </span>
          </div>
        </div>

        <div data-metrics-grid className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {metrics.map((m, i) => (
            <div key={m.label} data-metric-card>
            {/* Outer shell owns the gsap entrance (no CSS transitions there -
                they poison gsap's value snapshots); this inner card owns hover. */}
            <div
              className={`group relative overflow-hidden rounded-[26px] p-7 lg:p-8 min-h-[340px] lg:min-h-[440px] h-full flex flex-col transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 ${
                m.lead
                  ? "bg-gradient-to-b from-[#36125e] to-[#22073f] border border-[#9b5cf6]/25 hover:shadow-[0_24px_80px_-24px_rgba(124,58,237,0.55)]"
                  : "bg-[#EFEAF6] border border-white/60 hover:shadow-[0_24px_64px_-28px_rgba(23,9,31,0.45)]"
              }`}
            >
              {/* Ghost index numeral, printed like a drafting sheet */}
              <span
                className="pointer-events-none select-none absolute -right-3 -bottom-8 [font-family:'Satoshi-Black',Helvetica] font-black text-[11rem] leading-none"
                style={{ color: m.lead ? "rgba(255,255,255,0.05)" : "rgba(23,9,31,0.05)" }}
                aria-hidden="true"
              >
                {`0${i + 1}`}
              </span>

              <p
                className={`[font-family:'Satoshi-Medium',Helvetica] font-medium text-[11px] uppercase tracking-[0.22em] ${
                  m.lead ? "text-[#c4a8ff]" : "text-[#4a0082]/75"
                }`}
              >
                {m.label}
              </p>

              {/* The evidence, illustrated: a still-life for each number */}
              <div className="relative mt-5 mb-2 h-36 lg:h-40 rounded-2xl overflow-hidden" aria-hidden="true">
                <img
                  src={m.art}
                  alt=""
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: m.lead
                      ? "linear-gradient(to bottom, transparent 55%, #2b0c4b 100%)"
                      : "linear-gradient(to bottom, transparent 55%, #EFEAF6 100%)",
                  }}
                />
              </div>

              <div className="mt-auto relative">
                <span className="block overflow-hidden">
                  <span
                    className={`block [font-family:'Satoshi-Bold',Helvetica] font-bold text-7xl lg:text-8xl tracking-[-0.04em] leading-none ${
                      m.lead ? "text-white" : "text-[#17091F]"
                    }`}
                  >
                    <span data-metric-value data-end={m.end}>
                      {m.end}
                    </span>
                    <span className={m.lead ? "text-[#c4a8ff]" : "text-[#7c3aed]"}>{m.suffix}</span>
                  </span>
                </span>
                <p
                  className={`[font-family:'Satoshi-Regular',Helvetica] text-sm leading-relaxed mt-4 max-w-[26ch] ${
                    m.lead ? "text-white/65" : "text-[#17091F]/65"
                  }`}
                >
                  {m.desc}
                </p>
              </div>
            </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
