import { GalleryBase } from "./GalleryBase";
import { CurrentImage } from "./CurrentImage";
import { GroupsProps } from "./types";

export const Gallery = ({ groups }: GroupsProps) => {
  console.log()
  if (!groups) return <h1 css={{width: "100%"}}>Loading...</h1>;
  if (!groups[0].length) return <h1 css={{width: "100%"}}>No Results!</h1>;

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
