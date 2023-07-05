import { keyframes } from "@stitches/react";

export const spinerOne = keyframes({
  "0%": {
    transform: "rotate(0deg)",
    borderWidth: "10px",
  },
  "50%": {
    transform: "rotate(180deg)",
    borderWidth: "1px",
  },
  "100%": {
    transform: "rotate(360deg)",
    borderWidth: "10px",
  },
});

export const spinerTwo = keyframes({
  "0%": {
    transform: "rotate(0deg)",
    borderWidth: "1px",
  },
  "50%": {
    transform: "rotate(180deg)",
    borderWidth: "10px",
  },
  "100%": {
    transform: "rotate(360deg)",
    borderWidth: "10px",
  },
});
