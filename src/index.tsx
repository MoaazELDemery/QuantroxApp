import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";

// Home
import { Home } from "./screens";

// Solutions
import { Solutions } from "./screens/Solutions/Solutions";
import { NexusAI } from "./screens/Solutions/NexusAI/NexusAI";
import { AxonAI } from "./screens/Solutions/AxonAI/AxonAI";
import { PayGate } from "./screens/Solutions/PayGate/PayGate";
import { Geek } from "./screens/Solutions/Geek/Geek";
import { EnterpriseSolutions } from "./screens/Solutions/EnterpriseSolutions/EnterpriseSolutions";
import { UseCase } from "./screens/Solutions/UseCase/UseCase";

// Technology
import { Technology } from "./screens/Technology/Technology";
import { WhyQuantorX } from "./screens/Technology/WhyQuantorX/WhyQuantorX";
import { AIPlatform } from "./screens/Technology/AIPlatform/AIPlatform";
import { LLMStudio } from "./screens/Technology/LLMStudio/LLMStudio";
import { AICloud } from "./screens/Technology/AICloud/AICloud";
import { Certifications } from "./screens/Technology/Certifications/Certifications";

// Insights
import { Insights } from "./screens/Insights/Insights";
import { TheEndOfChat } from "./screens/Insights/articles/TheEndOfChat";
import { AlternativeCreditScoring } from "./screens/Insights/articles/AlternativeCreditScoring";
import { SpatialComputeRevolution } from "./screens/Insights/articles/SpatialComputeRevolution";
import { ValidatingSyntheticReality } from "./screens/Insights/articles/ValidatingSyntheticReality";

// About
import { About } from "./screens/About/About";
import { Team } from "./screens/About/Team/Team";
import { Careers } from "./screens/About/Careers/Careers";
import { PressMedia } from "./screens/About/PressMedia/PressMedia";
import { SocialImpact } from "./screens/About/SocialImpact/SocialImpact";
import { BrandKit } from "./screens/About/BrandKit/BrandKit";
import { AIForMENA } from "./screens/About/AIForMENA/AIForMENA";

// Contact & Demo
import { Contact } from "./screens/Contact/Contact";
import { Demo } from "./screens/Demo/Demo";
import { DemoCenter } from "./screens/DemoCenter/DemoCenter";

// Content
import { CaseStudies } from "./screens/CaseStudies/CaseStudies";
import { PartnerNetwork } from "./screens/PartnerNetwork/PartnerNetwork";
import { Resources } from "./screens/Resources/Resources";
import { Docs } from "./screens/Docs/Docs";
import { Wiki } from "./screens/Wiki/Wiki";
import { University } from "./screens/University/University";
import { Events } from "./screens/Events/Events";
import { SecurityBulletins } from "./screens/Security/Bulletins";
import { Legal } from "./screens/Legal/Legal";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* ── Core ── */}
        <Route path="/" element={<Home />} />

        {/* ── Solutions ── */}
        <Route path="/solutions" element={<Solutions />} />
        {/* Canonical agent routes */}
        <Route path="/solutions/nexus-ai" element={<NexusAI />} />
        <Route path="/solutions/axon-ai" element={<AxonAI />} />
        <Route path="/solutions/paygate" element={<PayGate />} />
        <Route path="/solutions/geek" element={<Geek />} />
        <Route path="/solutions/enterprise-solutions" element={<EnterpriseSolutions />} />
        <Route path="/solutions/use-case" element={<UseCase />} />
        {/* Legacy solution paths → canonical */}
        <Route path="/solutions/enterprise-ai" element={<Navigate to="/solutions/nexus-ai" replace />} />
        <Route path="/solutions/enterprise-software" element={<Navigate to="/solutions/axon-ai" replace />} />
        <Route path="/solutions/capital-markets" element={<Navigate to="/solutions/geek" replace />} />
        <Route path="/solutions/quantitative-engines" element={<Navigate to="/solutions/enterprise-solutions" replace />} />
        <Route path="/solutions/robo-advisory" element={<Navigate to="/solutions/geek" replace />} />
        <Route path="/solutions/q-core" element={<Navigate to="/solutions" replace />} />

        {/* ── Technology ── */}
        <Route path="/technology" element={<Technology />} />
        <Route path="/technology/why-quantorx" element={<WhyQuantorX />} />
        <Route path="/technology/ai-platform" element={<AIPlatform />} />
        <Route path="/technology/llm-studio" element={<LLMStudio />} />
        <Route path="/technology/ai-cloud" element={<AICloud />} />
        <Route path="/technology/certifications" element={<Certifications />} />

        {/* ── Insights ── */}
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/the-end-of-chat" element={<TheEndOfChat />} />
        <Route path="/insights/alternative-credit-scoring" element={<AlternativeCreditScoring />} />
        <Route path="/insights/spatial-compute-revolution" element={<SpatialComputeRevolution />} />
        <Route path="/insights/validating-synthetic-reality" element={<ValidatingSyntheticReality />} />

        {/* ── About ── */}
        <Route path="/about" element={<About />} />
        <Route path="/about/team" element={<Team />} />
        <Route path="/about/careers" element={<Careers />} />
        <Route path="/about/press-media" element={<PressMedia />} />
        <Route path="/about/social-impact" element={<SocialImpact />} />
        <Route path="/about/brand-kit" element={<BrandKit />} />
        <Route path="/about/ai-for-mena" element={<AIForMENA />} />

        {/* ── Contact & Demo ── */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/demo-center" element={<DemoCenter />} />

        {/* ── Content ── */}
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/partner-network" element={<PartnerNetwork />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/wiki" element={<Wiki />} />
        <Route path="/university" element={<University />} />
        <Route path="/events" element={<Events />} />
        <Route path="/security/bulletins" element={<SecurityBulletins />} />
        <Route path="/legal" element={<Legal />} />

        {/* ── Legacy redirects ── */}
        <Route path="/platform" element={<Navigate to="/technology" replace />} />
        <Route path="/platform/*" element={<Navigate to="/technology" replace />} />
        <Route path="/about-us" element={<Navigate to="/about" replace />} />
        <Route path="/company" element={<Navigate to="/about" replace />} />
        <Route path="/company/team" element={<Navigate to="/about/team" replace />} />
        <Route path="/company/careers" element={<Navigate to="/about/careers" replace />} />
        <Route path="/company/press-media" element={<Navigate to="/about/press-media" replace />} />
        <Route path="/company/contact-us" element={<Navigate to="/contact" replace />} />
        <Route path="/company/social-impact" element={<Navigate to="/about/social-impact" replace />} />
        <Route path="/company/brand-kit" element={<Navigate to="/about/brand-kit" replace />} />
        <Route path="/company/ai-for-mena" element={<Navigate to="/about/ai-for-mena" replace />} />
        <Route path="/request-demo" element={<Navigate to="/demo" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
