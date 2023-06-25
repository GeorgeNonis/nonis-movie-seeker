import { createContext, useContext } from "react";
import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import styles from "./styles.module.scss";
import CarouselDiv from "./carouseldiv/carouseldiv";
import { Movie, Movies } from "@/pages/interfaces";

export const MoviesContext = createContext<Movie[]>([]);

const Carousel = ({ movies }: Movies) => {
  return (
    <section className={styles.carouseldiv}>
      <div className={styles.carouselbtn}>
        <RiArrowLeftSLine className={styles.leftbutton} />
      </div>
      <div className={styles.carousel}>
        <MoviesContext.Provider value={movies}>
          <CarouselDiv />
        </MoviesContext.Provider>
      </div>
      <div className={styles.carouselbtn}>
        <RiArrowRightSLine className={styles.rightbutton} />
      </div>
    </section>
  );
};
export default Carousel;
