import { styled } from "@stitches/react";
import { Movie } from "@/pages/interfaces";
import Rating from "../rating/rating";

const TrailerContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  placeContent: "center",
  alignItems: "center",
});

const TrailerLink = styled("a", {
  all: "unset",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "#ff1616",
  borderRadius: "25px",
  paddingBlock: "1rem",
  color: "white",
  textTransform: "uppercase",
  fontSize: "1rem",
  fontWeight: "700",
  transition: "all 250ms ease-in-out",
  "&:hover": {
    transform: "scale(1.08)",
  },
});

const RatingContainer = styled("div", {
  display: "grid",
  placeItems: "center",
  position: "relative",
});

const RatingText = styled("h3", {
  position: "absolute",
});

const Trailer = ({ ...movie }: Movie) => {
  return (
    <TrailerContainer>
      <TrailerLink
        href={`https://www.youtube.com/results?search_query=${movie.title.split(
          "+"
        )}+trailer`}
        target="_blank"
      >
        Watch Trailer
      </TrailerLink>
      <RatingContainer>
        <Rating percentage={String(+movie.rating * 10)} />
        <RatingText>{movie.rating}</RatingText>
      </RatingContainer>
    </TrailerContainer>
  );
};

export default Trailer;
