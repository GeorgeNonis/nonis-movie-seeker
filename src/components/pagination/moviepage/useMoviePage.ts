import { MoviesArrays } from "@/context/moviesarrays/moviesArray";
import { useContext } from "react";
import { useState } from "react";

export const useMoviePage = () => {
  const { movies } = useContext(MoviesArrays);
  const [page, setPage] = useState(0);

  const enabled = (pageNumber: number, number: number) => {
    const value =
      pageNumber === number - 1
        ? { backgroundColor: "#b92f2c", color: "white" }
        : undefined;
    return value;
  };

  const totalPages = movies.length;

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const PageHandler = (page_number: number) => {
    setPage(page_number - 1);
  };

  const LeftArrowHandler = (pageToTransition: number) => {
    setPage(pageToTransition);
  };
  const RightArrowHandler = (pageToTransition: number) => {
    setPage(pageToTransition);
  };

  const values = {
    page,
    pageNumbers,
  };

  const handlers = {
    PageHandler,
    enabled,
    LeftArrowHandler,
    RightArrowHandler,
  };

  return { values, handlers };
};
