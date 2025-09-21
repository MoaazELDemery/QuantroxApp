import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens";
import { SolutionsForAsset } from "./screens/Solutions/Asset Managers/SolutionsForAssets";
import { SolutionsForBrokerages } from "./screens/Solutions/Brokerages/SolutionsForBrokerages";
import { SolutionsForHedgeFunds } from "./screens/Solutions/HedgeFunds/SolutionsForHedgeFunds";
import { SolutionsForRoboAdvisory } from "./screens/Solutions/RoboAdvisory/SolutionsForRoboAdvisory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Platform } from "./screens/Platform/Platform";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/asset-managers" element={<SolutionsForAsset />} />
        <Route path="/solutions/brokerages" element={<SolutionsForBrokerages />} />
        <Route path="/solutions/hedge-funds" element={<SolutionsForHedgeFunds />} />
        <Route path="/solutions/robo-advisory" element={<SolutionsForRoboAdvisory />} />
        <Route path="/platform" element={<Platform />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);