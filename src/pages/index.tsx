import data from "../../data.json";
import styles from "../styles/Home.module.css";
import { GetStaticProps } from "next";
import { HomePageProps, Movie } from "./interfaces";
import * as Comp from "../components";
import { useHomePage } from "./hooks/useHomePage";
import Head from "next/head";

const HomePage = ({ ...rest }: HomePageProps) => {
  useHomePage({ ...rest });
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Web app to search movies from top 100 of IMDB"
        />
        <title>Nonis - Movie Seeker</title>
      </Head>
      <main className={styles.main}>
        <Comp.MoviePage />
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  let twentymovies: any | Movie[] = [];

  const chunkSize = 10;
  const dividedArray = [];

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    dividedArray.push(chunk);
  }

  console.log(dividedArray);

  let i = 0;
  while (i < 20) {
    twentymovies.push(data[i]);
    i++;
  }
  return {
    props: {
      movies: [...dividedArray],
      twentymovies: [...twentymovies],
    },
    revalidate: 30,
  };
};

export default HomePage;
