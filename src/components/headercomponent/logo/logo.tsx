import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
import styles from "./styles.module.scss";
import { APP_TITLE } from "../../../../config";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className={styles.logolink}>
        <BiCameraMovie className={styles.svg} />
        <span className={styles.logo}>{APP_TITLE}</span>
      </Link>
    </>
  );
};
export default Logo;
