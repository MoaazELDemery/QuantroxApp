import { PageLayout } from "../../../components/layout/PageLayout";

const PRESS_ITEMS = [
  {
    type: "Press Release",
    year: "2026",
    title: "QuantorX Achieves ISO 27001 & SOC2 Type II Certification",
    desc: "QuantorX announces completion of dual security certifications, strengthening its sovereign AI commitment for MENA enterprises.",
  },
  {
    type: "Press Release",
    year: "2025",
    title: "QuantorX Expands to Saudi Arabia with Riyadh Office",
    desc: "New office to serve growing demand from KSA banking and government sectors.",
  },
  {
    type: "Media Mention",
    year: "2025",
    title: "QuantorX Named Among Top AI Startups in MENA by Arabian Business",
    desc: "Featured in Arabian Business for pioneering sovereign AI solutions in the Gulf region.",
  },
  {
    type: "Press Release",
    year: "2025",
    title: "Partnership with NVIDIA for On-Premise AI Infrastructure",
    desc: "Strategic partnership enables enterprise GPU clusters for sovereign AI workloads.",
  },
  {
    type: "Press Release",
    year: "2024",
    title: "QuantorX Launches Bilingual GenAI with CORTEX™",
    desc: "First enterprise AI platform purpose-built for Arabic and English multilingual workloads.",
  },
  {
    type: "Media Mention",
    year: "2024",
    title: "QuantorX at GITEX Global: Sovereign AI for Government",
    desc: "Key AI partner at GITEX Global Dubai, showcasing government and smart city solutions.",
  },
];

export const PressMedia = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
        Newsroom
      </p>
      <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
        Press & Media
      </h1>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto">
        Latest news, press releases, and media mentions.
      </p>
    </section>

    {/* PRESS GRID */}
    <section className="px-6 py-12 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PRESS_ITEMS.map((item) => (
          <article
            key={item.title}
            className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
          >
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em]">
              {item.type} — {item.year}
            </p>
            <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base leading-snug">
              {item.title}
            </h4>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
              {item.desc}
            </p>
          </article>
        ))}
      </div>
    </section>

    {/* MEDIA INQUIRIES */}
    <section className="px-6 py-20 bg-[#ffffff04]">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl tracking-[-1.80px] mb-4">
          Media Inquiries
        </h2>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-4">
          For press inquiries, interview requests, or media kits, please contact:
        </p>
        <a
          href="mailto:press@quantorx.ai"
          className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-lg hover:text-[#9b5cf6]/80 transition-colors"
        >
          press@quantorx.ai
        </a>
      </div>
    </section>
  </PageLayout>
);
