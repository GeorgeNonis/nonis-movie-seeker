import { useMoviePage } from "./useMoviePage";
import PageNumbers from "../pageNumbers";
import MovieSection from "./moviesection";
import { styled } from "@stitches/react";
import MoviesSectionProvider from "@/context/moviesections/moviesSection";

const MoviePage = () => {
  const { handlers, values } = useMoviePage();
  const AllValues = { ...values, ...handlers };

  const Movies = styled("section", {
    margin: "5rem auto",
    width: "80%",
  });

  return (
    <MoviesSectionProvider {...AllValues}>
      <Movies>
        <PageNumbers />
        <MovieSection />
        <PageNumbers />
      </Movies>
    </MoviesSectionProvider>
  );
};
export default MoviePage;
