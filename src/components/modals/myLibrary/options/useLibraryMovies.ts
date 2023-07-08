import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

export const useLibraryMovies = () => {
  const router = useRouter();
  const containerRef = useRef<HTMLInputElement>(null);
  const { DATABASE, state } = useSelector((state: IRootState) => state);
  const { watched } = state;
  const { queued, watched: watchedMovies, twentymovies } = DATABASE;
  const moviesToMap = watched ? watchedMovies : queued;
  useEffect(() => {
    if (twentymovies.length === 0) {
      router.push("/");
    } else {
      containerRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, []);
  return {
    moviesToMap,
    containerRef,
  };
};
