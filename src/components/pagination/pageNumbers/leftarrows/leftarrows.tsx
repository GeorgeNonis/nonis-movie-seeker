import { RiArrowLeftDoubleFill, RiArrowLeftSLine } from "react-icons/ri";
import { useContext } from "react";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { styled } from "../../../../../stitches.config";
import { ArrowSpan } from "@/components/Atoms/arrowSpan";

const LeftArrows = () => {
  const { LeftArrowHandler, page } = useContext(MoviesSection);
  const enable = page + 1 === 1;
  const enableSvg = page + 1 === 1;
  const DisabledSvg = styled("span", {
    variants: {
      disabled: {
        true: {
          color: "silver",
        },
      },
    },
  });
  return (
    <>
      <ArrowSpan
        disabled={enable ? "disable" : "arrows"}
        onClick={() => LeftArrowHandler(0)}
      >
        <DisabledSvg disabled={enableSvg ? "true" : undefined}>
          <RiArrowLeftDoubleFill />
        </DisabledSvg>
      </ArrowSpan>
      <ArrowSpan
        disabled={enable ? "disable" : "arrows"}
        onClick={() => {
          if (page === 0) return;
          LeftArrowHandler(page - 1);
        }}
      >
        <DisabledSvg disabled={enableSvg ? "true" : undefined}>
          <RiArrowLeftSLine />
        </DisabledSvg>
      </ArrowSpan>
    </>
  );
};
export default LeftArrows;
