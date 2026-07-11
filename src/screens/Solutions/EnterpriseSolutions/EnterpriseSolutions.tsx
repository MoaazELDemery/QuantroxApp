import { PageCTA, EditorialRows, ProductShot, Reveal, SectionHeader, StatValue } from "../../../components/page/primitives";
import { PageLayout } from "../../../components/layout/PageLayout";
import { PageHero } from "../../../components/layout/PageHero";

const PLATFORM_STATS = [
  { val: "6", label: "Operator systems" },
  { val: "~50", label: "Screens" },
  { val: "20+", label: "Microservices" },
  { val: "~150", label: "Table data model" },
  { val: "12", label: "Four-eye-gated operations" },
  { val: "15", label: "Governed AI tools" },
];

const SYSTEMS = [
  {
    tag: "System 1A · Trading & Execution",
    title: "Front Office",
    body: "The trading cockpit - real-time EGX order entry, execution management and pre-trade risk control. Every order clears a buying-power, margin and position gate before routing; oversells are rejected instantly with a coded reason. FIX 4.4 to the exchange, live blotter with real identity.",
    value: "< 1 ms risk-check",
  },
  {
    tag: "System 1B · Settlement, Cash & Ledger",
    title: "Back Office",
    body: "The post-trade engine room - a forward-only T+2 DvP state machine, four-eye cash operations, automated three-way reconciliation plus MCDR trade-feed recon, and a double-entry ledger that rejects unbalanced batches by construction. CAR and Balance Sheet live from the ledger.",
    value: "0 unbalanced entries",
  },
  {
    tag: "System 1C · The Gatekeeper",
    title: "Compliance & Admin",
    body: "KYC as a hard trading gate - no APPROVED status, no orders, no cash. AML alert dashboard with STR workflow, golden-source security master, RBAC + TOTP identity, and ten data-driven config registers changed by an authorised admin, not a deployment.",
    value: "Hash-chained audit",
  },
  {
    tag: "System 02 · Safekeeping & Asset Servicing",
    title: "Custody",
    body: "Corporate actions computed instead of guessed - dedicated processors for cash dividend, stock dividend, rights and split, with fractions and withholding tax per holder. Fixed-income servicing for bonds, T-bills and money-market funds; custody reconciled three ways.",
    value: "3-way custody recon",
  },
  {
    tag: "System 03 · Research & Optimization",
    title: "Quant Lab",
    body: "Institutional research over the EGX universe inside the same governed platform as the dealing desk - a live Markowitz mean-variance optimizer, mixed-integer cardinality optimizer, walk-forward validation, screeners and a versioned signal library. Overfit strategies die in the lab.",
    value: "SLSQP + MILP live",
  },
  {
    tag: "System 04 · Wealth & Client Reporting",
    title: "Portfolio Management",
    body: "Time-weighted returns, VaR, stress testing, Monte Carlo and Brinson-Fachler attribution behind a purpose-built service. Robo-advisory with supervision queues, printable client statements, and a hard boundary between the portfolio manager and the dealing desk - enforced in code.",
    value: "TWR · VaR · 3 personas",
  },
];

const WHY = [
  {
    title: "One platform, six systems",
    body: "Front, Back, Compliance, Custody, Quant and Portfolio share one identity model, one security master, one audit trail - no swivel-chair integration.",
  },
  {
    title: "Provable to the piaster",
    body: "A double-entry ledger that rejects unbalanced entries, protected client-money accounts, and a Trade Trail that drills any order to its balanced GL lines.",
  },
  {
    title: "Governed by design",
    body: "Maker-checker four-eye control on 12 operations, KYC as a hard trading gate, row-level tenant isolation, MFA, and role-gated screens.",
  },
  {
    title: "AI as a governed colleague",
    body: "The Geek copilot reads live data instantly - but every write it proposes stops at a human approval. AI leverage without AI risk.",
  },
];

const READ_TOOLS = [
  "list_clients",
  "check_kyc",
  "get_balance",
  "check_margin",
  "get_order",
  "list_recent_orders",
  "get_market_snapshot",
  "search_instruments",
  "get_settlement_status",
  "get_eod_status",
];

const WRITE_TOOLS = [
  "submit_order",
  "cancel_order",
  "request_withdrawal",
  "flag_settlement_fail",
  "trigger_eod",
];

const GEEK_DISCIPLINES = [
  {
    title: "Zero-hallucination discipline",
    body: "Writes go through the owning service with idempotency keys - never raw database access. No tool, no answer invented.",
  },
  {
    title: "Fail-closed on compliance",
    body: "An order for a KYC-rejected client is refused; an over-balance withdrawal surfaces insufficient funds. The gates hold against the AI.",
  },
  {
    title: "Trade Trail transparency",
    body: "Any order reconstructed end-to-end - order, FIX ID, commission, balanced GL lines - with raw-payload toggle and CSV export.",
  },
];

const VS_LEGACY = [
  {
    dim: "Interface",
    legacy: "Green-screen terminals, keyboard codes, per-module logins",
    bookworm: "Six modern web systems - filterable grids, live charts, drill-down, one identity",
  },
  {
    dim: "Processing",
    legacy: "Overnight batch; today's risk known tomorrow",
    bookworm: "Real-time pre-trade risk and live regulatory capital; EOD a visible, gated pipeline",
  },
  {
    dim: "Reconciliation",
    legacy: "Manual Excel matching; breaks with no owner",
    bookworm: "Automated 3-way recon + MCDR trade feed, with a governed break workflow",
  },
  {
    dim: "Books",
    legacy: "Journals editable, balances drift, audit is archaeology",
    bookworm: "Double-entry enforced - unbalanced rejected, client-money protected, contra-only",
  },
  {
    dim: "Controls",
    legacy: "Single-person release of cash and settlement",
    bookworm: "Maker-checker four-eye on 12 operations, checker ≠ maker enforced in code",
  },
  {
    dim: "Regulatory",
    legacy: "Quarter-end scramble to assemble capital returns",
    bookworm: "CAR / Net Capital and Balance Sheet live from the ledger, printable on demand",
  },
  {
    dim: "AI",
    legacy: "None",
    bookworm: "Geek governed copilot - live-data answers, human-approved actions. No legacy equivalent",
  },
];

export const EnterpriseSolutions = (): JSX.Element => (
  <PageLayout>
    {/* Hero */}
    <PageHero
      eyebrow="Enterprise Brokerage Platform"
      title={<>BookWorm.</>}
      lede="Six integrated systems that run an entire securities brokerage - trading, settlement, compliance, custody, research and wealth - on one governed platform. Every trade traceable to the general-ledger line. Every number provable."
      video="/videos/data-vault.mp4"
      ctas={[
        { label: "Book a BookWorm Demo", href: "/demo" },
        { label: "Talk to an Expert", href: "/contact", variant: "outline" },
      ]}
    />

    {/* The principle */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-6">
            Why BookWorm
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-8 max-w-4xl">
            Replace the back office you inherited. Keep the audit trail regulators dream about.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-base lg:text-lg leading-relaxed max-w-3xl mb-6">
            Most brokerages still run decades-old, terminal-era back-office software - overnight
            batches, manual Excel reconciliation, books that drift, errors that read "contact the
            vendor." BookWorm is a ground-up, event-driven rebuild of that entire stack for the
            Egyptian market, on one principle:
          </p>
          <p className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-xl lg:text-2xl tracking-[-0.01em] max-w-3xl">
            If the system can't prove a number, it doesn't show the number.
          </p>
        </Reveal>

        {/* Platform register */}
        <div className="mt-16 border-t border-b border-white/15 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-white/10">
          {PLATFORM_STATS.map((stat, i) => (
            <div key={stat.label} className={`py-8 px-5 ${i >= 3 ? "border-t border-white/10 lg:border-t-0" : ""}`}>
              <div className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl lg:text-4xl tracking-[-0.03em] leading-none mb-2.5 tabular-nums">
                <StatValue val={stat.val} accent="#ffffff" />
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/45 text-xs leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Seen in the product - real screens from the suite */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 pb-16 lg:pb-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="Seen in the product"
          title={<>Real screens.<br />Every number provable.</>}
          lede="Straight from the running suite: the trading cockpit, the quant lab and the portfolio desk - every figure on these screens traces to a ledger line or a recorded run."
          className="mb-14"
        />
        <div className="max-w-4xl mx-auto">
          <ProductShot
            src="/product/bookworm-frontoffice.webp"
            variant="laptop"
            caption="System 1A · Front Office · OMS blotter, order → execution → settlement"
            alt="BookWorm Front Office order management blotter on a MacBook Air"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 lg:gap-12 mt-14 lg:mt-16">
          <ProductShot
            src="/product/bookworm-quantlab.webp"
            variant="laptop"
            caption="System 03 · Quant Lab · strategy backtesting on EGX data"
            alt="BookWorm Quant Lab dashboard showing strategy backtesting results on a MacBook Air"
          />
          <ProductShot
            src="/product/bookworm-portfolio.webp"
            variant="laptop"
            caption="System 04 · Portfolio Management · omnibus instruction builder"
            alt="BookWorm Portfolio Management omnibus instruction builder on a MacBook Air"
          />
        </div>
      </div>
    </section>

    {/* Why - foundations */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
          {WHY.map((item, i) => (
            <Reveal key={item.title} order={i * 2}>
              <div className="relative border-t border-white/15 pt-8 h-full">
                <span
                  className="pointer-events-none select-none absolute top-3 right-0 [font-family:'Satoshi-Black',Helvetica] font-black text-lg leading-none text-transparent"
                  style={{ WebkitTextStroke: "1px rgba(155,92,246,0.35)" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.02em] text-white text-lg mb-3 pr-8">
                  {item.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/55 text-sm">
                  {item.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* The six systems */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="The Suite"
          title={<>One platform,<br />six systems.</>}
          lede="One identity model, one security master, one audit trail - no swivel-chair integration across the brokerage."
          className="mb-10"
        />
        <EditorialRows rows={SYSTEMS} />
      </div>
    </section>

    {/* Geek · the governed AI copilot */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d946ef] text-xs uppercase tracking-[0.25em] mb-6">
            Geek · The Governed AI Copilot
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl sm:text-4xl lg:text-5xl leading-[1.08] mb-6 max-w-4xl">
            An AI colleague on every screen.<br />A human veto on every write.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-base lg:text-lg leading-relaxed max-w-3xl mb-14">
            Geek is a real AI agent embedded across all six systems - answering from live
            production data through 15 governed tools, in the operator's own permissions. Not a
            chatbot bolted on; a colleague wired into the platform's control framework.
          </p>
        </Reveal>

        {/* Read vs write - split ledger */}
        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-white/15 mb-16">
          <Reveal order={0}>
            <div className="pt-10 pb-12 sm:pr-10 sm:border-r sm:border-white/10 h-full">
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em] mb-6">
                Instant answers · read tools
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {READ_TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] text-white/70 border border-white/15 rounded-md px-2.5 py-1.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/50 text-sm leading-relaxed max-w-md">
                Answered in seconds from the live ledger, scoped to what the asking user may see -
                every response verified against the database, byte for byte.
              </p>
            </div>
          </Reveal>
          <Reveal order={2}>
            <div className="pt-10 pb-12 sm:pl-12 h-full">
              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d946ef] text-[11px] uppercase tracking-[0.25em] mb-6">
                Governed actions · four-eye gated writes
              </p>
              <div className="flex flex-wrap gap-2 mb-7">
                {WRITE_TOOLS.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono text-[11px] text-white/85 border border-[#d946ef]/40 rounded-md px-2.5 py-1.5"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/50 text-sm leading-relaxed max-w-md">
                A write that moves money or market risk lands in the human approval inbox and
                executes only after a second person grants it. The AI cannot self-execute - by
                architecture, not policy.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Disciplines */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-x-12 gap-y-10">
          {GEEK_DISCIPLINES.map((d, i) => (
            <Reveal key={d.title} order={i * 2}>
              <div className="border-t border-white/15 pt-7 h-full">
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-0.01em] text-white text-base mb-2.5">
                  {d.title}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal leading-relaxed text-white/50 text-sm">
                  {d.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    {/* Legacy vs BookWorm */}
    <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker="BookWorm vs the Installed Base"
          title={<>The software they run today<br />was written for a different century.</>}
          className="mb-12"
        />
        <div className="border-t border-white/15">
          <div className="hidden lg:grid lg:grid-cols-[10rem_1fr_1fr] gap-x-10 py-4 border-b border-white/10">
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/35 text-[11px] uppercase tracking-[0.25em]">Dimension</span>
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-white/35 text-[11px] uppercase tracking-[0.25em]">Legacy back office</span>
            <span className="[font-family:'Satoshi-Medium',Helvetica] text-[#9b5cf6] text-[11px] uppercase tracking-[0.25em]">BookWorm</span>
          </div>
          {VS_LEGACY.map((row, i) => (
            <Reveal key={row.dim} order={Math.min(i, 4)}>
              <div className="grid grid-cols-1 lg:grid-cols-[10rem_1fr_1fr] gap-x-10 gap-y-3 py-7 border-b border-white/10 transition-colors duration-300 hover:border-white/25">
                <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-0.01em]">
                  {row.dim}
                </h4>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/40 text-sm leading-relaxed">
                  <span className="text-white/25 mr-2" aria-hidden="true">✗</span>
                  {row.legacy}
                </p>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/80 text-sm leading-relaxed">
                  <span className="text-[#9b5cf6] mr-2" aria-hidden="true">✓</span>
                  {row.bookworm}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="[font-family:'Satoshi-Regular',Helvetica] text-white/35 text-xs mt-6 italic">
          Illustrative - rows describe a typical terminal-era brokerage back office; specifics vary by the incumbent system in place.
        </p>
      </div>
    </section>

    <PageCTA
      title={<>Every number, provable.</>}
      sub={<>Six systems, one governed platform - built ground-up for the Egyptian market, from the exchange gateway to the general ledger.</>}
      primary={{ label: "Book a BookWorm Demo", href: "/demo" }}
      secondary={{ label: "Talk to an Expert", href: "/contact" }}
      chips={["FIX 4.4 · EGX", "T+2 DvP lifecycle", "Double-entry by construction", "Geek AI copilot"]}
    />
  </PageLayout>
);
