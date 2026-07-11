import { Toast } from "../../../components/ui/toast";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const ResearchSection = (): JSX.Element => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [toast, setToast] = useState<{
    show: boolean;
    message: string;
    type: "success" | "error" | "info";
  }>({
    show: false,
    message: "",
    type: "info",
  });

  const showToast = (message: string, type: "success" | "error" | "info") => {
    setToast({ show: true, message, type });
  };

  const closeToast = () => {
    setToast({ show: false, message: "", type: "info" });
  };

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate email
    if (!email.trim()) {
      showToast("Please enter your email address.", "error");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_zban55p";
      const templateId = "template_ee7n6g8";
      const publicKey = "ldyxcf_QiGp4t_arv";

      // Template parameters
      const templateParams = {
        from_email: email,
        message: "New newsletter subscription request",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus("success");
      showToast("Thank you for subscribing! You'll receive our latest insights soon.", "success");

      // Reset form after a delay
      setTimeout(() => {
        setEmail("");
      }, 500);
    } catch (error: any) {
      console.error("Failed to subscribe:", error);
      setSubmitStatus("error");
      showToast("Sorry, there was an error. Please try again or contact us at moaazeldemery@gmail.com", "error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast.show && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, pointerEvents: 'none' }}>
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={closeToast}
          />
        </div>
      )}
      <section className="w-full px-4 sm:px-8 lg:px-16 xl:px-24 py-20 lg:py-28">
        <div className="max-w-6xl mx-auto border-t border-white/15 pt-14 grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-x-16 gap-y-10 items-center">
          <div className="max-w-xl">
            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#9b5cf6] text-xs uppercase tracking-[0.25em] mb-4">
              The Quarterly Engineering Report
            </p>
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold tracking-[-1.80px] text-gradient-shine text-3xl md:text-4xl lg:text-5xl leading-[1.08] mb-5">
              Intelligence, delivered quarterly.
            </h2>
            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/60 text-base lg:text-lg leading-relaxed">
              No marketing spam. Just clear, useful breakdowns on banking decision workflows, risk, and delivery.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="glass-panel w-full sm:w-[300px] h-12 px-5 rounded-[32px] bg-transparent [font-family:'Satoshi-Regular',Helvetica] font-normal text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-[#9b5cf6]/50 transition-colors"
            />

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="group h-12 px-8 bg-white text-[#0b0713] rounded-[32px] hover:bg-white/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shrink-0"
            >
              <span className="inline-flex items-center gap-2 [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm whitespace-nowrap">
                {isSubmitting ? "Subscribing..." : submitStatus === "success" ? "Subscribed!" : "Subscribe"}
                {!isSubmitting && submitStatus !== "success" && (
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                )}
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

