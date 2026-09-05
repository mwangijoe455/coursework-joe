import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { TaskProvider } from "./TaskContexts";   
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </StrictMode>
);