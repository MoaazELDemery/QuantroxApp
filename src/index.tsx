import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens";
import { SolutionsForAsset } from "./screens/Solutions/Asset Managers/SolutionsForAssets";
import { SolutionsForBrokerages } from "./screens/Solutions/Brokerages/SolutionsForBrokerages";
import { SolutionsForHedgeFunds } from "./screens/Solutions/HedgeFunds/SolutionsForHedgeFunds";
import { SolutionsForRoboAdvisory } from "./screens/Solutions/RoboAdvisory/SolutionsForRoboAdvisory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Platform } from "./screens/Platform/Platform";
import { Insights } from "./screens/Insights/Insights";
import { AboutUs } from "./screens/AboutUs/AboutUs";
import { RequestDemo } from "./screens/RequestDemo/RequestDemo";
import { ScrollToTop } from "./components/ScrollToTop";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/nexus-ai" element={<SolutionsForAsset />} />
        <Route path="/solutions/axon-ai" element={<SolutionsForBrokerages />} />
        <Route path="/solutions/q-core" element={<SolutionsForHedgeFunds />} />
        <Route path="/solutions/robo-advisory" element={<SolutionsForRoboAdvisory />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/request-demo" element={<RequestDemo />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);