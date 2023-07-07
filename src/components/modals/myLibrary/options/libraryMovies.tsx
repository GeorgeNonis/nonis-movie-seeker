import * as Comp from "@/components";
import { useLibraryMovies } from "./useLibraryMovies";
import styles from "./styles.module.scss";
import Head from "next/head";

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
      <div className={styles.librarySectionMovies}>
        {moviesToMap.map((movie, index) => {
          return <Comp.Movie {...movie} key={index} />;
        })}
      </div>
    </>
  );
};
export default LibraryMovies;
