import { FiSettings } from "react-icons/fi";
import { useTechnologies } from "./useTechnologies";
import { keyframes, styled } from "@stitches/react";

const TechnologiesDiv = styled("div", {
  zIndex: 10,
  cursor: "pointer",
  position: "fixed",
  bottom: "1rem",
  left: "1rem",
  backgroundColor: "#00c0ff",
  width: "3rem",
  height: "3rem",
  display: "grid",
  placeItems: "center",
  borderRadius: "50%",
});

const spinning = keyframes({
  "0%": {
    transform: "rotate(0deg)",
  },
  "100%": {
    transform: "rotate(360deg)",
  },
});

const SettingIcon = styled(FiSettings, {
  color: "white",
  height: "1.5rem",
  width: "1.5rem",
  animation: `${spinning} 5s infinite linear`,
});
const Technologies = () => {
  const { onClickHandler } = useTechnologies();

  return (
    <TechnologiesDiv onClick={onClickHandler}>
      <SettingIcon />
    </TechnologiesDiv>
  );
};

export default Technologies;
