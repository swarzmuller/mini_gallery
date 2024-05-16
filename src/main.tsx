import React from "react";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "./routes";
import { GlobalStyles } from "./globalStyles";
import { GridSwitcherProvider } from "./components/GridSwitcher";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyles />
    <GridSwitcherProvider>
      <RouterProvider router={router} />
    </GridSwitcherProvider>
  </React.StrictMode>
);
