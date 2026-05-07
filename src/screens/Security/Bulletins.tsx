import { PageLayout } from "../../components/layout/PageLayout";

const certifications = [
  {
    title: "SOC2 Type II",
    description: "Annual audit by independent assessor",
  },
  {
    title: "ISO 27001:2022",
    description: "Information security management",
  },
  {
    title: "ISO 27701",
    description: "Privacy information management",
  },
];

const bulletins = [
  {
    id: "QX-SEC-2026-001",
    title: "QX-SEC-2026-001 — Platform Security Update",
    date: "January 2026",
    description:
      "Routine security patches and dependency updates. No customer action required.",
  },
  {
    id: "QX-SEC-2025-003",
    title: "QX-SEC-2025-003 — TLS Configuration Hardening",
    date: "Q4 2025",
    description:
      "Upgraded minimum TLS to 1.3 across all platform endpoints. Legacy TLS 1.2 deprecated.",
  },
];

export const SecurityBulletins = (): JSX.Element => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="w-full flex flex-col items-center justify-center px-6 sm:px-8 lg:px-16 xl:px-24 pt-12 pb-20 text-center">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Trust &amp; Transparency
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6 max-w-3xl">
          Security Bulletins
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg md:text-xl leading-relaxed max-w-2xl">
          Transparency on security practices, certifications, and vulnerability disclosures.
        </p>
      </section>

      {/* Content */}
      <section className="w-full px-6 sm:px-8 lg:px-16 xl:px-24 pb-24">
        <div className="max-w-4xl mx-auto flex flex-col gap-16">
          {/* Certifications */}
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl md:text-3xl tracking-[-1.80px]">
              Current Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert) => (
                <div
                  key={cert.title}
                  className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors text-center flex flex-col gap-2 items-center"
                >
                  <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-lg tracking-[-1.80px]">
                    {cert.title}
                  </h4>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Vulnerability Disclosure Policy */}
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl md:text-3xl tracking-[-1.80px]">
              Vulnerability Disclosure Policy
            </h2>
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-8 flex flex-col gap-4">
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 leading-relaxed">
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
              <ul className="flex flex-col gap-3 mt-2">
                {[
                  "We acknowledge receipt within 24 hours",
                  "We provide an initial assessment within 72 hours",
                  "We coordinate disclosure timelines with reporters",
                  "We do not pursue legal action against good-faith security researchers",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-[#9b5cf6] mt-1">&#x2713;</span>
                    <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 leading-relaxed text-sm">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Recent Bulletins */}
          <div className="flex flex-col gap-6">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-2xl md:text-3xl tracking-[-1.80px]">
              Recent Bulletins
            </h2>
            <div className="flex flex-col gap-4">
              {bulletins.map((bulletin) => (
                <div
                  key={bulletin.id}
                  className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-2"
                >
                  <h5 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base tracking-[-1.80px]">
                    {bulletin.title}
                  </h5>
                  <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                    {bulletin.date} — {bulletin.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
