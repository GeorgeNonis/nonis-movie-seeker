import { CiSearch } from "react-icons/ci";
import { styled } from "../../../../../stitches.config";
import { useSearch } from "./useSearch";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "10fr 2fr",
  placeContent: "center",
  background: "white",
  borderRadius: "15px",
  padding: "0.5rem",
});

const Input = styled("input", {
  all: "unset",
  paddingInline: "0.5rem",
});

const SearchIcon = styled(CiSearch, {
  cursor: "pointer",
});

const SearchDiv = () => {
  const { inputValue, searchInputHandler, onClickSearchHandler } = useSearch();
  return (
    <Container>
      <Input
        type="text"
        onChange={searchInputHandler}
        value={inputValue}
        onKeyDown={(e) => {
          e.key === "Enter" && onClickSearchHandler();
        }}
      />
      <SearchIcon onClick={onClickSearchHandler} />
    </Container>
  );
};
export default SearchDiv;
