import { FiSettings } from "react-icons/fi";
import { useTechnologies } from "./useTechnologies";
import styles from "./styles.module.scss";

const Technologies = () => {
  const { onClickHandler } = useTechnologies();

  return (
    <div className={styles.div} onClick={onClickHandler}>
      <FiSettings className={styles.svg} />
    </div>
  );
};

export default Technologies;
