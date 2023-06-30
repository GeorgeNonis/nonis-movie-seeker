import { RatingProps } from "./interfaces";
import styles from "./styles.module.scss";

const Rating = ({ percentage }: RatingProps) => {
  return (
    <svg viewBox="0 0 36 36" className={styles.chart}>
      <path
        className={styles.circle}
        strokeDasharray={`${percentage},100`}
        d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
  );
};
export default Rating;
