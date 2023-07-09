import { HomePageProps, Movie } from "@/interfaces";

export interface ContextValues {
  movies: Movie[][];
  twentymovies: Movie[];
}

export interface MoviesArraysProviderProps extends HomePageProps {
  children: React.ReactNode | JSX.Element[] | JSX.Element;
}
