import { Card, CardContent } from "../../../components/ui/card";

export const ProductDetailsSection = (): JSX.Element => {
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
    <section className="relative w-full bg-black min-h-[837px] flex items-center py-20">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(/engineeredBackground.png)" }}
      />

      <div className="relative z-10 container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col items-center justify-center gap-4 mb-16">
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
    </section>
  );
};
