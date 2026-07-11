import { useState } from "react";
import { EditorialRows, PageCTA, Reveal, SectionHeader } from "../../../components/page/primitives";
import { PageLayout } from "../../../components/layout/PageLayout";
import { PageHero } from "../../../components/layout/PageHero";
import { Link } from "react-router-dom";

const layers = [
  {
    num: "01",
    title: "Sovereign Data Vault",
    lead: "Trusted inputs.",
    body: "Cortex organizes decision inputs - customer data, financials, transactions, policies, and external signals - inside your infrastructure. Nothing egresses. Every source is versioned and fully traceable.",
  },
  {
    num: "02",
    title: "Adaptive Inference Router",
    lead: "Right capability, right decision.",
    body: "Not every decision needs generative AI. Cortex routes each task to rules, scoring, optimisation, or generative reasoning - choosing the right intelligence for the right decision, every time.",
  },
  {
    num: "03",
    title: "Deterministic Guardrail",
    lead: "Governance and controls.",
    body: "Every agent action passes through policy enforcement - eligibility rules, constraints, approval chains, and exception handling. No black boxes. No unilateral agent behaviour.",
  },
  {
    num: "04",
    title: "Action Bus",
    lead: "Connect to execution.",
    body: "The execution layer. Cortex connects decisions to downstream systems - core banking, CRM, payment rails, GIS engines - so agents do not just recommend, they execute.",
  },
];

const capabilityTabs = [
  {
    id: "cap-cfm",
    label: "Cognitive Mapping",
    title: "Cognitive Flux Mapping™ - How Cortex Sees Your Organization",
    body: "Cortex autonomously decomposes your operational complexity into discrete, governed agent tasks - mapping decision trees, exception paths, data dependencies, and governance checkpoints in real-time. No process documentation required. Traditional automation takes months. Cortex maps in weeks.",
  },
  {
    id: "cap-guard",
    label: "Guardrails",
    title: "Customizable Guardrails for AI Safety",
    body: "Fine-grained access management and scoped response restrictions. PII controls, input/output boundary management, and compliance enforcement for Shari'ah-compliant and regulatory policies. Every action is bounded. Every exception is logged.",
  },
  {
    id: "cap-telemetry",
    label: "Telemetry",
    title: "Real-Time Telemetry & Observability",
    body: "Real-time monitoring of every agent action - decisions made, decisions overridden, confidence scores, and latency. Every Cortex deployment ships a live telemetry dashboard for ops and compliance teams. Know what your agents are doing, at all times.",
  },
  {
    id: "cap-rl",
    label: "Recursive Learning",
    title: "Recursive Learning Loop",
    body: "Cortex agents improve with every deployment cycle. Outcome data feeds back into model evaluation, progressively sharpening decision accuracy without manual retraining cycles. The system learns from production - governed and auditable at every step.",
  },
  {
    id: "cap-persona",
    label: "Digital Persona",
    title: "Digital Persona Builder",
    body: "Encode your institution's most experienced professionals into a structured Digital Expert - mapping their judgment, heuristics, and domain logic into a governed AI persona that operates at scale. Clone expertise, not just process.",
  },
  {
    id: "cap-rag",
    label: "Citation RAG",
    title: "Citation-Based Verification for Transparent RAG",
    body: "State-of-the-art multimodal RAG with built-in citation support for comprehensive traceability. Embedded document references enhance transparency - ideal for audit-heavy sectors in banking and government.",
  },
  {
    id: "cap-route",
    label: "Model Routing",
    title: "Intelligent Model Routing - Optimal Selection for Every Task",
    body: "Dynamically directs queries to optimal LLM based on computational cost, latency, and accuracy. Maximizes efficiency and performance across large-scale enterprise deployments. No over-spend on generative compute for deterministic tasks.",
  },
  {
    id: "cap-mrm",
    label: "Model Risk",
    title: "Model Risk Management for Compliance & Interpretability",
    body: "Embedding-based evaluators; human feedback calibration; automated question generation for robust testing; and visual diagnostics for rapid model improvement. Designed for regulated MENA industries - SAMA, CBUAE, DFSA compliant.",
  },
  {
    id: "cap-json",
    label: "Document AI",
    title: "Document AI with Multimodal Guided JSON Generation",
    body: "Grounded query responses from secure, private data sources including Arabic document repositories, knowledge bases, and databases. Schema-driven JSON generation for contract summarization, compliance metric extraction, and audit-ready data structuring.",
  },
  {
    id: "cap-agent",
    label: "Agentic AI",
    title: "Autonomous Agentic AI - Execute Multi-Step Workflows",
    body: "Agents handle multi-step tasks: web research, data modeling, database access, and iterative code execution. Autonomously generate multi-page PDFs with charts, tables, and flowcharts - with source code for full transparency.",
  },
  {
    id: "cap-multi",
    label: "Multimodal",
    title: "Multimodal Audio & Vision Analysis",
    body: "Extract structured data from audio files, images, flowcharts, and handwritten documents. Arabic audio transcription and translation in dozens of languages. Vision models enable autonomous content verification.",
  },
];

const expertiseTabs = [
  {
    id: "exp-ds",
    label: "AI Expertise",
    title: "AI Engineering Expertise",
    content: (
      <ul className="list-disc pl-6 text-white/75 space-y-2 [font-family:'Satoshi-Regular',Helvetica]">
        <li>10+ years serving regulated MENA enterprises</li>
        <li>First sovereign AI platform purpose-built for the MENA region</li>
        <li>On-premise, multi-cloud and SaaS support</li>
        <li>Multiple generations of ML/AI platforms</li>
        <li>50+ certified AI engineers across regional hubs</li>
      </ul>
    ),
  },
  {
    id: "exp-llm",
    label: "LLM Models",
    title: "Leverage State-of-the-Art LLM Models",
    content: (
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
        Deploy and fine-tune leading open-source LLMs including Llama, Mistral, Falcon, and Jais (Arabic LLM) - all within your sovereign infrastructure. No data ever leaves your environment.
      </p>
    ),
  },
  {
    id: "exp-automl",
    label: "AutoML + GenAI",
    title: "Supercharge AutoML with GenAI",
    content: (
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
        Combine the precision of automated machine learning with the flexibility of generative AI. Build predictive models and GenAI applications side-by-side on a single platform - governed end-to-end by Cortex.
      </p>
    ),
  },
  {
    id: "exp-oss",
    label: "Open Source → Enterprise",
    title: "Open Source vs Enterprise",
    content: (
      <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
        Start with open-source foundations. Scale with enterprise-grade security, support, and deployment options. QuantorX provides seamless upgrade paths from community to fully managed sovereign deployments.
      </p>
    ),
  },
];

export const AIPlatform = (): JSX.Element => {
  const [activeCapTab, setActiveCapTab] = useState("cap-cfm");
  const [activeExpTab, setActiveExpTab] = useState("exp-ds");

  return (
    <PageLayout>

      {/* Hero */}
      <PageHero
        eyebrow="QuantorX Cortex™"
        title={<>The Brain Behind<br />Every Agent.</>}
        lede="Cortex is the proprietary cognitive engine that powers every QuantorX agent. It maps your operational complexity through Cognitive Flux Mapping™, trains and evaluates agent capabilities, and orchestrates execution - all inside your air-gapped infrastructure."
        video="/videos/cortex-core.mp4"
        ctas={[
          { label: "Book a Cortex Demo", href: "/demo" },
          { label: "Why QuantorX?", href: "/technology/why-quantorx", variant: "outline" },
        ]}
        align="split"
        visual={
          <div className="flex-shrink-0 flex items-center justify-center">
            <div
              className="flex items-center justify-center w-[420px] h-[420px] md:w-[480px] md:h-[480px] rounded-[40px]"
              style={{ background: "radial-gradient(ellipse at center, rgba(74,0,130,0.5) 0%, rgba(155,92,246,0.15) 40%, transparent 75%)" }}
            >
              <img
                src="/platformCube.png"
                alt="Cortex Engine"
                className="w-[340px] h-[340px] md:w-[400px] md:h-[400px] object-contain drop-shadow-[0_20px_60px_rgba(155,92,246,0.5)]"
              />
            </div>
          </div>
        }
      />

      {/* Four Layers - the architecture, printed as a stack */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="Cortex Architecture"
            title={<>Four layers.<br />One autonomous engine.</>}
            lede="Each layer ensures no agent acts without governance, no data leaves without authorization, and no decision ships without an audit trail."
            className="mb-10"
          />
          <EditorialRows rows={layers.map((l) => ({ tag: l.lead, title: l.title, body: l.body }))} />
        </div>
      </section>

      {/* Cognitive Flux Mapping */}
      <section className="bg-transparent px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              The Method
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
              Cognitive Flux Mapping™
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
              Traditional automation requires months of process documentation. Cortex autonomously decomposes your operational workflows into discrete, trainable agent tasks in real-time.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-10 gap-y-10">
            {[
              { step: "01", title: "Observe", body: "Cortex ingests your operational reality: systems, data flows, decision points, and exception paths - without requiring a single process document." },
              { step: "02", title: "Decompose", body: "Complex workflows are broken into discrete, agent-executable tasks with explicit governance checkpoints at each node. Every path mapped. Every exception accounted for." },
              { step: "03", title: "Activate", body: "Agents are trained, evaluated, and deployed against your mapped workflows - fully autonomous, fully governed, live on your infrastructure in weeks." },
            ].map((card, i) => (
              <Reveal key={card.title} order={i * 2}>
                <div className="border-t border-white/15 pt-6">
                  <span
                    className="[font-family:'Satoshi-Black',Helvetica] font-black text-4xl leading-none block mb-4"
                    style={{ WebkitTextStroke: "1px rgba(155,92,246,0.45)", color: "transparent" }}
                    aria-hidden="true"
                  >
                    {card.step}
                  </span>
                  <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-3">{card.title}</h3>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/55 text-sm">{card.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Core Capabilities
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              What Cortex Runs Under the Hood
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {capabilityTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCapTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeCapTab === tab.id
                    ? "bg-[#4a0082] text-white"
                    : "bg-white/5 text-white/75 border border-white/10 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {capabilityTabs
            .filter((t) => t.id === activeCapTab)
            .map((tab) => (
              <div key={tab.id} className="glass-panel glass-hover rounded-[20px] p-8">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1px] text-white text-2xl mb-4">{tab.title}</h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">{tab.body}</p>
              </div>
            ))}
        </div>
      </section>

      {/* Security & Sovereignty */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Security &amp; Compliance
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Engineered for Absolute Sovereignty.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { title: "Air-Gapped Primary Architecture", body: "Cortex is designed air-gapped first. Your data, your models, your agent logic - nothing leaves your infrastructure. Complete network isolation for sovereign entities." },
              { title: "Role-Based Controls", body: "People see and do only what their role allows. Granular access control across every workflow, dataset, and agent action within Cortex." },
              { title: "Decision Auditability", body: "Every decision can be reviewed, explained, and governed. Complete decision trail for regulators and management - Cortex stores every action, every override, every outcome." },
              { title: "Quant-Grade Regulatory Compliance", body: "Built to comply with SAMA, Central Bank of Egypt, DFSA, Basel III guidelines, and MENA data residency requirements from day one." },
            ].map((item) => (
              <div key={item.title} className="glass-panel glass-hover rounded-[20px] p-6 hover:bg-[#ffffff12] transition-colors">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1px] text-white text-lg mb-3">{item.title}</h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Expertise */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Platform Expertise
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Built by MENA's AI Engineering Team.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {expertiseTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveExpTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeExpTab === tab.id
                    ? "bg-[#4a0082] text-white"
                    : "bg-white/5 text-white/75 border border-white/10 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {expertiseTabs
            .filter((t) => t.id === activeExpTab)
            .map((tab) => (
              <div key={tab.id} className="glass-panel glass-hover rounded-[20px] p-8">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1px] text-white text-2xl mb-4">{tab.title}</h3>
                {tab.content}
              </div>
            ))}
        </div>
      </section>

          <PageCTA
      title={<>Your Infrastructure Is Ready.<br />Is Your Intelligence?</>}
      sub={<>Schedule a Cortex architecture overview and see how Cognitive Flux Mapping maps your most complex workflows - live, on your data.</>}
      primary={{ label: "Book a Cortex Demo", href: "/demo" }}
    />

    </PageLayout>
  );
};
