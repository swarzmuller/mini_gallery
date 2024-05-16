import { Link } from "react-router-dom";
import { GalleryTypes } from "./types";
import * as S from "./styles";

export const CurrentImage = ({ item }: { item: GalleryTypes[] }) => {
  return (
    <>
      {item.map((imageItem) => (
        <Link to={`/${imageItem.slug}`} key={imageItem.id}>
          <img css={S.CurrentImage} src={imageItem.urls.regular} alt="" />
        </Link>
      ))}
    </>
  );
};
