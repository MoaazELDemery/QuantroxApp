import { PageLayout } from "../../components/layout/PageLayout";
import { PageHero } from "../../components/layout/PageHero";
import { HighlightsSection } from "./sections/HighlightsSection";
import { LatestInsightsSection } from "./sections/LatestInsightsSection";
import { ResearchSection } from "./sections/ResearchSection";
import { WhitepapersSection } from "./sections/WhitepapersSection";
import { NewsletterForm } from "./sections/NewsletterForm";

export const Insights = (): JSX.Element => (
  <PageLayout>
    <PageHero
      eyebrow="QuantorX Insights"
      title="Intelligence, Decoded."
      lede="Practical insights on Banking AI, credit decisioning, treasury/FX risk, and spatial intelligence - written for leaders who ship."
      video="/videos/hero-neural.mp4"
    >
      <NewsletterForm />
    </PageHero>

    <LatestInsightsSection />
    <HighlightsSection />
    <WhitepapersSection />
    <ResearchSection />
  </PageLayout>
);
