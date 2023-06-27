import Image from "next/image";
import styles from "./styles.module.scss";

import { FiSettings } from "react-icons/fi";

const Techonologies = () => {
  return (
    <div className={styles.div}>
      <FiSettings className={styles.svg} />
    </div>
    // <Image
    //   className={styles.technologies}
    //   src={"/pngwing.com.png"}
    //   height={50}
    //   width={50}
    //   alt="technologies_used"
    // />
  );
};
export default Techonologies;
