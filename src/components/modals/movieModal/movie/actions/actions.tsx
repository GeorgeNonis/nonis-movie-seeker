import { Movie } from "@/pages/interfaces";
import { useActions } from "./useActions";
import styles from "./styles.module.scss";

const Actions = ({ ...movie }: Movie) => {
  const { watchedHandler, queueHandler, values } = useActions({ ...movie });
  return (
    <div className={styles.actions}>
      <button
        className={styles.btn}
        style={values.watchedBackgroundStyle}
        onClick={watchedHandler}
      >
        {values.watched ? "Watched" : "Add to Watched"}
      </button>
      <button
        className={styles.btn}
        style={values.queuedBackgroundStyle}
        onClick={queueHandler}
      >
        {values.queued ? "REMOVE FROM QUEUE" : "ADD TO QUEUE"}
      </button>
    </div>
  );
};
export default Actions;
