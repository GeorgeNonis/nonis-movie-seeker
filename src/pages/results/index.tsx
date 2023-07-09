import * as Comp from "@/components";
import { styled } from "../../../stitches.config";
import noResult from "/public/no_results.svg";
import Image from "next/image";
import { useLogic } from "./useLogic";
import ResultsSectionProvider from "@/context/results";
import PageNumbersResult from "@/components/pagination/pageNumbersResult/pageNumbers";

const Container = styled("div", {
  width: "80%",
  margin: "5rem auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  placeItems: "center",
});

const Movies = styled("div", {
  margin: "5rem auto",
  width: "80%",
});

const ResultsPage = () => {
  const { values, handlers } = useLogic();
  const allValues = { ...values, ...handlers };
  return (
    <ResultsSectionProvider {...allValues}>
      <Movies>
        <PageNumbersResult />
        <Container ref={values.containerRef}>
          {values.moviesToMap.length === 0 ? (
            <Image src={noResult} alt="no result" height={1000} width={1000} />
          ) : (
            values.moviePages[values.page].map((movie, index) => {
              return <Comp.Movie {...movie} key={index} />;
            })
          )}
        </Container>
        <PageNumbersResult />
      </Movies>
    </ResultsSectionProvider>
  );
};

export const getStaticProps = async () => {
  return {
    props: {},
    revalidate: 60,
  };
};

export default ResultsPage;
