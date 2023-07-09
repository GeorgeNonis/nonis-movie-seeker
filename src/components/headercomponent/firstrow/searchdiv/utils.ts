import { Movie } from "@/interfaces";
import moviesData from "../../../../../data.json";

const movies: Movie[] = moviesData as Movie[];

export const searchMovies = (searchValue: string): Movie[] => {
  // Convert the search value to lowercase for case-insensitive search
  const lowerSearchValue = searchValue.toLowerCase();

  // Filter the movies array based on the search value
  const matchingMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(lowerSearchValue)
  );

  return matchingMovies;
};
