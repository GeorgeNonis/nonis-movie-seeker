import { styled } from "@stitches/react";
import RightArrows from "./rightarrows";
import LeftArrows from "./leftarrows";
import { useContext } from "react";
import { ResultsSection } from "@/context/results";

const Numbers = styled("div", {
  width: "50%",
  marginInline: "auto",
  display: "grid",
  gridAutoFlow: "column",
  placeItems: "center",
});

const PageNumbersResult = () => {
  const { enabled, page, pageNumbers, PageHandler } =
    useContext(ResultsSection);

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
  });
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
export default PageNumbersResult;
