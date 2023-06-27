import { useRef, useContext, useState, useEffect } from "react";
import { MoviesArrays } from "@/context/moviesarrays/moviesArray";

export const useCustomCarousel = () => {
  const { twentymovies } = useContext(MoviesArrays);
  const [translateX, setTranslateX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  // console.log(viewportRef.current?.style.transform);
  // const str = viewportRef.current?.style.transform! ?? "";
  // const matchResult = str.match(/-?\d+/);
  // const number =
  //   matchResult && matchResult.length > 0 ? parseInt(matchResult[0]) : 0;

  const carouselItemWidth = 240;
  const numItems = 20.7;
  const totalWidth = carouselItemWidth * numItems;

  const LeftArrowHandler = () => {
    // if (number > 0) {
    //   return setTranslateX(0);
    // }
    const remaining = totalWidth - viewportRef.current?.offsetWidth!;

    const left = remaining - +translateX.toString().split("-")[1];
    const convertToNumberTranslatex = +translateX.toString().split("-")[1];
    const endpoint = left + convertToNumberTranslatex === remaining;

    if (translateX === 0) return;
    if (endpoint) {
      if (left + convertToNumberTranslatex > remaining) {
        console.log(`adding ${convertToNumberTranslatex}`);
        return setTranslateX(translateX + convertToNumberTranslatex);
      }
      if (240 > convertToNumberTranslatex) {
        return setTranslateX(translateX + convertToNumberTranslatex);
      }
      return setTranslateX(translateX + 240);
    }
    if (remaining) {
      return setTranslateX(translateX + 240);
    }
    if (left < 216) {
      return setTranslateX(translateX + left);
    }
    setTranslateX(translateX + 240);
  };
  // console.log({ number });
  const RightArrowHandler = () => {
    const remaining = totalWidth - viewportRef.current?.offsetWidth!;
    const deadend = +translateX.toString().split("-")[1] >= remaining;
    const left = remaining - +translateX.toString().split("-")[1];
    // const minusToPlus = +number.toString().split("-")[1];
    // console.log({ minusToPlus, remaining, totalWidth, translateX });
    // if (minusToPlus < translateX) {
    //   console.log("here");
    //   const poutsos = -remaining;
    //   console.log({ poutsos });
    //   // console.log({ remaining, totalWidth });
    //   return setTranslateX(-remaining);
    // }

    // console.log({ left, remaining, translateX });
    if (left < 216) {
      return setTranslateX(translateX - left);
    }
    if (deadend) return;
    setTranslateX(translateX - 240);
  };

  const values = {
    twentymovies,
    translateX,
    viewportRef,
    testRef,
  };

  const handlers = {
    LeftArrowHandler,
    RightArrowHandler,
  };

  return {
    values,
    handlers,
  };
};
