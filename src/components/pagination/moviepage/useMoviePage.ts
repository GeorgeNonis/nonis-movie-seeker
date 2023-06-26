import { MoviesArrays } from "@/context/moviesArray";
import { useContext } from "react";
import { Movie } from "@/pages/interfaces";
import { useState } from "react";

export const useMoviePage = () => {
  const { movies } = useContext(MoviesArrays);
  const [page, setPage] = useState(1);

  const totalPages = movies.length;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const PageHandler = (page_number: number) => {
    setPage(page_number - 1);
  };

  const values = {
    page,
    pageNumbers,
  };

  const handlers = {
    PageHandler,
  };

  return { values, handlers };
};
