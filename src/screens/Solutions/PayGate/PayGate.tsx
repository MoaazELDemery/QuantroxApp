import { AgentSolutionPage } from "../../../components/page/AgentSolutionPage";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";

const features = [
  {
    title: "No Forms - Just Talk",
    body: "The merchant chats in Arabic or English, and free-typed intent is understood: \"skip the website\", \"why do you need my CR?\", \"change the category\". The workforce does the rest.",
  },
  {
    title: "Saudi-Native by Design",
    body: "Built around Wathiq, Yakeen, Nafath, SPL and Tahakouk - not bolted on. Every field traces to a government source, with provenance badges on every check.",
  },
  {
    title: "Vision-Model Verification",
    body: "Vision models read bank statements and QR codes; the IBAN is checksum-validated; websites are classified into MCC categories with a confidence score.",
  },
  {
    title: "Registries Run in Parallel",
    body: "Wathiq, Yakeen, Tahakouk and compliance screening run simultaneously - visible live on screen while the merchant's profile panel fills itself.",
  },
  {
    title: "A Layer, Not a Replacement",
    body: "PayGate fronts your existing gateway and back office. Integration is additive - deploy in cloud, on-prem, or inside your own perimeter. 10 or 10,000 merchants, same architecture.",
  },
  {
    title: "SAMA-Aligned Onboarding",
    body: "Nafath biometric MFA, OTP and explicit consents; PEP & sanctions screening with auditable declarations at KYB; PII masked before anything reaches a model.",
  },
];

export const PayGate = (): JSX.Element => (
  <AgentSolutionPage
    identity={AGENT_IDENTITIES.paygate}
    heroTitle={<>The Partner<br />Enablement Hub.</>}
    heroLede={
      <>
        From 1st Contact to 1st Transaction - a complete structured AI workforce that takes a
        Saudi merchant from CR number to live payments, end to end, in minutes.
        <span className="block mt-4 text-base">
          ~15 minutes of manual form-filling and days of review become 2 minutes and 41 seconds -
          measured end to end, timer on screen, with human confirmation at every step.
        </span>
      </>
    }
    heroVideo="/videos/data-vault.mp4"
    ctas={[
      { label: "See PayGate in Action", href: "/demo" },
      { label: "Meet the Workforce →", href: "/solutions", variant: "outline" },
    ]}
    instrument={{
      title: "Onboarding timeline - CR 7006 384 345",
      stops: [
        { label: "CR verified", value: "Wathiq · instant", pos: 8 },
        { label: "Identity confirmed", value: "Nafath · Yakeen", pos: 36 },
        { label: "KYB + screening", value: "PEP & sanctions · parallel", pos: 64 },
        { label: "Application submitted", value: "2:41 · measured", pos: 92 },
      ],
      formulaTitle: "Time-to-Transaction Model (TTM)",
      formula: "t(live) = max(registryᵢ) + confirm",
      disclaimer: "A visualization, timed on the working prototype",
    }}
    outcomes={[
      { val: "2:41", label: "Minutes - CR number to submitted application, measured" },
      { val: "5", label: "Saudi registries wired in - Wathiq, Yakeen, Nafath, SPL, Tahakouk" },
      { val: "100%", label: "Fields traced to a government source - human-confirmed" },
    ]}
    featuresKicker="Ready to Work - Industry Aware"
    featuresTitle="Every check explains itself."
    features={features}
    worldTitle="The gateway is open - and it is governed."
    worldBody="PayGate turns onboarding from an obstacle course into a single doorway: government registries, identity infrastructure and banking rails converge into one conversation a merchant walks through in minutes - with a compliance score and provenance badge on every check."
    quote="We went from a two-week onboarding backlog to activating merchants the same morning they apply. The registries run in parallel, the profile fills itself, and compliance signs off on a screen that already explains every check."
    quoteAttribution="Chief Operating Officer - Payments Provider, KSA"
    ctaTitle={<>First contact to first transaction.</>}
    ctaSub="Deploy PayGate in front of your existing gateway - SAMA-aligned, PDPL-ready, in-Kingdom."
    ctaLabel="See PayGate in Action"
  />
);
