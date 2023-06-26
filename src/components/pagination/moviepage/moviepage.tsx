import { useMoviePage } from "./useMoviePage";
import styles from "./styles.module.scss";
import PageNumbers from "../pageNumbers/pageNumbers";
import MovieSection from "../moviesection";

const MoviePage = () => {
  const { handlers, values } = useMoviePage();

  return (
    <section className={styles.movies}>
      <PageNumbers
        pageNumbers={values.pageNumbers}
        PageHandler={handlers.PageHandler}
      />
      <MovieSection page={values.page} />
      <PageNumbers
        pageNumbers={values.pageNumbers}
        PageHandler={handlers.PageHandler}
      />
    </section>
  );
};
export default MoviePage;
