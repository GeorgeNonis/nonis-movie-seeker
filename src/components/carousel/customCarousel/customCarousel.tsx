import { useCustomCarousel } from "./useCustomCarousel";
import Img from "./img/img";
import { styled } from "../../../../stitches.config";
import CarouselArrow from "@/components/Molecules/carouselArrow";

const CarouselContainer = styled("div", {
  margin: "5rem auto",
  width: "80%",
  display: "grid",
  placeItems: "center",
  gridTemplateColumns: "1fr 10fr 1fr",
});

const Viewport = styled("div", {
  overflow: "hidden",
  width: "100%",
});

const Carousel = styled("div", {
  width: "100%",
  height: "20rem",
  display: "flex",
  gap: "2rem",
  transition: "all 500ms ease-in-out",
});
const CustomCarousel = () => {
  const { handlers, values } = useCustomCarousel();

  if (!values.twentymovies) {
    return <p>Loading...</p>;
  }
  return (
    <CarouselContainer>
      <CarouselArrow
        isLeft={true}
        onClick={() => handlers.LeftArrowHandler()}
      />
      <Viewport>
        <Carousel
          ref={values.viewportRef}
          style={{ transform: `translateX(${values.translateX}px)` }}
        >
          {values.twentymovies!.map((movie, index) => {
            return <Img {...movie} key={index} />;
          })}
        </Carousel>
      </Viewport>
      <CarouselArrow
        onClick={() => handlers.RightArrowHandler()}
        isLeft={false}
      />
    </CarouselContainer>
  );
};
export default CustomCarousel;
