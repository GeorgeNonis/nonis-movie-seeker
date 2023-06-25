import Image from "next/image";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useCarouselDiv } from "./useCarouselDiv";
import { MoviesContext } from "../carousel";
import { useContext } from "react";
import { Movie, Movies } from "@/pages/interfaces";

const CarouselDiv = () => {
  //   const { twentymovies } = useCarouselDiv();
  //   console.log(twentymovies.length);
  //   console.log(twentymovies[1]);
  const TEST = useContext(MoviesContext);
  //   console.log({ TEST });
  const twentymovies: Movie[] = [];
  let i = 0;
  while (i < 20) {
    twentymovies.push(TEST[Math.floor(Math.random() * 21)]);
    i++;
  }
  console.log({ twentymovies });
  return (
    // <h1>s</h1>
    <Carousel>
      {twentymovies.map((movie, index) => {
        return (
          <Image
            key={i}
            src={movie.image[movie.image.length - 1][1]}
            alt={movie.title}
            width={100}
            height={100}
          />
        );
      })}
    </Carousel>
  );
};
export default CarouselDiv;
