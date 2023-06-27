import { createContext } from "react";
import { ContextValues, MoviesArraysProviderProps } from "./interfaces";

export const MoviesArrays = createContext<ContextValues>({
  movies: [],
  twentymovies: [],
});

const MoviesArraysProvider = ({
  movies,
  twentymovies,
  children,
}: MoviesArraysProviderProps) => {
  const values = {
    movies,
    twentymovies,
  };
  return (
    <MoviesArrays.Provider value={values}>{children}</MoviesArrays.Provider>
  );
};
export default MoviesArraysProvider;
