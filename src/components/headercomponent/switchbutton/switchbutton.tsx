import Switch from "react-switch";
import { useSwitchButton } from "./useSwitchButton";
import styles from "./styles.module.scss";

const SwitchButton = () => {
  const { theme, SwitchHandler } = useSwitchButton();
  return (
    <Switch
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
