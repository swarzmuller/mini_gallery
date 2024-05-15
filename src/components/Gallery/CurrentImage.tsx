import { GalleryTypes } from "./types";
import * as S from './styles'

export const CurrentImage = ({ item }: { item: GalleryTypes[] }) => {
  return (
    <>
      {item.map((imageItem) => (
        <a href="#" key={imageItem.id}>
          <img css={S.CurrentImage} src={imageItem.urls.regular} alt="" />
        </a>
      ))}
    </>
  );
};
