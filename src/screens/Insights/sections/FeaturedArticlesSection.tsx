import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Header } from "../../../components/layout/Header";
import { Toast } from "../../../components/ui/toast";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const FeaturedArticlesSection = (): JSX.Element => {
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
      <section className="relative w-full h-auto overflow-hidden">
        <div className="absolute inset-0 w-full h-full [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]" />

        {/* Header */}
        <Header />

        {/* Main content - centered with auto layout */}
        <main className="relative z-10 flex flex-col items-center justify-center px-4 py-20 min-h-[850px]">
          <div className="flex flex-col items-center gap-10 max-w-[1200px] w-full mx-auto">
            {/* Hero text section */}
            <div className="flex flex-col items-center gap-8 text-center">
              <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] 
            [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] 
            [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl 
            lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] 
            animate-fade-in opacity-0 [--animation-delay:200ms]">
                INTELLIGENCE, DECODED
              </h1>

              <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-lg 
            md:text-xl lg:text-2xl xl:text-[28px] text-center tracking-[0] leading-normal max-w-[1001px] 
            translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
                Practical insights on Banking AI, credit decisioning, treasury/FX risk, and spatial intelligence-written for leaders who ship.
              </p>
            </div>

            {/* Subscription section - inline layout */}
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-4 translate-y-[-1rem] animate-fade-in 
            opacity-0 [--animation-delay:600ms]"
            >
              <div className="flex w-[300px] h-12 items-center gap-2 px-4 py-2 rounded-[32px] border-[0.8px] 
            border-solid border-[#a9a9a9]">
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-transparent border-0 p-0 [font-family:'Satoshi-Regular',Helvetica] 
                font-normal text-[#a9a9a9] text-base tracking-[0] leading-6 placeholder:text-[#a9a9a9] 
                focus-visible:ring-0 focus-visible:ring-offset-0"
                  placeholder="Your email"
                  type="email"
                  required
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="px-12 py-3 h-12 bg-[#4a0082] rounded-[32px] hover:bg-[#4a0082]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-sm 
              text-center tracking-[0] leading-6 whitespace-nowrap">
                  {isSubmitting ? "Subscribing..." : submitStatus === "success" ? "Subscribed!" : "Subscribe"}
                </span>
              </Button>
            </form>
          </div>
        </main>
      </section>
    </>
  );
};
