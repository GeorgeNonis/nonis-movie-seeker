import { Movie } from "@/pages/interfaces";
import { addMovieDetails, movieModal } from "@/store/state-slicer";
import { useDispatch } from "react-redux";

export const useMovie = ({ image }: Movie) => {
  const dispatch = useDispatch();

  const ModalHandler = ({ ...rest }: Movie) => {
    dispatch(addMovieDetails({ ...rest }));
  };
  return { ModalHandler };
};
