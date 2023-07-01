import Link from "next/link";
import styles from "./styles.module.scss";

const Links = () => {
  const links = [
    { link: "Home", value: "/" },
    { link: "My Library", value: "/library" },
  ];
  return (
    <>
      {links.map((link, i) => {
        return (
          <Link href={link.value} className={styles.link} key={i}>
            {link.link}
          </Link>
        );
      })}
    </>
  );
};
export default Links;
