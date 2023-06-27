import { useMoviePage } from "./useMoviePage";
import PageNumbers from "../pageNumbers";
import MovieSection from "../moviesection";
import styles from "./styles.module.scss";

const MoviePage = () => {
  const { handlers, values } = useMoviePage();
  const AllValues = { ...values, ...handlers };
  return (
    <section className={styles.movies}>
      <PageNumbers {...AllValues} />
      <MovieSection page={values.page} />
      <PageNumbers {...AllValues} />
    </section>
  );
};
export default MoviePage;
