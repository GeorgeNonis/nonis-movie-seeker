import styles from "./styles.module.scss";

const Actions = () => {
  return (
    <div className={styles.actions}>
      <button className={styles.btn}>Add to watched</button>
      <button className={styles.btn}>Add to queue</button>
    </div>
  );
};
export default Actions;
