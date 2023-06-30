import axios from "axios";
import data from "../../data.json";
import Starsbackdrop from "@/components/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent";
import { GetStaticProps } from "next";
import { useEffect } from "react";
import { HomePageProps, Movie } from "./interfaces";
import * as Comp from "../components";
import { useHomePage } from "./hooks/useHomePage";

const HomePage = ({ ...rest }: HomePageProps) => {
  useHomePage();
  return (
    <>
      <Comp.MoviesArraysProvider {...rest}>
        <main className={styles.main}>
          {/* <Modal>
            <Comp.Settings />
          </Modal> */}
          <Comp.Modal>
            <Comp.MovieModal />
          </Comp.Modal>
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
