import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { useState } from "react";
export const useSwitchButton = () => {
  const { test } = useSelector((state: IRootState) => state.state);
  const [theme, setTheme] = useState(false);
  /**
   * Temporary
   */
  const SwitchHandler = () => {
    setTheme(!theme);
    console.log({ test });
  };

  const right = {
    right: "1px",
    bottom: "-1px",
  };

  const left = { left: "1px", bottom: "-1px" };

  return { right, left, theme, SwitchHandler };
};
