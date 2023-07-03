import { useRouter } from "next/router";
import styles from "./styles.module.scss";
import useLibrary from "./useLibrary";

const Library = () => {
  const { library, watchedStyle, queueStyle, onClickHandler } = useLibrary();

  if (!library) return null;
  return (
    <div className={styles.library}>
      <button
        className={styles.btn}
        onClick={onClickHandler}
        style={watchedStyle}
      >
        WATCHED
      </button>
      <button
        className={styles.btn}
        onClick={onClickHandler}
        style={queueStyle}
      >
        QUEUE
      </button>
    </div>
  );
};
export default Library;
