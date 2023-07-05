import { styled } from "@stitches/react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useScrollToTop } from "./useScrollToTop";

const ToTopContainer = styled("div", {
  position: "fixed",
  bottom: "2rem",
  right: "2rem",
  color: "black",
  border: "none",
  zIndex: 10,

  "& svg": {
    width: "2rem",
    height: "2rem",
    cursor: "pointer",
    backgroundColor: "#fff9d6",
    borderRadius: "50%",
    outline: "none",
    border: "none",
    transition: "all 350ms ease-in-out",

    "&:hover": {
      color: "#b92f2c",
      transform: "scale(1.2) rotate(-360deg)",
    },
  },
  variants: {
    display: {
      ture: {
        display: "block",
      },
      false: {
        display: "none",
      },
    },
  },
});

const ScrollToTop = () => {
  const { visibility, handler } = useScrollToTop();
  return (
    <ToTopContainer display={visibility}>
      <BsFillArrowUpSquareFill onClick={handler} />
    </ToTopContainer>
  );
};

export default ScrollToTop;
