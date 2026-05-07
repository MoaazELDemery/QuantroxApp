import { useState } from "react";
import { PageLayout } from "../../components/layout/PageLayout";
import { Link } from "react-router-dom";

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
    lesson: "A model that reduces false positives is often more valuable operationally than one that catches more fraud — the customer relationship cost of a declined legitimate transaction is significant and underestimated.",
  },
  {
    industry: "TELECOM",
    industryKey: "telecom",
    title: "Automating 60% of Customer Inquiries with Bilingual AI",
    challenge: "A major GCC telecoms operator was handling over 50,000 customer interactions per day across voice, chat, and social channels. Call center costs were rising faster than subscriber growth. Average handling time for common queries — bill explanation, plan changes, outage status — was 7 minutes per call.",
    approach: "A bilingual AI assistant (Arabic and English) was deployed across digital channels, trained on 24 months of call transcripts with intent classification and entity extraction. The system routes complex or escalation-required interactions to agents, while handling routine queries — bill breakdown, plan comparisons, self-service troubleshooting — autonomously end-to-end.",
    metrics: [
      { value: "60%", label: "Queries auto-resolved" },
      { value: "35%", label: "Call center cost reduction" },
      { value: "4.2/5", label: "CSAT score maintained" },
    ],
    lesson: "The highest-ROI applications of conversational AI are the ones where the answer is deterministic — bill queries, plan information, status checks. Ambiguous cases still need humans; the goal is to protect human capacity for those cases.",
  },
  {
    industry: "GOVERNMENT",
    industryKey: "government",
    title: "AI-Powered Urban Planning for a Smart City Authority",
    challenge: "A GCC smart city authority needed to optimize traffic signal timing, energy usage across public buildings, and predictive maintenance scheduling for public infrastructure — across a growing district with over 200 sensor-equipped intersections and 80 monitored buildings.",
    approach: "An IoT data ingestion pipeline aggregated sensor readings every 30 seconds. Separate models handled traffic flow prediction (LSTM time-series), energy consumption forecasting (XGBoost with weather and occupancy features), and anomaly detection for infrastructure fault prediction. A unified dashboard gave operations teams a single pane of glass across all three systems.",
    metrics: [
      { value: "20%", label: "Energy cost reduction" },
      { value: "15%", label: "Peak traffic reduction" },
      { value: "3×", label: "Faster fault detection" },
    ],
    lesson: "Smart city AI delivers the most value when the models are connected — traffic and energy optimization interact. A siloed model for each domain misses the cross-system leverage.",
  },
  {
    industry: "INSURANCE",
    industryKey: "insurance",
    title: "From Days to Hours: Automating Claims Document Processing",
    challenge: "A regional insurer was processing claims submitted as scanned documents in Arabic and English — PDFs, photos of invoices, handwritten forms. Manual review averaged 3.5 days per claim. Errors in data entry were causing payout delays and audit findings.",
    approach: "A multimodal Document AI pipeline was deployed: OCR with Arabic script support for scanned documents, vision models for handwritten form extraction, and a structured output layer that maps extracted fields directly to the claims management system schema. Confidence scoring flags low-certainty extractions for human review, while high-confidence cases flow through automatically.",
    metrics: [
      { value: "80%", label: "Faster processing time" },
      { value: "92%", label: "Extraction accuracy" },
      { value: "65%", label: "Manual review cases eliminated" },
    ],
    lesson: "The accuracy threshold for automated document processing in insurance must be set conservatively — one wrong payout is far more damaging than processing speed. Hybrid human-in-the-loop design for low-confidence cases is not a compromise; it's the right architecture.",
  },
  {
    industry: "BANKING",
    industryKey: "banking",
    title: "Shari'ah-Compliant Credit Scoring for Islamic Finance Products",
    challenge: "An Islamic bank offering Murabaha and Ijara financing products needed a credit scoring model compliant with AAOIFI standards and capable of explaining decisions to auditors. The existing system used a generic credit bureau score that couldn't account for the specific risk profile of asset-backed financing or exclude income from prohibited activities.",
    approach: "An explainable ML model (gradient boosted with SHAP attribution) was built specifically for Islamic finance products. Feature engineering excluded interest income and haram revenue sources from financial signals. The model outputs a ranked list of decision factors in Arabic and English — compatible with the bank's Shari'ah Supervisory Board audit process.",
    metrics: [
      { value: "3×", label: "Faster credit decisions" },
      { value: "25%", label: "Non-performing finance reduction" },
      { value: "100%", label: "Audit-ready decision output" },
    ],
    lesson: "Generic credit models don't meet Islamic finance requirements. The scoring logic must be Shari'ah-aware at the feature engineering level, not just the policy layer — otherwise compliance is surface-deep.",
  },
  {
    industry: "HEALTHCARE",
    industryKey: "healthcare",
    title: "Predicting Patient Readmissions to Enable Proactive Care",
    challenge: "A hospital group was seeing a 30-day readmission rate significantly above the national benchmark, with high associated costs and regulatory scrutiny. The clinical team had no systematic way to identify which discharged patients were at high readmission risk — the assessment was informal and inconsistent across departments.",
    approach: "An AutoML pipeline processed structured patient data — diagnosis codes, length of stay, comorbidities, medication lists, lab results at discharge — to predict 30-day readmission probability. High-risk patients trigger an automated care coordinator outreach within 48 hours of discharge. The model is retrained quarterly on new outcome data.",
    metrics: [
      { value: "30%", label: "Readmission rate reduction" },
      { value: "85%", label: "Prediction accuracy (AUC)" },
      { value: "48hr", label: "Proactive outreach triggered" },
    ],
    lesson: "Predictive healthcare AI creates the most impact when it's connected to an action — not just a risk score, but a care pathway that gets triggered automatically. A score no one acts on doesn't save readmissions.",
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
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-16 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Real-World Applications
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl mx-auto">
          How Enterprise AI Delivers Results
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          Illustrative deployments across banking, telecoms, government, insurance, and healthcare —
          showing the challenge, the approach, and what changed.
        </p>
      </section>

      {/* Filter Tabs + Cards */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => { setActiveFilter(tab.id); setExpanded(null); }}
                className={`px-5 py-2 rounded-[32px] text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeFilter === tab.id
                    ? "bg-[#4a0082] text-white"
                    : "bg-[#ffffff0a] text-white/75 border border-white/10 hover:bg-[#ffffff12]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards */}
          <div className="flex flex-col gap-5">
            {filtered.map((cs, i) => (
              <article
                key={i}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 overflow-hidden hover:border-[#9b5cf6]/20 transition-all"
              >
                {/* Card header — always visible */}
                <div className="p-6 flex flex-col gap-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.15em]">
                      {cs.industry}
                    </p>
                    <div className="flex gap-4">
                      {cs.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg leading-none">{m.value}</div>
                          <div className="text-white/75 text-[10px] [font-family:'Satoshi-Regular',Helvetica] mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl tracking-[-1.80px] leading-snug">
                    {cs.title}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {cs.challenge}
                  </p>

                  <button
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    className="self-start text-[#9b5cf6] text-sm [font-family:'Satoshi-Medium',Helvetica] hover:underline"
                  >
                    {expanded === i ? "Show less ↑" : "See approach & lesson →"}
                  </button>
                </div>

                {/* Expanded detail */}
                {expanded === i && (
                  <div className="border-t border-white/10 p-6 flex flex-col gap-6">
                    <div>
                      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-widest mb-2">The Approach</p>
                      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{cs.approach}</p>
                    </div>
                    <div className="bg-[#4a0082]/12 border border-[#9b5cf6]/20 rounded-[12px] p-4">
                      <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-widest mb-2">Key Lesson</p>
                      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/80 text-sm leading-relaxed italic">{cs.lesson}</p>
                    </div>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-7xl mx-auto bg-[linear-gradient(135deg,rgba(74,0,130,0.4)_0%,rgba(5,17,30,0.8)_100%)] rounded-[20px] border border-[#9b5cf6]/20 p-12 text-center">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] mb-4">
            Ready to Build Your Own Story?
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed mb-8 max-w-xl mx-auto">
            Tell us your most critical operational challenge. We'll map an AI approach and show you what's possible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
            >
              Request a Demo
            </Link>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center border border-white/30 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/5 transition-colors"
            >
              Read More Insights
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
