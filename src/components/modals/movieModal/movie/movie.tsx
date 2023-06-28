import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import styles from "./styles.module.scss";

const Movie = () => {
  const { movie, movieModal } = useSelector((state: IRootState) => state.state);
  // if (movie.image === undefined) return null;
  console.log({ movie });
  if (!movieModal) return null;
  return (
    <div className={styles.movie}>
      <div
        className={styles.img}
        style={{
          backgroundImage: `url(${movie.image[movie.image.length - 1][1]})`,
        }}
      ></div>
      <div className={styles.moviedetails1}>
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        <div className={styles.actions}></div>
        <div className={styles.moviedetails2}>
          <span>{movie.year}</span>
          <span>{movie.rating}</span>
          <span>{movie.genre.join(" | ")}</span>
        </div>
      </div>
      {/* _id: string;
    id: string;
    __v: number;
    description: string;
    director: string[];
    genre: string[];
    image: [];
    imdbid: string;
    rank: number;
    rating: string;
    thumbnail: string;
    title: string;
    writers: [string];
    year: number; */}
      {/* <Image
        width={500}
        height={500}
        src={movie.image[movie.image.length - 1][1]}
        alt={movie.title}
      /> */}
    </div>
  );
};
export default Movie;
