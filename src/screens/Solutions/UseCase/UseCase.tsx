import { useState } from "react";
import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

type Industry = "financial-services" | "public-sector" | "telecom" | "strategic-advisory";

interface UseCard {
  title: string;
  body: string;
  icon: JSX.Element;
}

const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

function UseCaseCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-all hover:-translate-y-1 hover:border-[#4a0082]/40 hover:shadow-lg hover:shadow-[#4a0082]/10 duration-200 flex flex-col">
      <div className="w-9 h-9 rounded-lg bg-[#9b5cf6]/10 flex items-center justify-center mb-4 shrink-0">
        <svg className="w-5 h-5 text-[#9b5cf6]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </div>
      <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white mb-2">{title}</h5>
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm flex-1 mb-4">{body}</p>
      <Link
        to="/contact"
        className="text-[#9b5cf6] text-xs font-semibold [font-family:'Satoshi-Medium',Helvetica] inline-flex items-center gap-1.5 hover:text-[#9b5cf6] transition-colors"
      >
        View Use Case <ArrowIcon />
      </Link>
    </div>
  );
}

export const UseCase = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState<Industry>("financial-services");

  const tabs: { id: Industry; label: string }[] = [
    { id: "financial-services", label: "Financial Services" },
    { id: "public-sector", label: "Public Sector & Smart Cities" },
    { id: "telecom", label: "Telecommunications" },
    { id: "strategic-advisory", label: "Strategic Advisory" },
  ];

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-4xl md:text-5xl lg:text-6xl text-gradient-aurora mb-6 italic">
            Solutions Built for<br className="hidden md:block" /> Business Reality.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10 max-w-xl mx-auto">
            Outcome-focused AI for regulated industries. Every solution is designed to reduce risk, accelerate
            decisions, and deliver measurable impact.
          </p>

          {/* Industry tabs */}
          <div className="flex flex-wrap justify-center gap-2 max-w-2xl mx-auto">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`px-6 py-2.5 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-all border ${
                  activeTab === t.id
                    ? "bg-[#4a0082] border-[#4a0082] text-white"
                    : "border-white/10 bg-white/4 text-white/75 hover:text-white hover:border-white/25 hover:bg-white/6"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tab Content ── */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Financial Services */}
          {activeTab === "financial-services" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                  Financial Services
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-lg mx-auto">
                  From credit decisioning to compliance, AI that fits the way banking actually works.
                </p>
              </div>

              <div className="mb-12">
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.08em] mb-5">
                  Markets &amp; Trading
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "Bond Pricing", body: "Score and price Sukuk and conventional bonds in real time with 2-way models that adapt to market shifts. Cut manual pricing cycles from hours to seconds." },
                    { title: "Algorithmic Trading", body: "Define objective functions, impose constraints, and run simulations across asset classes. Deploy strategies with full audit trails for regulatory compliance." },
                    { title: "Factor Investing", body: "Predict return factors for any security universe and select alpha-generating portfolios. Transparent model outputs that portfolio managers can explain to clients." },
                  ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
                </div>
              </div>

              <div className="mb-12">
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.08em] mb-5">
                  Risk &amp; Compliance
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "Automated Risk Assessment", body: "Consolidate credit, market, and operational risk into a single scoring framework. Replace spreadsheet-driven reviews with real-time, explainable risk scores." },
                    { title: "Anti-Money Laundering", body: "Detect suspicious patterns and reduce false positives by up to 60%. AI models built to meet SAMA, CBUAE, and FATF compliance standards out of the box." },
                    { title: "Regulatory Reporting", body: "Automate capital adequacy and liquidity reporting for central bank submissions. One workflow for SAMA, QCB, and CBUAE — no more manual reconciliation." },
                  ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
                </div>
              </div>

              <div>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.08em] mb-5">
                  Customer Intelligence
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "Credit Scoring & Lending", body: "Evaluate creditworthiness using alternative data sources alongside traditional metrics. Support both Islamic and conventional lending with fully explainable models." },
                    { title: "Customer Churn Prevention", body: "Predict at-risk customers from transaction cadence and behavioral patterns. Surface actionable retention offers before customers leave — not after." },
                    { title: "KYC Automation", body: "Verify documents using image RAG, flag expired IDs, and cross-check across watchlists. Reduce onboarding friction while staying audit-ready." },
                  ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
                </div>
              </div>
            </div>
          )}

          {/* Public Sector */}
          {activeTab === "public-sector" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                  Public Sector &amp; Smart Cities
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-lg mx-auto">
                  Intelligent infrastructure for governments that need speed, transparency, and sovereignty.
                </p>
              </div>

              <div className="mb-12">
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.08em] mb-5">
                  Spatial &amp; Urban Intelligence
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "Spatial Geo-Intelligence (AXON)", body: "Aggregate satellite imagery, IoT sensor data, and GIS layers into a unified urban intelligence platform. Enable planners to make data-backed zoning and infrastructure decisions." },
                    { title: "Smart City Analytics", body: "Monitor traffic, utilities, and environmental metrics in real time. Turn fragmented sensor data into actionable dashboards for city operations teams." },
                    { title: "Security & Surveillance", body: "AI-driven anomaly detection for video and audio feeds. Protect critical infrastructure with real-time alerting that reduces false alarms by 80%." },
                  ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
                </div>
              </div>

              <div>
                <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.08em] mb-5">
                  Government Operations
                </p>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {[
                    { title: "Citizen Service Automation", body: "Bilingual Arabic/English virtual assistants for government portals. Resolve 70%+ of citizen inquiries without human handoff — available 24/7." },
                    { title: "Document & Archive AI", body: "Process, classify, and summarize Arabic government documents at scale. Turn decades of paper archives into searchable, structured knowledge bases." },
                    { title: "Policy Simulation", body: 'Model the impact of fiscal, trade, and immigration policies before implementation. Give decision-makers quantified "what-if" scenarios instead of guesswork.' },
                  ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
                </div>
              </div>
            </div>
          )}

          {/* Telecom */}
          {activeTab === "telecom" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                  Telecommunications
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-lg mx-auto">
                  Predict, optimize, and automate — from the network operations center to the customer call.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: "Predictive Network Maintenance", body: "Identify component failures before they happen using historical patterns and real-time telemetry. Reduce unplanned downtime and extend infrastructure lifespan." },
                  { title: "Customer Support Intelligence", body: "Route Arabic and English calls with sentiment-aware classification. Diagnose likely customer issues with minimal questioning and reduce average handling time by 40%." },
                  { title: "NOC Alert Triage", body: "Prioritize thousands of network alerts into actionable clusters. AI scoring cuts noise by 70% so your operations team focuses on what actually matters." },
                  { title: "Subscriber Churn Prediction", body: "Identify subscribers likely to switch carriers using usage patterns, complaint history, and competitive pricing data. Trigger retention offers at the right moment." },
                ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
              </div>
            </div>
          )}

          {/* Strategic Advisory */}
          {activeTab === "strategic-advisory" && (
            <div>
              <div className="text-center mb-12">
                <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-2xl md:text-3xl lg:text-4xl text-white mb-3">
                  Strategic Advisory
                </h2>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-lg mx-auto">
                  For organizations building long-term AI capability — not just buying tools.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {[
                  { title: "Sovereign AI Infrastructure", body: "Design and deploy AI platforms that keep data, models, and inference within national borders. Full architecture consulting for GCC data sovereignty requirements." },
                  { title: "Air-Gapped LLM Deployment", body: "Run large language models on fully disconnected, air-gapped infrastructure. Designed for defense, intelligence, and classified government environments." },
                  { title: "AI Governance & MLOps", body: "Build model governance frameworks from day one — versioning, bias monitoring, drift detection, and audit trails. Meet regulatory expectations before they become mandates." },
                  { title: "AI Capability Building", body: "Structured programs to upskill your team — from executive AI literacy to hands-on MLOps training. We build internal capability, not long-term dependency." },
                ].map((c) => <UseCaseCard key={c.title} title={c.title} body={c.body} />)}
              </div>
            </div>
          )}

        </div>
      </section>

      {/* ── CTA ── */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-3xl md:text-4xl lg:text-5xl text-white mb-4 italic">
            Turn Complexity Into a Clear Decision.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg mb-10">
            If you lead banking, public sector, or technology teams — we're built to help you move faster with
            confidence.
          </p>
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Request a Demo
          </Link>
        </div>
      </section>
    </PageLayout>
  );
};
