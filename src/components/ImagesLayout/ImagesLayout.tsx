import { ImagesLayoutBase } from "./ImagesLayoutBase";
import { Gallery } from "../Gallery";
import { GridSwitcher } from "../GridSwitcher";
import { Search } from "../Search";

export const ImagesLayout = () => {
  return (
    <ImagesLayoutBase>
      <Search />
      <GridSwitcher />
      <Gallery />
    </ImagesLayoutBase>
  );
};
