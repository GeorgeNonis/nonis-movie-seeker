import { Movie } from "@/pages/interfaces";
import Rating from "../rating/rating";
import styles from "./styles.module.scss";

const Trailer = ({ ...movie }: Movie) => {
  return (
    <div className={styles.trailerdiv}>
      <a
        className={styles.trailerlink}
        href={`https://www.youtube.com/results?search_query=${movie.title.split(
          "+"
        )}+trailer`}
        target="_blank"
      >
        Watch Trailer
      </a>
      <div className={styles.ratingdiv}>
        <Rating percentage={String(+movie.rating * 10)} />
        <h3 className={styles.rating}>{movie.rating}</h3>
      </div>
    </div>
  );
};
export default Trailer;
