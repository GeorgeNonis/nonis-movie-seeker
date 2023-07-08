import * as Comp from "@/components";
import { styled } from "../../../stitches.config";
import noResult from "/public/no_results.svg";
import Image from "next/image";
import { useLogic } from "./useLogic";

const Container = styled("div", {
  width: "80%",
  margin: "5rem auto",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2rem",
  placeItems: "center",
});

const ResultsPage = () => {
  const { containerRef, moviesToMap } = useLogic();
  return (
    <Container ref={containerRef}>
      {moviesToMap.length === 0 ? (
        <Image src={noResult} alt="no result" height={1000} width={1000} />
      ) : (
        moviesToMap.map((movie, index) => {
          return <Comp.Movie {...movie} key={index} />;
        })
      )}
    </Container>
  );
};
export default ResultsPage;
