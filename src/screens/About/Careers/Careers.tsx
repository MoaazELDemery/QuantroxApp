import { PageLayout } from "../../../components/layout/PageLayout";

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
    <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
        Work With Us
      </p>
      <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
        Careers at QuantorX
      </h1>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
        Build the future of sovereign AI in the MENA region.
      </p>
    </section>

    {/* MISSION INTRO */}
    <section className="px-6 py-8 max-w-3xl mx-auto">
      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-4">
        Join our mission to democratize AI across the Middle East and North Africa.
      </h2>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
        We're a team of engineers, data scientists, and domain experts dedicated to building enterprise AI that respects data sovereignty, cultural context, and regional regulations.
      </p>
    </section>

    {/* OPEN POSITIONS */}
    <section className="px-6 py-12 max-w-4xl mx-auto">
      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-8">
        Open Positions
      </h2>
      <div className="flex flex-col gap-4">
        {OPEN_POSITIONS.map((pos) => (
          <div
            key={pos.title + pos.location}
            className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
          >
            <div className="flex-1">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-1">
                {pos.title}
              </h3>
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm mb-2">
                {pos.location}
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                {pos.desc}
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-6 py-2.5 text-white [font-family:'Satoshi-Medium',Helvetica] text-sm hover:bg-[#4a0082]/90 transition-colors whitespace-nowrap"
            >
              Apply
            </a>
          </div>
        ))}
      </div>
    </section>

    {/* WHY QUANTORX */}
    <section className="px-6 py-16 bg-[#ffffff04]">
      <div className="max-w-5xl mx-auto">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
          Benefits
        </p>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-10">
          Why QuantorX?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PERKS.map((perk) => (
            <div
              key={perk.title}
              className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors text-center"
            >
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">
                {perk.title}
              </h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                {perk.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
          Don't See Your Role?
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-8">
          We're always looking for exceptional talent. Send us your details and we'll be in touch.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  </PageLayout>
);
