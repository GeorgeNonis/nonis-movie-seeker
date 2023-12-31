import { settingsModal } from "@/store/state-slicer";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import styles from "./styles.module.scss";
import fallingStars from "./fallingstars.module.scss";
import { useEffect } from "react";

export const useSettingsModal = () => {
  const { settingsModal: settingsModalState } = useSelector(
    (state: IRootState) => state.state
  );
  const dispatch = useDispatch();

  const modalContent = settingsModalState
    ? `${styles.modalContent} ${styles.visible} ${fallingStars["falling-stars"]}`
    : `${styles.hidden}`;

  const ModalHandler = () => {
    console.log("clicking");
    dispatch(settingsModal());
  };

  const stars = Array(20).fill(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return {
    ModalHandler,
    modalContent,
    stars,
    settingsModalState,
  };
};
