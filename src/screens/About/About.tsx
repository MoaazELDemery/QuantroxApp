import { useState } from "react";
import { PageCTA, EditorialRows } from "../../components/page/primitives";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";

type TabKey = "sovereignty" | "innovation" | "empathy" | "good";

const TABS: { key: TabKey; label: string; heading: string; body: string }[] = [
  {
    key: "sovereignty",
    label: "Sovereignty First",
    heading: "Sovereignty First",
    body: "Data sovereignty is non-negotiable. Every solution we build ensures that your data stays within your borders, on your infrastructure, under your control. We're committed to the principle that MENA organizations should never have to compromise sovereignty for AI capability.",
  },
  {
    key: "innovation",
    label: "Freedom to Innovate",
    heading: "Freedom to Innovate",
    body: "AI should be accessible to people with a variety of skill sets. We've built AI to do AI - providing barrier-free access to machine learning across your entire organization, from data scientists to business analysts.",
  },
  {
    key: "empathy",
    label: "Customer Empathy",
    heading: "Customer Empathy",
    body: "We understand the unique challenges of operating in the MENA market - regulatory complexity, multilingual requirements, and cultural nuances. We co-innovate alongside you, in your time zone, speaking your language.",
  },
  {
    key: "good",
    label: "Do Good",
    heading: "Do Good",
    body: "We embrace responsible development and model transparency as corporate-level initiatives. We regularly seek opportunities in our communities where AI can make a positive impact - from education to sustainability.",
  },
];

const JOURNEY_STEPS = [
  {
    step: "01",
    title: "Machine Learning",
    desc: "Expert data scientists only - deep coding, manual feature engineering.",
  },
  {
    step: "02",
    title: "Automated ML",
    desc: "All data scientists - automated feature engineering, model selection, and tuning.",
  },
  {
    step: "03",
    title: "AI Middleware",
    desc: "DevOps & IT - model deployment, monitoring, and infrastructure management.",
  },
  {
    step: "04",
    title: "AI Applications",
    desc: "Software developers - low-code AI app development and integration.",
  },
  {
    step: "05",
    title: "AI App Store",
    desc: "Business users - self-service AI for everyone in the organization.",
  },
];

const OFFICES = [
  { city: "Dubai, UAE", role: "Regional HQ" },
  { city: "Riyadh, KSA", role: "GCC Operations" },
  { city: "Cairo, Egypt", role: "Engineering Hub" },
  { city: "Amman, Jordan", role: "R&D Center" },
];

export const About = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<TabKey>("sovereignty");
  const activeTabData = TABS.find((t) => t.key === activeTab)!;

  return (
    <PageLayout>
      <PageHero
        eyebrow="About Us"
        title="We Are Engineers. Not Marketers."
        lede="QuantorX is the visionary leader in democratizing AI for the MENA region."
        video="/videos/mena-horizon.mp4"
        plainTitle
      />

      {/* MISSION */}
      <section className="px-6 py-16 max-w-3xl mx-auto">
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed mb-6">
          At QuantorX, democratizing AI isn't just an idea. It's a movement - and it drives everything we do. We started as a team of passionate AI engineers and domain experts in the MENA region, driven by the belief that sovereign, enterprise-grade AI should be accessible to every organization.
        </p>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed">
          Today we've evolved into a regional leader, serving banks, telecom operators, and government agencies across the GCC and broader MENA. Our partnerships extend from technology giants to local enterprises, academia, and non-profit organizations - all united by the mission to bring AI to the Middle East on local terms.
        </p>
      </section>

      {/* CORE VALUES */}
      <section className="px-6 py-16 bg-[#ffffff04]">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
            What We Stand For
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-10">
            QuantorX Core Values
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-5 py-2 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] font-medium transition-colors ${
                  activeTab === tab.key
                    ? "bg-[#4a0082] text-white"
                    : "glass-panel glass-hover text-white/75"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="glass-panel glass-hover rounded-[20px] p-8 max-w-3xl mx-auto">
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px] mb-4">
              {activeTabData.heading}
            </h3>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
              {activeTabData.body}
            </p>
          </div>
        </div>
      </section>

      {/* AI DEMOCRATIZATION JOURNEY - a numbered path, not a card rack */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
            The Path Forward
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-12">
            Our AI Democratization Journey
          </h2>
          <EditorialRows rows={JOURNEY_STEPS.map((s) => ({ title: s.title, body: s.desc }))} />
        </div>
      </section>

      {/* REGIONAL PRESENCE */}
      <section className="px-6 py-16 bg-[#ffffff04]">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
            Where We Operate
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-4">
            Regional Presence
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base text-center mb-10">
            On-the-ground AI expertise across the MENA region.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {OFFICES.map((o) => (
              <div
                key={o.city}
                className="glass-panel glass-hover rounded-[20px] p-6 hover:bg-[#ffffff12] transition-colors text-center"
              >
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base mb-2">
                  {o.city}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm">
                  {o.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

          <PageCTA
      title={<>Join the AI Revolution in MENA</>}
      sub={<>Partner with QuantorX to transform your enterprise.</>}
      primary={{ label: "Request Demo", href: "/demo" }}
    />
    </PageLayout>
  );
};
