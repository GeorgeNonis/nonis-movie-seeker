import { BiCameraMovie } from "react-icons/bi";
import Link from "next/link";
// import styles from "./styles.module.scss";
import { APP_TITLE } from "../../../../../config";
import { styled } from "../../../../../stitches.config";
import { keyframes } from "@stitches/react";

const LogoLink = styled(Link, {
  all: "unset",
  display: "grid",
  gridAutoFlow: "column",
  placeContent: "center",
  alignItems: "center",
  gap: "1rem",
  cursor: "pointer",
});

const titleAnimation = keyframes({
  "0%": {
    letterSpacing: "-0.5em",
    WebkitFilter: "blur(12px)",
    filter: "blur(12px)",
    opacity: 0,
  },
  "100%": {
    WebkitFilter: "blur()",
    filter: "blur()",
    opacity: 1,
  },
});
const CameraIcon = styled(BiCameraMovie, {
  width: "2rem",
  height: "2rem",
  color: "white",
});

const MovieLogo = styled("div", {
  color: "white",
  fontSize: "2rem",
  fontWeight: 600,
  fontFamily:
    "UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, AppleSystem, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, AppleSystem, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI emoji",
  animation: `1889.04ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 250ms 1 normal both running ${titleAnimation}`,
  "@xs": {
    fontSize: "$5",
  },
});

const Logo = () => {
  return (
    <>
      <LogoLink href={"/"}>
        <CameraIcon />
        <MovieLogo>{APP_TITLE}</MovieLogo>
      </LogoLink>
    </>
  );
};
export default Logo;
