export const ThePlatformSection = (): JSX.Element => {
  return (
    <section className="w-full h-auto md:h-[950px] py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 pb-16 md:pb-20">
      {/* Use Case in Action Header */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 md:mb-16 
      lg:mb-20 opacity-0 translate-y-[-1rem] animate-fade-in [--animation-delay:0ms]">
        <div className="w-[30px] sm:w-[40px] md:w-[60px] h-[1px] sm:h-[1.5px] rounded-[90px] 
        bg-gradient-to-r from-transparent to-white opacity-60" />
        <h2 className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#e6e6e6] 
        text-base sm:text-lg md:text-xl lg:text-2xl tracking-[0] leading-normal text-center opacity-70">
          The Platform
        </h2>
        <div className="w-[30px] sm:w-[40px] md:w-[60px] h-[1px] sm:h-[1.5px] rounded-[90px] 
        bg-gradient-to-l from-transparent to-white opacity-60" />
      </div>
      <div className="flex flex-col items-center gap-4 sm:gap-6 mt-8 sm:mt-12 md:mt-[67px] max-w-[1096px] mx-auto px-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] mb-8 sm:mb-16 md:mb-32 lg:mb-36 xl:mb-40">
        <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-2xl 
        sm:text-3xl md:text-4xl lg:text-5xl text-center tracking-[0] leading-tight md:leading-normal">
          Execute Location-Aware Decisions Smarter, Faster, And With Confidence.
        </h2>
      </div>
      <div className="flex justify-center">
        <img
          className="relative z-10 w-[720px] h-[512px] object-contain rounded-md -mt-16"
          alt="Dashboard preview"
          src="/axonImage.png"
          loading="lazy"
        />
      </div>
    </section>
  );
};
