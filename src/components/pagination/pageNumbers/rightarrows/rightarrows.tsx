import { useContext } from "react";
import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import styles from "../styles.module.scss";
import { MoviesSection } from "@/context/moviesections/moviesSection";

const RightArrows = () => {
  const { RightArrowHandler, page, pageNumbers } = useContext(MoviesSection);
  const enable = page + 1 === 10 ? styles.disable : styles.arrows;
  const enableSvg = page + 1 === 10 ? styles.disablesvg : undefined;
  return (
    <>
      <span
        className={enable}
        onClick={() => {
          if (page === pageNumbers.length - 1) return;
          RightArrowHandler(page + 1);
        }}
      >
        <RiArrowRightSLine className={enableSvg} />
      </span>
      <span
        className={enable}
        onClick={() => RightArrowHandler(pageNumbers.length - 1)}
      >
        <RiArrowRightDoubleFill className={enableSvg} />
      </span>
    </>
  );
};
export default RightArrows;
