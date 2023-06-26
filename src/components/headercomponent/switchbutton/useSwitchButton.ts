import { useDispatch } from "react-redux";
import { useState } from "react";
import { changeTheme } from "@/store/state-slicer";
export const useSwitchButton = () => {
  const dispatch = useDispatch();

  const [theme, setTheme] = useState(false);
  /**
   * Temporary
   */
  const SwitchHandler = () => {
    setTheme(!theme);
    dispatch(changeTheme());
  };

  const right = {
    right: "1px",
    bottom: "-1px",
  };

  const left = { left: "1px", bottom: "-1px" };

  return { right, left, theme, SwitchHandler };
};
