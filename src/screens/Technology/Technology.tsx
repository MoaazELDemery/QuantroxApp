import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows, PageCTA, PlateBand, SectionHeader } from "../../components/page/primitives";

export const Technology = (): JSX.Element => (
  <PageLayout>
    <PageHero
      eyebrow="QuantorX Platform"
      title={<>The Intelligence Framework<br />Behind Every Agent.</>}
      lede="Three purpose-built tools. One sovereign AI factory. From cognitive engine to fine-tuned models to managed infrastructure - everything runs inside your walls."
      video="/videos/tech-circuit.mp4"
      ctas={[{ label: "Explore CORTEX™ →", href: "/technology/ai-platform" }]}
    />

    {/* The stack, as chapters - not cards */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="The Stack"
          title={<>Three instruments.<br />One sovereign factory.</>}
          className="mb-10"
        />
        <EditorialRows
          rows={[
            {
              tag: "The Agentic Brain",
              title: "CORTEX™",
              body: "The cognitive engine that maps your workflows, routes decisions, and governs every agent action - air-gapped, sovereign, and fully auditable.",
              value: "Cognitive engine",
              href: "/technology/ai-platform",
            },
            {
              tag: "Model Factory",
              title: "LLM Masonry™",
              body: "No-code fine-tuning for enterprise-grade SLMs - Arabic-first, domain-specific, and deployed inside your sovereign infrastructure in weeks.",
              value: "Model factory",
              href: "/technology/llm-studio",
            },
            {
              tag: "Managed Infrastructure",
              title: "AI Cloud",
              body: "MENA-region data centers with full sovereignty. Managed or hybrid - your infrastructure, your rules, SOC2 and ISO 27001 certified.",
              value: "Infrastructure",
              href: "/technology/ai-cloud",
            },
          ]}
        />
      </div>
    </section>

    {/* The fleet, powered by the stack */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <PlateBand image="/worlds/fleet.webp">
          <div className="max-w-xl">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              One platform · Five squads
            </p>
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl lg:text-4xl tracking-[-0.02em] leading-[1.1] mb-5">
              Everything the fleet does, Cortex governs.
            </h3>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/65 text-base lg:text-lg leading-relaxed">
              Nodus, Axon, Nexus, PayGate, and Nextra are all built on the same three instruments -
              mapped by Cortex, tuned in LLM Masonry, and running on sovereign AI Cloud. One stack to
              certify, one stack to audit, one stack to own.
            </p>
          </div>
        </PlateBand>
      </div>
    </section>

    <PageCTA
      title={<>Own the whole stack.</>}
      sub="From cognitive engine to infrastructure - deployed inside your walls, certified for your regulators."
      primary={{ label: "Book a Cortex Demo", href: "/demo" }}
      secondary={{ label: "Why QuantorX", href: "/technology/why-quantorx" }}
      chips={["Air-gapped by design", "SOC2 · ISO 27001", "Arabic-first models"]}
    />
  </PageLayout>
);
