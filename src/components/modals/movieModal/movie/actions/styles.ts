import { styled } from "../../../../../../stitches.config";

export const ActionsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "1rem",
  height: "4rem",
  placeItems: "center",
  marginBlock: "2rem",
  width: "100%",

  "@sm": {
    width: "100%",
    height: "3rem",
    marginBottom: "1rem",
  },
  "@xs": {
    width: "80%",
    height: "2rem",
    marginBottom: "1rem",
  },
});

export const Button = styled("button", {
  cursor: "pointer",
  width: "100%",
  height: "100%",
  padding: "1rem 1.2rem",
  textTransform: "uppercase",
  fontWeight: "100",
  borderRadius: "25px",
  border: "1px solid rgb(129, 129, 129)",
  color: "rgb(129, 129, 129)",
  textAlign: "center",
  transition: "all 250ms ease-in-out",
  letterSpacing: "0.6px",
  fontSize: "12px",
  "&:hover": {
    borderColor: "$brightRed",
    backgroundColor: "$brightRed",
    color: "white !important",
  },

  "@sm": {
    fontSize: "$7",
    fontWeight: "$light",
    padding: ".6rem .8rem",
  },
  "@xs": {
    fontSize: "10px",
    padding: ".5rem",
  },

  variants: {
    enabled: {
      true: {
        background: `#ff1616`,
        color: `white`,
      },
      false: {
        background: `white`,
        color: `black`,
      },
    },
  },
});
