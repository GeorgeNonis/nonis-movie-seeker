import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import Rating from "./rating";
import styles from "./styles.module.scss";
import Details from "./details";
import Actions from "./actions/actions";
import Trailer from "./trailer/trailer";

const Movie = () => {
  const { movie, movieModal } = useSelector((state: IRootState) => state.state);
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
        <h1 className={styles.title}>{movie.title}</h1>
        <p>{movie.description}</p>
        <Trailer {...movie} />
        <Details {...movie} />
        <Actions {...movie} />
      </div>
    </div>
  );
};
export default Movie;
