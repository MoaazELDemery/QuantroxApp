import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./screens";
import { SolutionsForAsset } from "./screens/Solutions/Asset Managers/SolutionsForAssets";
import { BrowserRouter, Routes, Route } from "react-router-dom";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/solutions/asset-managers" element={<SolutionsForAsset />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
