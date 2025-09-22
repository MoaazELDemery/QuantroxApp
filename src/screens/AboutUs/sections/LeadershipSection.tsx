import { Card, CardContent } from "../../../components/ui/card";

export const LeadershipSection = (): JSX.Element => {
  const leadershipData = [
    {
      name: "Omar Khaled",
      title: "Co-Founder & CEO",
      bio: "Veteran of top-tier global finance/tech firms. Detailed bio to be provided.",
      image: "aboutUsLeadershipImage.png",
    },
    {
      name: "Omar Khaled",
      title: "Co-Founder & CEO",
      bio: "Veteran of top-tier global finance/tech firms. Detailed bio to be provided.",
      image: "aboutUsLeadershipImage.png",
    },
    {
      name: "Omar Khaled",
      title: "Co-Founder & CEO",
      bio: "Veteran of top-tier global finance/tech firms. Detailed bio to be provided.",
      image: "aboutUsLeadershipImage.png",
    },
    {
      name: "Omar Khaled",
      title: "Co-Founder & CEO",
      bio: "Veteran of top-tier global finance/tech firms. Detailed bio to be provided.",
      image: "aboutUsLeadershipImage.png",
    },
  ];

  return (
    <section className="flex flex-col items-start gap-2.5 px-4 md:px-[138px] py-40 w-full">
      <div className="flex flex-col items-start gap-[114px] w-full">
        <h2 className="flex items-center justify-center w-full [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-5xl text-center tracking-[0] leading-[normal]">
          Our Leadership
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1200px] mx-auto">
          {leadershipData.map((leader, index) => (
            <Card
              key={index}
              className="flex flex-col h-full min-h-[480px] rounded-2xl overflow-hidden border-[0.2px] border-solid border-[#6e6179] bg-transparent"
            >
              <CardContent className="p-0 flex flex-col h-full">
                <div className="relative w-full aspect-[4/3] flex-shrink-0">
                  <img
                    className="w-full h-full object-cover"
                    alt="Team member"
                    src={leader.image}
                  />
                </div>

                <div className="flex flex-col flex-grow justify-between gap-4 p-6">
                  <div className="flex flex-col items-center text-center gap-3">
                    <h3 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-lg leading-tight">
                      {leader.name}
                    </h3>

                    <p className="[font-family:'Satoshi-Regular',Helvetica] font-normal text-[#ffffff] text-sm leading-normal">
                      {leader.title}
                    </p>

                    <p className="[font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] text-sm leading-relaxed">
                      {leader.bio}
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
