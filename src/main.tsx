import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App.tsx";

import "./styles/index.css";

const rootElement = document.getElementById("root");

if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
