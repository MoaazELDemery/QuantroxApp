import { useState } from "react";
import { PageLayout } from "../../../components/layout/PageLayout";
import { Link } from "react-router-dom";

const tabsData = [
  {
    id: "ft-json",
    label: "Document AI",
    title: "Document AI with Multimodal Guided JSON Generation",
    body: "Grounded query responses from private data sources — document repositories, knowledge bases, and databases — using advanced vector embeddings. Built-in Document AI supports schema-driven JSON generation ideal for contract summarisation, compliance extraction, and audit-ready data structuring. Fully supports Arabic and English documents.",
  },
  {
    id: "ft-multi",
    label: "Multimodal",
    title: "Multimodal Audio & Vision Analysis",
    body: "Extract structured data from audio files, images, flowcharts, and handwritten documents. Audio models transcribe and translate recordings in Arabic and dozens of languages. Vision models enable autonomous content verification by AI agents.",
  },
  {
    id: "ft-code",
    label: "Code Assistant",
    title: "Coding Assistant — Rapid Prototyping & Development",
    body: "Generate starter code and scaffolding for new projects. Code completion, documentation, and optimisation suggestions across all major programming languages.",
  },
  {
    id: "ft-agent",
    label: "Agentic AI",
    title: "Autonomous Agentic AI — Multi-Step Workflows",
    body: "Execute multi-step tasks autonomously: web research, data modelling, database access, and iterative code execution. Generate multi-page PDFs with charts, tables, and flowcharts from real-time data — with full source code transparency.",
  },
  {
    id: "ft-rag",
    label: "Citation RAG",
    title: "Citation-Based RAG for Transparent Retrieval",
    body: "State-of-the-art multimodal RAG with built-in citation support. Comprehensive traceability for AI-generated responses with embedded document references — ideal for audit-heavy sectors.",
  },
  {
    id: "ft-guard",
    label: "Guardrails",
    title: "Customisable Guardrails for AI Safety",
    body: "Fine-grained access management and scoped response restrictions. PII controls, input/output boundary management, and compliance with enterprise and Shari'ah-based policies.",
  },
  {
    id: "ft-route",
    label: "Model Routing",
    title: "Intelligent Model Routing",
    body: "Dynamically directs queries to the most suitable LLM based on computational cost, latency, and accuracy. Maximises efficiency across large-scale deployments.",
  },
  {
    id: "ft-mrm",
    label: "MRM",
    title: "Model Risk Management",
    body: "Embedding-based metrics, human feedback calibration, automated question generation for testing, and visual diagnostics for rapid model improvement.",
  },
];

export const WhyQuantorX = (): JSX.Element => {
  const [activeTab, setActiveTab] = useState("ft-json");

  return (
    <PageLayout>
      {/* Hero */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#4a0082]/20 border border-[#9b5cf6]/40 text-[#9b5cf6] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Cognitive Mapping™  ·  Proprietary Technology
          </div>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/70 text-lg max-w-xl mx-auto mb-4 italic">
            Map the workflow. Encode the expertise. Deploy the brain.
          </p>
          <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-aurora text-4xl sm:text-5xl lg:text-6xl mb-6">
            We Don't Install AI.<br />We Clone Expertise.
          </h1>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/90 text-xl max-w-2xl mx-auto mb-4">
            QuantorX Cognitive Mapping™ is the science of walking into your business, learning every workflow end-to-end — the rules, the exceptions, the "what could go wrong" — and wiring that intelligence into a <strong>Digital Expert</strong> that doesn't just answer questions. It does the job. With clear success criteria. With clear failure criteria. Not a chatbot. <strong>A brain built to perform.</strong>
          </p>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/65 max-w-xl mx-auto mb-6">
            Like mapping the nodes of a mind — every decision path, every dependency, every edge case — connected into one live, evolving intelligence model that is purpose-built for your industry and your way of doing things.
          </p>
          <div className="flex gap-5 justify-center flex-wrap mb-6 opacity-70 text-xs font-semibold tracking-widest uppercase text-white/60">
            <span>ISO 27001</span><span>·</span><span>SOC 2 Type II</span><span>·</span><span>UAE PDPL</span><span>·</span><span>KSA PDPL</span><span>·</span><span>Air-Gapped Ready</span>
          </div>
          <div className="flex gap-4 justify-center flex-wrap mt-6">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors text-base"
            >
              Build Your Digital Expert
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors text-base"
            >
              See How It Works
            </a>
          </div>
          <p className="text-center mt-5 text-sm text-white/55">
            A leading GCC bank cloned its chief compliance officer in 3 weeks. Zero data left the building.
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="bg-transparent px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              The $64 Billion Problem
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
              Your Organisation's Biggest Risk Isn't Cyber Threats.<br />It's Knowledge Walking Out the Door.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/80 text-lg max-w-2xl mx-auto">
              Every enterprise runs on institutional knowledge — the tribal rules, expert judgements, and context your people carry in their heads. When they retire, resign, or leave, it disappears. Generic AI cannot replace it. Only <strong className="text-[#9b5cf6]">Cognitive Mapping™</strong> can.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                title: "Expert Retirement & Knowledge Loss",
                body: "A senior engineer retires after 25 years. His decisions, shortcuts, and judgement calls — gone overnight. Onboarding a replacement takes 2–3 years. With Cognitive Mapping™, it takes weeks.",
              },
              {
                title: "Inconsistent Processes Across Teams",
                body: "Every organisation has a 'right way' and everyone has their own interpretation of it. Cognitive Mapping™ captures the authoritative version — from the people who define it — and makes it consistent at scale.",
              },
              {
                title: "AI That Doesn't Know Your Business",
                body: "Generic LLMs are trained on the internet, not on your policies, your standards, or your industry context. A Digital Expert built on Cognitive Mapping™ knows your business — not the world's.",
              },
            ].map((item) => (
              <div key={item.title} className="border-l-4 border-[#4a0082] pl-5">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base mb-2">
                  {item.title}
                </h3>
                <p
                  className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/65 text-sm"
                  dangerouslySetInnerHTML={{ __html: item.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-[#4a0082]/20 border border-[#9b5cf6]/40 text-[#9b5cf6] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
              Cognitive Mapping™
            </div>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
              Requirement Gathering Is Dead.<br />We Build Brains.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-lg max-w-2xl mx-auto">
              Traditional AI projects start with a requirements document. QuantorX starts with a conversation. We sit with your experts, follow how they think, and encode that intelligence into an AI model that works exactly the way they do — preserving your institutional DNA at every step.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 border border-white/10 rounded-[20px] overflow-hidden">
            {[
              {
                num: "01",
                tag: "Walk In",
                title: "We Embed With Your Experts",
                body: "Our cognitive engineers spend focused time with your subject matter experts — compliance officers, senior engineers, top analysts, and decision-makers. We don't hand them a form. We observe, ask, and map how they actually think and work.",
              },
              {
                num: "02",
                tag: "Build the Brain",
                title: "We Map the Intelligence",
                body: "Using our proprietary Cognitive Mapping™ framework, we translate human expertise into a structured intelligence model — capturing reasoning patterns, decision trees, institutional rules, exceptions, and your company's unique standards. This is the Brain.",
              },
              {
                num: "03",
                tag: "Deploy the Expert",
                title: "You Get Your Digital Expert",
                body: "The Digital Expert is deployed inside your infrastructure — on-premise, sovereign, and air-gapped. It answers in Arabic and English. It never forgets, never resigns, and never shares your knowledge outside your walls. You walk away with a Brain. Not a chatbot.",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className={`bg-[#ffffff0a] p-8 hover:bg-[#ffffff12] transition-colors ${i < 2 ? "border-r border-white/10" : ""}`}
              >
                <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-5xl text-[#00c9a7]/18 leading-none mb-4">
                  {step.num}
                </div>
                <span className="inline-block bg-[#4a0082] text-white text-xs font-bold tracking-widest uppercase px-2 py-1 rounded mb-3">
                  {step.tag}
                </span>
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-2">
                  {step.title}
                </h3>
                <p
                  className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm"
                  dangerouslySetInnerHTML={{ __html: step.body }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Expert */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-br from-[#4a0082] to-[#05111e] rounded-[20px] p-10 lg:p-16 relative overflow-hidden">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3">
              The Outcome
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-3xl sm:text-4xl mb-4">
              Meet Your Digital Expert.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/80 text-lg mb-8 max-w-3xl">
              A Digital Expert is not a chatbot. It is not a search engine. It is an AI model built from the ground up to mirror how your best people work — encoded with their knowledge, aligned to your standards, and sovereign within your organisation.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  title: "It Never Forgets. Not Once.",
                  body: "Your Digital Expert holds every policy, every procedure, every exception — exactly as your best people defined them. It does not misquote. It does not guess. It does not approximate.",
                },
                {
                  title: "It Enforces Your Rules. Not Someone Else's.",
                  body: "Your Digital Expert knows your security posture, your approval thresholds, your escalation triggers. It doesn't follow generic best practices — it follows your standards, every single time, with zero deviation.",
                },
                {
                  title: "What Happens Here, Stays Here.",
                  body: "Your Digital Expert lives inside your walls — on your servers, under your jurisdiction. It makes no external API calls. It phones no one. Your data obeys your law, because it never leaves it.",
                },
                {
                  title: "It Verifies Before It Speaks.",
                  body: "Your Digital Expert consults the source, cross-checks the data, and cites its reasoning before giving a single insight. It doesn't wing it. It doesn't hallucinate. It is constitutionally allergic to being wrong.",
                },
                {
                  title: "It Thinks the Way Your Region Does.",
                  body: "Your Digital Expert works natively in Arabic and English — not translated, not approximated. It understands Islamic finance, GCC regulatory language, and local industry context without needing to be told what country it's in.",
                },
                {
                  title: "When Your Business Changes, It Keeps Up.",
                  body: "New regulation issued? Policy updated? Senior expert added? Your Digital Expert absorbs the change and carries it forward — your institutional knowledge evolves without being rebuilt from scratch.",
                },
              ].map((trait) => (
                <div
                  key={trait.title}
                  className="bg-white/8 border border-white/15 rounded-[12px] p-5"
                >
                  <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-base mb-2">
                    {trait.title}
                  </h5>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/70 text-sm">
                    {trait.body}
                  </p>
                </div>
              ))}
              <div className="sm:col-span-2 bg-[#00c9a7]/8 border border-[#00c9a7] rounded-[12px] p-5">
                <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-base mb-2">
                  It Never Resigns. Never Leaves. Never Says "Let Me Get Back to You."
                </h5>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/70 text-sm">
                  No notice periods. No succession planning. No institutional knowledge walking out the door. Your Digital Expert is available to every team member — at 2am on a Friday, on day one of Eid, the moment your most senior person retires. <strong className="text-[#9b5cf6]">Your expertise becomes infrastructure.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Why We Are Different
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Generic AI Knows the World.<br />Digital Experts Know <em>Your</em> World.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="glass rounded-[20px] p-6 border-red-500/20">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-red-300 text-base mb-4 uppercase tracking-wider">
                Generic AI &amp; Other LLMs
              </h3>
              {[
                "Trained on public internet data — not your policies",
                "Requires endless prompt engineering to get useful output",
                "Sends your data to third-party cloud servers",
                "Needs constant supervision — hallucinates on niche topics",
                "Knows nothing about your company's way of doing things",
                "Disconnected from your experts' actual reasoning",
                "Arabic support is an afterthought",
              ].map((row) => (
                <div key={row} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 text-sm text-white/70">
                  <span className="text-red-400 flex-shrink-0 mt-0.5 font-bold">✗</span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
            <div className="glass rounded-[20px] p-6 border-[#9b5cf6]/30">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-base mb-4 uppercase tracking-wider">
                QuantorX Cognitive Mapping™
              </h3>
              {[
                "Built from your experts' knowledge — not the internet",
                "Purpose-trained — works out of the box for your use cases",
                "Fully on-premise, air-gapped, sovereign — data never leaves",
                "Confidence-grounded with citation RAG — shows its work",
                "Encodes your company's DNA — standards, exceptions, culture",
                "Mirrors expert reasoning — not general patterns",
                "Built first for Arabic. English is equally native.",
              ].map((row) => (
                <div key={row} className="flex items-start gap-3 py-3 border-b border-white/5 last:border-0 text-sm text-white/85">
                  <span className="text-green-400 flex-shrink-0 mt-0.5 font-bold">✓</span>
                  <span>{row}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Footprint */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-[#4a0082]/20 border border-[#9b5cf6]/40 text-[#9b5cf6] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
                Intelligence Footprint
              </div>
              <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-3xl sm:text-4xl mb-4">
                We Capture Everything Your Expert Knows.
              </h2>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 mb-6">
                Every organisation has an intelligence footprint — the accumulated knowledge, judgement, and experience of its people. Most of it is invisible, undocumented, and at risk. Cognitive Mapping™ makes it visible, structured, and permanent.
              </p>
              <ul className="flex flex-col gap-3">
                {[
                  "Work processes — how tasks are actually done, not how the manual says",
                  "Decision frameworks — the rules your experts follow under pressure",
                  "Exception handling — what to do when the standard doesn't apply",
                  "Regulatory intelligence — how compliance roles are interpreted locally",
                  "Institutional memory — why certain things are done a certain way",
                  "Domain language — the specific terminology your industry and company use",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#9b5cf6] font-bold flex-shrink-0 mt-0.5">→</span>
                    <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-[20px] p-8">
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-2xl leading-tight mb-4">
                "We walk in, build your Cognitive Map, and you walk away with your Digital Expert."
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm mb-6">
                No requirements document. No 12-month implementation. No generic AI that needs babysitting. Just your knowledge — structured, preserved, and available to your entire organisation instantly.
              </p>
              <div className="flex gap-6">
                {[
                  { val: "Weeks", label: "Not years to deploy" },
                  { val: "100%", label: "On-premise sovereign" },
                  { val: "24/7", label: "Always available" },
                ].map((stat) => (
                  <div key={stat.val} className="text-center">
                    <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-2xl text-[#9b5cf6]">
                      {stat.val}
                    </div>
                    <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Where It Works
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-3">
              Digital Experts Across Every Department
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-xl mx-auto">
              One Cognitive Mapping™ engagement can produce multiple Digital Experts — one per role, department, or process.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[
              { title: "Compliance Expert", body: "Maps your compliance officer's interpretation of SAMA, CBUAE, and internal policy. Answers regulatory questions instantly with citation-backed precision." },
              { title: "Contract & Legal Expert", body: "Encodes how your legal team reviews contracts — flagging risk clauses, standard deviations, and approval requirements — in Arabic and English." },
              { title: "Engineering SOP Expert", body: "Preserves the expertise of your senior engineers — troubleshooting logic, maintenance standards, and exception procedures — accessible to everyone on shift." },
              { title: "Financial Analyst Expert", body: "Captures your analyst's modelling methodology, data interpretation, and reporting standards. Produces consistent, audit-ready output at scale." },
              { title: "Sales & Onboarding Expert", body: "Encodes your best salesperson's product knowledge and objection handling. Every new hire gets access to your top performer's playbook from Day 1." },
              { title: "Clinical & Policy Expert", body: "For hospitals and government agencies — maps clinical workflows, protocol adherence, and resource allocation reasoning from your senior practitioners." },
            ].map((card) => (
              <div key={card.title} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-2">{card.title}</h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm">{card.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            {["Banking & Finance", "Government & Public Sector", "Telecom Operations", "Healthcare Providers", "Insurance", "Oil & Gas", "Legal Services", "Manufacturing", "Retail & FMCG", "Education"].map((chip) => (
              <span
                key={chip}
                className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5 text-sm font-medium text-white hover:bg-[#4a0082] hover:border-[#4a0082] transition-colors cursor-default"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Capabilities Tabs */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              The Platform Behind the Brain
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Enterprise-Grade AI Infrastructure<br />for Every Digital Expert
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 mb-8 justify-center">
            {tabsData.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm [font-family:'Satoshi-Medium',Helvetica] transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#4a0082] text-white"
                    : "bg-white/5 text-white/75 border border-white/10 hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {tabsData
            .filter((t) => t.id === activeTab)
            .map((tab) => (
              <div key={tab.id} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-white text-2xl mb-4">
                  {tab.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                  {tab.body}
                </p>
              </div>
            ))}
        </div>
      </section>

      {/* ROI Metrics */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Proven Results
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Measurable Impact Across MENA Enterprises
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {[
              { val: "65%", label: "Reduction in Fraud False Positives — Leading MENA Bank" },
              { val: "3X", label: "Faster Expert Query Resolution for GCC Enterprises" },
              { val: "40%", label: "Cost Saving on Document & Knowledge Processing" },
              { val: "Weeks", label: "From Cognitive Map to Live Digital Expert" },
            ].map((m) => (
              <div key={m.val} className="text-center">
                <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl sm:text-5xl text-[#9b5cf6] mb-2">
                  {m.val}
                </div>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Why QuantorX
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Three Things No One Else Does.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { title: "Cognitive Mapping™", body: "A proprietary methodology — not a product feature. We build the brain from your people, your processes, and your institutional knowledge. This cannot be replicated with a prompt." },
              { title: "Absolute Sovereignty", body: "On-premise, air-gapped, and fully owned by you. No API calls to external clouds. No exposure risk. Your data obeys your country's laws — full stop." },
              { title: "Built for MENA First", body: "Arabic language is native, not translated. Compliance is built for MENA regulators, not retrofitted. Our team is on the ground, in your time zone, understanding your market." },
            ].map((pillar) => (
              <div key={pillar.title} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors">
                <h3
                  className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-3"
                  dangerouslySetInnerHTML={{ __html: pillar.title }}
                />
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              The Team
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-3">
              The Cognitive Engineers Behind the Brain
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 max-w-lg mx-auto">
              Our Cognitive Mapping™ engagements are led by domain experts and ML engineers with deep experience in MENA industries — not generic AI consultants.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { val: "50+", title: "AI & Cognitive Engineers", sub: "Dubai · Riyadh · Cairo · Amman" },
              { val: "12", title: "MENA Markets", sub: "Active enterprise deployments" },
              { val: "200+", title: "Certifications", sub: "AWS, Azure, GCP, NVIDIA & more" },
            ].map((stat) => (
              <div key={stat.val} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
                <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-5xl text-[#9b5cf6] mb-2">
                  {stat.val}
                </div>
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg mb-1">
                  {stat.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 text-sm">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff05]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
              Trust & Compliance
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl">
              Recognised Standards. Regional Compliance.
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                title: "ISO 27001 & SOC 2 Type II",
                body: "Independently audited. Enterprise-grade information security management — verified annually.",
              },
              {
                title: "UAE PDPL & KSA PDPL",
                body: "Full compliance with GCC data protection laws and data residency requirements — built-in, not added on.",
              },
            ].map((cert) => (
              <div key={cert.title} className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 text-center">
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl mb-3">
                  {cert.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/75 mb-4">
                  {cert.body}
                </p>
                <Link
                  to="/technology/certifications"
                  className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors"
                >
                  View Certifications
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/15 border border-white/40 text-white px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6">
            Cognitive Mapping™  ·  Start Today
          </div>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl mb-6">
            Your Best People Shouldn't Be Irreplaceable.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/85 text-lg mb-10">
            Walk us through your most critical knowledge gap. We'll walk out with a plan to clone it. No commitment required.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/demo"
              className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors text-base"
            >
              Build My Digital Expert
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center border border-white/40 rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/10 transition-colors text-base"
            >
              Talk to Us First
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
