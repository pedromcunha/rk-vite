import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ReservoirKitProvider } from "@reservoir0x/reservoir-kit-ui";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ReservoirKitProvider
      options={{
        chains: [
          {
            id: 1,
            baseApiUrl: "https://api.reservoir.tools",
            active: true,
          },
        ],
        source: "TEST",
      }}
    >
      <App />
    </ReservoirKitProvider>
  </React.StrictMode>
);
