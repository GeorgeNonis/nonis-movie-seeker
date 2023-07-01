import { Movie } from "@/pages/interfaces";

export interface InitialState {
  movieModal: boolean;
  libraryModal: boolean;
  movie: Movie;
}

export interface DBInitialState {
  theme: boolean;
  watched: Movie[];
  queued: Movie[];
  movies: Movie[][];
  twentymovies: Movie[];
}
