import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";
import { useCustomCarousel } from "./useCustomCarouel";
import styles from "./styles.module.scss";
import Img from "./img/img";

const CustomCarousel = () => {
  const { handlers, values } = useCustomCarousel();

  if (!values.twentymovies) {
    return <p>Loading...</p>;
  }
  return (
    <div className={styles.carouseldiv}>
      <div
        className={styles.carouselbtnleft}
        onClick={handlers.LeftArrowHandler}
      >
        <RiArrowLeftSLine className={styles.leftbutton} />
      </div>
      <div className={styles.viewport}>
        <div
          className={styles.carousel}
          ref={values.viewportRef}
          style={{ transform: `translateX(${values.translateX}px)` }}
        >
          {values.twentymovies!.map((movie, index) => {
            return (
              <Img {...movie} key={index} />
              //   <Image
              //     key={index}
              //     width={100}
              //     height={100}
              //     className={styles.img}
              //     src={movie.image[movie.image.length - 1][1]}
              //     alt={movie.title}
              //   />
            );
          })}
        </div>
      </div>
      <div
        className={styles.carouselbtnright}
        onClick={handlers.RightArrowHandler}
      >
        <RiArrowRightSLine className={styles.rightbutton} />
      </div>
    </div>
  );
};
export default CustomCarousel;
