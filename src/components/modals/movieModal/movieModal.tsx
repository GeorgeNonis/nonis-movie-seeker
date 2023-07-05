import { useSelector } from "react-redux";
import { useMovieModal } from "./useMovieModal";
import { IRootState } from "@/store";
import { HiXMark } from "react-icons/hi2";
import Movie from "./movie/movie";
import styles from "./styles.module.scss";

const MovieModal = () => {
  const { movieModal } = useSelector((state: IRootState) => state.state);
  const { ModalHandler } = useMovieModal();
  const backdrop = movieModal
    ? `${styles.backdrop} ${styles.visible}`
    : `${styles.hidden}`;
  const modalContent = movieModal
    ? `${styles.modalContent} ${styles.visible}`
    : `${styles.hidden}`;
  return (
    <>
      <div className={backdrop} onClick={ModalHandler}></div>
      <div className={modalContent}>
        <HiXMark className={styles.x} onClick={ModalHandler} />
        <Movie />
      </div>
    </>
  );
};
export default MovieModal;
