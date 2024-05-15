import { createContext, useState } from "react";
import { GRID_COLUMNS_3 } from "@/constans";
import { GridSwitcherContextType } from "./types";

export const GridSwitcherContext = createContext<GridSwitcherContextType>({
  gridValue: GRID_COLUMNS_3,
  getValue: () => {
    /* no-op */
  },
});

export const GridSwitcherProvider = ({ children }: { children: React.ReactNode }) => {
  const [gridValue, setGridValue] = useState(GRID_COLUMNS_3);

  const getValue = (value:  number) => {
    setGridValue(value);
  };

  return <GridSwitcherContext.Provider value={{ gridValue, getValue }}>{children}</GridSwitcherContext.Provider>;
};
