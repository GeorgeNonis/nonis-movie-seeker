import { RiArrowLeftDoubleFill, RiArrowLeftSLine } from "react-icons/ri";
import styles from "../styles.module.scss";
import { ArrowProps } from "./interfaces";
import { useContext } from "react";
import { MoviesSection } from "@/context/moviesections/moviesSection";

const LeftArrows = () => {
  const { LeftArrowHandler, page } = useContext(MoviesSection);
  const enable = page + 1 === 1 ? styles.disable : styles.arrows;
  const enableSvg = page + 1 === 1 ? styles.disablesvg : undefined;
  return (
    <>
      <span className={enable} onClick={() => LeftArrowHandler(0)}>
        <RiArrowLeftDoubleFill className={enableSvg} />
      </span>
      <span
        className={enable}
        onClick={() => {
          if (page === 0) return;
          LeftArrowHandler(page - 1);
        }}
      >
        <RiArrowLeftSLine className={enableSvg} />
      </span>
    </>
  );
};
export default LeftArrows;
