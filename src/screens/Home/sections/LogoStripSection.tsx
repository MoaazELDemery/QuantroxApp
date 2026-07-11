/**
 * LogoStripSection - animated marquee of partner logos.
 * Uses placeholder badges (initials in glass pills) until real client logos are provided.
 * Replace each `BrandBadge` below with an `<img src="..." />` when assets land.
 */

const brands = [
  { name: "Emirates NBD", initials: "ENBD" },
  { name: "QNB Group", initials: "QNB" },
  { name: "Arab Bank", initials: "ARAB" },
  { name: "Banque Misr", initials: "BM" },
  { name: "CIB Egypt", initials: "CIB" },
  { name: "Mashreq", initials: "MSH" },
  { name: "ADIB", initials: "ADIB" },
  { name: "FAB", initials: "FAB" },
];

const BrandBadge = ({ initials, name }: { initials: string; name: string }) => (
  <div
    title={name}
    aria-label={name}
    className="group inline-flex items-center justify-center min-w-[180px] h-16 px-6 rounded-2xl glass shrink-0"
  >
    <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/55 group-hover:text-white text-base tracking-[0.15em] uppercase transition-colors duration-300">
      {initials}
    </span>
  </div>
);

export const LogoStripSection = (): JSX.Element => {
  // Doubled list so the marquee loops seamlessly
  const loop = [...brands, ...brands];

  return (
    <section className="w-full bg-transparent border-y border-white/5 py-14 relative overflow-hidden">
      {/* Edge fade masks - bleed track into page bg */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-0 w-32 z-10 bg-gradient-to-r from-[#060010] to-transparent" />
      <div className="pointer-events-none absolute top-0 bottom-0 right-0 w-32 z-10 bg-gradient-to-l from-[#060010] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 text-center mb-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass">
          <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] animate-pulse-glow" />
          <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/60 text-xs uppercase tracking-[0.2em]">
            Trusted by Sovereign Enterprises
          </span>
        </div>
      </div>

      <div
        className="flex gap-6 animate-marquee"
        style={{ ["--duration" as never]: "40s", width: "max-content" }}
      >
        {loop.map((b, i) => (
          <BrandBadge key={`${b.name}-${i}`} initials={b.initials} name={b.name} />
        ))}
      </div>
    </section>
  );
};
