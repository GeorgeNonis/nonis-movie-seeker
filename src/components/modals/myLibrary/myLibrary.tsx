import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { HiXMark } from "react-icons/hi2";
import { useMyLibrary } from "./useMyLibrary";
import { Queued, Watched } from "./options";
import styles from "./styles.module.scss";

const LibraryModal = () => {
  const { handlers, values } = useMyLibrary();

  return (
    <>
      <div className={values.backdrop} onClick={handlers.ModalHandler}></div>
      <div className={values.modalContent}>
        <HiXMark className={styles.x} onClick={handlers.ModalHandler} />
        <div className={styles.options}>
          {values.options ? (
            <span onClick={handlers.OptionsHandler}>
              <Queued {...values.queued} />
            </span>
          ) : (
            <span onClick={handlers.OptionsHandler}>
              <Watched {...values.watched} />
            </span>
          )}
        </div>
      </div>
    </>
  );
};
export default LibraryModal;
