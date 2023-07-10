import { keyframes } from "@stitches/react";
import { styled } from "../../../stitches.config";
import FirstRow from "./firstrow";
import SecondRow from "./secondrow";

const changeBackground = keyframes({
  "0%": {
    backgroundImage: 'url("1.jpg")',
  },
  "50%": {
    backgroundImage: 'url("2.jpg")',
  },
  "100%": {
    backgroundImage: 'url("1.jpg")',
  },
});
const changeBackgroundLarge = keyframes({
  "0%": {
    backgroundImage: 'url("1_mobile.jpg")',
  },
  "50%": {
    backgroundImage: 'url("2_mobile.jpg")',
  },
  "100%": {
    backgroundImage: 'url("1_mobile.jpg")',
  },
});

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  flexDirection: "column",
  width: "80%",
  height: "20rem",
  marginInline: "auto",
  marginTop: "5rem",
  animation: `${changeBackground} 10s step-end infinite`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "100%",
  borderRadius: "2rem",
  padding: "3rem",
  "@xs": {
    width: "90%",
    height: "30rem",
    padding: "0",
    animation: `${changeBackgroundLarge} 10s step-end infinite`,
  },
  "@sm": {
    width: "90%",
    height: "15rem",
    animation: `${changeBackground} 10s step-end infinite`,
  },
});

const Headercomponent = () => {
  return (
    <Header>
      <FirstRow />
      <SecondRow />
    </Header>
  );
};

export default Headercomponent;
