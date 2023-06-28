import { movieModal } from "@/store/state-slicer";
import {} from "react";
import { useDispatch } from "react-redux";

export const useMovieModal = () => {
  const dispatch = useDispatch();

  const ModalHandler = () => {
    dispatch(movieModal());
  };

  return { ModalHandler };
};
