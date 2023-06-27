import Image from "next/image";
import styles from "./styles.module.scss";
import { MovieProps } from "./interfaces";

const Movie = ({ ...rest }: MovieProps) => {
  return (
    <div className={styles.movie}>
      <Image
        className={styles.img}
        width={100}
        height={100}
        alt={rest.title}
        src={rest.image[rest.image.length - 1][1]}
      />
      <h3 className={styles.titlewriters}>
        {rest.title} | {rest.rating}
      </h3>
      <h3 className={styles.genreyear}>
        {rest.genre} | {rest.year}
      </h3>
    </div>
  );
};
export default Movie;