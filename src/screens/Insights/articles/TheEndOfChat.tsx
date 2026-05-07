import { Link } from "react-router-dom";
import { PageLayout } from "../../../components/layout/PageLayout";

export const TheEndOfChat = (): JSX.Element => (
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
            AI Architecture
          </span>
          <span className="text-white/75 text-xs [font-family:'Satoshi-Regular',Helvetica]">8 min read</span>
        </div>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl sm:text-5xl tracking-[-1.80px] leading-tight mb-6">
          The End of "Chat":<br />Why Chatbots Fail in Regulated Operations
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed">
          Chat interfaces were a useful starting point for enterprise AI. But in banking, insurance, and government,
          the next step isn't a better chatbot — it's a completely different paradigm.
        </p>
      </div>
    </section>

    {/* Body */}
    <article className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-12">

        {/* Section 1 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Promise vs. the Reality
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            When generative AI arrived in enterprise settings, the first instinct was to build chat interfaces.
            Ask a question, get an answer. Simple enough for a pilot demo. Completely insufficient for production.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            A chat interface is single-turn by nature. It answers the question you asked. It does not
            initiate the next step, update the system of record, file the compliance report, or escalate
            to the right person when something falls outside policy. Those are workflow tasks — and workflows
            are not conversations.
          </p>
          <div className="bg-[#ffffff08] border-l-4 border-[#9b5cf6] rounded-r-[12px] p-5 my-2">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-base leading-relaxed italic">
              "A compliance officer doesn't want to chat about regulations. They want the regulation applied —
              to this transaction, right now, with a complete audit trail."
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What Regulated Industries Actually Need
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Regulated operations — banking, insurance, government, healthcare — share three requirements
            that chat interfaces fundamentally cannot meet:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-2">
            {[
              { title: "Audit Trails", body: "Every AI-assisted decision must be traceable — what data was used, what model produced it, what policy governed it, who reviewed it." },
              { title: "Multi-Step Execution", body: "A credit decision isn't one action. It's data retrieval, policy check, scoring, documentation, and handoff. Chat handles step one." },
              { title: "Deterministic Outputs", body: "Regulated operations cannot accept probabilistic answers to yes/no questions. Approval or rejection must map to an auditable rule." },
            ].map((item) => (
              <div key={item.title} className="bg-[#ffffff08] border border-white/10 rounded-[12px] p-5">
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-sm mb-2">{item.title}</h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            Agentic AI: The Replacement Architecture
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            An AI agent doesn't wait to be asked. It monitors the input — a new loan application, a flagged transaction,
            an incoming document — and executes the full workflow autonomously: retrieve context, apply policy,
            generate documentation, and hand off with evidence.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            The key distinction is orchestration. A single LLM call produces text. An agent orchestrates
            multiple tools — database queries, document retrieval, calculation engines, system writes —
            in sequence, with conditional logic at each step. That's what makes it useful for real operations.
          </p>

          {/* Comparison visual */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-2">
            <div className="bg-[#ffffff06] border border-white/10 rounded-[16px] p-6">
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white/75 text-sm mb-4">Chat Interface</h4>
              {["User types a question", "LLM generates a text answer", "User reads the answer", "User decides what to do next", "No system is updated"].map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 text-sm text-white/60 [font-family:'Satoshi-Regular',Helvetica]">
                  <span className="text-red-400 mt-0.5">✗</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
            <div className="glass border border-[#9b5cf6]/20 rounded-[16px] p-6">
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-sm mb-4">Agentic Workflow</h4>
              {["Event triggers the agent (new document, transaction)", "Agent retrieves relevant policy and context", "Agent applies rules and scores the case", "Agent writes output to system of record", "Agent generates audit-ready documentation"].map((step, i) => (
                <div key={i} className="flex items-start gap-3 py-2 border-b border-white/5 text-sm text-white/80 [font-family:'Satoshi-Regular',Helvetica]">
                  <span className="text-green-400 mt-0.5">✓</span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            What This Looks Like in Practice
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Consider a KYC (Know Your Customer) workflow at a retail bank. The traditional process involves
            a compliance analyst manually reviewing uploaded documents, cross-referencing against sanction lists,
            drafting a risk memo, and routing to a senior officer. Average time: 2–3 business days.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            An agentic AI handling the same workflow: ingests documents via multimodal Document AI,
            extracts structured entities, cross-references sanctioned persons lists in real-time,
            applies the bank's internal risk scoring policy, generates the compliance memo in Arabic and English,
            and flags edge cases for human review. Average time: under 12 minutes. Human effort focused entirely
            on exceptions, not routine cases.
          </p>
          <div className="bg-[#4a0082]/15 border border-[#9b5cf6]/25 rounded-[16px] p-6 flex flex-col gap-4">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-widest">Key Numbers</p>
            <div className="grid grid-cols-3 gap-4">
              {[
                { val: "12 min", label: "vs. 2-3 days manual" },
                { val: "90%+", label: "Routine cases automated" },
                { val: "100%", label: "Audit trail coverage" },
              ].map((stat) => (
                <div key={stat.val} className="text-center">
                  <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-2xl text-white mb-1">{stat.val}</div>
                  <p className="text-xs text-white/75 [font-family:'Satoshi-Regular',Helvetica]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 5 - Takeaway */}
        <section className="flex flex-col gap-4">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl tracking-[-1.80px]">
            The Practical Takeaway
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            Chat interfaces were a useful forcing function — they pushed enterprises to think about what
            information workers actually need. But the right answer to "what information do you need"
            in a regulated business is not a better answer. It's a workflow that produces the outcome without
            requiring a human to be in the loop for every step.
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base leading-relaxed">
            The enterprises moving fastest on AI right now are not the ones with the best chatbots.
            They're the ones that identified two or three high-volume, rule-governed workflows —
            onboarding, claims review, transaction monitoring — and replaced the manual steps with agents
            that execute, document, and hand off. That's where the leverage is.
          </p>
        </section>

        {/* CTA */}
        <div className="border-t border-white/10 pt-10 flex flex-col sm:flex-row gap-4 items-start">
          <Link
            to="/demo"
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            See Agentic AI in Action
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
