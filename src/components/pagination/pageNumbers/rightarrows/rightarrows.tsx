import { useContext } from "react";
import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { Arrow } from "@/components/Molecules/arrow";

const RightArrows = () => {
  const { RightArrowHandler, page, pageNumbers } = useContext(MoviesSection);
  const enable = page + 1 === 10;
  const enableSvg = page + 1 === 10;

  return (
    <>
      <Arrow
        Icon={RiArrowRightSLine}
        onClick={() => {
          if (page === pageNumbers.length - 1) return;
          RightArrowHandler(page + 1);
        }}
        isDisabled={enable}
        isDisabledSvg={enableSvg}
      />
      <Arrow
        Icon={RiArrowRightDoubleFill}
        onClick={() => RightArrowHandler(pageNumbers.length - 1)}
        isDisabled={enable}
        isDisabledSvg={enableSvg}
      />
    </>
  );
};
export default RightArrows;
