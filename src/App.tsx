import { Outlet } from "react-router";
import { ImagesLayout } from "./components";

export const App = () => (
  <>
    <Outlet />
    <ImagesLayout />
  </>
);
