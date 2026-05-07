import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { PageLayout } from "../../components/layout/PageLayout";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Toast } from "../../components/ui/toast";

const SERVICE_ID = "service_zban55p";
const TEMPLATE_ID = "template_ee7n6g8";
const PUBLIC_KEY = "ldyxcf_QiGp4t_arv";

const PROCESS_STEPS = [
  {
    num: "01",
    title: "Week 1 — Discovery",
    desc: "We map your data landscape and operational bottlenecks. By the end of week one, we know exactly what the problem is.",
  },
  {
    num: "02",
    title: "Week 2 — Use-Case Blueprint",
    desc: "We define the decision workflow, the success metrics, and the governance requirements — before any code is written.",
  },
  {
    num: "03",
    title: "Weeks 3–5 — Prototype Demo",
    desc: "We configure Cortex and map your workflows through Cognitive Flux Mapping. You see the system running on your data.",
  },
  {
    num: "04",
    title: "Week 6+ — Rollout Plan",
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

export const Demo = (): JSX.Element => {
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
    document.getElementById("demo-form")?.scrollIntoView({ behavior: "smooth" });
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
      showToast("Thank you! Your demo request has been sent successfully.", "success");
      setTimeout(() => setFormData(INITIAL_FORM), 500);
    } catch {
      setSubmitStatus("error");
      showToast(
        "Sorry, there was an error sending your request. Please contact us at innovation@quantorx.com",
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

      {/* HERO */}
      <section className="px-6 py-20 md:py-28 text-center max-w-4xl mx-auto">
        <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-4">
          Live Product Demo
        </p>
        <h1 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-4xl md:text-5xl lg:text-6xl tracking-[-1.80px] leading-tight mb-6">
          See QuantorX in Action.
        </h1>
        <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          Book a personalized live demo and see Cortex deployed against your real decision workflows.
        </p>
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
            className="inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-3 text-white [font-family:'Satoshi-Medium',Helvetica] hover:bg-[#4a0082]/90 transition-colors"
          >
            Request a Demo
          </button>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
            The Path to Deployment
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-4">
            What Happens After You Reach Out.
          </h2>
          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-base text-center mb-10">
            We move fast and don't waste your time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col gap-3"
              >
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#9b5cf6] text-2xl">
                  {step.num}.
                </span>
                <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">
                  {step.title}
                </h3>
                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM */}
      <section id="demo-form" className="px-6 py-16 bg-[#ffffff04]">
        <div className="max-w-2xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3">
            Request a Demo
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl tracking-[-1.80px] mb-8">
            Tell Us About the Decision You Need to Automate.
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                required
                className="flex-1 bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 text-white placeholder:text-white/40 [font-family:'Satoshi-Regular',Helvetica] text-sm h-auto focus:border-white/40 outline-none"
              />
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company"
                required
                className="flex-1 bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 text-white placeholder:text-white/40 [font-family:'Satoshi-Regular',Helvetica] text-sm h-auto focus:border-white/40 outline-none"
              />
            </div>

            <Input
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Corporate Email"
              type="email"
              required
              className="w-full bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 text-white placeholder:text-white/40 [font-family:'Satoshi-Regular',Helvetica] text-sm h-auto focus:border-white/40 outline-none"
            />

            <select
              name="vertical"
              value={formData.vertical}
              onChange={handleChange}
              required
              className={`w-full bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 [font-family:'Satoshi-Regular',Helvetica] text-sm appearance-none cursor-pointer outline-none focus:border-white/40 ${formData.vertical || formData.interest ? "text-white/70" : "text-white/40"}`}

            >
              <option value="" disabled className="text-white/40 bg-black">Select Industry Vertical</option>
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
              className={`w-full bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 [font-family:'Satoshi-Regular',Helvetica] text-sm appearance-none cursor-pointer outline-none focus:border-white/40 ${formData.vertical || formData.interest ? "text-white/70" : "text-white/40"}`}

            >
              <option value="" disabled className="text-white/40 bg-black">Select Solution of Interest</option>
              <option value="Nexus AI — Banking" className="bg-black text-white">Nexus AI — Banking</option>
              <option value="Axon AI — Spatial" className="bg-black text-white">Axon AI — Spatial</option>
              <option value="PayGate — Merchant Onboarding" className="bg-black text-white">PayGate — Merchant Onboarding</option>
              <option value="Geek - Wealth Management" className="bg-black text-white">Geek™ — Wealth Management</option>
              <option value="Credit Bundle Optimizer" className="bg-black text-white">Credit Bundle Optimizer</option>
              <option value="Treasury / FX Risk" className="bg-black text-white">Treasury / FX Risk</option>
              <option value="Custom Engineering" className="bg-black text-white">Custom Engineering</option>
            </select>

            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe the workflow you want an AI Agent to handle — what's manual, what's breaking, and what outcome you're trying to reach."
              className="w-full h-32 bg-[#ffffff0d] rounded-2xl border border-white/20 px-4 py-3 text-white placeholder:text-white/40 [font-family:'Satoshi-Regular',Helvetica] text-sm resize-none focus:border-white/40 outline-none"
            />

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="w-full inline-flex items-center justify-center bg-[#4a0082] rounded-[32px] px-8 py-4 text-white [font-family:'Satoshi-Medium',Helvetica] text-base hover:bg-[#4a0082]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : "Initiate Engineering Feasibility"}
            </button>
            <p className="text-center [font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm">
              We respond within one business day. No spam, no sales pressure.
            </p>
          </form>
        </div>
      </section>

      {/* CONTACT DETAILS */}
      <section className="px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-sm uppercase tracking-[0.15em] mb-3 text-center">
            Direct Contact
          </p>
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl md:text-4xl tracking-[-1.80px] text-center mb-10">
            Prefer to Reach Us Directly?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Office */}
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#9b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">Office</h4>
              <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm leading-relaxed">
                Maadi, Al-Ma'arag City<br />Building No. 5158<br />Cairo, Egypt
              </p>
            </div>

            {/* Email */}
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#9b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">Email</h4>
              <a
                href="mailto:innovation@quantorx.com"
                className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm hover:text-white transition-colors"
              >
                innovation@quantorx.com
              </a>
            </div>

            {/* Phone */}
            <div className="bg-[#ffffff0a] rounded-[20px] border border-white/10 p-6 hover:bg-[#ffffff12] transition-colors flex flex-col items-center text-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center">
                <svg className="w-5 h-5 text-[#9b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h4 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-base">Phone</h4>
              <div className="flex flex-col gap-1">
                <a href="tel:+18134471388" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm hover:text-white transition-colors">
                  +1 813 447 1388
                </a>
                <a href="tel:+966537507578" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm hover:text-white transition-colors">
                  +966 537 507 578
                </a>
                <a href="tel:+201119974983" className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/75 text-sm hover:text-white transition-colors">
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
