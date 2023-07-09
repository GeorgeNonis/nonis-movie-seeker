import { useContext } from "react";
import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import { Arrow } from "@/components/Molecules/arrow";
import { ResultsSection } from "@/context/results";

const RightArrows = () => {
  const { RightArrowHandler, page, pageNumbers } = useContext(ResultsSection);
  const enable = page + 1 === pageNumbers.length;
  const enableSvg = page + 1 === pageNumbers.length;

  /**
   * SO WE NEED
   * pageNumbers
   * Right & Left arrow Handler
   */

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
