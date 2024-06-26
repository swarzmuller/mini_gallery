import { css } from "@emotion/react";

export const Pagination = css`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 0;
  list-style-type: none;

  @media (max-width: 768px) {
    margin: 0;
  }

  li a {
    display: block;
    padding: 10px 5px;
    min-width: 40px;
    text-align: center;
    border: 1px solid #d1d1d1;
    cursor: pointer;
    background: #fff;
    color: #767676;
    margin: 0 -1px;

    @media (max-width: 768px) {
      padding: 5px 2px;
      min-width: 25px;
      font-size: 14px;
    }
  }

  li.selected a {
    background: #70b6e1;
    color: #fff;
  }

  li.disabled a {
    pointer-events: none;
    opacity: 0.5;
  }
`;
