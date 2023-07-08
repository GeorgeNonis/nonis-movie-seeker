import { styled } from "../../../../stitches.config";
import * as Comp from "../../index";

const Container = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  justifyContent: "space-between",
});

const Tools = styled("div", {
  display: "grid",
  gridAutoFlow: "column",
  gap: "1.5rem",
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
