import { styled } from "../../../../stitches.config";
import * as Comp from "../../index";

const Container = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  "@xs": {
    flexDirection: "column",
    gap: "1rem",
  },
});

const SecondRow = () => {
  return (
    <Container>
      <Comp.Logo />
      <Comp.SwitchButton />
    </Container>
  );
};
export default SecondRow;
