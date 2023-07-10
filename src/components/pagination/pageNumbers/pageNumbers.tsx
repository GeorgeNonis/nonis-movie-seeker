import RightArrows from "./rightarrows";
import LeftArrows from "./leftarrows";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { useContext } from "react";
import { styled } from "../../../../stitches.config";

const Numbers = styled("div", {
  width: "50%",
  marginInline: "auto",
  display: "grid",
  gridAutoFlow: "column",
  placeItems: "center",
  "@xs": {
    width: "95%",
  },
});

const Number = styled("span", {
  cursor: "pointer",
  width: "2rem",
  height: "2rem",
  borderRadius: "8px",
  display: "grid",
  placeItems: "center",
  color: "black",
  background: "white",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    backgroundColor: "#b92f2c",
    color: "white",

    transform: "scale(1.2)",
  },

  "@xs": {
    width: "1.4rem",
    height: "1.4rem",
    fontSize: "$7",
    borderRadius: "2px",
  },
});
const PageNumbers = () => {
  const { enabled, page, pageNumbers, PageHandler } = useContext(MoviesSection);

  return (
    <Numbers>
      <LeftArrows />
      {pageNumbers.map((pageNumber) => {
        return (
          <Number
            style={enabled(page, pageNumber)}
            key={pageNumber}
            onClick={() => PageHandler(pageNumber)}
          >
            {pageNumber}
          </Number>
        );
      })}
      <RightArrows />
    </Numbers>
  );
};
export default PageNumbers;
