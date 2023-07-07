import { HiXMark } from "react-icons/hi2";
import { keyframes } from "@stitches/react";
import { styled } from "../../../../stitches.config";

const Backdrop = styled("div", {
  position: "fixed",
  inset: "0 auto auto 0",
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  visibility: "visible",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  transition:
    "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 13.9637ms, visibility 0s cubic-bezier(0.4, 0, 0.2, 1)",

  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
  },
});

const ModalContent = styled("div", {
  zIndex: 101,
  position: "fixed",
  inset: "50% auto auto 50%",
  transform: "translate(-50%, -50%)",
  width: "900px",
  maxHeight: "80vh",
  padding: "1rem 1.5rem",
  backgroundColor: "white",
  color: "white",
  border: "none",
  boxSizing: "border-box",
  borderRadius: "8px",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 60%), 0 4px 8px 3px rgb(0 0 0 / 30%)",
  overflow: "auto",
  transition:
    "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 13.9637ms, visibility 0s cubic-bezier(0.4, 0, 0.2, 1)",
  fontFamily:
    "UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, AppleSystem, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, AppleSystem, BlinkMacSystemFont, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI emoji",

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "rgba(80, 80, 80, 1)",
    borderRadius: "8px",
  },
  "&::-webkit-scrollbar-track": {
    backgroundColor: "unset",
  },
  "&::-webkit-scrollbar": {
    borderRadius: "20px",
    border: "none",
  },
});

const sky = keyframes({
  "0%": {
    transform: "rotate(45deg)",
  },
  "100%": {
    transform: "rotate(45deg + 360deg)",
  },
});
const Night = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  transform: "rotateZ(45deg)",
  animation: `${sky} 200000ms linear infinite`,
});

const Content = styled("div", {});

export { Backdrop, ModalContent, Night, Content };
