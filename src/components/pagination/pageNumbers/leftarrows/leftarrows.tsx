import { RiArrowLeftDoubleFill, RiArrowLeftSLine } from "react-icons/ri";
import styles from "../styles.module.scss";
import { ArrowProps } from "./interfaces";

const LeftArrows = ({ page }: ArrowProps) => {
  console.log({ page });
  const enable = page + 1 === 1 ? styles.disable : styles.arrows;
  const enableSvg = page + 1 === 1 ? styles.disablesvg : undefined;
  return (
    <>
      <span className={enable}>
        <RiArrowLeftDoubleFill className={enableSvg} />
      </span>
      <span className={enable}>
        <RiArrowLeftSLine className={enableSvg} />
      </span>
    </>
  );
};
export default LeftArrows;
