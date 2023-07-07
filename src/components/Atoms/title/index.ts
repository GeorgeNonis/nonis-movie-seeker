import { styled } from "../../../../stitches.config";

export const Title = styled("h1", {
  textAlign: "center",
  color: "white",
  fontSize: "$6",
  variants: {
    textAlign: {
      center: {
        textAlign: "center",
      },
      end: {
        textAlign: "end",
      },
      start: {
        textAlign: "start",
      },
    },
    textTransform: {
      uppercase: {
        textTransform: "uppercase",
      },
      lowercase: {
        textTransform: "lowercase",
      },
    },
    fontSize: {
      1: {
        fontSize: "$1",
      },
      2: {
        fontSize: "$2",
      },
      3: {
        fontSize: "$3",
      },
      4: {
        fontSize: "$4",
      },
      5: {
        fontSize: "$5",
      },
      6: {
        fontSize: "$6",
      },
      7: {
        fontSize: "$7",
      },
    },
    fontWeight: {
      light: {
        fontWeight: "300",
      },
      normal: {
        fontWeight: "400",
      },
      bold: {
        fontWeight: "700",
      },
    },
    colors: {
      black: {
        color: "black",
      },
      red: {
        color: "red",
      },
    },
    marginInline: {
      center: {
        marginInline: "auto",
      },
    },
    marginBlock: {
      1: {
        marginBlock: "1rem",
      },
    },
  },
});
