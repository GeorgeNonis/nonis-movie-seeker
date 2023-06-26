import axios from "axios";
// import { writeFile } from "fs/promises";
// import { cwd } from "process";
// import { writeFileSync } from "fs";
// import path from "path";
import data from "../../data.json";
import Starsbackdrop from "@/components/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent";
import { GetStaticPaths, GetStaticProps } from "next";
import { Movie, Movies } from "./interfaces";
import Carousel from "@/components/carousel";
import ScrollToTop from "@/components/scrollToTop";

interface HomePageProps {
  movies: Movie[];
  twentymovies: Movie[];
}
const HomePage = ({ ...rest }: HomePageProps) => {
  return (
    <>
      <main className={styles.main}>
        <Headercomponent />
        <Carousel {...rest} />
        <ScrollToTop />
      </main>
      <Starsbackdrop />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  // console.log({ data });
  // const axios = require("axios");
  // const options = {
  //   method: "GET",
  //   url: "https://imdb-top-100-movies.p.rapidapi.com/",
  //   headers: {
  //     "X-RapidAPI-Key": "8769a608cdmsh896514e83b6b8f6p1f0d3ejsnd53d3144dd92",
  //     "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
  //   },
  // };
  // let movies: any | Movie[] = [];
  let twentymovies: any | Movie[] = [];

  let i = 0;
  while (i < 20) {
    twentymovies.push(data[i]);
    i++;
  }

  // try {
  //   const response = await axios.request(options);
  //   movies = [...response.data];
  //   // writeFile(filePath, movies);
  //   // console.log(response.data);
  //   let i = 0;
  //   while (i < 20) {
  //     twentymovies.push(movies[i]);
  //     i++;
  //   }
  // } catch (error) {
  //   console.error(error);
  // }
  return {
    props: {
      movies: [...data],
      twentymovies: [...twentymovies],
    },
    revalidate: 30,
  };
};

export default HomePage;
