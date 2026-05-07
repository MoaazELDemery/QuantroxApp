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
      <section className="w-full h-[450px] flex items-center justify-center py-16">
        <div className="flex flex-col lg:flex-row max-w-[1248px] w-full items-center justify-center 
      lg:justify-between gap-8 px-4">
          <div className="flex flex-col max-w-[658px] w-full items-center lg:items-start justify-between 
        gap-6 translate-y-[-1rem] animate-fade-in opacity-0 text-center lg:text-left">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl 
          tracking-[0] leading-[normal] w-full">
              RECEIVE THE QUARTERLY ENGINEERING REPORT.
            </h2>

            <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-white/85 text-2xl 
          tracking-[0] leading-[normal] w-full">
              No marketing spam. Just clear, useful breakdowns on banking decision workflows, risk, and delivery.
            </p>
          </div>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6 flex-shrink-0 
          translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="w-[300px] h-12 px-4 py-2 rounded-[32px] border-[0.8px] border-solid 
            border-[#a9a9a9] bg-transparent [font-family:'Satoshi-Regular',Helvetica] font-normal 
            text-white/75 text-base placeholder:text-white/75"
            />

            <button
              type="submit"
              disabled={isSubmitting || submitStatus === "success"}
              className="px-12 py-3 h-auto bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 
            transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-white 
            text-sm text-center tracking-[0] leading-6 whitespace-nowrap">
                {isSubmitting ? "Subscribing..." : submitStatus === "success" ? "Subscribed!" : "SUBSCRIBE TO INTEGRITY"}
              </span>
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

