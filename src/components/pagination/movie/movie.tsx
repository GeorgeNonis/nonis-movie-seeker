import { styled } from "@stitches/react";
import Image from "next/image";
import { MovieProps } from "./interfaces";
import { useMovie } from "./useMovie";

const MovieContainer = styled("div", {
  cursor: "pointer",
  display: "grid",
  gap: "0.7rem",
  placeItems: "center",
  width: "100%",
  height: "100%",
  padding: "1.5rem 0.5rem",
  borderRadius: "10px",
  background: "rgb(88 88 88 / 19%)",
  transition: "all 200ms ease-in-out",
  "&:hover": {
    transform: "scale(1.07)",
    backgroundColor: "rgb(30 30 30 / 76%)",
  },
});

const MovieImage = styled(Image, {
  height: "400px",
  width: "100%",
  objectFit: "contain",
});

const MovieTitleWriters = styled("h3", {
  textTransform: "uppercase",
  color: "white",
  fontWeight: "100",
  fontSize: "0.8rem",
});

const MovieGenreYear = styled("h3", {
  fontSize: "0.8rem",
  fontWeight: "100",
  textTransform: "uppercase",
  color: "red",
});

const Movie = ({ ...rest }: MovieProps) => {
  const { ModalHandler } = useMovie();
  return (
    <MovieContainer onClick={() => ModalHandler({ ...rest })}>
      <MovieImage
        width={100}
        height={100}
        alt={rest.title}
        src={rest.image[rest.image.length - 1][1]}
      />
      <MovieTitleWriters>
        {rest.title} | {rest.rating}
      </MovieTitleWriters>
      <MovieGenreYear>
        {rest.genre} | {rest.year}
      </MovieGenreYear>
    </MovieContainer>
  );
};

export default Movie;
