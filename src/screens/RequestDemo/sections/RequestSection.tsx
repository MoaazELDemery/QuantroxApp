import { Button } from "../../../components";
import { Input } from "../../../components/ui/input";
import { Textarea } from "../../../components/ui/textarea";
import { Header } from "../../../components/layout/Header";

export const RequestSection = (): JSX.Element => {
  return (
    <section className="relative w-full flex flex-col items-center gap-[88px] [background:radial-gradient(50%_50%_at_50%_0%,rgba(74,0,130,0.5)_0%,rgba(0,0,0,0)_100%)]">
      <Header />
      <div className="mt-32 md:mt-36 lg:mt-30" />

      <div className="flex flex-col items-center gap-[125px] w-full max-w-[1000px] px-4">
        <div className="flex flex-col items-center gap-10 w-full opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:200ms]">
          <div className="flex flex-col items-center gap-[26.34px] w-full">
            <h1 className="bg-[linear-gradient(180deg,rgba(255,255,255,1)_0%,rgba(235,228,245,1)_39%,rgba(222,210,238,1)_65%,rgba(82,61,109,1)_100%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] [font-family:'Satoshi-Bold',Helvetica] font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center tracking-[-1.80px] leading-tight translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
              Request a Demo
            </h1>

            <p className="w-full max-w-[95vw] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[23px] text-center tracking-[0] leading-[normal]">
              Experience a tailored demo of our platform - built to streamline portfolio management, enhance transparency, and empower data-driven decisions across your investment teams.
            </p>
          </div>
        </div>

        <div className="flex w-full mb-40 items-center justify-center gap-[30px] p-5 bg-[#ffffff0a] rounded-[20px] border-2 border-solid border-[#090c170d] backdrop-blur-[190px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(190px)_brightness(100%)] opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:400ms]">
          <div className="w-full max-w-[706px] gap-[41px] p-10 flex flex-col items-start">
            <div className="gap-2 self-stretch w-full flex flex-col items-start">
              <h2 className="self-stretch [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-3xl text-center tracking-[-0.60px] leading-[normal]">
                See How Quantorx Can Elevate Your <br />
                Investment Operations
              </h2>
            </div>

            <form className="flex flex-col items-start gap-3.5 self-stretch w-full">
              <div className="flex items-start gap-3.5 self-stretch w-full">
                <Input
                  placeholder="First Name"
                  className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
                />
                <Input
                  placeholder="Last Name"
                  className="flex-1 bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
                />
              </div>

              <Input
                placeholder="Company Name"
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                placeholder="Email"
                type="email"
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                placeholder="Job Title"
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
              />

              <Input
                placeholder="Phone Number"
                type="tel"
                className="w-full bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] h-auto"
              />

              <Textarea
                placeholder="Message (Optional)"
                className="w-full h-[111px] bg-[#ffffff0d] rounded-2xl border border-solid border-[#ffffff33] px-3.5 py-3 [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff99] text-[15px] tracking-[-0.15px] resize-none"
              />

              <Button
                type="submit"
                className="w-full h-auto px-[72px] py-4 bg-[#4a0082] rounded-[32px] hover:bg-[#5a0092] transition-colors"
              >
                <span className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-lg text-center tracking-[0] leading-6 whitespace-nowrap">
                  Request
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
