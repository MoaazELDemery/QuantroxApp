import { useState } from "react";
import { PageCTA, Reveal, StatValue } from "../../components/page/primitives";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";

type Industry = "all" | "banking" | "telecom" | "government" | "insurance" | "healthcare";

interface CaseStudy {
  industry: string;
  industryKey: Industry;
  title: string;
  challenge: string;
  approach: string;
  metrics: { value: string; label: string }[];
  lesson: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "BANKING",
    industryKey: "banking",
    title: "Reducing Fraud Losses by 65% at Scale",
    challenge: "A large retail bank was processing 12 million transactions daily with a fraud detection system producing an unacceptably high false-positive rate. Legitimate transactions were being declined, causing customer churn, while actual fraud slipped through on novel attack vectors the rule engine hadn't seen before.",
    approach: "A gradient-boosted ensemble model replaced the existing rule engine, trained on 18 months of labeled transaction data with engineered features covering behavioral velocity, geospatial anomalies, merchant category risk, and device fingerprint consistency. The model was deployed in a shadow mode for 6 weeks before going live, with human review for edge cases above a confidence threshold.",
    metrics: [
      { value: "65%", label: "Fraud loss reduction" },
      { value: "40%", label: "Fewer false positives" },
      { value: "<80ms", label: "Decision latency" },
    ],
    lesson: "A model that reduces false positives is often more valuable operationally than one that catches more fraud - the customer relationship cost of a declined legitimate transaction is significant and underestimated.",
  },
  {
    industry: "TELECOM",
    industryKey: "telecom",
    title: "Automating 60% of Customer Inquiries with Bilingual AI",
    challenge: "A major GCC telecoms operator was handling over 50,000 customer interactions per day across voice, chat, and social channels. Call center costs were rising faster than subscriber growth. Average handling time for common queries - bill explanation, plan changes, outage status - was 7 minutes per call.",
    approach: "A bilingual AI assistant (Arabic and English) was deployed across digital channels, trained on 24 months of call transcripts with intent classification and entity extraction. The system routes complex or escalation-required interactions to agents, while handling routine queries - bill breakdown, plan comparisons, self-service troubleshooting - autonomously end-to-end.",
    metrics: [
      { value: "60%", label: "Queries auto-resolved" },
      { value: "35%", label: "Call center cost reduction" },
      { value: "4.2/5", label: "CSAT score maintained" },
    ],
    lesson: "The highest-ROI applications of conversational AI are the ones where the answer is deterministic - bill queries, plan information, status checks. Ambiguous cases still need humans; the goal is to protect human capacity for those cases.",
  },
  {
    industry: "GOVERNMENT",
    industryKey: "government",
    title: "AI-Powered Urban Planning for a Smart City Authority",
    challenge: "A GCC smart city authority needed to optimize traffic signal timing, energy usage across public buildings, and predictive maintenance scheduling for public infrastructure - across a growing district with over 200 sensor-equipped intersections and 80 monitored buildings.",
    approach: "An IoT data ingestion pipeline aggregated sensor readings every 30 seconds. Separate models handled traffic flow prediction (LSTM time-series), energy consumption forecasting (XGBoost with weather and occupancy features), and anomaly detection for infrastructure fault prediction. A unified dashboard gave operations teams a single pane of glass across all three systems.",
    metrics: [
      { value: "20%", label: "Energy cost reduction" },
      { value: "15%", label: "Peak traffic reduction" },
      { value: "3×", label: "Faster fault detection" },
    ],
    lesson: "Smart city AI delivers the most value when the models are connected - traffic and energy optimization interact. A siloed model for each domain misses the cross-system leverage.",
  },
  {
    industry: "INSURANCE",
    industryKey: "insurance",
    title: "From Days to Hours: Automating Claims Document Processing",
    challenge: "A regional insurer was processing claims submitted as scanned documents in Arabic and English - PDFs, photos of invoices, handwritten forms. Manual review averaged 3.5 days per claim. Errors in data entry were causing payout delays and audit findings.",
    approach: "A multimodal Document AI pipeline was deployed: OCR with Arabic script support for scanned documents, vision models for handwritten form extraction, and a structured output layer that maps extracted fields directly to the claims management system schema. Confidence scoring flags low-certainty extractions for human review, while high-confidence cases flow through automatically.",
    metrics: [
      { value: "80%", label: "Faster processing time" },
      { value: "92%", label: "Extraction accuracy" },
      { value: "65%", label: "Manual review cases eliminated" },
    ],
    lesson: "The accuracy threshold for automated document processing in insurance must be set conservatively - one wrong payout is far more damaging than processing speed. Hybrid human-in-the-loop design for low-confidence cases is not a compromise; it's the right architecture.",
  },
  {
    industry: "BANKING",
    industryKey: "banking",
    title: "Shari'ah-Compliant Credit Scoring for Islamic Finance Products",
    challenge: "An Islamic bank offering Murabaha and Ijara financing products needed a credit scoring model compliant with AAOIFI standards and capable of explaining decisions to auditors. The existing system used a generic credit bureau score that couldn't account for the specific risk profile of asset-backed financing or exclude income from prohibited activities.",
    approach: "An explainable ML model (gradient boosted with SHAP attribution) was built specifically for Islamic finance products. Feature engineering excluded interest income and haram revenue sources from financial signals. The model outputs a ranked list of decision factors in Arabic and English - compatible with the bank's Shari'ah Supervisory Board audit process.",
    metrics: [
      { value: "3×", label: "Faster credit decisions" },
      { value: "25%", label: "Non-performing finance reduction" },
      { value: "100%", label: "Audit-ready decision output" },
    ],
    lesson: "Generic credit models don't meet Islamic finance requirements. The scoring logic must be Shari'ah-aware at the feature engineering level, not just the policy layer - otherwise compliance is surface-deep.",
  },
  {
    industry: "HEALTHCARE",
    industryKey: "healthcare",
    title: "Predicting Patient Readmissions to Enable Proactive Care",
    challenge: "A hospital group was seeing a 30-day readmission rate significantly above the national benchmark, with high associated costs and regulatory scrutiny. The clinical team had no systematic way to identify which discharged patients were at high readmission risk - the assessment was informal and inconsistent across departments.",
    approach: "An AutoML pipeline processed structured patient data - diagnosis codes, length of stay, comorbidities, medication lists, lab results at discharge - to predict 30-day readmission probability. High-risk patients trigger an automated care coordinator outreach within 48 hours of discharge. The model is retrained quarterly on new outcome data.",
    metrics: [
      { value: "30%", label: "Readmission rate reduction" },
      { value: "85%", label: "Prediction accuracy (AUC)" },
      { value: "48hr", label: "Proactive outreach triggered" },
    ],
    lesson: "Predictive healthcare AI creates the most impact when it's connected to an action - not just a risk score, but a care pathway that gets triggered automatically. A score no one acts on doesn't save readmissions.",
  },
];

const filterTabs: { id: Industry; label: string }[] = [
  { id: "all", label: "All Industries" },
  { id: "banking", label: "Banking" },
  { id: "telecom", label: "Telecom" },
  { id: "government", label: "Government" },
  { id: "insurance", label: "Insurance" },
  { id: "healthcare", label: "Healthcare" },
];

export const CaseStudies = (): JSX.Element => {
  const [activeFilter, setActiveFilter] = useState<Industry>("all");
  const [expanded, setExpanded] = useState<number | null>(null);

  const filtered =
    activeFilter === "all"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industryKey === activeFilter);

  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="Real-World Applications"
        title={<>How Enterprise AI Delivers Results</>}
        lede="Illustrative deployments across banking, telecoms, government, insurance, and healthcare - showing the challenge, the approach, and what changed."
        video="/videos/solutions-city.mp4"
        plainTitle
      />

      {/* Filter Tabs + Cards */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">

          {/* Filter - editorial index tabs */}
          <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3 border-b border-white/10 pb-5">
            <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
              Filter
            </span>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveFilter(tab.id); setExpanded(null); }}
                className={`group relative pb-1 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm uppercase tracking-[0.12em] transition-colors ${
                  activeFilter === tab.id ? "text-white" : "text-white/40 hover:text-white/70"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute left-0 -bottom-[21px] h-px bg-[#9b5cf6] transition-all duration-300 ${
                    activeFilter === tab.id ? "w-full shadow-[0_0_8px_rgba(155,92,246,0.8)]" : "w-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            ))}
          </div>

          {/* Dossier rows */}
          <div>
            {filtered.map((cs, i) => (
              <Reveal key={`${activeFilter}-${cs.title}`} order={Math.min(i, 4)}>
                <article className="group grid grid-cols-1 lg:grid-cols-[1fr_15rem] gap-x-16 gap-y-8 py-12 border-b border-white/10 transition-colors duration-300 hover:border-white/25">
                  <div>
                    <div className="flex items-baseline gap-5 mb-5">
                      <span
                        className="[font-family:'Satoshi-Black',Helvetica] font-black text-2xl lg:text-3xl leading-none text-transparent shrink-0"
                        style={{ WebkitTextStroke: "1px rgba(155,92,246,0.4)" }}
                        aria-hidden="true"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-[11px] uppercase tracking-[0.25em]">
                        {cs.industry}
                      </p>
                    </div>
                    <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl lg:text-3xl tracking-[-0.02em] leading-[1.15] mb-4 max-w-xl">
                      {cs.title}
                    </h4>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm lg:text-base leading-relaxed max-w-2xl">
                      {cs.challenge}
                    </p>

                    <button
                      onClick={() => setExpanded(expanded === i ? null : i)}
                      className="mt-6 inline-flex items-center gap-2 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white/85 text-sm hover:text-white transition-colors"
                    >
                      {expanded === i ? "Close the dossier" : "Open the dossier"}
                      <span className={`text-[#9b5cf6] transition-transform duration-300 ${expanded === i ? "rotate-180" : ""}`}>↓</span>
                    </button>

                    {/* Dossier body: always mounted; grid-rows 0fr→1fr animates
                        the unfold, with a slight lift + fade riding along */}
                    <div
                      className={`grid transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                        expanded === i ? "grid-rows-[1fr] opacity-100 mt-8" : "grid-rows-[0fr] opacity-0 mt-0"
                      }`}
                      aria-hidden={expanded !== i}
                    >
                      <div className="overflow-hidden">
                        <div
                          className={`flex flex-col gap-8 max-w-2xl pb-1 transition-transform duration-500 ease-out ${
                            expanded === i ? "translate-y-0" : "-translate-y-3"
                          }`}
                        >
                          <div>
                            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-3">
                              The Approach
                            </p>
                            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-sm lg:text-base leading-relaxed">
                              {cs.approach}
                            </p>
                          </div>
                          <div className="border-l-2 border-[#9b5cf6]/60 pl-6">
                            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-[11px] uppercase tracking-[0.25em] mb-3">
                              Key Lesson
                            </p>
                            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm lg:text-base leading-relaxed italic">
                              {cs.lesson}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Outcome column - measured, not boxed */}
                  <div className="lg:pt-1">
                    <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-4 lg:mb-5">
                      Outcome
                    </p>
                    <div className="flex flex-row flex-wrap gap-x-10 gap-y-5 lg:flex-col lg:gap-0 lg:divide-y lg:divide-white/10">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="lg:py-4 first:lg:pt-0 last:lg:pb-0">
                          <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl lg:text-3xl tracking-[-0.02em] leading-none tabular-nums">
                            <StatValue val={m.value} accent="#ffffff" />
                          </div>
                          <div className="[font-family:'Satoshi-Regular',Helvetica] text-white/45 text-xs mt-1.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

          <PageCTA
      title={<>Ready to Build Your Own Story?</>}
      sub={<>Tell us your most critical operational challenge. We'll map an AI approach and show you what's possible.</>}
      primary={{ label: "Request a Demo", href: "/demo" }}
    />
    </PageLayout>
  );
};
