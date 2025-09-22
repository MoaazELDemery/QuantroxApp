import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";

export const FooterSection = (): JSX.Element => {
  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: "Location",
      content:
        "Cairo, Maadi, Al-Ma'arag City, Building No. 5158, Ground Floor, behind Carrefour Maadi",
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: "Phone",
      content: "+20 127 984 7374 - +966 53 750 7578",
    },
    {
      icon: <MailIcon className="w-6 h-6" />,
      title: "Email",
      content: "technology.team@quantorx.com",
    },
  ];
  const quickLinks = ["Home", "Solutions", "Platform", "Insights", "About us"];
  return (
    <footer className="flex flex-col w-full items-start justify-center gap-20 px-0 py-[50px] bg-zinc-950 relative z-20">
      <div className="flex items-start justify-between px-[250px] py-20 w-full">
        <div className="inline-flex flex-col items-start gap-[34px]">
          <img
            className="w-[137px] h-10 object-cover"
            alt="Logo white"
            src="/logo-white-1-1.png"
          />
          <div className="w-[371px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px]">
            Experts shaping markets with precision, offering deep insights into
            regional and global finance.
            <br />
            Specializing in quantitative modeling, valuation, and business
            consulting
          </div>
          <div className="flex items-start gap-6 w-full">
            <img 
              src="/linkedinPlain.svg" 
              alt="LinkedIn" 
              className="w-6 h-6" 
            />
          </div>
        </div>
        <div className="flex w-[579px] items-start gap-[84px]">
          <div className="flex flex-col w-[327px] items-start gap-6">
            <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Black',Helvetica] font-black text-white text-xl tracking-[0.40px] leading-8 whitespace-nowrap">
              Contact Us
            </div>
            {contactInfo.map((item, index) => (
              <div
                key={index}
                className="flex flex-col w-[327px] items-start gap-2.5"
              >
                <div className="inline-flex items-start gap-2.5 mr-[-21.00px]">
                  {item.icon}
                  <div className="w-[314px] mt-[-1.00px] [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-base tracking-[0.32px] leading-[25.6px]">
                    {item.title}
                  </div>
                </div>
                <div className="w-[327px] [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px]">
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className="inline-flex flex-col h-[312px] items-start gap-6">
            <div className="w-fit mt-[-1.00px] [font-family:'Satoshi-Black',Helvetica] font-black text-white text-xl tracking-[0.40px] leading-8 whitespace-nowrap">
              Quick Link
            </div>
            <div className="inline-flex flex-col items-start gap-2.5">
              {quickLinks.map((link, index) => (
                <div
                  key={index}
                  className={`w-fit ${index === 0 ? "mt-[-1.00px]" : ""} [font-family:'Satoshi-Regular',Helvetica] font-normal text-grey text-base tracking-[0.32px] leading-[25.6px] whitespace-nowrap cursor-pointer hover:text-white transition-colors`}
                >
                  {link}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};