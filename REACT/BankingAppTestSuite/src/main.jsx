import React from "react";
import ReactDOM from "react-dom/client";
import { TaskProvider } from "./TaskContexts";   // ✅ plural, matches actual file name
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TaskProvider>
      <App />
    </TaskProvider>
  </React.StrictMode>
);