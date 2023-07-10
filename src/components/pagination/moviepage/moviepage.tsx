import { useMoviePage } from "./useMoviePage";
import PageNumbers from "../pageNumbers";
import MovieSection from "./moviesection";
import MoviesSectionProvider from "@/context/moviesections/moviesSection";
import { styled } from "../../../../stitches.config";

const MoviePage = () => {
  const { handlers, values } = useMoviePage();
  const AllValues = { ...values, ...handlers };

  const Movies = styled("section", {
    margin: "8rem auto",
    width: "80%",
    "@xs": {
      width: "90%",
    },
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
