import { PageLayout } from "../../../components/layout/PageLayout";

const IMPACT_AREAS = [
  {
    title: "AI for Education",
    desc: "Partnering with universities across the GCC to provide AI curriculum, training datasets, and platform access for students and researchers.",
  },
  {
    title: "AI for Sustainability",
    desc: "Helping smart cities optimize energy consumption, water usage, and waste management using predictive analytics and IoT sensor data.",
  },
  {
    title: "AI for Healthcare Access",
    desc: "Deploying diagnostic AI tools in underserved communities to improve early detection and healthcare resource allocation.",
  },
  {
    title: "Arabic AI Research",
    desc: "Contributing to open-source Arabic NLP models and datasets — closing the Arabic language gap in global AI research.",
  },
  {
    title: "Women in AI MENA",
    desc: "Supporting programs that increase women's participation in AI and technology careers across the region.",
  },
  {
    title: "Digital Literacy",
    desc: "Community workshops and government partnerships to build AI literacy among citizens and small businesses.",
  },
];

export const SocialImpact = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
        Giving Back
      </p>
      <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
        Social Impact
      </h1>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
        Using AI to drive positive change across the MENA region.
      </p>
    </section>

    {/* IMPACT GRID */}
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {IMPACT_AREAS.map((area) => (
          <div
            key={area.title}
            className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors"
          >
            <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-3">
              {area.title}
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
              {area.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 py-20 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
          Get Involved
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-8">
          Partner with us on AI social impact initiatives.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </section>
  </PageLayout>
);
