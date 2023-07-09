import { RiArrowLeftDoubleFill, RiArrowLeftSLine } from "react-icons/ri";
import { useContext } from "react";
import { Arrow } from "@/components/Molecules/arrow";
import { ResultsSection } from "@/context/results";

const LeftArrows = () => {
  const { LeftArrowHandler, page } = useContext(ResultsSection);
  const enable = page + 1 === 1;
  const enableSvg = page + 1 === 1;

  return (
    <>
      <Arrow
        Icon={RiArrowLeftDoubleFill}
        onClick={() => LeftArrowHandler(0)}
        isDisabled={enable}
        isDisabledSvg={enableSvg}
      />
      <Arrow
        Icon={RiArrowLeftSLine}
        onClick={() => {
          if (page === 0) return;
          LeftArrowHandler(page - 1);
        }}
        isDisabled={enable}
        isDisabledSvg={enableSvg}
      />
    </>
  );
};
export default LeftArrows;
