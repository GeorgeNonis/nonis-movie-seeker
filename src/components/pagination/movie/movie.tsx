import { styled } from "@stitches/react";
import Image from "next/image";
import { MovieProps } from "./interfaces";
import { useMovie } from "./useMovie";
import { Title } from "@/components/Atoms";
import { useRouter } from "next/router";
import LoadingSpinner from "@/components/laoadingspinner/loadingspinner";

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

const MovieGenreYear = styled("h3", {
  fontSize: "0.8rem",
  fontWeight: "100",
  textTransform: "uppercase",
  color: "red",
});

const Movie = ({ ...rest }: MovieProps) => {
  const { ModalHandler } = useMovie({ ...rest });

  if (!rest || !rest.image || rest.image.length === 0) {
    return <LoadingSpinner />;
  }

  return (
    <MovieContainer onClick={() => ModalHandler({ ...rest })}>
      <MovieImage
        width={100}
        height={100}
        alt={rest.title}
        src={rest.image[rest.image.length - 1][1]}
      />
      <Title fontWeight={"light"}>
        {rest.title} | {rest.rating}
      </Title>
      <MovieGenreYear>
        {rest.genre} | {rest.year}
      </MovieGenreYear>
    </MovieContainer>
  );
};

export default Movie;
