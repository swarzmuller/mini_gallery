import styled from "@emotion/styled";

export const GalleryBase = styled.div((props: { value: number}) => ({
  display: "grid",
  gridTemplateColumns: `repeat(${props.value}, 1fr)`,
  gap: '20px',
  width: "100%",
}));
