import { MoviesArrays } from "@/context/moviesarrays/moviesArray";
import { useContext } from "react";
import { MovieSectionProps } from "./interfaces";
import Movie from "../../movie/movie";
import styles from "./styles.module.scss";

const MovieSection = ({ page }: MovieSectionProps) => {
  const { movies } = useContext(MoviesArrays);
  return (
    <div className={styles.moviesection}>
      {movies[page].map((movie, index) => {
        return <Movie {...movie} key={index} />;
      })}
    </div>
  );
};
export default MovieSection;
