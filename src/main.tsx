import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { GlobalStyles } from "./globalStyles";
import { GridSwitcherProvider } from "./components/GridSwitcher";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <GridSwitcherProvider>
      <App />
    </GridSwitcherProvider>
  </React.StrictMode>
);
