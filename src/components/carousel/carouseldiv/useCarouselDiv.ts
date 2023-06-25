import { Movies } from "@/pages/interfaces";
import { MoviesContext } from "../carousel";
import { useContext } from "react";

export const useCarouselDiv = () => {
  const movies = useContext(MoviesContext);
  const twentymovies: any[] | Movies = [];
  let i = 0;
  while (i < 20) {
    twentymovies.push(movies[Math.floor(Math.random() * 21)]);
  }

  return {
    twentymovies,
  };
};
