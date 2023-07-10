import { styled } from "../../../../stitches.config";
import { HiXMark } from "react-icons/hi2";

export const XMark = styled(HiXMark, {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  cursor: "pointer",
  height: "2rem",
  width: "2rem",
  "@xs": {
    top: ".2rem",
    right: ".2rem",
  },
});
