import axios from "axios";
import Starsbackdrop from "@/components/starsbackdrop/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent/headercomponent";
import { GetStaticPaths, GetStaticProps } from "next";
import { Movie, Movies } from "./interfaces";
import Carousel from "@/components/carousel/carousel";

interface HomePageProps {
  movies: Movie[];
  twentymovies: Movie[];
}

const HomePage = ({ ...rest }: HomePageProps) => {
  console.log({ rest });

  return (
    <>
      <main className={styles.main}>
        <Headercomponent />
        <Carousel {...rest} />
      </main>
      <Starsbackdrop />
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies1.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "8769a608cdmsh896514e83b6b8f6p1f0d3ejsnd53d3144dd92",
      "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
    },
  };
  let movies: any | Movie[] = [];
  let twentymovies: any | Movie[] = [];

  try {
    const response = await axios.request(options);
    movies = [...response.data];

    let i = 0;
    while (i < 20) {
      twentymovies.push(movies[i]);
      i++;
    }
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      movies: [...movies],
      twentymovies: [...twentymovies],
    },
    revalidate: 30,
  };
};

export default HomePage;
