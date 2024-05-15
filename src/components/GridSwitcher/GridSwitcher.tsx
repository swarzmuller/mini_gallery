import { useContext } from "react";
import { GRID_COLUMNS_3, GRID_COLUMNS_5 } from "@/constans";
import { GridSwitcherContext } from "./GridSwitcherContext";
import * as S from "./styles";

export const GridSwitcher = () => {
  const { getValue, gridValue } = useContext(GridSwitcherContext);

  return (
    <div>
      <button onClick={() => getValue(GRID_COLUMNS_3)} className={GRID_COLUMNS_3 === gridValue ? "active" : ""} css={S.Button}>
        3 columns
      </button>
      <button onClick={() => getValue(GRID_COLUMNS_5)} className={GRID_COLUMNS_5 === gridValue ? "active" : ""} css={S.Button}>
        5 columns
      </button>
    </div>
  );
};
