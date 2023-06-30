import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import styles from "./styles.module.scss";

const Starsbackdrop = () => {
  const { theme } = useSelector((state: IRootState) => state.DATABASE);
  return (
    <div
      className={styles.stars}
      style={{ background: `${!theme ? "#f0f0f0" : "#323131"}` }}
    >
      <div className={styles.star1}></div>
      <div className={styles.star2}></div>
      <div className={styles.star3}></div>
      <div className={styles.star4}></div>
    </div>
  );
};
export default Starsbackdrop;
