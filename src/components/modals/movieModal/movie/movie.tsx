import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import Rating from "./rating";
import styles from "./styles.module.scss";

const Movie = () => {
  const { movie, movieModal } = useSelector((state: IRootState) => state.state);
  // if (movie.image === undefined) return null;
  console.log({ movie });
  if (!movieModal) return null;
  return (
    <div className={styles.movie}>
      <Image
        className={styles.img}
        width={500}
        height={500}
        src={movie.image[movie.image.length - 1][1]}
        alt={movie.title}
      />
      <div className={styles.moviedetails}>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
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
        <div className={styles.details}>
          <span>{movie.year}</span>
          <span>No {movie.rank}</span>
          <span className={styles.genre}>{movie.genre.join(" | ")}</span>
        </div>
        {/* <table className={styles.table}>
          <tbody>
            <tr>
              <td>Year</td>
              <td>{movie.year}</td>
            </tr>
            <tr>
              <td>Rank</td>
              <td>{movie.rank}</td>
            </tr>
            <tr>
              <td>Rating</td>
              <td>
                {" "}
                <Rating percentage={String(+movie.rating * 10)} />
              </td>
              <td>{movie.rating}</td>
            </tr>
            <tr>
              <td>Genre</td>
              <td>{movie.genre.join(", ")}</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    </div>
  );
};
export default Movie;
