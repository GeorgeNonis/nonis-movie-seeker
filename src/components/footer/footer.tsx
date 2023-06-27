import { IoIosHeart } from "react-icons/io";
import styles from "./styles.module.scss";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="https://github.com/GeorgeNonis/nonis-movie-seeker"
        target="_blank"
      >
        <Image src={"/github.png"} width={50} height={50} alt="github_logo" />
      </a>
      <h3 className={styles.h3}>
        Develop By{" "}
        <a
          href="https://giorgosnonis.com/"
          target="_blank"
          className={styles.link}
        >
          Giorgos Nonis
        </a>
      </h3>
      {/* <IoIosHeart className={styles.heartbeat} /> */}
    </footer>
  );
};
export default Footer;
