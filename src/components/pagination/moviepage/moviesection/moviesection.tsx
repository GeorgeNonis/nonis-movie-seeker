import { styled } from "@stitches/react";
import { useContext } from "react";
import Movie from "../../movie";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import LoadingSpinner from "@/components/laoadingspinner/loadingspinner";

const Section = styled("div", {
  width: "100%",
  margin: "5rem auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  placeItems: "center",
});

const MovieSection = () => {
  const { movies } = useSelector((state: IRootState) => state.DATABASE);
  const { page } = useContext(MoviesSection);

  if (!movies || !movies[page]) {
    return <LoadingSpinner />;
  }

  return (
    <Section>
      {movies[page].map((movie, index) => {
        return <Movie {...movie} key={index} />;
      })}
    </Section>
  );
};
export default MovieSection;
