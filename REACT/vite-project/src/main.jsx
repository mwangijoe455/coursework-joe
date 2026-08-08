
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import StopWatch from "./SideEffectsConditions/StopWatch"; 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StopWatch  /> 
  </StrictMode>
);