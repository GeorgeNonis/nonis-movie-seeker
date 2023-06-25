import axios from "axios";
import Starsbackdrop from "@/components/starsbackdrop/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent/headercomponent";
import { GetStaticPaths, GetStaticProps } from "next";
import { Movies } from "./interfaces";
import Carousel from "@/components/carousel/carousel";

const HomePage = ({ ...rest }: Movies) => {
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
  console.log("isnide path");
  const axios = require("axios");

  const options = {
    method: "GET",
    url: "https://imdb-top-100-movies1.p.rapidapi.com/",
    headers: {
      "X-RapidAPI-Key": "8769a608cdmsh896514e83b6b8f6p1f0d3ejsnd53d3144dd92",
      "X-RapidAPI-Host": "imdb-top-100-movies1.p.rapidapi.com",
    },
  };
  let movies: any | Movies = [];
  try {
    const response = await axios.request(options);
    movies = [...response.data];
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
  return {
    props: {
      movies: [...movies],
    },
    revalidate: 30,
  };
};

export default HomePage;
