import styles from "./styles.module.scss";
import { styled } from "@stitches/react";
import { IRootState } from "@/store";
import { useSelector } from "react-redux";
import Image from "next/image";
import Details from "./details";
import Actions from "./actions/actions";
import Trailer from "./trailer/trailer";

const MovieContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "5fr 4fr",
  placeItems: "center",
  width: "100%",
  height: "100%",
  color: "black",
  background: "white",
});

const MovieDetails = styled("div", {
  border: "none",
  width: "100%",
  height: "80%",
  display: "grid",
  gap: "1rem",
  justifyItems: "baseline",
  paddingRight: "2rem",
});

const MovieTitle = styled("h1", {
  fontSize: "23px",
  textTransform: "uppercase",
  fontWeight: "100",
});

const Movie = () => {
  const { movie, movieModal } = useSelector((state: IRootState) => state.state);
  if (!movieModal) return null;

  return (
    <MovieContainer>
      <Image
        className={styles.img}
        width={500}
        height={500}
        src={movie.image[movie.image.length - 1][1]}
        alt={movie.title}
      />
      <MovieDetails>
        <MovieTitle>{movie.title}</MovieTitle>
        <p>{movie.description}</p>
        <Trailer {...movie} />
        <Details {...movie} />
        <Actions {...movie} />
      </MovieDetails>
    </MovieContainer>
  );
};

export default Movie;
