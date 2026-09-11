import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";
import {
  money,
  PricingSection,
  PricingTier,
  SimSlider,
  ValueSimulatorSection,
} from "../../../components/page/commercial";

const id = AGENT_IDENTITIES.nexus;

/* Placeholder commercial rates - set the real card before publishing. */
const TEXT_SESSION_RATE = 0.28;
const VOICE_MINUTE_RATE = 0.09;
const ACTION_RATE = 0.05;
const PLATFORM_FEE = 0;

const VOLUME_SLIDERS: SimSlider[] = [
  {
    key: "contacts",
    label: "Customer contacts per month",
    min: 5000,
    max: 1000000,
    step: 5000,
    format: (v) => v.toLocaleString("en-US"),
    note: "Everything reaching your app chat, IVR or call centre today.",
  },
  {
    key: "containment",
    label: "Handled by Nexus without a human",
    min: 20,
    max: 90,
    step: 1,
    format: (v) => `${v}%`,
    note: "Containment. Pilots start near 40% and climb as you permit more actions.",
  },
  { key: "voiceShare", label: "Share arriving by voice", min: 0, max: 100, step: 5, format: (v) => `${v}%` },
  { key: "voiceLength", label: "Average voice session length", min: 0.5, max: 10, step: 0.5, format: (v) => `${v} min` },
  {
    key: "actionsPerSession",
    label: "Actions executed per contained session",
    min: 0,
    max: 5,
    step: 0.1,
    format: (v) => v.toFixed(1),
    note: "Transfers, bill payments, card freezes.",
  },
];

const ECONOMICS_SLIDERS: SimSlider[] = [
  {
    key: "humanCost",
    label: "Your cost per human-handled contact",
    min: 0.5,
    max: 12,
    step: 0.1,
    format: (v) => `$${v.toFixed(2)}`,
    note: "Fully loaded: agent time, supervision, QA, telephony, overhead.",
  },
  {
    key: "offersPerThousand",
    label: "Offers accepted per 1,000 contained sessions",
    min: 0,
    max: 100,
    step: 1,
    format: (v) => `${v}`,
    note: "Idle cash, refinance, protection gaps surfaced in the flow.",
  },
  { key: "marginPerOffer", label: "Annual margin on an accepted offer", min: 0, max: 2000, step: 20, format: money },
];

/**
 * NexusValueSimulator - "what would Nexus cost, and what would it return?"
 * Prices the customer's real contact traffic against Nexus's placeholder
 * per-session rate card.
 */
export const NexusValueSimulator = (): JSX.Element => (
  <ValueSimulatorSection
    identity={id}
    title="What would Nexus cost, and what would it return?"
    lede="Move the sliders. The left side prices your real traffic. The right side sets it against what those contacts cost you through a human today, and what the proactive layer earns on top."
    placeholderNote="Rates are placeholders — replace with your real rate card before publishing"
    volumeSliders={VOLUME_SLIDERS}
    economicsSliders={ECONOMICS_SLIDERS}
    defaults={{
      contacts: 100000,
      containment: 65,
      voiceShare: 30,
      voiceLength: 3.5,
      actionsPerSession: 1.4,
      humanCost: 2.8,
      offersPerThousand: 22,
      marginPerOffer: 320,
    }}
    compute={(v) => {
      const contained = v.contacts * (v.containment / 100);
      const textSessions = contained * (1 - v.voiceShare / 100);
      const voiceMinutes = contained * (v.voiceShare / 100) * v.voiceLength;
      const actions = contained * v.actionsPerSession;
      const offersAccepted = (contained / 1000) * v.offersPerThousand;
      return {
        pay: [
          { label: `Text sessions (${Math.round(textSessions).toLocaleString("en-US")})`, amount: textSessions * TEXT_SESSION_RATE },
          { label: `Voice minutes (${Math.round(voiceMinutes).toLocaleString("en-US")})`, amount: voiceMinutes * VOICE_MINUTE_RATE },
          { label: `Executed actions (${Math.round(actions).toLocaleString("en-US")})`, amount: actions * ACTION_RATE },
          { label: "Platform fee", amount: PLATFORM_FEE },
        ],
        returns: [
          {
            label: `Human handling avoided (${Math.round(contained).toLocaleString("en-US")} contacts)`,
            amount: contained * v.humanCost,
          },
          {
            label: `Margin on accepted offers (${Math.round(offersAccepted).toLocaleString("en-US")})`,
            amount: (offersAccepted * v.marginPerOffer) / 12,
          },
        ],
        annualNote: `${Math.round(contained).toLocaleString("en-US")} contacts resolved without a human · net of everything you pay us`,
      };
    }}
    ratesNote={
      <>
        Rates used · <span className="text-white/65">${TEXT_SESSION_RATE.toFixed(2)}</span> per contained text
        session · <span className="text-white/65">${VOICE_MINUTE_RATE.toFixed(2)}</span> per voice minute ·{" "}
        <span className="text-white/65">${ACTION_RATE.toFixed(2)}</span> per executed action ·{" "}
        <span className="text-white/65">${PLATFORM_FEE}</span> platform fee
      </>
    }
    footnote="An estimate, not a quote. It assumes contained sessions replace human-handled contacts one for one, and counts only the margin on offers a customer actually accepts."
    cta={{ label: "Start free with 1,000 sessions", href: "/demo" }}
  />
);

const TIERS: PricingTier[] = [
  {
    name: "Sandbox",
    blurb: "Working agent on mock banking data, before anyone signs anything.",
    price: "$0",
    features: [
      "1,000 sessions, no card",
      "Full SDK — iOS, Android, web",
      "Mock accounts, beneficiaries, cards, bills",
      "All actions in simulation mode",
      "Arabic and English, voice and text",
      "Community and docs",
    ],
    cta: { label: "Get an API key", href: "/demo" },
  },
  {
    name: "Pay as you go",
    badge: "Self-serve",
    blurb: "Connect your real APIs. Pay for what your customers complete.",
    price: "$0.28",
    priceMeta: "/ contained session",
    features: [
      "Plus $0.09/min for voice",
      "Plus $0.05 per executed action",
      "Uncontained sessions are not billed",
      "Live core-banking, cards and bills APIs",
      "All channels, one integration",
      "Audit log export, webhooks",
      "Email support, 99.5% uptime",
    ],
    cta: { label: "Start with a live key", href: "/demo" },
    featured: true,
  },
  {
    name: "Sovereign",
    blurb: "In your perimeter, accredited, with our engineers on it.",
    price: "Custom",
    priceMeta: "/ deployment",
    features: [
      "Everything in pay as you go, plus:",
      "Your VPC, on-prem or air-gapped",
      "Local models, zero egress",
      "SAMA / PDPL / SDAIA documentation pack",
      "Volume rate, committed spend",
      "Custom actions and product catalog",
      "Named engineer, 24/7, SLA",
    ],
    cta: { label: "Talk to our team", href: "/contact" },
  },
];

/** NexusPricing - "pay for sessions your customers actually complete." */
export const NexusPricing = (): JSX.Element => (
  <PricingSection
    identity={id}
    title="Pay for sessions your customers actually complete."
    lede="No platform fee, no annual minimum, no per-seat licence. A session that resolves nothing costs nothing."
    placeholderNote="All figures are placeholders — set your own before publishing"
    tiers={TIERS}
  />
);
