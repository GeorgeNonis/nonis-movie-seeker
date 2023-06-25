import { CiSearch } from "react-icons/ci";
import styles from "./styles.module.scss";

const SearchDiv = () => {
  return (
    <div className={styles.searchdiv}>
      <input type="text" className={styles.searchinput} />
      <CiSearch className={styles.searchbutton} />
    </div>
  );
};
export default SearchDiv;
