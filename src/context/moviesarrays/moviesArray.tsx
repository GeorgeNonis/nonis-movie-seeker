import { createContext, useEffect } from "react";
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
  return (
    <MoviesArrays.Provider value={{ movies, twentymovies }}>
      {children}
    </MoviesArrays.Provider>
  );
};
export default MoviesArraysProvider;
