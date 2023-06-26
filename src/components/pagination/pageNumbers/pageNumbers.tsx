import styles from "./styles.module.scss";

interface PageNubmersProp {
  PageHandler: (page_number: number) => void;
  pageNumbers: number[];
}

const PageNumbers = ({ pageNumbers, PageHandler }: PageNubmersProp) => {
  return (
    <div className={styles.pageNumbers}>
      {pageNumbers.map((pageNumber) => {
        return (
          <span
            key={pageNumber}
            className={styles.page}
            onClick={() => PageHandler(pageNumber)}
          >
            {pageNumber}
          </span>
        );
      })}
    </div>
  );
};
export default PageNumbers;
