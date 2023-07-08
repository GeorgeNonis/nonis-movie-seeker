import { useContext } from "react";
import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { styled } from "../../../../../stitches.config";
import { ArrowSpan } from "@/components/Atoms/arrowSpan";

const RightArrows = () => {
  const { RightArrowHandler, page, pageNumbers } = useContext(MoviesSection);
  const enable = page + 1;
  const enableSvg = page + 1;

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
        onClick={() => {
          if (page === pageNumbers.length - 1) return;
          RightArrowHandler(page + 1);
        }}
      >
        <DisabledSvg disabled={enableSvg ? "true" : undefined}>
          <RiArrowRightSLine />
        </DisabledSvg>
      </ArrowSpan>
      <ArrowSpan
        disabled={enable ? "disable" : "arrows"}
        onClick={() => RightArrowHandler(pageNumbers.length - 1)}
      >
        <DisabledSvg disabled={enableSvg ? "true" : undefined}>
          <RiArrowRightDoubleFill />
        </DisabledSvg>
      </ArrowSpan>
    </>
  );
};
export default RightArrows;
