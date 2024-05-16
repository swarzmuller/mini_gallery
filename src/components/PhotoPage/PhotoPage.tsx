import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPhoto } from "@/api";
import { ImagesLayoutBase } from "../ImagesLayout";
import { Button } from "../GridSwitcher";
import { PhotoInfo, User } from "./components";
import { FotoInfoTypes } from "./types";
import * as S from "./styles";

export const PhotoPage = () => {
  const [photoInfo, setPhotoInfo] = useState<FotoInfoTypes>();
  const [error, setError] = useState("");
  const { pathname } = useLocation();

  useEffect(() => {
    getPhoto(pathname.replace("/", ""))
      .then((data) => setPhotoInfo(data))
      .catch((error) => setError(error.message));
  }, [pathname]);

  if (error || !photoInfo) return <h1 css={{ textAlign: "center" }}>{error || 'Loading...'}</h1>;

  const { user, urls, views, downloads, likes, description, tags } = photoInfo;

  return (
    <ImagesLayoutBase>
      <Link css={Button} to="/">
        Back
      </Link>
      <User user={user} />
      <img css={S.Image} src={urls.regular} alt={description} />
      <PhotoInfo
        views={views}
        downloads={downloads}
        likes={likes}
        description={description}
      />
      <div css={S.Tag}>
        {tags.map((tagItem) => {
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
