import { PageLayout } from "../../../components/layout/PageLayout";
import { PageCTA, EditorialRows } from "../../../components/page/primitives";
import { PageHero } from "../../../components/layout/PageHero";

const CHALLENGES = [
  {
    title: "Data Sovereignty",
    desc: "Most AI solutions require data to leave the country. QuantorX deploys on-premise or in regional data centers - your data never crosses borders.",
  },
  {
    title: "Arabic NLP Gap",
    desc: "Only 1% of the world's AI research focuses on Arabic. QuantorX builds models fine-tuned for Modern Standard Arabic and Gulf dialects.",
  },
  {
    title: "Regulatory Complexity",
    desc: "MENA has 20+ different regulatory frameworks. QuantorX is pre-built for compliance with central bank, telecom, and data protection regulations.",
  },
  {
    title: "Talent Shortage",
    desc: "AI expertise is scarce in the region. QuantorX Academy provides training and certification to build local AI capabilities.",
  },
  {
    title: "Cultural Context",
    desc: "AI solutions must understand Islamic finance, local business customs, and regional market dynamics - not just translate Western models.",
  },
  {
    title: "Infrastructure Readiness",
    desc: "QuantorX works with NVIDIA, Dell, and cloud providers to ensure enterprise-grade GPU infrastructure availability across the region.",
  },
];

const METRICS = [
  { value: "12", label: "Countries" },
  { value: "50+", label: "Enterprise clients" },
  { value: "500+", label: "AI models deployed" },
  { value: "4", label: "Regional offices" },
];

export const AIForMENA = (): JSX.Element => (
  <PageLayout>
    {/* HERO */}
    <PageHero
      eyebrow="Regional Focus"
      title="AI for MENA"
      lede="Building sovereign AI infrastructure for the Middle East and North Africa - by the region, for the region."
      video="/videos/mena-horizon.mp4"
      plainTitle
    />

    {/* NARRATIVE */}
    <section className="px-6 py-12 max-w-3xl mx-auto">
      <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-6">
        The MENA Region Needs Its Own AI
      </h2>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed mb-4">
        The MENA region represents one of the world's fastest-growing technology markets. With Vision 2030 in Saudi Arabia, UAE National AI Strategy, and Egypt's AI roadmap, governments are investing billions in digital transformation. Yet most enterprise AI solutions are built for Western markets - they lack Arabic language support, ignore regional regulations, and require data to leave sovereign borders.
      </p>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
        QuantorX exists to change that. We build AI that understands Arabic from the ground up, complies with UAE PDPL, KSA PDPL, and DIFC/ADGM data protection frameworks, and deploys entirely on-premise or within regional cloud zones.
      </p>
    </section>

    {/* CHALLENGES */}
    <section className="px-6 py-16 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
          What We Solve
        </p>
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-10">
          Regional AI Challenges We Solve
        </h2>
        <EditorialRows className="max-w-5xl" rows={CHALLENGES.map((c) => ({ title: c.title, body: c.description ?? c.desc ?? c.body }))} />
      </div>
    </section>

    {/* METRICS */}
    <section className="px-6 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {METRICS.map((m) => (
            <div key={m.label} className="text-center">
              <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl tracking-[-1.80px] mb-2">
                {m.value}
              </p>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base">
                {m.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

        <PageCTA
      title={<>Partner With Us</>}
      sub={<>Bring sovereign AI to your MENA enterprise.</>}
      primary={{ label: "Request Demo", href: "/demo" }}
    />
  </PageLayout>
);
