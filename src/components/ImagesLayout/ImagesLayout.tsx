import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
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
  const { gridValue } = useContext(GridSwitcherContext);
  const [searchParams] = useSearchParams();
  const groups = galleryList ? splitIntoGroups(galleryList, gridValue) : null;

  const param = searchParams.get("tag")

  useEffect(() => {
    getList(page, param || undefined).then((result) => {
      const { data, total } = result;

      console.log(result)
      setGalleryList(data);
      setTotal(total);
    });
  }, [page, param]);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setPage(selected + 1);
  };

  return (
    <ImagesLayoutBase>
      <Search />
      <GridSwitcher />
      <ReactPaginate css={S.Pagination} breakLabel="..." nextLabel=">" onPageChange={handlePageClick} pageRangeDisplayed={1} pageCount={Math.ceil(total / 30)} previousLabel="<" renderOnZeroPageCount={null} />
      <Gallery groups={groups} />
    </ImagesLayoutBase>
  );
};
