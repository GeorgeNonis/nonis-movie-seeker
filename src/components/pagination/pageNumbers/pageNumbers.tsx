import { PageNubmersProp } from "./interfaces";
import RightArrows from "./rightarrows";
import LeftArrows from "./leftarrows";
import styles from "./styles.module.scss";
import { MoviesSection } from "@/context/moviesections/moviesSection";
import { useContext } from "react";

const PageNumbers = () => {
  const { enabled, page, pageNumbers, PageHandler } = useContext(MoviesSection);
  return (
    <div className={styles.pageNumbers}>
      <LeftArrows />
      {pageNumbers.map((pageNumber) => {
        return (
          <span
            style={enabled(page, pageNumber)}
            key={pageNumber}
            className={styles.page}
            onClick={() => PageHandler(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
      <RightArrows />
    </div>
  );
};
export default PageNumbers;
