import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { getList } from "@/api";
import { Gallery } from "../Gallery";
import { GridSwitcher, GridSwitcherContext } from "../GridSwitcher";
import { Search } from "../Search";
import { GalleryTypes } from "../Gallery/types";
import { splitIntoGroups } from "./helpers";
import { ImagesLayoutBase } from "./ImagesLayoutBase";
import * as S from "./styles";

export const ImagesLayout = () => {
  const [galleryList, setGalleryList] = useState<GalleryTypes[]>();
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState<number>(1);
  const [searchValue, setSearchValue] = useState<string>("");
  const [error, setError] = useState("");
  const { gridValue } = useContext(GridSwitcherContext);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const groups = galleryList ? splitIntoGroups(galleryList, gridValue) : null;
  const param = searchParams.get("tag") || null;

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (searchValue) {
      navigate(`?tag=${searchValue}`);
    }
  };

  useEffect(() => {
    getList(page, param)
      .then((result) => {
        const { data, total } = result;
        setGalleryList(data);
        setTotal(total);
      })
      .catch((error) => setError(error.message));
  }, [page, param]);

  return (
    <ImagesLayoutBase>
      <Search onChange={handleChange} onSubmit={handleSubmit} />
      <GridSwitcher />
      {error || !galleryList?.length ? (
        <h1 css={{ width: "100%" }}>{error || 'No Results!'}</h1>
      ) : (
        <>
          <ReactPaginate
            css={S.Pagination}
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={1}
            pageCount={Math.ceil(total / 30)}
            previousLabel="<"
            renderOnZeroPageCount={null}
          />
          <Gallery groups={groups} />
        </>
      )}
    </ImagesLayoutBase>
  );
};
