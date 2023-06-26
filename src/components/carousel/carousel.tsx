import { createContext, useContext } from "react";
import { Movie, Movies } from "@/pages/interfaces";
import CustomCarousel from "./customCarousel";

// interface CarouselProps {
//   movies: Movie[];
//   twentymovies: Movie[];
// }

// interface ContextValues {
//   movies: Movie[];
//   twentymovies: Movie[];
// }

// export const MoviesContext = createContext<ContextValues>({
//   movies: [],
//   twentymovies: [],
// });

const Carousel = () => {
  // const values = {
  //   movies,
  //   twentymovies,
  // };
  return (
    <CustomCarousel />
    // <MoviesContext.Provider value={values}>
    // </MoviesContext.Provider>
  );
};
export default Carousel;
