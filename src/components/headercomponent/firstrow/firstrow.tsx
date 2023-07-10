import { styled } from "../../../../stitches.config";
import * as Comp from "../../index";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
  "@xs": {
    width: "100%",
    gridTemplateColumns: "1fr",
  },
});

const Tools = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "1.5rem",
  "@xs": {
    gridAutoFlow: "unset",
    width: "80%",
    placeContent: "center",
    marginInline: "auto",
    padding: "1rem",
  },
});

const FirstRow = () => {
  return (
    <Container>
      <Tools>
        <Comp.SearchDiv />
        <Comp.Links />
      </Tools>
      <Comp.Library />
    </Container>
  );
};
export default FirstRow;
