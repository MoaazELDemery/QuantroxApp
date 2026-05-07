import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

export const AlternativeCreditScoring = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-6">
          <Link to="/insights" className="text-[#9b5cf6] text-sm [font-family:'Satoshi-Medium',Helvetica] hover:underline">
            ← Insights
          </Link>
          <span className="text-white/20">·</span>
          <span className="bg-[#4a0082]/30 border border-[#9b5cf6]/30 text-[#9b5cf6] text-xs px-3 py-1 rounded-full [font-family:'Satoshi-Medium',Helvetica]">
            Credit & Risk
          </span>
          <span className="text-white/75 text-xs [font-family:'Satoshi-Regular',Helvetica]">7 min read</span>
        </div>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl tracking-[-1.80px] leading-tight mb-6">
          Alternative Credit Scoring:<br />Reaching the SMEs the Bureau Misses
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed">
          More than half of MENA's small businesses are underserved by traditional credit systems.
          Not because they're bad credit risks — because the bureau has never seen them.
          Machine learning changes that equation.
        </p>
      </div>
    </section>

    {/* Body */}
    <article className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Section 1 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Thin-File Problem
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Traditional credit bureaus work well for individuals and large corporates who have been
            borrowing for years — mortgages, credit cards, trade lines. For a five-year-old logistics SME
            or a first-generation retail entrepreneur, the bureau file is often empty or minimal.
            No score. No history. No lending.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            This is the thin-file problem. It's structural — bureaus can only score what they can see,
            and for much of the MENA SME economy, there's nothing to see. The result is a credit gap:
            businesses that are genuinely creditworthy get no access to capital, and banks leave
            profitable lending on the table because their models can't make the call.
          </p>
          <div className="bg-[#ffffff08] border-l-4 border-[#9b5cf6] rounded-r-[12px] p-5 my-2">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base leading-relaxed italic">
              "The SME doesn't have a credit score. But they've processed 3,000 invoices in 18 months,
              maintained 45-day average payment cycles, and never bounced a supplier payment.
              That's a creditworthy business — the bureau just can't see it."
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What Alternative Data Looks Like
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Alternative credit models don't replace bureau data — they supplement it, or substitute for it
            when the bureau is silent. The signals come from operating behavior rather than borrowing history:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { category: "Cash Flow Signals", items: ["Transaction velocity (daily, weekly, seasonal patterns)", "Payroll regularity and payroll-to-revenue ratio", "Supplier payment timing and consistency"] },
              { category: "Trade & Invoice Data", items: ["Invoice frequency, average deal size, customer concentration", "Days Sales Outstanding (DSO) trends", "Ratio of returning customers to new customers"] },
              { category: "Digital Footprint", items: ["E-commerce platform transaction history", "Digital wallet inflows and outflows", "Utility and telecoms payment history"] },
              { category: "Behavioral Signals", items: ["Bank account age and usage frequency", "Number of active business relationships", "Overdraft frequency and duration"] },
            ].map((group) => (
              <div key={group.category} className="bg-[#ffffff08] border border-white/10 rounded-[12px] p-5">
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-sm mb-3">{group.category}</h4>
                <ul className="flex flex-col gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-white/75 [font-family:'Satoshi-Regular',Helvetica]">
                      <span className="text-[#9b5cf6] mt-0.5 flex-shrink-0">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Explainability Requirement
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            In MENA's regulated lending environment, a model that produces a score without explanation
            is unusable. SAMA and CBUAE both require that credit decisions be explainable to the customer
            and auditable by the regulator. "The model said no" is not an acceptable reason for decline.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            This is why explainable ML techniques — gradient boosted trees with SHAP attribution, logistic
            regression ensembles, rule-based hybrid models — are the workhorses of production credit scoring,
            not black-box deep learning. Every score must come with a ranked list of factors: "primary reason
            for decline: high customer concentration in single buyer; secondary: DSO trending up for 3 consecutive quarters."
          </p>
          <div className="bg-[#4a0082]/15 border border-[#9b5cf6]/25 rounded-[16px] p-6">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-widest mb-4">Explainability in Practice</p>
            <div className="flex flex-col gap-3">
              {[
                { label: "Customer Concentration Risk", pct: 78 },
                { label: "DSO Trend (3-month worsening)", pct: 62 },
                { label: "Payroll Irregularity", pct: 45 },
                { label: "Invoice Frequency Drop", pct: 30 },
              ].map((factor) => (
                <div key={factor.label} className="flex flex-col gap-1">
                  <div className="flex justify-between text-xs [font-family:'Satoshi-Medium',Helvetica]">
                    <span className="text-white/80">{factor.label}</span>
                    <span className="text-[#9b5cf6]">{factor.pct}%</span>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-1.5">
                    <div
                      className="bg-[#9b5cf6] h-1.5 rounded-full transition-all"
                      style={{ width: `${factor.pct}%` }}
                    />
                  </div>
                </div>
              ))}
              <p className="text-xs text-white/75 mt-1 [font-family:'Satoshi-Regular',Helvetica]">
                Illustrative SHAP attribution — relative feature importance for a sample decline decision.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            Shari'ah Considerations
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            For Islamic finance products — Murabaha, Ijara, Musharaka — the credit scoring model must
            account for the structure of the underlying product, not just the borrower's default probability.
            The profit rate is fixed at origination; the risk model must therefore price risk accurately
            at that point, because unlike a conventional loan, the rate cannot be adjusted post-origination.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Additionally, income derived from prohibited activities (interest income, certain commodities)
            must be excluded from revenue signals. Building a compliant scoring model means the feature
            engineering pipeline itself must be Shari'ah-aware — not just the policy layer.
          </p>
        </section>

        {/* Section 5 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What Gets Better
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { val: "3×", label: "More SMEs scored vs. bureau-only approach" },
              { val: "25%", label: "Reduction in default rates on alternative-scored book" },
              { val: "60%", label: "Faster decision time vs. manual underwriting" },
            ].map((stat) => (
              <div key={stat.val} className="bg-[#ffffff08] border border-white/10 rounded-[12px] p-5 text-center">
                <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-3xl text-[#9b5cf6] mb-2">{stat.val}</div>
                <p className="text-xs text-white/75 [font-family:'Satoshi-Regular',Helvetica] leading-relaxed">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
            Figures based on representative outcomes from alternative scoring implementations in the MENA region.
            Results vary by data availability, product type, and portfolio composition.
          </p>
        </section>

        {/* CTA */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 items-start">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Talk to Our Credit AI Team
          </Link>
          <Link
            to="/insights"
            className="inline-flex items-center justify-center border border-white/30 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/5 transition-colors"
          >
            More Insights
          </Link>
        </div>

      </div>
    </article>
  </PageLayout>
);
