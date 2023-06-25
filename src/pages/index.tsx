import Starsbackdrop from "@/components/starsbackdrop/starsbackdrop";
import styles from "../styles/Home.module.css";
import Headercomponent from "@/components/headercomponent/headercomponent";

const HomePage = () => {
  return (
    <>
      <main className={styles.main}>
        <Headercomponent />
      </main>
      <Starsbackdrop />
    </>
  );
};
export default HomePage;
