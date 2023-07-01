import * as Comp from "@/components";
import { Movie, Movies } from "@/pages/interfaces";
import styles from "./styles.module.scss";

const Queued = ({ movies }: Movies) => {
  if (!movies) return;
  return (
    <div className={styles.queued}>
      {movies.map((movie, index) => {
        return <Comp.Movie {...movie} key={index} />;
      })}
    </div>
  );
};
export default Queued;
