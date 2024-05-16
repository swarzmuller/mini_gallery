import { css } from "@emotion/react";

export const Image = css`
  width: 100%;
  max-width: 500px;
  display: block;
  margin: 0 auto;
`;

export const Info = css`
  display: flex;
  align-items: flex-start;
  gap: 40px;
  width: 100%;

  span {
    display: flex;
    flex-direction: column;
    color: #767676;

    strong {
      color: initial;
    }
  }
`;

export const Tag = css`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  width: 100%;

  a {
    background-color: #eee;
    border-radius: 4px;
    color: #555;
    display: inline-block;
    padding: 4px 10px;
    text-decoration: none;
    text-transform: capitalize;
    transition: all 0.1s ease-in-out;
    font-size: 14px;
  }
`;
