import { css } from "@emotion/react";

export const Title = css`
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
`;

export const Text = css`
  font-size: 18px;
  margin-top: 5px;
`;

export const InputContainer = css`
  display: flex;
  height: 54px;
  width: 600px;
  background-color: #eee;
  box-shadow: 0 0 0 1px #eee;
  transition: all 0.1s ease-in-out;
  border-radius: 8px;
  margin-top: 10px;

  &:focus-within {
    background-color: #fff;
    box-shadow: 0 0 0 1px #0000001f;
  }
`;

export const Input = css`
  width: 100%;
  background: none;
  border: none;
`;

export const RemoveBtn = css`
  position: relative;
  display: flex;
  width: 32px;

  &::before,
  &::after {
    position: absolute;
    top: 19px;
    left: 14px;
    display: block;
    width: 1px;
    height: 12px;
    background: #767676;
    content: "";
  }

  &:hover {
    &::before,
    &::after {
      background: #111;
    }
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`;

export const SearchBtn = css`
  padding: 0 10px;
`;
