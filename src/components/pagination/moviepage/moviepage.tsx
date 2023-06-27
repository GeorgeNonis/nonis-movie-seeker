import { useMoviePage } from "./useMoviePage";
import PageNumbers from "../pageNumbers";
import MovieSection from "./moviesection";
import styles from "./styles.module.scss";
import MoviesSectionProvider from "@/context/moviesections/moviesSection";

const MoviePage = () => {
  const { handlers, values } = useMoviePage();
  const AllValues = { ...values, ...handlers };
  return (
    <MoviesSectionProvider {...AllValues}>
      <section className={styles.movies}>
        <PageNumbers />
        <MovieSection />
        <PageNumbers />
      </section>
    </MoviesSectionProvider>
  );
};
export default MoviePage;
