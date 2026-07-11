import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Toast } from "../../../components/ui/toast";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

/** Inline newsletter subscribe form (extracted from the old hero section). */
export const NewsletterForm = (): JSX.Element => {
  const [email, setEmail] = useState("");
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

  const closeToast = () => setToast({ show: false, message: "", type: "info" });

  const handleSubscribe = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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
      const serviceId = "service_zban55p";
      const templateId = "template_ee7n6g8";
      const publicKey = "ldyxcf_QiGp4t_arv";
      await emailjs.send(
        serviceId,
        templateId,
        { from_email: email, message: "New newsletter subscription request" },
        publicKey,
      );
      setSubmitStatus("success");
      showToast("Thank you for subscribing! You'll receive our latest insights soon.", "success");
      setTimeout(() => setEmail(""), 500);
    } catch (error) {
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
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, zIndex: 99999, pointerEvents: "none" }}>
          <Toast message={toast.message} type={toast.type} onClose={closeToast} />
        </div>
      )}
      <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[300px] h-12 rounded-[32px] px-5"
          placeholder="Your email"
          type="email"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting || submitStatus === "success"}
          className="px-12 h-12"
        >
          <span className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-sm whitespace-nowrap">
            {isSubmitting ? "Subscribing..." : submitStatus === "success" ? "Subscribed!" : "Subscribe"}
          </span>
        </Button>
      </form>
    </>
  );
};
