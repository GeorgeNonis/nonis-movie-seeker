import { MoviesArrays } from "@/context/moviesArray";
import { useContext } from "react";
import styles from "./styles.module.scss";
import Image from "next/image";

interface MovieSectionProps {
  page: number;
}

const MovieSection = ({ page }: MovieSectionProps) => {
  const { movies } = useContext(MoviesArrays);
  return (
    <div className={styles.moviesection}>
      {movies[page].map((movie, index) => {
        return (
          <div key={index} className={styles.movie}>
            <Image
              className={styles.img}
              width={100}
              height={100}
              alt={movie.title}
              src={movie.image[movie.image.length - 1][1]}
            />
            <h3 className={styles.titlewriters}>
              {movie.title} | {movie.rating}
            </h3>
            <h3 className={styles.genreyear}>
              {movie.genre} | {movie.year}
            </h3>
          </div>
        );
      })}
    </div>
  );
};
export default MovieSection;
