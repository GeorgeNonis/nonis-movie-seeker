import { useSelector } from "react-redux";
import { useMovieModal } from "./useMovieModal";
import { IRootState } from "@/store";
import { HiXMark } from "react-icons/hi2";
import Movie from "./movie/movie";
import { styled } from "@stitches/react";

const Backdrop = styled("div", {
  position: "fixed",
  inset: "0 auto auto 0",
  zIndex: 100,
  width: "100vw",
  height: "100vh",
  visibility: "visible",
  backgroundColor: "rgba(0, 0, 0, 0.2)",
  transition:
    "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 13.9637ms, visibility 0s cubic-bezier(0.4, 0, 0.2, 1)",

  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
  },
});

const ModalContent = styled("div", {
  zIndex: 101,
  position: "fixed",
  inset: "50% auto auto 50%",
  transform: "translate(-50%, -50%)",
  width: "806px",
  minHeight: "80dvh",
  backgroundColor: "white",
  border: "none",
  boxSizing: "border-box",
  borderRadius: "8px",
  boxShadow: "0 1px 3px 0 rgb(0 0 0 / 60%), 0 4px 8px 3px rgb(0 0 0 / 30%)",
  overflowX: "hidden",
  overflowY: "auto",
  transition:
    "opacity 500ms cubic-bezier(0.4, 0, 0.2, 1) 13.9637ms, visibility 0s cubic-bezier(0.4, 0, 0.2, 1)",

  variants: {
    visible: {
      true: {
        opacity: 1,
        visibility: "visible",
      },
      false: {
        opacity: 0,
        visibility: "hidden",
      },
    },
  },
});

const XMark = styled(HiXMark, {
  position: "absolute",
  top: "1rem",
  right: "1rem",
  cursor: "pointer",
  height: "2rem",
  width: "2rem",
});

const MovieModal = () => {
  const { movieModal } = useSelector((state: IRootState) => state.state);
  const { ModalHandler } = useMovieModal();
  return (
    <>
      <Backdrop onClick={ModalHandler} visible={movieModal} />
      <ModalContent visible={movieModal}>
        <XMark onClick={ModalHandler} />
        <Movie />
      </ModalContent>
    </>
  );
};
export default MovieModal;
