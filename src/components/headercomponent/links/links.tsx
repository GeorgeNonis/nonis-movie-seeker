import Link from "next/link";
import styles from "./styles.module.scss";

const Links = () => {
  return (
    <>
      <Link href={"/"} className={styles.link}>
        Home
      </Link>
      <Link href={"/library"} className={styles.link}>
        My Library
      </Link>
    </>
  );
};
export default Links;
