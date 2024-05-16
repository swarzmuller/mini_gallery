import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPhoto } from "@/api";
import { ImagesLayoutBase } from "../ImagesLayout";
import { User } from "./components/User";
import { FotoInfoType } from "./types";
import * as S from "./styles";

export const PhotoPage = () => {
  const [photoInfo, setPhotoInfo] = useState<FotoInfoType>();
  const { pathname } = useLocation();
  useEffect(() => {
    getPhoto(pathname.replace("/", "")).then((data) => setPhotoInfo(data));
  }, [pathname]);

  console.log(photoInfo);

  if (!photoInfo) return <div>Loading...</div>;
  return (
    <ImagesLayoutBase>
      <Link to="/">Back</Link>
      <User user={photoInfo.user} />
      <img css={S.Image} src={photoInfo.urls.regular} alt="" />
      <div css={S.Info}>
        <span>
          Views <br />
          {photoInfo.views}
        </span>
        <span>
          Downloads <br />
          {photoInfo.downloads}
        </span>
        <span>
          Likes <br />
          {photoInfo.likes}
        </span>
      </div>
      {photoInfo.description ? (
        <p css={{ width: "100%" }}>{photoInfo.description}</p>
      ) : null}
      <div css={S.Tag}>
        {photoInfo.tags.map((tagItem) => {
          if (tagItem.type === "search") {
            return (
              <Link key={tagItem.title} to={`/?tag=${tagItem.title}`}>
                {tagItem.title}
              </Link>
            );
          }
        })}
      </div>
    </ImagesLayoutBase>
  );
};
