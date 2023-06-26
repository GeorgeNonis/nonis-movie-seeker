import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { useScrollToTop } from "./useScrollToTop";
import styles from "./styles.module.scss";

const ScrollToTop = () => {
  const { visibility, handler } = useScrollToTop();
  return (
    <div
      style={{ display: `${visibility ? "block" : "none"}` }}
      className={styles.toTop}
    >
      <BsFillArrowUpSquareFill onClick={handler} />
    </div>
  );
};
export default ScrollToTop;
