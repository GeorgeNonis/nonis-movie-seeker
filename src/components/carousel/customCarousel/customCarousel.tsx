import { RiArrowRightSLine, RiArrowLeftSLine } from "react-icons/ri";
import Image from "next/image";
import { useCustomCarousel } from "./useCustomCarouel";
import styles from "./styles.module.scss";

const CustomCarousel = () => {
  const {
    twentymovies,
    LeftArrowHandler,
    RightArrowHandler,
    translateX,
    viewportRef,
  } = useCustomCarousel();
  //   console.log({ translateX });
  if (!twentymovies) {
    return <p>Loading...</p>;
  }
  console.log(viewportRef.current?.offsetWidth);
  return (
    <div className={styles.carouseldiv}>
      <div className={styles.carouselbtn} onClick={LeftArrowHandler}>
        <RiArrowLeftSLine className={styles.leftbutton} />
      </div>
      <div className={styles.viewport}>
        <div
          className={styles.carousel}
          ref={viewportRef}
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {twentymovies!.map((movie, index) => {
            return (
              <Image
                key={index}
                width={100}
                height={100}
                className={styles.img}
                src={movie.image[movie.image.length - 1][1]}
                alt={movie.title}
              />
            );
          })}
        </div>
      </div>
      <div className={styles.carouselbtn} onClick={RightArrowHandler}>
        <RiArrowRightSLine className={styles.rightbutton} />
      </div>
    </div>
  );
};
export default CustomCarousel;
