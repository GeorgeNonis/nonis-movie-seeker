import React from "react";
import { styled, keyframes } from "@stitches/react";

const spinnerOne = keyframes({
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

const spinnerTwo = keyframes({
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

const SpinnerContainer = styled("div", {
  minWidth: "960px",
  margin: "200px auto",
  display: "flex",
  justifyContent: "space-around",
});

const Spiner = styled("div", {
  width: "100px",
  height: "100px",
  position: "relative",
});

const SpinerDiv = styled("div", {
  border: "10px solid transparent",
  borderTopColor: "#b92f2c",
  boxSizing: "border-box",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  animation: `${spinnerOne} 1.2s linear infinite`,
});

const SpinerDivTwo = styled("div", {
  border: "10px solid transparent",
  borderBottomColor: "#b92f2c",
  boxSizing: "border-box",
  position: "absolute",
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  animation: `${spinnerTwo} 1.2s linear infinite`,
});

const LoadingSpinner = () => {
  return (
    <SpinnerContainer>
      <Spiner>
        <SpinerDiv />
        <SpinerDivTwo />
      </Spiner>
    </SpinnerContainer>
  );
};

export default LoadingSpinner;
