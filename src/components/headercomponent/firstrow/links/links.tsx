import Link from "next/link";
import { useLinks } from "./useLinks";
import { LINKS } from "../../../../../config";
import { sharedProperties, styled } from "../../../../../stitches.config";

const NavLink = styled(Link, {
  ...sharedProperties,
});

const Links = () => {
  const { activeLink, pathname } = useLinks();
  return (
    <>
      {LINKS.map((link, i) => {
        return (
          <NavLink
            href={link.value}
            key={i}
            style={pathname === link.value ? activeLink : undefined}
          >
            {link.link}
          </NavLink>
        );
      })}
    </>
  );
};
export default Links;
