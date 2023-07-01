import * as Comp from "@/components";
import { Movie, Movies } from "@/pages/interfaces";
import styles from "./styles.module.scss";

const Watched = ({ movies }: Movies) => {
  if (!movies) return;
  return (
    <div className={styles.watched}>
      {movies.map((movie, index) => {
        return <Comp.Movie {...movie} key={index} />;
      })}
    </div>
  );
};
export default Watched;
