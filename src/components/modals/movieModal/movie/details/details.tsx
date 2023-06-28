import { Movie } from "@/pages/interfaces";
import styles from "./styles.module.scss";

const Details = ({ ...movie }: Movie) => {
  return (
    <div className={styles.details}>
      <span>{movie.year}</span>
      <span>No {movie.rank}</span>
      <span className={styles.genre}>{movie.genre.join(" | ")}</span>
    </div>
  );
};
export default Details;
