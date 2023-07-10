import { movieModal } from "@/store/state-slicer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useMovieModal = () => {
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  const ModalHandler = () => {
    dispatch(movieModal());
  };

  return { ModalHandler };
};
