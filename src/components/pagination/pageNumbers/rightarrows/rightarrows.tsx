import { RiArrowRightDoubleFill, RiArrowRightSLine } from "react-icons/ri";
import { ArrowProps } from "./interfaces";
import styles from "../styles.module.scss";

const RightArrows = ({ page }: ArrowProps) => {
  const enable = page + 1 === 10 ? styles.disable : styles.arrows;
  const enableSvg = page + 1 === 10 ? styles.disablesvg : undefined;
  return (
    <>
      <span className={enable}>
        <RiArrowRightSLine className={enableSvg} />
      </span>
      <span className={enable}>
        <RiArrowRightDoubleFill className={enableSvg} />
      </span>
    </>
  );
};
export default RightArrows;
