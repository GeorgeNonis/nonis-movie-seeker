import * as Comp from "@/components";
import { useLibraryMovies } from "./useLibraryMovies";
import Head from "next/head";
import { styled } from "../../../../../stitches.config";

const Container = styled("div", {
  width: "80%",
  margin: "5rem auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  placeItems: "center",
});

const LibraryMovies = () => {
  const { moviesToMap } = useLibraryMovies();
  return (
    <>
      <Head>
        <meta
          name="My Library"
          content="My Library - a place where you can check your watched and movies you have place in queue"
        />
        <title>My Library</title>
      </Head>
      <Container>
        {moviesToMap.map((movie, index) => {
          return <Comp.Movie {...movie} key={index} />;
        })}
      </Container>
    </>
  );
};
export default LibraryMovies;
