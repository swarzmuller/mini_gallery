import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PhotoPage } from "./components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/:slug",
    element: <PhotoPage />,
  },
]);

export default router;
