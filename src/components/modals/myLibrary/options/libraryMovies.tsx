import * as Comp from "@/components";
import { useLibraryMovies } from "./useLibraryMovies";
import styles from "./styles.module.scss";

const LibraryMovies = () => {
  const { moviesToMap } = useLibraryMovies();
  return (
    <div className={styles.librarySectionMovies}>
      {moviesToMap.map((movie, index) => {
        return <Comp.Movie {...movie} key={index} />;
      })}
    </div>
  );
};
export default LibraryMovies;
