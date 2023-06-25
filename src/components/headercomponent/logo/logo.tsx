import { BiCameraMovie } from "react-icons/bi";
import styles from "./styles.module.scss";
import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href={"/"} className={styles.logolink}>
        <BiCameraMovie className={styles.svg} />
        <span className={styles.logo}>Unraveling Nonis&apos;s World</span>
      </Link>
    </>
  );
};
export default Logo;
