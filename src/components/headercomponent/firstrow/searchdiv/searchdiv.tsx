import { CiSearch } from "react-icons/ci";
import { styled } from "../../../../../stitches.config";

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
  return (
    <Container>
      <Input type="text" />
      <SearchIcon />
    </Container>
  );
};
export default SearchDiv;
