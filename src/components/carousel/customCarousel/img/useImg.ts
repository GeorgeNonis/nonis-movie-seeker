import { Movie } from "@/pages/interfaces";
import { addMovieDetails } from "@/store/state-slicer";
import { useDispatch } from "react-redux";

export const useImg = () => {
  const dispatch = useDispatch();

  const ModalHandler = ({ ...rest }: Movie) => {
    dispatch(addMovieDetails({ ...rest }));
  };
  return { ModalHandler };
};
