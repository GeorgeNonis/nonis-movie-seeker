import { Movie } from "@/pages/interfaces";
import styles from "./styles.module.scss";
import { useActions } from "./useActions";

const Actions = ({ ...movie }: Movie) => {
  const { watchedHandler, getDatabase } = useActions({ ...movie });
  return (
    <div className={styles.actions}>
      <button className={styles.btn} onClick={watchedHandler}>
        Add to watched
      </button>
      <button className={styles.btn} onClick={getDatabase}>
        Add to queue
      </button>
    </div>
  );
};
export default Actions;
