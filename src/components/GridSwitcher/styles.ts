import { css } from "@emotion/react";

export const Button = css`
  line-height: 30px;
  padding: 0 11px;
  background: linear-gradient(180deg, #0000 50%, #0b151e05), #fff;
  border: 1px solid #d1d1d1;
  color: #767676;
  box-shadow: 0 1px 1px #00000014;
  margin: 5px;
  transition: 0.3s;
  user-select: none;
  border-radius: 6px;
  font-weight: 500;

  &.active,
  &:hover {
    border-color: #767676;
    color: #111;
  }
`;
