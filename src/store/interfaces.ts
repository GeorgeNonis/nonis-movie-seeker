import { Movie } from "@/pages/interfaces";

export interface InitialState {
  movieModal: boolean;
  movie: Movie;
}

export interface DBInitialState {
  theme: boolean;
  watched: Movie[];
  queued: Movie[];
}
