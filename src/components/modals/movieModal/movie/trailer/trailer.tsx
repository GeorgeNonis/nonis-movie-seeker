import { Movie } from "@/interfaces";
import Rating from "../rating/rating";
import { styled } from "../../../../../../stitches.config";

const TrailerContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  width: "100%",
  placeContent: "center",
  alignItems: "center",
  "@xs": {
    fontSize: "$7",
    padding: "0 1rem",
  },
});

const TrailerLink = styled("a", {
  all: "unset",
  cursor: "pointer",
  textAlign: "center",
  backgroundColor: "$brightRed",
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
  "@sm": {
    fontSize: "$7",
    fontWeight: "$light",
  },
  "@xs": {
    fontSize: "$7",
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
