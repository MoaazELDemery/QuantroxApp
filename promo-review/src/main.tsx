import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Promo } from "./Promo";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Promo />
  </StrictMode>
);
