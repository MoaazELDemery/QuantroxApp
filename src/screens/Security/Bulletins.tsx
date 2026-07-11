import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";

const certifications = [
  { title: "SOC2 Type II", description: "Annual audit by independent assessor", ref: "CERT / 01" },
  { title: "ISO 27001:2022", description: "Information security management", ref: "CERT / 02" },
  { title: "ISO 27701", description: "Privacy information management", ref: "CERT / 03" },
];

const bulletins = [
  {
    id: "QX-SEC-2026-001",
    title: "Platform Security Update",
    date: "January 2026",
    description:
      "Routine security patches and dependency updates. No customer action required.",
  },
  {
    id: "QX-SEC-2025-003",
    title: "TLS Configuration Hardening",
    date: "Q4 2025",
    description:
      "Upgraded minimum TLS to 1.3 across all platform endpoints. Legacy TLS 1.2 deprecated.",
  },
];

const DISCLOSURE_COMMITMENTS = [
  "We acknowledge receipt within 24 hours",
  "We provide an initial assessment within 72 hours",
  "We coordinate disclosure timelines with reporters",
  "We do not pursue legal action against good-faith security researchers",
];

export const SecurityBulletins = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <PageHero
        eyebrow="Trust & Transparency"
        title={<>Security Bulletins</>}
        lede="Transparency on security practices, certifications, and vulnerability disclosures."
        video="/videos/data-vault.mp4"
        plainTitle
      />

      {/* Content */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-5xl mx-auto flex flex-col gap-20 lg:gap-24">
          {/* Certifications - register band */}
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-8">
              Current Certifications
            </p>
            <div className="border-t border-b border-white/15 divide-y divide-white/10 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
              {certifications.map((cert, i) => (
                <div key={cert.title} className={`py-9 ${i > 0 ? "sm:pl-10" : ""} sm:pr-10`}>
                  <div className="flex items-center gap-2.5 mb-5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] shadow-[0_0_8px_rgba(155,92,246,0.8)]" aria-hidden="true" />
                    <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
                      {cert.ref}
                    </span>
                  </div>
                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl tracking-[-0.02em] mb-2">
                    {cert.title}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vulnerability Disclosure Policy */}
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-6">
              Vulnerability Disclosure Policy
            </p>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-lg lg:text-xl leading-relaxed max-w-3xl mb-10">
              QuantorX is committed to the security of our platform and customer data. If you
              discover a security vulnerability, please report it to{" "}
              <a
                href="mailto:security@quantorx.ai"
                className="text-[#9b5cf6] hover:text-white transition-colors"
              >
                security@quantorx.ai
              </a>
              .
            </p>
            <div className="border-t border-white/10 max-w-3xl">
              {DISCLOSURE_COMMITMENTS.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-6 py-5 border-b border-white/10 transition-colors duration-300 hover:border-white/25"
                >
                  <span
                    className="[font-family:'Satoshi-Black',Helvetica] font-black text-xl leading-none w-10 shrink-0 text-transparent"
                    style={{ WebkitTextStroke: "1px rgba(155,92,246,0.4)" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm lg:text-base leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Bulletins */}
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-8">
              Recent Bulletins
            </p>
            <EditorialRows
              rows={bulletins.map((bulletin) => ({
                tag: `${bulletin.id} · ${bulletin.date}`,
                title: bulletin.title,
                body: bulletin.description,
              }))}
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
