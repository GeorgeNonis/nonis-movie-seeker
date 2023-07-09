import { Movie } from "@/interfaces";

export interface InitialState {
  movieModal: boolean;
  settingsModal: boolean;
  libraryModal: boolean;
  watched: boolean;
  movie: Movie;
  resultMovies: Movie[];
}

export interface DBInitialState {
  theme: boolean;
  watched: Movie[];
  queued: Movie[];
  movies: Movie[][];
  twentymovies: Movie[];
}
