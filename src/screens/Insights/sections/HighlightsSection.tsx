import { ArrowRightIcon, CalendarIcon, ClockIcon } from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Card, CardContent } from "../../../components/ui/card";

const filterOptions = [
	{ id: "all", label: "All", active: true },
	{ id: "articles", label: "Articles", active: false },
	{ id: "case-studies", label: "Case Studies", active: false },
	{ id: "news", label: "News", active: false },
];

const contentCards = [
	{
		id: 1,
		category: "Articles",
		title: "Advances in Execution Microstructure for EGX",
		description:
			"How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
	{
		id: 2,
		category: "Case Studies",
		title: "Brokerage X: -180 bps Implementation Shortfall",
		description:
			"How a smart order router improved client execution and reduced information leakage.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
	{
		id: 3,
		category: "Whitepapers",
		title: "Stochastic Processes for Portfolio Construction",
		description:
			"Download our technical note on diffusion models and risk budgeting.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
	{
		id: 4,
		category: "Articles",
		title: "Advances in Execution Microstructure for EGX",
		description:
			"How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
	{
		id: 5,
		category: "Articles",
		title: "Advances in Execution Microstructure for EGX",
		description:
			"How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
	{
		id: 6,
		category: "Articles",
		title: "Advances in Execution Microstructure for EGX",
		description:
			"How low-latency order routing and market-impact modeling tighten slippage for institutional flow.",
		readTime: "12 min",
		date: "May 10, 2025",
	},
];

export const HighlightsSection = (): JSX.Element => {
	const [activeFilter, setActiveFilter] = useState("all");

	return (
		<section className="flex flex-col w-full items-center justify-center px-4 sm:px-8 lg:px-16 xl:px-24 py-16 lg:py-20 xl:py-24 relative">
			<div className="flex flex-col items-start gap-8 lg:gap-12 relative w-full max-w-7xl mx-auto">
				<header className="flex flex-col w-full max-w-2xl items-start gap-4 lg:gap-6 relative translate-y-[-1rem] animate-fade-in opacity-0">
					<h2 className="relative w-full [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-3xl md:text-4xl lg:text-5xl tracking-[0] leading-tight">
						Latest from Quantorx
					</h2>

					<nav className="inline-flex items-start gap-2.5 px-3 py-2 relative bg-[#1f1f1f] rounded-2xl overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
						{filterOptions.map((option) => (
							<Button
								key={option.id}
								variant="ghost"
								size="sm"
								onClick={() => setActiveFilter(option.id)}
								className={`h-auto flex flex-col items-center justify-center gap-2.5 px-2.5 py-0.5 relative rounded-2xl transition-colors ${activeFilter === option.id
										? "bg-[#4a0082] text-[#ffffff]"
										: "text-[#ffffff] hover:bg-[#2a2a2a]"
									}`}
							>
								<span className="relative w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-sm md:text-base tracking-[0.32px] leading-normal whitespace-nowrap">
									{option.label}
								</span>
							</Button>
						))}
					</nav>
				</header>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 xl:gap-12 w-full max-w-6xl mx-auto">
					{contentCards.map((card, index) => (
						<Card
							key={card.id}
							className="flex flex-col min-w-[220px] max-w-[390px] min-h-[420px] lg:min-h-[340px] max-h-[400px] h-full items-start gap-0 relative rounded-2xl overflow-hidden border-[0.2px] border-solid border-[#6e6179]/30 bg-transparent translate-y-[-1rem] animate-fade-in opacity-0"
							style={{
								"--animation-delay": `${400 + index * 100}ms`,
							} as React.CSSProperties}
						>
							<div className="relative self-stretch w-full h-56 sm:h-32 md:h-40 lg:h-44 bg-[linear-gradient(180deg,rgba(152,16,255,0.5)_0%,rgba(35,0,62,0.5)_100%)]" />

							<CardContent className="flex flex-col items-start justify-between gap-0 pt-0 pb-2 px-4 lg:px-6 relative self-stretch w-full h-full">
								<div className="flex flex-col items-start gap-0 relative self-stretch w-full flex-grow">
									<Badge className="inline-flex items-center justify-center gap-[5px] px-2 py-1 relative bg-[#1f1f1f] rounded-lg border-none mt-3">
										<span className="text-[10px] leading-3 relative flex items-center justify-center w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#ffffff] text-center tracking-[0] whitespace-nowrap">
											{card.category}
										</span>
									</Badge>

									<h3 className="relative self-stretch [font-family:'Satoshi-Bold',Helvetica] font-bold text-[#ffffff] text-lg md:text-xl lg:text-2xl tracking-[0] leading-tight">
										{card.title}
									</h3>

									<p className="relative self-stretch [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] text-sm md:text-base tracking-[0] leading-relaxed">
										{card.description}
									</p>
								</div>

								<footer className="flex items-center justify-between relative self-stretch w-full">
									<div className="inline-flex items-center gap-3 lg:gap-4 relative">
										<div className="inline-flex items-center justify-center gap-1 lg:gap-1.5 relative">
											<ClockIcon className="relative w-3 h-3 md:w-4 md:h-4 text-[#a9a9a9]" />
											<span className="text-xs md:text-sm relative flex items-center justify-center w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] tracking-[0] leading-normal">
												{card.readTime}
											</span>
										</div>

										<div className="inline-flex items-center justify-center gap-1 lg:gap-1.5 relative">
											<CalendarIcon className="relative w-3 h-3 md:w-4 md:h-4 text-[#a9a9a9]" />
											<span className="text-xs md:text-sm relative flex items-center justify-center w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#a9a9a9] tracking-[0] leading-normal">
												{card.date}
											</span>
										</div>
									</div>

									<Button
										variant="ghost"
										size="sm"
										className="h-auto gap-1 lg:gap-1.5 inline-flex items-center justify-center relative p-0 hover:bg-transparent group"
									>
										<span className="text-xs md:text-sm relative flex items-center justify-center w-fit [font-family:'Satoshi-Medium',Helvetica] font-medium text-[#8a2be2] tracking-[0] leading-normal group-hover:text-[#9932cc] transition-colors">
											Read
										</span>
										<ArrowRightIcon className="relative w-3 h-3 md:w-4 md:h-4 text-[#8a2be2] group-hover:text-[#9932cc] transition-colors" />
									</Button>
								</footer>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
};