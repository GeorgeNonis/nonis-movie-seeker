import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import * as Comp from "../index";
import { Paragraph, Title } from "@/components/Atoms";
import { styled } from "../../../../../stitches.config";

const MovieContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "5fr 4fr",
  placeItems: "center",
  width: "100%",
  height: "100%",
  color: "black",
  background: "white",

  "@xs": {
    gridTemplateColumns: "1fr",
    marginBottom: "2rem",
    height: "unset",
  },
});

const MovieDetails = styled("div", {
  border: "none",
  width: "100%",
  height: "80%",
  display: "grid",
  gap: "1rem",
  justifyItems: "baseline",
  paddingRight: "2rem",
  "@xs": {
    paddingRight: "0",
    placeItems: "center",
    height: "unset",
  },
});

const MovieImage = styled(Image, {
  width: "80%",
  height: "80%",
});

const Movie = () => {
  const { movie, movieModal } = useSelector((state: IRootState) => state.state);
  if (!movieModal) return null;

  return (
    <MovieContainer>
      <MovieImage
        width={500}
        height={500}
        src={movie.image[movie.image.length - 1][1]}
        alt={movie.title}
      />
      <MovieDetails>
        <Title
          fontSize={"4"}
          textTransform={"uppercase"}
          fontWeight={"light"}
          colors={"black"}
        >
          {movie.title}
        </Title>

        <Paragraph colors="black">{movie.description}</Paragraph>
        <Comp.Trailer {...movie} />
        <Comp.Details {...movie} />
        <Comp.Actions {...movie} />
      </MovieDetails>
    </MovieContainer>
  );
};

export default Movie;
