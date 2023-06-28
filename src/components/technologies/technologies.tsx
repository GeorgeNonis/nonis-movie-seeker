import Image from "next/image";
import styles from "./styles.module.scss";

import { FiSettings } from "react-icons/fi";

const Techonologies = () => {
  return (
    <div className={styles.div}>
      <FiSettings className={styles.svg} />
    </div>
  );
};
export default Techonologies;
