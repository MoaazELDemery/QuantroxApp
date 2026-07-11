import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { EditorialRows } from "../../components/page/primitives";
import { Toast } from "../../components/ui/toast";

const FIELD_CLASS =
  "w-full bg-transparent border-0 border-b border-white/20 px-0 py-3.5 text-white placeholder:text-white/35 [font-family:'Satoshi-Regular',Helvetica] text-sm rounded-none focus:border-[#9b5cf6] focus:outline-none transition-colors";

const SERVICE_ID = "service_zban55p";
const TEMPLATE_ID = "template_ee7n6g8";
const PUBLIC_KEY = "ldyxcf_QiGp4t_arv";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Week 1 - Discovery",
    desc: "We map your data landscape and operational bottlenecks. By the end of week one, we know exactly what the problem is.",
  },
  {
    num: "02",
    title: "Week 2 - Use-Case Blueprint",
    desc: "We define the decision workflow, the success metrics, and the governance requirements - before any code is written.",
  },
  {
    num: "03",
    title: "Weeks 3-5 - Prototype Demo",
    desc: "We configure Cortex and map your workflows through Cognitive Flux Mapping. You see the system running on your data.",
  },
  {
    num: "04",
    title: "Week 6+ - Rollout Plan",
    desc: "We align on integration, operating model, and a phased production rollout. No surprises.",
  },
];

type FormData = {
  name: string;
  company: string;
  email: string;
  vertical: string;
  interest: string;
  message: string;
};

const INITIAL_FORM: FormData = {
  name: "",
  company: "",
  email: "",
  vertical: "",
  interest: "",
  message: "",
};

export const Contact = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({ show: false, message: "", type: "info" });

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({ show: true, message, type });
  };

  const closeToast = () => {
    setToast({ show: false, message: "", type: "info" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.name.trim()) { showToast("Please enter your name.", "error"); return; }
    if (!formData.company.trim()) { showToast("Please enter your company name.", "error"); return; }
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      showToast("Please enter a valid corporate email.", "error"); return;
    }
    if (!formData.vertical) { showToast("Please select a vertical.", "error"); return; }
    if (!formData.interest) { showToast("Please select your area of interest.", "error"); return; }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const detailedMessage = `Vertical: ${formData.vertical}\nInterest: ${formData.interest}\n\nMessage:\n${formData.message || "No specific message provided."}`.trim();

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          company_name: formData.company,
          job_title: formData.vertical,
          message: detailedMessage,
        },
        PUBLIC_KEY
      );

      setSubmitStatus("success");
      showToast("Thank you! Your message has been sent successfully.", "success");
      setTimeout(() => setFormData(INITIAL_FORM), 500);
    } catch {
      setSubmitStatus("error");
      showToast(
        "Sorry, there was an error sending your message. Please contact us at innovation@quantorx.com",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      {toast.show && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 99999,
            pointerEvents: "none",
          }}
        >
          <Toast message={toast.message} type={toast.type} onClose={closeToast} />
        </div>
      )}

      <PageHero
        eyebrow="Get in Touch"
        title="Engineer Your Advantage."
        lede="You are one conversation away from automating your most complex decision-making processes."
        video="/videos/data-vault.mp4"
        plainTitle
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://calendly.com/quantorx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white rounded-[32px] px-8 py-3 text-black [font-family:'Satoshi-Medium',Helvetica] hover:bg-white/90 transition-colors"
          >
            Book a 20-Min Intro Call
          </a>
          <button
            onClick={scrollToForm}
            className="glass-panel glass-hover inline-flex items-center justify-center rounded-[32px] px-8 py-3 text-white/90 [font-family:'Satoshi-Medium',Helvetica] hover:text-white hover:-translate-y-px transition-all duration-300"
          >
            Request a Demo
          </button>
        </div>
      </PageHero>

      {/* PROCESS - deployment timeline */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              The Path to Deployment
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
              What happens after<br />you reach out.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/55 text-base lg:text-lg">
              We move fast and don't waste your time.
            </p>
          </div>
          <EditorialRows
            rows={PROCESS_STEPS.map((step) => {
              const [when, what] = step.title.split(" - ");
              return { tag: when, title: what, body: step.desc };
            })}
          />
        </div>
      </section>

      {/* FORM - editorial split */}
      <section id="contact-form" className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24 bg-[#ffffff04]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.25fr] gap-x-20 gap-y-12">
          <div>
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              Request a Demo
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-[1.08] mb-6">
              Tell us about the decision you need to automate.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/55 text-base leading-relaxed max-w-md">
              What's manual, what's breaking, and what outcome you're trying to reach - we'll map
              the rest.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className={FIELD_CLASS}
              />
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                required
                className={FIELD_CLASS}
              />
            </div>

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Corporate Email"
              type="email"
              required
              className={FIELD_CLASS}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
              <select
                name="vertical"
                value={formData.vertical}
                onChange={handleChange}
                required
                className={`${FIELD_CLASS} appearance-none cursor-pointer ${formData.vertical ? "text-white" : "text-white/35"}`}
              >
                <option value="" disabled className="text-white/40 bg-black">Industry Vertical</option>
                <option value="Banking/FinTech" className="bg-black text-white">Banking / FinTech</option>
                <option value="Logistics/Spatial" className="bg-black text-white">Logistics / Spatial</option>
                <option value="Government" className="bg-black text-white">Government</option>
                <option value="Healthcare" className="bg-black text-white">Healthcare</option>
                <option value="Other" className="bg-black text-white">Other</option>
              </select>

              <select
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                required
                className={`${FIELD_CLASS} appearance-none cursor-pointer ${formData.interest ? "text-white" : "text-white/35"}`}
              >
                <option value="" disabled className="text-white/40 bg-black">Solution of Interest</option>
                <option value="Nodus · The Digital Factory" className="bg-black text-white">Nodus · The Digital Factory</option>
                <option value="Axon · Urban Intelligence" className="bg-black text-white">Axon · Urban Intelligence</option>
                <option value="Nexus · Customer Success" className="bg-black text-white">Nexus · Customer Success</option>
                <option value="PayGate · Partner Enablement" className="bg-black text-white">PayGate · Partner Enablement</option>
                <option value="Nextra · Money Advisory" className="bg-black text-white">Nextra · Money Advisory</option>
                <option value="BookWorm · Brokerage Platform" className="bg-black text-white">BookWorm · Brokerage Platform</option>
                <option value="Custom Engineering" className="bg-black text-white">Custom Engineering</option>
              </select>
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the workflow you want an AI Agent to handle."
              className={`${FIELD_CLASS} h-28 resize-none`}
            />

            <div className="flex flex-col sm:flex-row sm:items-center gap-5 mt-8">
              <button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="group inline-flex items-center justify-center gap-2 bg-white text-[#0b0713] rounded-[32px] px-9 py-3.5 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
              >
                {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : "Initiate Engineering Feasibility"}
                {!isSubmitting && submitStatus !== "success" && (
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                )}
              </button>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/40 text-xs leading-relaxed">
                We respond within one business day.<br className="hidden sm:block" /> No spam, no sales pressure.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* CONTACT DETAILS - direct register */}
      <section className="px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              Direct Contact
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-tight">
              Prefer to reach us directly?
            </h2>
          </div>
          <div className="border-t border-b border-white/15 divide-y divide-white/10 sm:divide-y-0 sm:grid sm:grid-cols-3 sm:divide-x sm:divide-white/10">
            <div className="py-9 sm:pr-10">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] shadow-[0_0_8px_rgba(155,92,246,0.8)]" aria-hidden="true" />
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
                  Office
                </span>
              </div>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm leading-relaxed">
                Maadi, Al-Ma'arag City<br />Building No. 5158<br />Cairo, Egypt
              </p>
            </div>

            <div className="py-9 sm:pl-10 sm:pr-10">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] shadow-[0_0_8px_rgba(155,92,246,0.8)]" aria-hidden="true" />
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
                  Email
                </span>
              </div>
              <a
                href="mailto:innovation@quantorx.com"
                className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm hover:text-white transition-colors"
              >
                innovation@quantorx.com
              </a>
            </div>

            <div className="py-9 sm:pl-10">
              <div className="flex items-center gap-2.5 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9b5cf6] shadow-[0_0_8px_rgba(155,92,246,0.8)]" aria-hidden="true" />
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white/35 text-[11px] uppercase tracking-[0.25em]">
                  Phone
                </span>
              </div>
              <div className="flex flex-col gap-1.5">
                <a href="tel:+18134471388" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm hover:text-white transition-colors tabular-nums">
                  +1 813 447 1388
                </a>
                <a href="tel:+966537507578" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm hover:text-white transition-colors tabular-nums">
                  +966 537 507 578
                </a>
                <a href="tel:+201119974983" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/70 text-sm hover:text-white transition-colors tabular-nums">
                  +20 111 997 4983
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};
