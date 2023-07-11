import Link from "next/link";
import { useLinks } from "./useLinks";
import { LINKS } from "../../../../../config";
import { sharedProperties, styled } from "../../../../../stitches.config";

const NavLink = styled(Link, {
  ...sharedProperties,
  "@md": {
    padding: ".5rem 1rem",
    fontSize: "$6",
  },
  "@sm": {
    padding: ".5rem 1rem",
    fontSize: "$8",
  },
  "@xs": {
    fontSize: "$7",
  },
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
