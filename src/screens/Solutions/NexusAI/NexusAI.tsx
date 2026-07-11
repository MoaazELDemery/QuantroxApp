import { AgentSolutionPage } from "../../../components/page/AgentSolutionPage";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";

const features = [
  {
    title: "Whole-Account Context",
    body: "Nexus reads real balances, beneficiaries, cards, bills and spending before it answers - and resolves \"send to Ahmed\" to the right saved beneficiary, no account numbers typed.",
  },
  {
    title: "One Sentence, Not Five Screens",
    body: "\"Send 5,000 to Khalid\" becomes a fully-formed, ready-to-confirm transfer in seconds - account, beneficiary, amount and currency assembled by the workforce.",
  },
  {
    title: "Every Answer Ends in an Action",
    body: "Confirm a transfer, pay a bill, freeze a card, apply for a product. No dead ends, no \"tap here to continue\" - a concrete next step on every reply.",
  },
  {
    title: "Proactive Guidance",
    body: "Nexus spots idle cash and unusual spending, and surfaces the product that fits - with the reason attached and one step to act on it.",
  },
  {
    title: "Deterministic Under the Hood",
    body: "Money math and product facts come from typed, tested tools - exact decimals, real catalog data. Speed never comes at the cost of an invented balance or rate.",
  },
  {
    title: "A Law-Abiding Workforce",
    body: "Account numbers, IBANs and cards masked to last-4 before anything reaches a model. Aligned with the SAMA Cybersecurity Framework, Saudi PDPL and SDAIA guidelines.",
  },
];

export const NexusAI = (): JSX.Element => (
  <AgentSolutionPage
    identity={AGENT_IDENTITIES.nexus}
    heroTitle={<>The Customer<br />Success Squad.</>}
    heroLede={
      <>
        From VOC to Action - a digital workforce of omni-agents that turns a customer's own words,
        by voice or text, in Arabic or English, into completed banking: transfers, cards, bills,
        spending and proactive guidance.
        <span className="block mt-4 text-base">
          Not a chatbot bolted onto forms - the omni-agents do the banking and show their work at
          every step, with a human confirmation on every action.
        </span>
      </>
    }
    ctas={[
      { label: "Book a Nexus Demo", href: "/demo" },
      { label: "Meet the Workforce →", href: "/solutions", variant: "outline" },
    ]}
    instrument={{
      title: "One sentence → completed transfer",
      stops: [
        { label: "Intent understood", value: "voice or text · EN + AR", pos: 8 },
        { label: "Beneficiary resolved", value: "\"Ahmed\" → saved list", pos: 36 },
        { label: "Transfer assembled", value: "amount · currency · fees", pos: 64 },
        { label: "Human confirms", value: "one tap · executed", pos: 92 },
      ],
      formulaTitle: "VOC-to-Action Model (VAM)",
      formula: "action = confirm(assemble(intent))",
      disclaimer: "A visualization, every action human-confirmed",
    }}
    outcomes={[
      { val: "1", label: "Sentence replaces the classic five-screen journey" },
      { val: "2", label: "Languages - Arabic and English, voice and text, RTL native" },
      { val: "100%", label: "Actions behind a human confirmation - read-only by default" },
    ]}
    featuresKicker="What Nexus Delivers"
    featuresTitle="The banking gets done in the conversation."
    features={features}
    worldTitle="Built where your customers already are."
    worldBody="Nexus fronts your core-banking, cards and bills APIs - cloud, on-prem, or inside your own perimeter. New tenants and journeys go live by configuration, and the workforce scales linearly with your traffic."
    quote="Our customers stopped navigating the app and started talking to it. Transfers that took five screens now take one sentence and one confirmation - in Arabic - and containment went up in the first month of the pilot."
    quoteAttribution="Head of Digital Banking - Retail Bank, KSA"
    ctaTitle={<>Turn VOC into action.</>}
    ctaSub="Deploy Nexus on your own rails - SAMA-aligned, PDPL-ready, masked-by-default."
    ctaLabel="Book a Nexus Demo"
  />
);
