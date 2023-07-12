import * as Comp from "@/components";
import { useLibraryMovies } from "./useLibraryMovies";
import Head from "next/head";
import { styled } from "../../../../../stitches.config";
import Image from "next/image";
import noMovies from "/public/nomovies.png";

const Container = styled("div", {
  width: "80%",
  margin: "8rem auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  placeItems: "center",
  "@xs": {
    width: "90%",
    gridTemplateColumns: "1fr",
  },
});

const NoMoviesImg = styled(Image, {
  marginInline: "auto",
  display: "inherit",
  width: "40rem",
  height: "40rem",
});

const LibraryMovies = () => {
  const { moviesToMap, containerRef } = useLibraryMovies();
  return (
    <>
      <Head>
        <meta
          name="My Library"
          content="My Library - a place where you can check your watched and movies you have place in queue"
        />
        <title>My Library</title>
      </Head>

      {moviesToMap.length !== 0 ? (
        <Container ref={containerRef}>
          {moviesToMap.map((movie, index) => {
            return <Comp.Movie {...movie} key={index} />;
          })}
        </Container>
      ) : (
        <NoMoviesImg
          ref={containerRef}
          src={noMovies}
          alt="no movies"
          width={1000}
          height={1000}
        />
      )}
    </>
  );
};
export default LibraryMovies;
