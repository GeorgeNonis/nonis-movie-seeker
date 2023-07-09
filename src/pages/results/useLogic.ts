import { IRootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

export const useLogic = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  const { DATABASE, state } = useSelector((state: IRootState) => state);
  const { resultMovies: moviesToMap } = state;
  const { twentymovies } = DATABASE;

  const [page, setPage] = useState(0);

  const moviesPerPage = 10;
  const totalPages = Math.ceil(moviesToMap.length / moviesPerPage);

  const moviePages = [];
  let startIndex = 0;

  for (let i = 0; i < totalPages; i++) {
    const pageMovies = moviesToMap.slice(
      startIndex,
      startIndex + moviesPerPage
    );
    moviePages.push(pageMovies);
    startIndex += moviesPerPage;
  }

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  const enabled = (pageNumber: number, number: number) => {
    const value =
      pageNumber === number - 1
        ? { backgroundColor: "#b92f2c", color: "white" }
        : undefined;
    return value;
  };

  const PageHandler = (page_number: number) => {
    setPage(page_number - 1);
  };

  const LeftArrowHandler = (pageToTransition: number) => {
    setPage(pageToTransition);
  };
  const RightArrowHandler = (pageToTransition: number) => {
    setPage(pageToTransition);
  };

  useEffect(() => {
    if (twentymovies.length === 0) {
      router.push("/");
    } else {
      containerRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const handlers = {
    PageHandler,
    LeftArrowHandler,
    RightArrowHandler,
    enabled,
  };

  const values = {
    page,
    containerRef,
    moviesToMap,
    moviePages,
    handlers,
    pageNumbers,
  };

  return {
    values,
    handlers,
  };
};
