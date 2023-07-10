import { styled } from "../../../../stitches.config";

export const ArrowSpan = styled("span", {
  variants: {
    disabled: {
      disable: {
        width: "2rem",
        height: "2rem",
        borderRadius: "8px",
        display: "grid",
        placeItems: "center",
        color: "#a1a1a1",
        background: "#e0e0e0",
        pointerEvents: "none",
      },
      arrows: {
        cursor: "pointer",
        width: "2rem",
        height: "2rem",
        borderRadius: "8px",
        display: "grid",
        placeItems: "center",
        color: "black",
        background: "white",
        transition: "all 250ms ease-in-out",
        "&:hover": {
          backgroundColor: "$secondary",
          color: "white",
          transform: "scale(1.2)",
        },
      },
    },
  },

  "@xs": {
    width: "1.4rem !important",
    height: "1.4rem !important",
    fontSize: "$7",
    borderRadius: "2px !important",
  },
});
