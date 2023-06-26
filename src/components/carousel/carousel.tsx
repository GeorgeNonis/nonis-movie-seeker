import { createContext, useContext } from "react";
import { Movie, Movies } from "@/pages/interfaces";
import CustomCarousel from "./customCarousel";

interface CarouselProps {
  movies: Movie[];
  twentymovies: Movie[];
}

interface ContextValues {
  movies: Movie[];
  twentymovies: Movie[];
}

export const MoviesContext = createContext<ContextValues>({
  movies: [],
  twentymovies: [],
});

const Carousel = ({ movies, twentymovies }: CarouselProps) => {
  const values = {
    movies,
    twentymovies,
  };
  return (
    <MoviesContext.Provider value={values}>
      <CustomCarousel />
    </MoviesContext.Provider>
    // <section className={styles.carouseldiv}>
    //   <div className={styles.carouselbtn}>
    //     <RiArrowLeftSLine className={styles.leftbutton} />
    //   </div>
    //   <div className={styles.carousel}>
    //     <MoviesContext.Provider value={movies}>
    //       <CarouselDiv />
    //     </MoviesContext.Provider>
    //   </div>
    //   <div className={styles.carouselbtn}>
    //     <RiArrowRightSLine className={styles.rightbutton} />
    //   </div>
    // </section>
  );
};
export default Carousel;
