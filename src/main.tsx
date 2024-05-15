import React from "react";
import ReactDOM from "react-dom/client";
// import { App } from "./App";
import { GlobalStyles } from "./globalStyles";
import { GridSwitcherProvider } from "./components/GridSwitcher";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <GridSwitcherProvider>
      <RouterProvider router={router} />
    </GridSwitcherProvider>
  </React.StrictMode>
);
