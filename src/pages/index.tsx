import axios from "axios";
import data from "../../data.json";
import Starsbackdrop from "@/components/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent";
import { GetStaticProps } from "next";
import { HomePageProps, Movie } from "./interfaces";
import * as Comp from "../components";

const HomePage = ({ ...rest }: HomePageProps) => {
  console.log(rest.movies);
  return (
    <>
      <Comp.MoviesArraysProvider {...rest}>
        <main className={styles.main}>
          <Headercomponent />
          <Comp.Carousel />
          <Comp.MoviePage />
          <Comp.ScrollToTop />
          <Comp.Techonologies />
          <Comp.Footer />
        </main>
      </Comp.MoviesArraysProvider>
      <Starsbackdrop />
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
