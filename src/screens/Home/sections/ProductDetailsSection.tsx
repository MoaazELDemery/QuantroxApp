import { Card, CardContent } from "../../../components/ui/card";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../components/ui/button";

export const ProductDetailsSection = (): JSX.Element => {
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

  const productCards = [
    {
      icon: "/vuesax-linear-wallet-money.svg",
      title: "Asset Managers",
      description:
        "Deliver superior execution for your clients with our low-latency smart order routing and algorithmic trading solutions.",
      alt: "Vuesax linear wallet",
    },
    {
      icon: "/vuesax-linear-trade.svg",
      title: "Brokerages",
      description:
        "Deliver superior execution for your clients with our low-latency smart order routing and algorithmic trading solutions.",
      alt: "Vuesax linear trade",
    },
    {
      icon: "/vuesax-linear-kyber-network--knc-.svg",
      title: "Hedge Funds",
      description:
        "Deploy your most complex strategies with confidence on a flexible, developer-centric platform built for speed.",
      alt: "Vuesax linear kyber",
    },
  ];

  return (
    <section className="relative w-full bg-black min-h-[800px] md:min-h-[1000px] lg:min-h-[1200px] py-10 md:py-20">
      <div
        className="absolute inset-0 bg-center min-w-full min-h-full"
        style={{ 
          backgroundImage: "url(/engineeredFragOverlayBG.png)",
          backgroundAttachment: "scroll",
          backgroundSize: "100% 80%",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transform: "scale(1)"
        }}
      />

      <div className="relative z-10 flex flex-col gap-20 container mx-auto px-4 max-w-7xl">
        {/* First Section: Product Cards */}
        <div className="flex flex-col items-center justify-center gap-16">
          <div className="flex flex-col items-center justify-center gap-4">
            <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-normal">
              Engineered For Your Mandate
            </h2>

            <p className="max-w-3xl [font-family:'Satoshi-Regular',Helvetica] font-normal text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-normal">
              From research to execution, empower your mandate with the speed,
              precision, and reliability of Quantorx.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {productCards.map((card, index) => (
              <Card
                key={index}
                className="w-96 bg-[#00000033] border-none rounded-2xl overflow-hidden backdrop-blur-[15px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(15px)_brightness(100%)]"
              >
                <CardContent className="flex flex-col items-center justify-center gap-4 p-8">
                  <div className="flex flex-col w-full max-w-[352px] items-center gap-2">
                    <img className="w-6 h-6" alt={card.alt} src={card.icon} />

                    <div className="flex flex-col items-start gap-1 w-full">
                      <h3 className="w-full h-9 [font-family:'Satoshi-Medium',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-9">
                        {card.title}
                      </h3>

                      <p className="w-full min-h-[66px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-base text-center tracking-[0] leading-normal">
                        {card.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Second Section: Team Members */}
        <div className="relative max-w-6xl mx-auto bg-[#24004d33] rounded-3xl overflow-hidden backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)] px-6 sm:px-12 py-12 sm:py-20">
              <div className="flex flex-col items-center gap-8 max-w-[1099px] mx-auto">
                <header className="flex flex-col items-center gap-8 text-center">
                  <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#e6e6e6] text-5xl tracking-[-1.80px] leading-normal">
                    Wall Street Grade. Architected for Egypt.
                  </h2>
      
                  <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[22px] tracking-[0] leading-normal max-w-full">
                    Our team is comprised of veteran quantitative analysts and
                    low-latency software engineers from the world's leading financial
                  _centers. We have built the institutional-grade infrastructure that
                    was once missing from the local market, providing our clients with
                    a definitive technological edge.
                  </p>
                </header>
      
                <div className="relative w-full sm:max-w-[990px] h-[487px] overflow-hidden">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {teamMembers.map((member, index) => (
                      <Card
                        key={index}
                        className="min-w-full sm:min-w-[990px] bg-transparent border-0"
                      >
                        <CardContent className="p-0">
                          <div className="relative h-[401px] w-full sm:w-[990px]">
                            <div
                              className="absolute w-full sm:w-[990px] h-[401px] flex justify-center items-center"
                              style={{
                                backgroundImage: 'none',
                              }}
                            >
                              {/* Only show background image on desktop */}
                              <div
                                className="hidden sm:block absolute inset-0 w-full h-full"
                                style={{
                                  backgroundImage: "url(/photoOunlineImage.png)",
                                  backgroundSize: "cover",
                                  backgroundPosition: "center",
                                }}
                              />
                              <img
                                className="w-[120px] h-[120px] sm:w-[217px] sm:h-[217px] rounded-[20px] object-cover absolute top-[30px] left-1/2 sm:top-[86px] sm:left-[202px] -translate-x-1/2 sm:translate-x-0 z-10"
                                alt={`${member.name} avatar`}
                                src={member.avatar}
                              />
                              <div className="flex flex-col gap-3 max-w-full sm:max-w-[551px] absolute top-[170px] left-1/2 -translate-x-1/2 sm:top-[90px] sm:right-[60px] sm:left-auto sm:translate-x-0 w-[90%] sm:w-auto items-center sm:items-start text-center sm:text-left">
                                <div className="flex flex-col gap-1">
                                  <h3 className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-xl sm:text-2xl tracking-[0] leading-normal">
                                    {member.name}
                                  </h3>
                                  <p className="[font-family:'Inter',Helvetica] font-normal text-[#ffffffb2] text-xs sm:text-sm tracking-[0] leading-normal">
                                    {member.title}
                                  </p>
                                </div>
                                <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-base sm:text-xl tracking-[0] leading-normal max-w-full sm:max-w-[490px]">
                                  {member.description}
                                </p>
                                <div className="inline-flex items-center gap-2 justify-center sm:justify-start">
                                  <img
                                    className="w-4 h-4 sm:w-5 sm:h-5"
                                    alt="LinkedIn"
                                    src="/linkedin---original.svg"
                                  />
                                  <span className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-sm sm:text-base underline text-[#ffffff] tracking-[0] leading-normal">
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
      </div>
    </section>
  );
};
