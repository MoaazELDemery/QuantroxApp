import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

const OPEN_POSITIONS = [
  {
    title: "Senior ML Engineer",
    location: "Dubai, UAE",
    desc: "Design and deploy ML pipelines for financial services clients. Arabic NLP experience preferred.",
  },
  {
    title: "Platform Engineer",
    location: "Riyadh, KSA",
    desc: "Build and maintain on-premise AI cloud infrastructure for enterprise deployments.",
  },
  {
    title: "Solutions Architect",
    location: "Dubai, UAE",
    desc: "Technical pre-sales and solution design for banking and government verticals.",
  },
  {
    title: "NLP Research Scientist",
    location: "Cairo, Egypt",
    desc: "Advance Arabic language model research and fine-tuning capabilities.",
  },
  {
    title: "Account Executive",
    location: "GCC",
    desc: "Drive enterprise AI sales across UAE, KSA, Qatar, and Kuwait.",
  },
];

const PERKS = [
  {
    title: "Mission-Driven",
    desc: "Work on AI that directly impacts the MENA region.",
  },
  {
    title: "Remote-Friendly",
    desc: "Flexible work across our four MENA office locations.",
  },
  {
    title: "Growth",
    desc: "Continuous learning, conferences, and certification support.",
  },
];

export const Careers = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <PageHero
      eyebrow="Work With Us"
      title="Careers at QuantorX"
      lede="Build the future of sovereign AI in the MENA region."
      video="/videos/mena-horizon.mp4"
      plainTitle
    />

    {/* MISSION INTRO */}
    <section className="px-6 py-12 lg:py-16 max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
        The Mission
      </p>
      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-2xl md:text-3xl lg:text-4xl leading-[1.15] mb-5">
        Join our mission to democratize AI across the Middle East and North Africa.
      </h2>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-base lg:text-lg leading-relaxed max-w-2xl">
        We're a team of engineers, data scientists, and domain experts dedicated to building enterprise AI that respects data sovereignty, cultural context, and regional regulations.
      </p>
    </section>

    {/* OPEN POSITIONS - a hiring index, not a card rack */}
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-8">
        Open Positions
      </p>
      <EditorialRows
        rows={OPEN_POSITIONS.map((pos) => ({
          tag: pos.location,
          title: pos.title,
          body: pos.desc,
          href: "/contact",
        }))}
      />
    </section>

    {/* WHY QUANTORX - hairline columns */}
    <section className="px-6 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
            Benefits
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight">
            Why QuantorX?
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-10">
          {PERKS.map((perk, i) => (
            <div key={perk.title} className="relative border-t border-white/15 pt-8">
              <span
                className="pointer-events-none select-none absolute top-3 right-0 [font-family:'Satoshi-Black',Helvetica] font-black text-lg leading-none text-transparent"
                style={{ WebkitTextStroke: "1px rgba(255,255,255,0.28)" }}
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.02em] text-white text-xl mb-3">
                {perk.title}
              </h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm lg:text-base leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <PageCTA
      title={<>Don't See Your Role?</>}
      sub={<>We're always looking for exceptional talent. Send us your details and we'll be in touch.</>}
      primary={{ label: "Get in Touch", href: "/contact" }}
    />
  </PageLayout>
);
