import { IRootState } from "@/store";
import { libModal } from "@/store/state-slicer";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./styles.module.scss";

export const useMyLibrary = () => {
  const { DATABASE, state } = useSelector((state: IRootState) => state);
  const [options, setOptions] = useState(false);
  const dispatch = useDispatch();

  const { queued, watched } = DATABASE;
  const { libraryModal } = state;
  const backdrop = libraryModal
    ? `${styles.backdrop} ${styles.visible}`
    : `${styles.backdrop} ${styles.hidden}`;
  const modalContent = libraryModal
    ? `${styles.modalContent} ${styles.visible}`
    : `${styles.backdrop} ${styles.hidden}`;

  const ModalHandler = () => {
    dispatch(libModal());
  };

  const OptionsHandler = () => {
    setOptions(!options);
  };

  const handlers = {
    modalContent,
    OptionsHandler,
    ModalHandler,
  };

  const values = {
    queued,
    watched,
    backdrop,
    options,
    modalContent,
  };

  return { handlers, values };
};
