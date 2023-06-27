import { PageNubmersProp } from "./interfaces";
import RightArrows from "./rightarrows";
import LeftArrows from "./leftarrows";
import styles from "./styles.module.scss";

const PageNumbers = ({ ...rest }: PageNubmersProp) => {
  return (
    <div className={styles.pageNumbers}>
      <LeftArrows page={rest.page} />
      {rest.pageNumbers.map((pageNumber) => {
        return (
          <span
            style={rest.enabled(rest.page, pageNumber)}
            key={pageNumber}
            className={styles.page}
            onClick={() => rest.PageHandler(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
      <RightArrows page={rest.page} />
    </div>
  );
};
export default PageNumbers;
