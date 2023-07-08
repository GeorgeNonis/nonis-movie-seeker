import { IRootState } from "@/store";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

export const useLogic = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const moviesToMap = useSelector(
    ({ state }: IRootState) => state.resultMovies
  );
  useEffect(() => {
    console.log(moviesToMap.length);
    if (moviesToMap.length === 0) {
      router.push("/");
    } else {
      containerRef.current!.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return {
    containerRef,
    moviesToMap,
  };
};
