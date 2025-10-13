import { Button } from "../../../components";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Header } from "../../../components/layout/Header";
import { Toast } from "../../../components/ui/toast";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const RequestSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    jobTitle: "",
    phoneNumber: "",
    message: "",
  });
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
    console.log("showToast called:", { message, type });
    setToast({ show: true, message, type });
  };

  const closeToast = () => {
    console.log("closeToast called");
    setToast({ show: false, message: "", type: "info" });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate all required fields
    if (!formData.firstName.trim()) {
      showToast("Please enter your first name.", "error");
      return;
    }
    if (!formData.lastName.trim()) {
      showToast("Please enter your last name.", "error");
      return;
    }
    if (!formData.companyName.trim()) {
      showToast("Please enter your company name.", "error");
      return;
    }
    if (!formData.email.trim()) {
      showToast("Please enter your email address.", "error");
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    if (!formData.jobTitle.trim()) {
      showToast("Please enter your job title.", "error");
      return;
    }
    if (!formData.phoneNumber.trim()) {
      showToast("Please enter your phone number.", "error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_s6780hs";
      const templateId = "template_3npt8n3";
      const publicKey = "k0QnW5AcS3XvXI_SB";

      // Template parameters - These variable names must match your EmailJS template
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        company_name: formData.companyName,
        job_title: formData.jobTitle,
        phone_number: formData.phoneNumber,
        message: formData.message || "No message provided",
      };

      console.log("Sending email with params:", templateParams);

      const response = await emailjs.send(serviceId, templateId, templateParams, publicKey);
      
      console.log("Email sent successfully:", response);
      setSubmitStatus("success");
      
      // Show toast first
      showToast("Thank you! Your demo request has been sent successfully.", "success");

      // Reset form after a delay to ensure toast is visible
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          companyName: "",
          email: "",
          jobTitle: "",
          phoneNumber: "",
          message: "",
        });
      }, 500);
    } catch (error: any) {
      console.error("Failed to send email:", error);
      console.error("Error details:", error.text || error.message);
      setSubmitStatus("error");
      
      // Show error message
      showToast(
        "Sorry, there was an error sending your request. Please contact us directly at moaazeldemery@gmail.com",
        "error"
      );
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
      <section className="relative w-full flex flex-col items-center gap-[88px] 
  [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0.45)_100%)]">
      <Header />
      <div className="mt-32 md:mt-36 lg:mt-30" />

      <div className="flex flex-col items-center gap-[125px] w-full max-w-[1000px] px-4">
        <div className="flex flex-col items-center gap-10 w-full opacity-0 translate-y-[-1rem] 
        animate-fade-in [--animation-delay:200ms]">
          <div className="flex flex-col items-center gap-[26.34px] w-full">
            <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] 
            [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] 
            [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold 
            text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight 
            translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Request a Demo
            </h1>

            <p className="w-full max-w-[95vw] [font-family:'Satoshi-Medium',Helvetica] 
            font-medium text-[#d9d9d9] text-[23px] text-center tracking-[0] leading-[normal]">
              Experience a tailored demo of our platform - built to streamline portfolio management, enhance transparency, and empower data-driven decisions across your investment teams.
            </p>
          </div>
        </div>

        <div className="flex w-full mb-40 items-center justify-center gap-[30px] p-5 bg-[#ffffff0a] 
        rounded-[20px] border-2 border-solid border-[#090c170d] backdrop-blur-[190px] 
        backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(190px)_brightness(100%)] opacity-0 
        translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <div className="w-full max-w-[706px] gap-[41px] p-10 flex flex-col items-start">
            <div className="gap-2 self-stretch w-full flex flex-col items-start">
              <h2 className="self-stretch [font-family:'Satoshi-Medium',Helvetica] font-medium 
              text-[#ffffff] text-3xl text-center tracking-[-0.60px] leading-[normal]">
                See How Quantorx Can Elevate Your <br />
                Investment Operations
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col items-start gap-3.5 self-stretch w-full">
              <div className="flex items-start gap-3.5 self-stretch w-full">
                <Input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                  className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] h-auto"
                />
                <Input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                  className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] h-auto"
                />
              </div>

              <Input
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
                required
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                type="email"
                required
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleInputChange}
                placeholder="Job Title"
                required
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                type="tel"
                required
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] h-auto"
              />

              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message (Optional)"
                className="w-full h-[111px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] resize-none"
              />

              <Button
                type="submit"
                disabled={isSubmitting || submitStatus === "success"}
                className="w-full h-auto px-[72px] py-4 bg-[#4a0082] rounded-[32px] 
                hover:bg-[#5a0092] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#4a0082]"
              >
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] 
                text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                  {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : "Request"}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};
