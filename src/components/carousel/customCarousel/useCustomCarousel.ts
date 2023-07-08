import { useRef, useState } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

export const useCustomCarousel = () => {
  const { twentymovies } = useSelector(({ DATABASE }: IRootState) => DATABASE);
  const [translateX, setTranslateX] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const testRef = useRef<HTMLDivElement>(null);

  const carouselItemWidth = 240;
  const totalItems = 20.7;
  const totalWidth = carouselItemWidth * totalItems;

  const LeftArrowHandler = () => {
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
    const isDeadend = +translateX.toString().split("-")[1] >= remaining;
    const left = remaining - +translateX.toString().split("-")[1];

    if (left < 216) {
      return setTranslateX(translateX - left);
    }
    if (isDeadend) return;
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
