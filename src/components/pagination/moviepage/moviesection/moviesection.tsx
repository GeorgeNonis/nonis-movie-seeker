import { useContext } from "react";
import Movie from "../../movie";
import styles from "./styles.module.scss";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import LoadingSpinner from "@/components/laoadingspinner/loadingspinner";

const MovieSection = () => {
  const { movies } = useSelector((state: IRootState) => state.DATABASE);
  const { page } = useContext(MoviesSection);

  if (!movies || !movies[page]) {
    return <LoadingSpinner />;
  }

  return (
    <div className={styles.moviesection}>
      {movies[page].map((movie, index) => {
        return <Movie {...movie} key={index} />;
      })}
    </div>
  );
};
export default MovieSection;
