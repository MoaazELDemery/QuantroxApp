import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";
import {
  money,
  PricingSection,
  PricingTier,
  SimSlider,
  ValueSimulatorSection,
} from "../../../components/page/commercial";

const id = AGENT_IDENTITIES.axon;

/* Placeholder commercial rates - set the real card before publishing. */
const SEAT_PRICE = 450;
const INCLUDED_QUERIES_PER_SEAT = 2000;
const OVERAGE_PER_QUERY = 0.08;
/** Grounded queries Axon runs per spatial question, on average. */
const QUERIES_PER_QUESTION = 4;
/** Share of routine spatial requests Axon absorbs. */
const ABSORPTION = 0.8;
/** Share of today's queue wait Axon removes. */
const QUEUE_REDUCTION = 0.75;

const VOLUME_SLIDERS: SimSlider[] = [
  { key: "seats", label: "Planners and analysts who need spatial answers", min: 5, max: 500, step: 5, format: (v) => `${v}` },
  { key: "questions", label: "Spatial questions each of them asks per month", min: 1, max: 40, step: 1, format: (v) => `${v}` },
  {
    key: "projects",
    label: "Projects held up each month waiting for analysis",
    min: 0,
    max: 25,
    step: 1,
    format: (v) => `${v}`,
    note: "Site selection, corridor studies, feasibility reviews.",
  },
];

const ECONOMICS_SLIDERS: SimSlider[] = [
  { key: "hoursPerRequest", label: "GIS specialist hours consumed per request", min: 0.5, max: 10, step: 0.5, format: (v) => `${v}` },
  { key: "costPerHour", label: "Fully loaded cost per GIS specialist hour", min: 30, max: 150, step: 5, format: (v) => `$${v}` },
  { key: "queueDays", label: "Days a request waits in the queue today", min: 0.5, max: 15, step: 0.5, format: (v) => v.toFixed(1) },
  {
    key: "delayCostPerWeek",
    label: "Cost of one week of project delay",
    min: 2000,
    max: 150000,
    step: 1000,
    format: money,
    note: "Idle contractors, held permits, deferred revenue.",
  },
];

/**
 * AxonValueSimulator - "what is the GIS queue costing you?" Prices the
 * customer's real GIS backlog against Axon's placeholder rate card.
 */
export const AxonValueSimulator = (): JSX.Element => (
  <ValueSimulatorSection
    identity={id}
    title="What is the GIS queue costing you?"
    lede="Axon's price is easy to see. The number that matters is what you're paying today in specialist hours and held-up projects. Move the sliders."
    placeholderNote="Rates are placeholders — replace with your real rate card before publishing"
    volumeSliders={VOLUME_SLIDERS}
    economicsSliders={ECONOMICS_SLIDERS}
    defaults={{
      seats: 60,
      questions: 8,
      projects: 6,
      hoursPerRequest: 3.5,
      costPerHour: 65,
      queueDays: 6,
      delayCostPerWeek: 25000,
    }}
    compute={(v) => {
      const requests = v.seats * v.questions;
      const queriesRun = requests * QUERIES_PER_QUESTION;
      const overageQueries = Math.max(0, queriesRun - v.seats * INCLUDED_QUERIES_PER_SEAT);
      const hoursReturned = requests * v.hoursPerRequest * ABSORPTION;
      return {
        pay: [
          { label: `Seats (${v.seats})`, amount: v.seats * SEAT_PRICE },
          { label: `Query overage (${queriesRun.toLocaleString("en-US")} run)`, amount: overageQueries * OVERAGE_PER_QUERY },
        ],
        returns: [
          {
            label: `GIS specialist hours returned (${Math.round(hoursReturned).toLocaleString("en-US")} hrs)`,
            amount: hoursReturned * v.costPerHour,
          },
          {
            label: "Project delay avoided",
            amount: v.projects * v.delayCostPerWeek * ((v.queueDays * QUEUE_REDUCTION) / 7),
          },
        ],
        annualNote: `${Math.round(hoursReturned).toLocaleString("en-US")} specialist hours back every month · net of everything you pay us`,
      };
    }}
    ratesNote={
      <>
        Rates used · <span className="text-white/65">${SEAT_PRICE}</span> per seat / month ·{" "}
        <span className="text-white/65">{INCLUDED_QUERIES_PER_SEAT.toLocaleString("en-US")}</span> queries included
        per seat · <span className="text-white/65">${OVERAGE_PER_QUERY.toFixed(2)}</span> per query over
      </>
    }
    footnote="An estimate, not a quote. It assumes Axon absorbs 80% of routine spatial requests and removes three quarters of the queue wait — both conservative against what a pilot typically shows in month two."
    cta={{ label: "Start free on Axon Cloud", href: "/demo" }}
  />
);

const TIERS: PricingTier[] = [
  {
    name: "Sandbox",
    blurb: "Try Axon on your own data before anyone talks to you.",
    price: "$0",
    priceMeta: "/ 14 days",
    features: [
      "1 user, 1 connected dataset",
      "100 grounded queries",
      "Upload shapefile / GeoJSON / CSV",
      "Full map rendering, EN + AR",
      "Community support",
    ],
    cta: { label: "Start free — no card", href: "/demo" },
  },
  {
    name: "Axon Cloud",
    badge: "Most teams",
    blurb: "Managed, in-Kingdom, per seat plus what you run.",
    price: "$450",
    priceMeta: "/ seat / mo",
    features: [
      "Unlimited connected datasets",
      "2,000 queries/seat, then $0.08/query",
      "Live PostGIS connection",
      "All 40+ spatial tools",
      "Saved layers, scheduled refresh, exports",
      "API access and webhooks",
      "Email support, 99.5% uptime",
    ],
    cta: { label: "Start on Cloud", href: "/demo" },
    featured: true,
  },
  {
    name: "Sovereign",
    blurb: "Your VPC or air-gapped, accredited, with our team on it.",
    price: "Custom",
    priceMeta: "/ deployment",
    features: [
      "Everything in Cloud, plus:",
      "In your VPC or fully air-gapped",
      "Local models, zero egress",
      "PDPL / SDAIA / NCA documentation pack",
      "SSO, RBAC, full audit trail",
      "Custom spatial tools for your domain",
      "Named engineer, 24/7, SLA",
    ],
    cta: { label: "Talk to our team", href: "/contact" },
  },
];

/** AxonPricing - "start free, scale to sovereign." */
export const AxonPricing = (): JSX.Element => (
  <PricingSection
    identity={id}
    title="Start free. Scale to sovereign."
    lede="Same agent in all three. What changes is where it runs, who holds the keys, and how much support comes with it."
    placeholderNote="All figures are placeholders — set your own before publishing"
    tiers={TIERS}
  />
);
