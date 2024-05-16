import { Link } from "react-router-dom";
import { SearchIcon } from "./SearchIcon";
import { SearchProps } from "./types";
import * as S from "./styles";

export const Search = ({ onChange, onSubmit }: SearchProps) => {
  return (
    <div css={S.Search}>
      <h1 css={S.Title}>
        <Link to="/">Unsplash</Link>
      </h1>
      <p css={S.Text}>The internet’s source for visuals</p>
      <p css={S.Text}>Powered by creators everywhere.</p>
      <form css={S.InputContainer} onSubmit={onSubmit}>
        <button css={S.SearchBtn}>
          <SearchIcon />
        </button>
        <input
          css={S.Input}
          type="text"
          autoComplete="off"
          placeholder="Search high-resolution images"
          onChange={onChange}
        />
        <button css={S.RemoveBtn} type="reset"></button>
      </form>
    </div>
  );
};
