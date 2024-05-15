import { useContext, useEffect, useState } from "react";
import { GridSwitcherContext } from "../GridSwitcher";
import { GalleryBase } from "./GalleryBase";
import { getList } from "@/api";

export const Gallery = () => {
  const [galleryList, setGalleryList] = useState();
  const { gridValue } = useContext(GridSwitcherContext);

  useEffect(() => {
    getList().then((data) => setGalleryList(data));
  }, []);

  console.log(galleryList);
  return (
    <GalleryBase value={gridValue}>
      {/* {galleryList && galleryList?.map((item) => {
        return <img css={{maxWidth: '100%'}} key={item.id} src={item.urls.regular} alt="" />
      })} */}
    </GalleryBase>
  );
};
