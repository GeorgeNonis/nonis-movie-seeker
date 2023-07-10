import Switch from "react-switch";
import { useSwitchButton } from "./useSwitchButton";
import { styled } from "../../../../../stitches.config";

const SwitchBtn = styled(Switch, {
  "@xs": {
    alignSelf: "end",
    marginBottom: "0.5rem",
  },
});

const SwitchButton = () => {
  const { theme, SwitchHandler } = useSwitchButton();
  return (
    <SwitchBtn
      offHandleColor="#323131"
      onColor="#323131"
      offColor="#FFFFFF"
      width={100}
      onChange={SwitchHandler}
      checked={theme}
      checkedIcon={false}
      uncheckedIcon={false}
    />
  );
};
export default SwitchButton;
