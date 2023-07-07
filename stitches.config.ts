import { createStitches, globalCss } from "@stitches/react";

export const { styled, css, getCssText } = createStitches({
  theme: {
    colors: {
      primary: "rgb(57, 21, 21)",
      secondary: "#b92f2c",
    },
  },
  media: {
    bp1: "(min-width: 640px)",
    bp2: "(min-width: 768px)",
    bp3: "(min-width: 1024px)",
  },
});
