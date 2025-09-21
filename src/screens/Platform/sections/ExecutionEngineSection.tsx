import { Card, CardContent } from "../../../components";

export const ExecutionEngineSection = (): JSX.Element => {
  const codeSnippets = [
    {
      type: "comment",
      text: "# Retrieve historical market data",
    },
    {
      type: "request",
      text: "GET /api/v1/data/market?symbol=EGX30&start=2018-01-01&end=2025-01-01",
    },
    {
      type: "headers",
      text: "Headers:",
    },
    {
      type: "header-item",
      text: "  Authorization: Bearer <YOUR_API_KEY>",
    },
    {
      type: "header-item",
      text: "  Content-Type: application/json",
    },
    {
      type: "spacing",
      text: "",
    },
    {
      type: "spacing",
      text: "",
    },
    {
      type: "comment",
      text: "# Submit a new order",
    },
    {
      type: "request",
      text: "POST /api/v1/orders",
    },
    {
      type: "headers",
      text: "Headers:",
    },
    {
      type: "header-item",
      text: "  Authorization: Bearer <YOUR_API_KEY>",
    },
    {
      type: "header-item",
      text: "  Content-Type: application/json",
    },
    {
      type: "headers",
      text: "Body:",
    },
    {
      type: "json-bracket",
      text: "{",
    },
  ];

  const jsonProperties = [
    '"symbol": "ORAS",',
    '"side": "buy",',
    '"quantity": 500,',
    '"order_type": "limit",',
    '"limit_price": 115.75,',
    '"time_in_force": "GTC"',
  ];

  const finalCodeSnippets = [
    {
      type: "json-bracket",
      text: "}",
    },
    {
      type: "spacing",
      text: "",
    },
    {
      type: "spacing",
      text: "",
    },
    {
      type: "comment",
      text: "# Retrieve portfolio risk metrics",
    },
    {
      type: "request",
      text: "GET /api/v1/risk/portfolio",
    },
    {
      type: "headers",
      text: "Headers:",
    },
    {
      type: "header-item",
      text: "  Authorization: Bearer <YOUR_API_KEY>",
    },
  ];

  return (
    <section className="w-full flex items-center justify-center py-24">
      <div className="flex flex-col items-center gap-[156px] w-full max-w-[1236px] px-4">
        <header className="flex flex-col items-center gap-6 w-full translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="[font-family:'Satoshi-Bold',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-normal">
            Institutional-grade Api Access
          </h2>

          <p className="max-w-[934px] [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#d9d9d9] text-[28px] text-center tracking-[0] leading-normal">
            A secure, well-documented REST API exposing every function of the
            Quantorx platform. Pull data, run backtests, submit orders, and
            integrate seamlessly into your proprietary systems.
          </p>
        </header>

        <div className="relative w-full max-w-[881px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
          <img
            className="absolute top-[225px] left-0 w-full h-[369px] object-contain"
            alt="Group"
            src="platformCirclesBackground.png"
          />

          <Card className="w-full max-w-[588px] h-[594px] mx-auto rounded-2xl overflow-hidden bg-transparent border-0">
            <CardContent className="p-6 h-full relative">
              <div className="relative z-10 [font-family:'Fragment_Mono',Helvetica] font-normal text-xs leading-[18px] text-[#eeeeee]">
                {codeSnippets.map((snippet, index) => (
                  <div
                    key={`code-${index}`}
                    className={snippet.type === "spacing" ? "h-[18px]" : ""}
                  >
                    {snippet.text && <span>{snippet.text}</span>}
                    {snippet.type !== "spacing" && <br />}
                  </div>
                ))}

                {jsonProperties.map((property, index) => (
                  <div key={`json-${index}`}>
                    <span className="text-[#b67bff]"> {property}</span>
                    <br />
                  </div>
                ))}

                {finalCodeSnippets.map((snippet, index) => (
                  <div
                    key={`final-${index}`}
                    className={snippet.type === "spacing" ? "h-[18px]" : ""}
                  >
                    {snippet.text && <span>{snippet.text}</span>}
                    {snippet.type !== "spacing" && <br />}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
