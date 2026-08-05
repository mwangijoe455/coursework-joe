
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ClickMe from "./StateAndEvents/ClickMe";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClickMe />
  </StrictMode>
);