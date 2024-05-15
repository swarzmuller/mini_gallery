import { GalleryBase } from "./GalleryBase";
import { CurrentImage } from "./CurrentImage";
import { GroupsProps } from "./types";

export const Gallery = ({ groups }: GroupsProps) => {
  if (!groups) return <div css={{ width: "100%" }}>Loading...</div>;

  return (
    <GalleryBase>
      {groups.map((item, index) => (
        <div key={index}>
          <CurrentImage item={item} />
        </div>
      ))}
    </GalleryBase>
  );
};
