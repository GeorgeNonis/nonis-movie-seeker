import { styled } from "@stitches/react";
import { Movie } from "@/interfaces";

const DetailsContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  marginBlock: "2rem",
  placeItems: "center",
  fontWeight: "800",
  width: "100%",
});

const Genre = styled("span", {
  color: "#b92f2c",
  whiteSpace: "nowrap",
});

const Details = ({ ...movie }: Movie) => {
  return (
    <DetailsContainer>
      <span>{movie.year}</span>
      <span>No {movie.rank}</span>
      <Genre>{movie.genre.join(" | ")}</Genre>
    </DetailsContainer>
  );
};

export default Details;
