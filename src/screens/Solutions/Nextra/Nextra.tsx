import { AgentSolutionPage } from "../../../components/page/AgentSolutionPage";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";
import { GlassCard, SectionHeader } from "../../../components/page/primitives";

const id = AGENT_IDENTITIES.nextra;

const features = [
  {
    title: "Reasons Across the Whole Household",
    body: "Cashflow, debt, goals and protection in one picture - read through consented open banking across every institution, understanding what the data means, not just what it shows.",
  },
  {
    title: "Broad Questions, Structured Plans",
    body: "\"What should I do with my money?\" becomes goals sized to the real surplus, a portfolio per goal, and named products - each with the rate, the fee, and the reason it fits.",
  },
  {
    title: "Sharia-Aware by Default",
    body: "Personalizes to behavior, eligibility, income and Sharia preference - with honest feasibility verdicts when a goal doesn't fit the surplus.",
  },
  {
    title: "The Month in One Briefing",
    body: "The financial month distilled into one briefing, in seconds - anomalies, duplicates and unusual spend flagged as they appear, each with one concrete next action.",
  },
  {
    title: "~20 Deterministic Tools",
    body: "Cashflow diagnosis, goal simulation, portfolio construction, refinance analysis, card comparison, coverage review, zakat estimation - the AI never invents balances, rates or products.",
  },
  {
    title: "A Law-Abiding Workforce",
    body: "Speaks KSAOB / OneSingleView, masks identifiers to last-4, and aligns with the SAMA Cybersecurity Framework, Saudi PDPL and SDAIA guidelines.",
  },
];

const pillars = [
  {
    label: "Lending",
    title: "Lending",
    body: "Refinance analysis, card comparison and debt structuring - grounded in real eligibility and real rates, with the reason each product fits.",
  },
  {
    label: "Saving",
    title: "Saving & Goals",
    body: "Goals sized to the household's actual surplus, each on its own timeline and cadence - with honest feasibility verdicts, not wishful curves.",
  },
  {
    label: "Investing",
    title: "Investing",
    body: "A portfolio per goal, constructed by deterministic tools and personalized to risk, income and Sharia preference - named products, rates and fees included.",
  },
  {
    label: "Protection",
    title: "Insurance & Protection",
    body: "Coverage review across the household, gaps flagged proactively, and zakat estimation - protection treated as part of the plan, not an afterthought.",
  },
];

export const Nextra = (): JSX.Element => (
  <AgentSolutionPage
    identity={id}
    heroTitle={<>The Strategy<br />Advisory Office.</>}
    heroLede={
      <>
        From Data to Decisions - a complete AI workforce that covers a household's finances end to
        end: lending, saving, investing, and insurance & protection - proactively, personally,
        with minimal effort and complete human control.
        <span className="block mt-4 text-base">
          A conversational workforce, Sharia-aware by default, in English and Arabic - money
          management redefined as AI-powered advisory.
        </span>
      </>
    }
    heroVideo="/videos/sovereign-ring.mp4"
    ctas={[
      { label: "Book a Nextra Demo", href: "/demo" },
      { label: "Meet the Workforce →", href: "/solutions", variant: "outline" },
    ]}
    instrument={{
      title: "Household plan - four pillars",
      stops: [
        { label: "Lending", value: "refinance · −1.2% APR", pos: 10 },
        { label: "Saving", value: "3 goals · sized to surplus", pos: 36 },
        { label: "Investing", value: "portfolio per goal", pos: 62 },
        { label: "Protection", value: "coverage + zakat", pos: 88 },
      ],
      formulaTitle: "Household Advisory Model (HAM)",
      formula: "plan = Σ pillarᵢ(goals | surplus)",
      disclaimer: "A visualization, sized to a real surplus",
    }}
    outcomes={[
      { val: "4", label: "Pillars covered end to end - lending, saving, investing, protection" },
      { val: "~20", label: "Deterministic financial tools - nothing invented" },
      { val: "100%", label: "Human control - every action stays with the household" },
    ]}
    featuresKicker="What Nextra Guarantees"
    featuresTitle="Every financial job in the house."
    features={features}
    worldTitle="The household, read as one picture."
    worldBody="Nextra reads the whole household through consented open banking - accounts, balances, transactions, standing orders and commitments across every institution - and turns broad questions into structured, prioritized plans."
    extra={
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker="The Four Pillars"
            title="One workforce, the whole balance sheet."
            accent={id.accent}
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {pillars.map((pillar, i) => (
              <GlassCard
                key={pillar.label}
                title={pillar.title}
                body={pillar.body}
                index={`0${i + 1}`}
                accent={id.accent}
                accentRgb={id.accentRgb}
                order={i}
              />
            ))}
          </div>
        </div>
      </section>
    }
    quote="Nextra reads our whole household - every account, every commitment - and gives us one briefing a month with the three things that actually matter. It sized our goals to what we can really save, and told us honestly when one didn't fit."
    quoteAttribution="Pilot Household - Open Banking Cohort, KSA"
    ctaTitle={<>From data to decisions.</>}
    ctaSub="Deploy Nextra on your open-banking rails - KSAOB-ready, PDPL-aligned, Sharia-aware by default."
    ctaLabel="Book a Nextra Demo"
  />
);
