import Link from "next/link";
import styles from "./styles.module.scss";
import { useLinks } from "./useLinks";
import { LINKS } from "../../../../config";

const Links = () => {
  const { activeLink, pathname } = useLinks();
  return (
    <>
      {LINKS.map((link, i) => {
        return (
          <Link
            href={link.value}
            className={styles.link}
            key={i}
            style={pathname === link.value ? activeLink : undefined}
          >
            {link.link}
          </Link>
        );
      })}
    </>
  );
};
export default Links;
