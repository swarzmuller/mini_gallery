import { SearchIcon } from "./SearchIcon";
import * as S from "./styles";

export const Search = () => {
  return (
    <div>
      <h1 css={S.Title}>Unsplash</h1>
      <p css={S.Text}>The internet’s source for visuals</p>
      <p css={S.Text}>Powered by creators everywhere.</p>
      <form css={S.InputContainer}>
        <button css={S.SearchBtn}>
          <SearchIcon />
        </button>
        <input
          css={S.Input}
          type="text"
          autoComplete="off"
          placeholder="Search high-resolution images"
        />
        <button css={S.RemoveBtn} type="reset"></button>
      </form>
    </div>
  );
};
