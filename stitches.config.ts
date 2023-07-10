import { createStitches, globalCss } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "rgb(57, 21, 21)",
      secondary: "#b92f2c",
      sectionBgColor: "#50505042",
      brightRed: "#ff1616",
    },
    fontSizes: {
      1: "48px",
      2: "36px",
      3: "30px",
      4: "20px",
      5: "18px",
      6: "16px",
      7: "12px",
      8: "10px",
    },
    fontWeights: {
      light: "300",
      normal: "500",
      bold: "600",
      bolder: "700",
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
  media: {
    xs: "(max-width: 640px)",
    sm: "(max-width: 768px)",
    md: "(max-width: 1024px)",
    lg: "(max-width: 1280px)",
  },
});

// Hover Effect
export const sharedProperties = {
  all: "unset",
  cursor: "pointer",
  background: "white",
  fontSize: "1rem",
  textTransform: "uppercase",
  borderRadius: "15px",
  color: "black",
  textAlign: "center",
  fontWeight: 500,
  display: "grid",
  placeContent: "center",
  padding: "0.8rem",
  transition: "500ms ease-in-out",
  position: "relative",
  "&::after": {
    content: '""',
    position: "absolute",
    width: "70%",
    transform: "scaleX(0)",
    height: "2px",
    bottom: "4px",
    left: "50%",
    right: "50%",
    backgroundColor: "black",
    transformOrigin: "bottom right",
    transition: "transform 0.25s ease-out",
  },
  "&:hover::after": {
    backgroundColor: "white",
    transform: "scaleX(1) translate(-50%)",
    transformOrigin: "bottom left",
  },
};
