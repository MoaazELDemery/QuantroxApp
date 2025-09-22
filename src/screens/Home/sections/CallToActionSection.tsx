import { ChevronLeftIcon, ChevronRightIcon, LinkedinIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const teamMembers = [
  {
    name: "Khaled Hassan",
    title: "Chief Technology Officer (CTO)",
    description:
      "Specialist in low-latency trading infrastructure and scalable financial platforms, with a track record in top-tier Wall Street firms.",
    avatar: "/avatar-3x-1-2.png",
    linkedinUrl: "Khaled Hassan",
  },
  {
    name: "Ahmed Nasser",
    title: "Chief Executive Officer (CEO)",
    description:
      "Veteran quant with 15+ years in global asset management. Leading Quantorx's mission to architect the future of finance.",
    avatar: "/avatar-3x-1-2.png",
    linkedinUrl: "Ahmed Nasser",
  },
  {
    name: "Omar El-Sayed",
    title: "Head of Quantitative Research",
    description:
      "Expert in factor modeling, machine learning, and portfolio optimization. Driving innovation in Quantorx's research environment.",
    avatar: "/avatar-3x-1-2.png",
    linkedinUrl: "Omar ElSayed",
  },
];

export const CallToActionSection = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % teamMembers.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + teamMembers.length) % teamMembers.length,
    );
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative w-full bg-black min-h-[837px] flex items-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/wallSteetOverlayBG.png)" }}
      />
      <div className="relative max-w-[1200px] mx-auto bg-[#24004d33] rounded-3xl overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] px-12 py-20">
        <div className="flex flex-col items-center gap-8 max-w-[1099px] mx-auto">
          <header className="flex flex-col items-center gap-8 text-center">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#e6e6e6] text-5xl tracking-[-1.80px] leading-normal">
              Wall Street Grade. Architected for Egypt.
            </h2>

            <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[22px] tracking-[0] leading-normal max-w-full">
              Our team is comprised of veteran quantitative analysts and
              low-latency software engineers from the world's leading financial
              centers. We have built the institutional-grade infrastructure that
              was once missing from the local market, providing our clients with
              a definitive technological edge.
            </p>
          </header>

          <div className="relative w-full max-w-[990px] h-[487px] overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {teamMembers.map((member, index) => (
                <Card
                  key={index}
                  className="min-w-full bg-transparent border-0"
                >
                  <CardContent className="p-0">
                    <div className="relative h-[401px]">
                      <div
                        className="absolute w-[990px] h-[401px]"
                        style={{
                          backgroundImage: "url(/photoOunlineImage.png)",
                          backgroundSize: "cover",
                          backgroundPosition: "center",
                        }}
                      >
                        <img
                          className="w-[217px] h-[217px] rounded-[20px] object-cover absolute top-[86px] left-[202px] z-10"
                          alt={`${member.name} avatar`}
                          src={member.avatar}
                        />
                        <div className="flex flex-col gap-3 max-w-[551px] absolute top-[90px] right-[60px]">
                          <div className="flex flex-col gap-1">
                            <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-2xl tracking-[0] leading-normal">
                              {member.name}
                            </h3>
                            <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-sm tracking-[0] leading-normal">
                              {member.title}
                            </p>
                          </div>

                          <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-xl tracking-[0] leading-normal max-w-[490px]">
                            {member.description}
                          </p>

                          <div className="inline-flex items-center gap-2">
                            <LinkedinIcon className="w-5 h-5 text-[#ffffff]" />
                            <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-base underline text-[#ffffff] tracking-[0] leading-normal">
                              {member.linkedinUrl}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center gap-[9.43px] p-[9.43px]">
              <Button
                variant="ghost"
                size="icon"
                className="p-3.5 h-auto bg-transparent hover:bg-white/10"
                onClick={prevSlide}
              >
                <ChevronLeftIcon className="w-[28.29px] h-[28.29px] text-white" />
              </Button>

              <div className="flex items-center gap-[11.79px] p-[9.43px]">
                {teamMembers.map((_, index) => (
                  <button
                    key={index}
                    className={`rounded-full transition-all ${
                      index === currentSlide
                        ? "w-[18.86px] h-[18.86px] bg-[#4a0082]"
                        : "w-[14.14px] h-[14.14px] bg-[#d9d9d9] opacity-50"
                    }`}
                    onClick={() => goToSlide(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                className="p-3.5 h-auto bg-transparent hover:bg-white/10"
                onClick={nextSlide}
              >
                <ChevronRightIcon className="w-[28.29px] h-[28.29px] text-white" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};