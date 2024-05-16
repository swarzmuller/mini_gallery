import { GalleryTypes } from "../Gallery/types";

export const splitIntoGroups = (lists: GalleryTypes[], numGroups: number) => {
  const groups: Array<GalleryTypes[]> = Array.from(
    { length: numGroups },
    () => []
  );
  lists.forEach((list, index) => {
    groups[index % numGroups].push(list);
  });
  return groups;
};
