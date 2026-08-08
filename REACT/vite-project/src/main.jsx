
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorsCircles from "./StateAndEvents/ColorsCircles"; // FIXED: Changed to ColorsCircles (capitalized)

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsCircles /> {/* FIXED: Now matches the import name */}
  </StrictMode>
);