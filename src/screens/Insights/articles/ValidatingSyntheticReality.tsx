import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

export const ValidatingSyntheticReality = (): JSX.Element => (
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
            AI Deployment
          </span>
          <span className="text-white/75 text-xs [font-family:'Satoshi-Regular',Helvetica]">6 min read</span>
        </div>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl tracking-[-1.80px] leading-tight mb-6">
          Validating in Synthetic Reality:<br />How to Test AI Before It Goes Live
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed">
          You can't test a fraud model on real transactions without consequences.
          You can't run a credit scoring pilot on live applicants ethically.
          Synthetic validation environments solve this - and they're becoming a production requirement.
        </p>
      </div>
    </section>

    <article className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Section 1 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Testing Paradox in Regulated AI
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            In software development, you test before you ship. In AI for regulated industries, testing is the problem.
            Your most valuable test cases - real fraud events, real credit defaults, real compliance breaches -
            are exactly the data you cannot use freely. They're sensitive, subject to data residency rules,
            and in many cases involve customers who never consented to being part of a model experiment.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            The result is a dangerous gap: AI models that have been trained on historical data but never
            properly stress-tested on the edge cases that actually break them. Synthetic validation environments
            close that gap without creating regulatory exposure.
          </p>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What Synthetic Data Is (and Isn't)
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Synthetic data is machine-generated data that statistically replicates the properties of real data -
            its distributions, correlations, edge cases, and anomalies - without containing any real individuals'
            information. A synthetic transaction dataset looks behaviorally identical to a real one,
            passes the same statistical tests, and can contain deliberate fraud scenarios at any frequency you choose.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#ffffff06] border border-white/10 rounded-[12px] p-5">
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/75 text-sm mb-3">What It Preserves</h4>
              {["Statistical distributions of real data", "Correlations between variables", "Seasonal patterns and cyclicality", "Rare event rates (fraud, default)", "Class imbalance characteristics"].map((item) => (
                <div key={item} className="flex items-start gap-2 py-1.5 text-sm text-white/65 [font-family:'Satoshi-Regular',Helvetica]">
                  <span className="text-green-400 mt-0.5 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#ffffff06] border border-white/10 rounded-[12px] p-5">
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/75 text-sm mb-3">What It Removes</h4>
              {["Real customer identities", "Actual account numbers or PII", "Specific transaction references", "Real-world regulatory exposure", "Privacy risk for data subjects"].map((item) => (
                <div key={item} className="flex items-start gap-2 py-1.5 text-sm text-white/65 [font-family:'Satoshi-Regular',Helvetica]">
                  <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Four Stages of Safe AI Deployment
          </h2>
          <div className="flex flex-col gap-4">
            {[
              {
                stage: "01",
                title: "Synthetic Environment Testing",
                body: "Build a replica of your production data environment using synthetic data. Run the model against deliberately crafted scenarios - high fraud rates, unusual transaction patterns, edge cases that your historical data may have had only a handful of examples of. Measure precision, recall, and false positive rates under controlled conditions.",
              },
              {
                stage: "02",
                title: "Shadow Mode Deployment",
                body: "Run the AI model in parallel with your existing process. Every real decision goes through both the human process and the AI model. The AI's output is recorded but has no operational effect. This gives you a ground truth comparison: what would have happened if the AI had been running? How often did it agree with the human? Where did it disagree, and who was right?",
              },
              {
                stage: "03",
                title: "Constrained Live Pilot",
                body: "Apply the model to a defined subset of live decisions - lower-risk applications, a specific product type, a single branch or region. Define a success threshold before you start: if precision stays above X and false positive rate stays below Y after Z decisions, proceed to broader rollout. If not, you've learned without systemic exposure.",
              },
              {
                stage: "04",
                title: "Staged Rollout with Drift Monitoring",
                body: "Expand the model progressively, with continuous monitoring for performance drift. Models degrade when the data distribution they're running on shifts away from the distribution they were trained on. An early warning system - tracking feature drift, prediction confidence, and outcome rates - catches this before it becomes a problem.",
              },
            ].map((step, i) => (
              <div key={step.stage} className={`bg-[#ffffff08] border border-white/10 rounded-[16px] p-6 ${i < 3 ? "border-b border-white/10" : ""}`}>
                <div className="flex items-start gap-4">
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-3xl text-[#9b5cf6]/30 leading-none flex-shrink-0">{step.stage}</span>
                  <div>
                    <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base mb-2">{step.title}</h4>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Regulator Conversation
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            SAMA, CBUAE, and financial regulators across MENA increasingly expect to see model validation
            documentation before AI is deployed in regulated decisions. That documentation needs to show:
            what data the model was trained on, what tests were run, what the failure modes are,
            and what monitoring is in place post-deployment.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            A synthetic validation environment provides exactly that paper trail. You can show the regulator
            the scenarios you tested, the edge cases you deliberately introduced, and the performance
            thresholds that triggered each stage gate. That's not just good practice - in many product categories,
            it's becoming a licensing prerequisite.
          </p>
          <div className="bg-[#ffffff08] border-l-4 border-[#9b5cf6] rounded-r-[12px] p-5">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base leading-relaxed italic">
              "The regulator doesn't want to know that your model works. They want to know how you know
              it works - and what you'll do when it stops."
            </p>
          </div>
        </section>

        {/* CTA */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 items-start">
          <Link
            to="/technology/ai-platform"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Explore QuantorX CORTEX™
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
