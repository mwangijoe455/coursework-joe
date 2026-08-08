
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ColorsAndCircles from "./StateAndEvents/ColorsAndCircles";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorsAndCircles />
  </StrictMode>
);