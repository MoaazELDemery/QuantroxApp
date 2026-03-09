import { Button } from "../../../components";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Header } from "../../../components/layout/Header";
import { Toast } from "../../../components/ui/toast";
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";

export const RequestSection = (): JSX.Element => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    vertical: "",
    interest: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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
    if (!formData.name.trim()) {
      showToast("Please enter your name.", "error");
      return;
    }
    if (!formData.company.trim()) {
      showToast("Please enter your company name.", "error");
      return;
    }
    if (!formData.email.trim()) {
      showToast("Please enter your corporate email.", "error");
      return;
    }
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showToast("Please enter a valid email address.", "error");
      return;
    }
    if (!formData.vertical) {
      showToast("Please select a vertical.", "error");
      return;
    }
    if (!formData.interest) {
      showToast("Please select your area of interest.", "error");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // EmailJS configuration
      const serviceId = "service_zban55p";
      const templateId = "template_ee7n6g8";
      const publicKey = "ldyxcf_QiGp4t_arv";

      // Combine vertical and interest into the message or specific usage
      const detailedMessage = `
Vertical: ${formData.vertical}
Interest: ${formData.interest}

Message:
${formData.message || "No specific message provided."}
      `.trim();

      // Template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        company_name: formData.company,
        // Mapping new fields to potentially existing template slots or just relying on the message body
        job_title: formData.vertical, // Fallback/Mapping
        message: detailedMessage,
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
          name: "",
          company: "",
          email: "",
          vertical: "",
          interest: "",
          message: "",
        });
      }, 500);
    } catch (error: any) {
      console.error("Failed to send email:", error);
      console.error("Error details:", error.text || error.message);
      setSubmitStatus("error");

      // Show error message
      showToast(
        "Sorry, there was an error sending your request. Please contact us directly at technology.team@quantorx.com",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToForm = () => {
    const formElement = document.getElementById("inquiry-form");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
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
      <section className="relative w-full flex flex-col items-center gap-[60px] md:gap-[88px] 
  [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0.45)_100%)] pb-20">
        <Header />
        <div className="mt-32 md:mt-36 lg:mt-30" />

        {/* 1. HERO SECTION */}
        <div className="flex flex-col items-center gap-[40px] w-full max-w-[1000px] px-4">
          <div className="flex flex-col items-center gap-10 w-full opacity-0 translate-y-[-1rem] 
        animate-fade-in [--animation-delay:200ms]">
            <div className="flex flex-col items-center gap-[26.34px] w-full">
              <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] 
            [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] 
            [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold 
            text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight 
            translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] uppercase">
                ENGINEER YOUR ADVANTAGE.
              </h1>

              <p className="w-full max-w-[95vw] [font-family:'Satoshi-Medium',Helvetica] 
            font-medium text-[#d9d9d9] text-[23px] text-center tracking-[0] leading-[normal]">
                You are one conversation away from automating your most complex decision-making processes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  onClick={() => window.open('https://calendly.com', '_blank')}
                  className="h-auto px-8 py-3 md:py-3.5 lg:py-4 bg-[#ffffff] hover:bg-[#e6e6e6] rounded-[32px] transition-colors"
                  variant="outline"
                >
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#000000] 
                text-base lg:text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                    BOOK A 20-MIN INTRO CALL
                  </span>
                </Button>
                <Button
                  onClick={scrollToForm}
                  className="h-auto px-8 py-3 md:py-3.5 lg:py-4 bg-[#4a0082] hover:bg-[#5a0092] rounded-[32px] transition-colors"
                >
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] 
                text-base lg:text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                    REQUEST A DEMO
                  </span>
                </Button>
              </div>
            </div>
          </div>

          {/* 2. THE PATH TO DEPLOYMENT (Process) */}
          <div className="w-full flex flex-col gap-8 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:300ms]">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-3xl text-center uppercase">
              THE PATH TO DEPLOYMENT
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: "Discovery", desc: "We map your data landscape and operational bottlenecks.", time: "(Week 1)" },
                { title: "Use-Case Blueprint", desc: "We define the decision workflow, the success metrics, and the governance requirements.", time: "(Week 2)" },
                { title: "Prototype Demo", desc: "We configure QuantStation modules for your use case and run a stakeholder demo.", time: "(Week 3-5)" },
                { title: "Rollout Plan", desc: "We align on integration, operating model, and a phased production rollout.", time: "(Week 6+)" }
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-5 bg-[#ffffff0a] rounded-[20px] border border-[#090c170d] 
              backdrop-blur-[190px] text-left hover:bg-[#ffffff10] transition-colors">
                  <div className="text-[#8b5cf6] font-bold text-xl">0{idx + 1}.</div>
                  <h3 className="text-white font-bold text-lg">{step.title}</h3>
                  <p className="text-[#ffffff99] text-sm leading-relaxed">{step.desc}</p>
                  <span className="text-[#ffffff66] text-xs font-mono mt-auto pt-2">{step.time}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. THE INQUIRY FORM */}
          <div id="inquiry-form" className="flex w-full items-center justify-center p-5 bg-[#ffffff0a] 
        rounded-[20px] border-2 border-solid border-[#090c170d] backdrop-blur-[190px] 
        backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(190px)_brightness(100%)] opacity-0 
        translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
            <div className="w-full max-w-[706px] gap-[30px] md:gap-[41px] p-2 md:p-10 flex flex-col items-start">
              <div className="gap-2 self-stretch w-full flex flex-col items-start">
                <h2 className="self-stretch [font-family:'Satoshi-Medium',Helvetica] font-medium 
              text-[#ffffff] text-2xl md:text-3xl text-center tracking-[-0.60px] leading-[normal] uppercase">
                  TELL US ABOUT THE DECISION YOU NEED TO AUTOMATE.
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col items-start gap-4 self-stretch w-full">
                <div className="flex flex-col md:flex-row items-start gap-4 self-stretch w-full">
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] h-auto"
                  />
                  <Input
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company"
                    required
                    className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] h-auto"
                  />
                </div>

                <Input
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Corporate Email"
                  type="email"
                  required
                  className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] h-auto"
                />

                <div className="w-full">
                  <select
                    name="vertical"
                    value={formData.vertical}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] appearance-none cursor-pointer outline-none focus:border-white/50"
                    style={{ color: formData.vertical ? '#ffffff99' : '#ffffff66' }}
                  >
                    <option value="" disabled className="text-gray-500">Select Vertical</option>
                    <option value="Banking/FinTech" className="bg-black text-white">Banking/FinTech</option>
                    <option value="Logistics/Spatial" className="bg-black text-white">Logistics/Spatial</option>
                    <option value="Government" className="bg-black text-white">Government</option>
                    <option value="Healthcare" className="bg-black text-white">Healthcare</option>
                    <option value="Other" className="bg-black text-white">Other</option>
                  </select>
                </div>

                <div className="w-full">
                  <select
                    name="interest"
                    value={formData.interest}
                    onChange={handleInputChange}
                    required
                    className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                  px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                  text-[15px] tracking-[-0.15px] appearance-none cursor-pointer outline-none focus:border-white/50"
                    style={{ color: formData.interest ? '#ffffff99' : '#ffffff66' }}
                  >
                    <option value="" disabled className="text-gray-500">Select Interest</option>
                    <option value="Nexus AI Assistant" className="bg-black text-white">Nexus AI Assistant</option>
                    <option value="Axon AI Assistant" className="bg-black text-white">Axon AI Assistant</option>
                    <option value="Robo-Advisory" className="bg-black text-white">Robo-Advisory</option>
                    <option value="Credit Bundle Optimizer" className="bg-black text-white">Credit Bundle Optimizer</option>
                    <option value="Credit Card Optimizer" className="bg-black text-white">Credit Card Optimizer</option>
                    <option value="Treasury/FX Risk" className="bg-black text-white">Treasury/FX Risk</option>
                    <option value="Documentation Viewer" className="bg-black text-white">Documentation Viewer</option>
                    <option value="Custom" className="bg-black text-white">Custom</option>
                  </select>
                </div>

                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe the workflow you want an AI Agent to handle..."
                  className="w-full h-[111px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] 
                px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] 
                text-[15px] tracking-[-0.15px] resize-none"
                />

                <Button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  className="w-full h-auto px-[72px] py-4 bg-[#4a0082] rounded-[32px] 
                hover:bg-[#5a0092] transition-colors disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[#4a0082] mt-2"
                >
                  <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] 
                text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                    {isSubmitting ? "Sending..." : submitStatus === "success" ? "Sent!" : "INITIATE ENGINEERING FEASIBILITY"}
                  </span>
                </Button>
              </form>
            </div>
          </div>

          {/* 4. CONTACT DIRECTLY */}
          <div className="flex flex-col items-center gap-8 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:500ms] w-full max-w-[800px]">
            <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-xl uppercase tracking-widest text-center">
              CONTACT DIRECTLY
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 w-full text-center">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center mb-1">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                </div>
                <span className="text-white font-bold text-base">Office</span>
                <span className="text-[#d9d9d9] text-sm">Cairo, Maadi, Al-Ma’arag City, Building No. 5158.</span>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center mb-1">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span className="text-white font-bold text-base">Email</span>
                <a href="mailto:technology.team@quantorx.com" className="text-[#d9d9d9] text-sm hover:text-white transition-colors">
                  technology.team@quantorx.com
                </a>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#ffffff10] flex items-center justify-center mb-1">
                  <svg className="w-5 h-5 text-[#8b5cf6]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span className="text-white font-bold text-base">Phone</span>
                <a href="tel:+201060505202" className="text-[#d9d9d9] text-sm hover:text-white transition-colors">
                  +20 106 050 5202
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
