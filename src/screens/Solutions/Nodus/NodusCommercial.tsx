import { CSSProperties, useState } from "react";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";
import { Reveal, SectionHeader } from "../../../components/page/primitives";
import {
  GroupLabel,
  money,
  PlaceholderNote,
  PricingSection,
  PricingTier,
  SimResultsPanel,
  SimSlider,
  SliderRow,
} from "../../../components/page/commercial";

const id = AGENT_IDENTITIES.nodus;

/* Placeholder commercial rates - set the real card before publishing. */
const PLATFORM_FEE = 3500;
const OVERAGE_PER_RUN_UNIT = 2.0;
/** One run-unit = 15 minutes of active agent work → 4 units per run-hour. */
const RUN_UNITS_PER_HOUR = 4;

interface FactoryRole {
  key: string;
  name: string;
  /** Plural form used in the factory summary when count > 1. */
  plural: string;
  blurb: string;
  rate: number;
  runHours: number;
  defaultCount: number;
}

const ROLES: FactoryRole[] = [
  {
    key: "edm",
    name: "Engineering Delivery Manager",
    plural: "Engineering Delivery Managers",
    blurb: "Briefs goals, fans out tasks, chases blockers",
    rate: 1400,
    runHours: 80,
    defaultCount: 1,
  },
  {
    key: "ba",
    name: "Business Analyst",
    plural: "Business Analysts",
    blurb: "Turns a BRD into specs, acceptance criteria, traceability",
    rate: 1100,
    runHours: 80,
    defaultCount: 1,
  },
  {
    key: "architect",
    name: "Solution Architect",
    plural: "Solution Architects",
    blurb: "Designs, reviews, holds the technical standard",
    rate: 1800,
    runHours: 60,
    defaultCount: 0,
  },
  {
    key: "engineer",
    name: "Software Engineer",
    plural: "Software Engineers",
    blurb: "Builds against the spec, opens the PR, fixes review comments",
    rate: 1200,
    runHours: 120,
    defaultCount: 3,
  },
  {
    key: "qa",
    name: "QA Engineer",
    plural: "QA Engineers",
    blurb: "Writes and runs the tests, files the defects, verifies fixes",
    rate: 900,
    runHours: 100,
    defaultCount: 1,
  },
  {
    key: "devops",
    name: "DevOps / Release Engineer",
    plural: "DevOps / Release Engineers",
    blurb: "Pipelines, environments, release notes, rollback plans",
    rate: 1100,
    runHours: 80,
    defaultCount: 0,
  },
  {
    key: "security",
    name: "Security Reviewer",
    plural: "Security Reviewers",
    blurb: "Threat review, dependency and secrets scanning, findings",
    rate: 1400,
    runHours: 60,
    defaultCount: 0,
  },
  {
    key: "writer",
    name: "Technical Writer",
    plural: "Technical Writers",
    blurb: "Docs, runbooks, handover packs, release notes",
    rate: 600,
    runHours: 60,
    defaultCount: 0,
  },
];

const STACKS = [
  "Java / Spring",
  ".NET / C#",
  "Python",
  "TypeScript / Node",
  "React",
  "Angular",
  "Go",
  "Kotlin / Swift",
  "COBOL → Java",
  "Oracle / PLSQL",
  "SAP ABAP",
  "Arabic UX / RTL",
];
const DEFAULT_STACKS = ["Java / Spring", ".NET / C#", "Python", "TypeScript / Node"];

const ECONOMICS_SLIDERS: SimSlider[] = [
  {
    key: "loadedCost",
    label: "Fully loaded monthly cost of one engineer on your team",
    min: 3000,
    max: 30000,
    step: 500,
    format: money,
    note: "Salary, benefits, management overhead, tooling, desk. Or a contractor day rate × 20.",
  },
  {
    key: "absorbShare",
    label: "Share of that team's work Nodus can absorb",
    min: 10,
    max: 90,
    step: 5,
    format: (v) => `${v}%`,
    note: "Build, test, docs, release chores. Not architecture calls or stakeholder work.",
  },
  {
    key: "goalsPerMonth",
    label: "Delivery goals shipped per month",
    min: 1,
    max: 60,
    step: 1,
    format: (v) => `${v}`,
    note: "A goal is one reviewed, tested deliverable — a feature, a migration slice, an integration.",
  },
  {
    key: "weeksEarlier",
    label: "Weeks earlier each goal reaches production",
    min: 0,
    max: 6,
    step: 0.5,
    format: (v) => v.toFixed(1),
  },
  {
    key: "weekValue",
    label: "Value of one week earlier to the business",
    min: 500,
    max: 50000,
    step: 500,
    format: money,
    note: "Deferred revenue, contractual penalty, competitor window, cost of a parallel team waiting.",
  },
  {
    key: "runIntensity",
    label: "Run intensity per role",
    min: 50,
    max: 300,
    step: 10,
    format: (v) => `${v}%`,
    note: "100% = the included run-hours. Heavy migration work runs hotter.",
  },
];

const Stepper = ({
  value,
  onChange,
  label,
}: {
  value: number;
  onChange: (v: number) => void;
  label: string;
}): JSX.Element => (
  <div
    className="glass-panel flex items-center rounded-full shrink-0"
    style={{ "--glass-accent": id.accentRgb } as CSSProperties}
  >
    <button
      type="button"
      onClick={() => onChange(Math.max(0, value - 1))}
      aria-label={`Remove one ${label}`}
      className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors [font-family:'Satoshi-Medium',Helvetica] text-lg"
    >
      −
    </button>
    <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm tabular-nums w-6 text-center">
      {value}
    </span>
    <button
      type="button"
      onClick={() => onChange(Math.min(20, value + 1))}
      aria-label={`Add one ${label}`}
      className="w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors [font-family:'Satoshi-Medium',Helvetica] text-lg"
    >
      +
    </button>
  </div>
);

/**
 * NodusFactoryBuilder - "staff the org chart, see the price." Role
 * steppers and a stack picker on the left, the live cost/value ledger on
 * the right, and the economics sliders that drive the value side below.
 */
export const NodusFactoryBuilder = (): JSX.Element => {
  const [counts, setCounts] = useState<Record<string, number>>(
    Object.fromEntries(ROLES.map((role) => [role.key, role.defaultCount])),
  );
  const [stacks, setStacks] = useState<string[]>(DEFAULT_STACKS);
  const [econ, setEcon] = useState<Record<string, number>>({
    loadedCost: 9500,
    absorbShare: 55,
    goalsPerMonth: 12,
    weeksEarlier: 1.5,
    weekValue: 3000,
    runIntensity: 100,
  });
  const setEconValue = (key: string) => (v: number) => setEcon((prev) => ({ ...prev, [key]: v }));

  const staffed = ROLES.filter((role) => counts[role.key] > 0);
  const rolesCount = staffed.reduce((sum, role) => sum + counts[role.key], 0);
  const rolesCost = staffed.reduce((sum, role) => sum + counts[role.key] * role.rate, 0);
  const includedHours = staffed.reduce((sum, role) => sum + counts[role.key] * role.runHours, 0);
  const overUnits = Math.max(0, includedHours * (econ.runIntensity / 100 - 1)) * RUN_UNITS_PER_HOUR;
  const capacityValue = rolesCount * econ.loadedCost * (econ.absorbShare / 100);
  const speedValue = econ.goalsPerMonth * econ.weeksEarlier * econ.weekValue;

  const pay = [
    { label: "Factory platform", amount: PLATFORM_FEE },
    { label: `Roles staffed (${rolesCount})`, amount: rolesCost },
    { label: `Run-time over allowance (${Math.round(overUnits).toLocaleString("en-US")} units)`, amount: overUnits * OVERAGE_PER_RUN_UNIT },
  ];
  const returns = [
    { label: `Delivery capacity added (${rolesCount} roles at ${econ.absorbShare}%)`, amount: capacityValue },
    { label: `Value of shipping ${econ.weeksEarlier} weeks earlier`, amount: speedValue },
  ];

  const summary = staffed
    .map((role) => `${counts[role.key]} × ${counts[role.key] > 1 ? role.plural : role.name}`)
    .join(", ");

  return (
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker="Build Your Factory"
          title="Staff the org chart. See the price."
          lede="Add the roles you want working your backlog. The price is the sum of the roles you staff, the platform they run on, and the hours they actually run — nothing hidden and nothing per-seat for your own people."
          accent={id.accent}
          className="mb-8"
        />
        <PlaceholderNote className="mb-10">
          All rates are placeholders — set your own before publishing
        </PlaceholderNote>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-start">
          {/* Org chart */}
          <Reveal>
            <div className="glass-panel rounded-[22px] p-6 lg:p-8" style={{ "--glass-accent": id.accentRgb } as CSSProperties}>
              <div className="flex items-baseline justify-between gap-4 mb-2">
                <GroupLabel>Your org chart</GroupLabel>
                <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs">
                  rate per role / month
                </span>
              </div>
              {ROLES.map((role) => (
                <div key={role.key} className="flex items-center gap-4 py-4 border-t border-white/10 first:border-t-0">
                  <div className="flex-1 min-w-0">
                    <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-sm">{role.name}</p>
                    <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/45 text-xs leading-relaxed mt-0.5">
                      {role.blurb}
                    </p>
                  </div>
                  <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/60 text-xs tabular-nums text-right shrink-0 whitespace-nowrap">
                    {money(role.rate)}
                    <span className="text-white/35">/mo · {role.runHours} run-hrs</span>
                  </span>
                  <Stepper value={counts[role.key]} onChange={(v) => setCounts((prev) => ({ ...prev, [role.key]: v }))} label={role.name} />
                </div>
              ))}

              <div className="mt-6 pt-5 border-t border-white/10">
                <div className="flex items-baseline justify-between gap-4 mb-4">
                  <GroupLabel>Stack and languages your factory speaks</GroupLabel>
                  <span className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs">included</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {STACKS.map((stack) => {
                    const active = stacks.includes(stack);
                    return (
                      <button
                        key={stack}
                        type="button"
                        aria-pressed={active}
                        onClick={() =>
                          setStacks((prev) => (active ? prev.filter((s) => s !== stack) : [...prev, stack]))
                        }
                        className="rounded-full px-3.5 py-1.5 [font-family:'Satoshi-Medium',Helvetica] text-xs border transition-all duration-200"
                        style={
                          active
                            ? { borderColor: `${id.accent}aa`, color: id.accentSoft, background: `${id.accent}1a`, boxShadow: `0 0 14px -4px ${id.accent}66` }
                            : { borderColor: "rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.5)" }
                        }
                      >
                        {stack}
                      </button>
                    );
                  })}
                </div>
              </div>

              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs leading-relaxed mt-6 pt-5 border-t border-white/10">
                Your factory: <span className="text-white/65">{summary || "no roles staffed yet"}</span>
                {rolesCount > 0 && (
                  <>
                    {" "}— <span className="text-white/65">{includedHours.toLocaleString("en-US")}</span> included
                    run-hours a month{stacks.length > 0 && (
                      <>
                        , speaking <span className="text-white/65">{stacks.join(", ")}</span>
                      </>
                    )}
                    .
                  </>
                )}
              </p>
            </div>
          </Reveal>

          {/* Results ledger */}
          <Reveal order={2}>
            <SimResultsPanel
              identity={id}
              pay={pay}
              returns={returns}
              annualNote={`${rolesCount} roles working your backlog around the clock · net of everything you pay us`}
              cta={{ label: "Book a pilot goal — free", href: "/demo" }}
            />
          </Reveal>
        </div>

        {/* Economics - the value side's drivers */}
        <Reveal className="mt-5">
          <div className="glass-panel rounded-[22px] p-6 lg:p-8" style={{ "--glass-accent": id.accentRgb } as CSSProperties}>
            <GroupLabel>Your economics — these drive the value side above</GroupLabel>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10">
              {ECONOMICS_SLIDERS.map((s) => (
                <SliderRow key={s.key} agentKey={id.key} accent={id.accent} slider={s} value={econ[s.key]} onChange={setEconValue(s.key)} />
              ))}
            </div>
            <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-xs leading-relaxed mt-6 pt-5 border-t border-white/10">
              Rates used · <span className="text-white/65">{money(PLATFORM_FEE)}</span> factory platform / month ·
              role rates as listed above · <span className="text-white/65">${OVERAGE_PER_RUN_UNIT.toFixed(2)}</span>{" "}
              per run-unit over the included allowance (1 run-unit = 15 minutes of active agent work)
            </p>
          </div>
        </Reveal>

        <Reveal className="mt-8">
          <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/40 text-sm leading-relaxed max-w-xl">
            An estimate, not a quote. Capacity value counts only the share of work you told us Nodus can absorb, at
            your own loaded cost — it does not assume anyone is made redundant, and it does not count architecture,
            stakeholder or discovery work that stays human.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

/* ── Pricing ────────────────────────────────────────────────────────────── */

const PRICE_LINES = [
  {
    title: "1 · Factory platform",
    body: "One fee per connected environment. Governance, approval gates, budget caps, audit trail, Jira/GitHub/GitLab integration, SSO and RBAC, residency.",
    rate: "$3,500 / month per factory",
  },
  {
    title: "2 · Roles you staff",
    body: "The org chart. Each role is a monthly rate with an included run-hour allowance. Add a role in a day, drop it at the end of the month. No notice period, no bench.",
    rate: "$600–$1,800 / role / month",
  },
  {
    title: "3 · Run-time over allowance",
    body: "Only when a role works past its included hours. One run-unit is fifteen minutes of active agent work — the same unit the coding-agent market uses, so you can compare us directly.",
    rate: "$2.00 / run-unit",
  },
  {
    title: "4 · Fixed-price goals (optional)",
    body: "For well-specified BRD work, price the deliverable instead of the capacity. Available only where scope is written down and signed — otherwise capacity is the honest model.",
    rate: "Quoted per goal",
  },
];

const TIERS: PricingTier[] = [
  {
    name: "Pilot",
    blurb: "One real goal, on your repo, before you commit to anything.",
    price: "$0",
    priceMeta: "/ one goal",
    features: [
      "1 delivery goal on your own codebase",
      "Read-only repo access, PR output only",
      "Up to 4 roles staffed by us",
      "Full run log and delivery record",
      "No production access, no card",
    ],
    cta: { label: "Brief a pilot goal", href: "/demo" },
  },
  {
    name: "Factory",
    badge: "Configured",
    blurb: "Your org chart, running in your stack, in our cloud or yours.",
    price: "$3,500",
    priceMeta: "+ roles / month",
    features: [
      "Platform fee plus the roles you staff",
      "Included run-hours per role",
      "$2.00 per run-unit over allowance",
      "Your Jira, GitHub, GitLab and gates",
      "Budget caps per goal and per team",
      "Add or drop roles month to month",
      "Email support, 99.5% uptime",
    ],
    cta: { label: "Configure and get a quote", href: "/demo" },
    featured: true,
  },
  {
    name: "Sovereign factory",
    blurb: "On-premises or air-gapped, your models, your perimeter.",
    price: "Custom",
    priceMeta: "/ deployment",
    features: [
      "Everything in Factory, plus:",
      "On-prem or fully air-gapped",
      "Local models, code never leaves",
      "Committed capacity at a volume role rate",
      "Fixed-price goal option on signed scope",
      "Custom roles for your domain",
      "Named delivery lead, 24/7, SLA",
    ],
    cta: { label: "Talk to our team", href: "/contact" },
  },
];

/** NodusPricing - "platform + roles + run-time. Three lines, no surprises." */
export const NodusPricing = (): JSX.Element => (
  <PricingSection
    identity={id}
    kicker="Pricing, Explained"
    title="Platform + roles + run-time. Three lines, no surprises."
    lede="This is the structure enterprise buyers already understand, assembled from the two models that have actually worked in this market: capacity pricing from delivery outsourcing, and metered agent compute from the coding-agent vendors."
    placeholderNote="All figures are placeholders — set your own before publishing"
    explainer={
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
        {PRICE_LINES.map((line, i) => (
          <Reveal key={line.title} order={i} className="h-full">
            <div
              className="glass-panel relative flex flex-col h-full rounded-[22px] p-6 overflow-hidden"
              style={{ "--glass-accent": id.accentRgb } as CSSProperties}
            >
              <div
                className="absolute inset-x-0 top-0 h-px"
                style={{ background: `linear-gradient(90deg, transparent, ${id.accent}66, transparent)` }}
                aria-hidden="true"
              />
              <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base mb-3">
                {line.title}
              </h3>
              <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/55 text-sm leading-relaxed mb-5">
                {line.body}
              </p>
              <p
                className="mt-auto pt-4 border-t border-white/10 [font-family:'Satoshi-Medium',Helvetica] text-sm tabular-nums"
                style={{ color: id.accentSoft }}
              >
                {line.rate}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    }
    tiers={TIERS}
  />
);
