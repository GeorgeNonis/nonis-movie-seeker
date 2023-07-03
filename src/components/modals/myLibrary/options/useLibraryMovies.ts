import { useSelector } from "react-redux";
import { IRootState } from "@/store";

export const useLibraryMovies = () => {
  const { DATABASE, state } = useSelector((state: IRootState) => state);
  const { watched } = state;
  const { queued, watched: watchedMovies } = DATABASE;
  const moviesToMap = watched ? watchedMovies : queued;
  return {
    moviesToMap,
  };
};
