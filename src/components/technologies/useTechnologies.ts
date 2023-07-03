import { settingsModal } from "@/store/state-slicer";
import { useDispatch } from "react-redux";

export const useTechnologies = () => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch(settingsModal());
  };
  return {
    onClickHandler,
  };
};
