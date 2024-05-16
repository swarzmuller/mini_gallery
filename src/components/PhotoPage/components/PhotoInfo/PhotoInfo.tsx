import { Info } from "../../styles";
import { FotoInfoTypes } from "../../types";

export const PhotoInfo = ({
  views,
  downloads,
  likes,
  description,
}: Omit<FotoInfoTypes, "user" | "tags" | "urls">) => {
  return (
    <>
      <div css={Info}>
        <span>
          Views
          <strong>{views}</strong>
        </span>
        <span>
          Downloads
          <strong>{downloads}</strong>
        </span>
        <span>
          Likes
          <strong>{likes}</strong>
        </span>
      </div>
      {description ? <p css={{ width: "100%" }}>{description}</p> : null}
    </>
  );
};
