import { settingsModal } from "@/store/state-slicer";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import styles from "./styles.module.scss";
import fallingStars from "./fallingstars.module.scss";

export const useSettingsModal = () => {
  const { settingsModal: settingsModalState } = useSelector(
    (state: IRootState) => state.state
  );
  const dispatch = useDispatch();

  const backdrop = settingsModalState
    ? `${styles.backdrop} ${styles.visible}`
    : `${styles.backdrop} ${styles.hidden}`;
  const modalContent = settingsModalState
    ? `${styles.modalContent} ${styles.visible} ${fallingStars["falling-stars"]}`
    : `${styles.backdrop} ${styles.hidden}`;

  const ModalHandler = () => {
    console.log("clicking");
    dispatch(settingsModal());
  };

  const stars = Array(20).fill(null);

  return {
    ModalHandler,
    backdrop,
    modalContent,
    stars,
  };
};
