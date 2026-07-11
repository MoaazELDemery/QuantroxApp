import { AgentSolutionPage } from "../../../components/page/AgentSolutionPage";
import { AGENT_IDENTITIES } from "../../../lib/agentIdentity";

const features = [
  {
    title: "AI-Powered, Human-Governed",
    body: "An omni-agent workforce plans, builds, tests and delivers end to end - humans set the goals and approve the results. Minimal intervention, complete oversight.",
  },
  {
    title: "Works Inside Your Stack",
    body: "Nodus operates inside your JIRA, GitHub and GitLab - boards, repos and reviews - with privilege-based access per role. A layer on your SDLC, not a rip-and-replace.",
  },
  {
    title: "Goal In, Deliverable Out",
    body: "Give it a goal, not a spec. The workforce breaks it into tasks, assigns owners across the org chart, and ships tested code, reports and release notes.",
  },
  {
    title: "Built for Alignment",
    body: "Approval requests, live run logs and comment threads on every task - redirect any omni-agent mid-flight, exactly like any task board.",
  },
  {
    title: "Industrial-Grade Models",
    body: "Frontier models matched to each role - planners, builders and reviewers each run on the model best suited to the job, swappable by configuration.",
  },
  {
    title: "Secure by Residency",
    body: "Air-gapped or on-premises deployment, SSO/RBAC, least-privilege access to every repo and credential - data stays resident at your premises.",
  },
];

export const Nodus = (): JSX.Element => (
  <AgentSolutionPage
    identity={AGENT_IDENTITIES.nodus}
    heroTitle={<>The Digital<br />Factory.</>}
    heroLede={
      <>
        From Demand to Delivery - a complete structured AI workforce that covers the software
        delivery lifecycle end to end, efficiently and seamlessly, with minimal human intervention
        and complete human oversight.
        <span className="block mt-4 text-base">
          Managers plan while engineers build and testers verify - in parallel, around the clock,
          with progress live on the dashboard. Every deliverable passes quality gates and human
          approval before it ships.
        </span>
      </>
    }
    heroVideo="/videos/tech-circuit.mp4"
    ctas={[
      { label: "Book a Nodus Demo", href: "/demo" },
      { label: "Meet the Workforce →", href: "/solutions", variant: "outline" },
    ]}
    instrument={{
      title: "Time to delivery - goal #2317",
      stops: [
        { label: "Goal briefed", value: "tasks fanned out · 4m", pos: 8 },
        { label: "Build + test", value: "parallel · live logs", pos: 38 },
        { label: "Human approval", value: "quality gates · pass", pos: 68 },
        { label: "Delivered", value: "hours - not weeks", pos: 92 },
      ],
      formulaTitle: "Parallel Delivery Model (PDM)",
      formula: "t(ship) = max(taskᵢ) · 1[approve]",
      disclaimer: "A visualization, traced from live run logs",
    }}
    outcomes={[
      { val: "Hours", label: "Goal to reviewed deliverable - not weeks of sprint cycles" },
      { val: "100%", label: "Human approval gates on sensitive actions" },
      { val: "Zero", label: "New stack required - it works your existing tools" },
    ]}
    featuresKicker="Ready to Work - Industry Aware"
    featuresTitle="A whole org chart, on demand."
    features={features}
    worldTitle="The factory floor, always running."
    worldBody="Nodus is QuantorX's proprietary AI hive - engineering delivery managers, software engineers, architects, QA and business analysts working your backlog in parallel. Budgets cap spend per team and per goal; every change traces to a task and an owner."
    quote="We handed Nodus a goal on Monday morning and reviewed a tested, documented deliverable the same day. The org chart works around the clock - our engineers now spend their time approving and directing, not grinding."
    quoteAttribution="Engineering Director - Enterprise Software, MENA"
    ctaTitle={<>Put a digital factory to work.</>}
    ctaSub="Deploy Nodus on your boards, repos and reviews - air-gapped or on-premises, governed by your approval gates."
    ctaLabel="Book a Nodus Demo"
  />
);
