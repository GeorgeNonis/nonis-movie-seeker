import { useRef, useContext, useState, useEffect } from "react";
import { MoviesContext } from "../carousel";

export const useCustomCarousel = () => {
  const { twentymovies } = useContext(MoviesContext);
  const [translateX, setTranslateX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);

  const carouselItemWidth = 240;
  const numItems = 20.7;
  const totalWidth = carouselItemWidth * numItems;

  const LeftArrowHandler = () => {
    const remaining = totalWidth - viewportRef.current?.offsetWidth!;

    const left = remaining - +translateX.toString().split("-")[1];
    console.log({ left, remaining, translateX });
    if (translateX === 0) return;
    if (left < 216) {
      return setTranslateX(translateX + left);
    }
    setTranslateX(translateX + 240);
  };

  const RightArrowHandler = () => {
    const remaining = totalWidth - viewportRef.current?.offsetWidth!;

    const deadend = +translateX.toString().split("-")[1] >= remaining;
    const left = remaining - +translateX.toString().split("-")[1];
    if (left < 216) {
      return setTranslateX(translateX - left);
    }
    if (deadend) return;
    setTranslateX(translateX - 240);
  };

  return {
    twentymovies,
    LeftArrowHandler,
    RightArrowHandler,
    translateX,
    viewportRef,
  };
};
