import useHeaderComponent from "./useHeaderComponent";
import axios from "axios";
import * as Comp from "../index";
import styles from "./styles.module.scss";
import { GetStaticPaths, GetStaticProps } from "next";

const Headercomponent = () => {
  return (
    <header className={styles.header}>
      <div className={styles.firstrow}>
        <div className={styles.tools}>
          <Comp.SearchDiv />
          <Comp.Links />
        </div>
        <div className={styles.library}></div>
      </div>
      <div className={styles.secondrow}>
        <Comp.Logo />
        <Comp.SwitchButton />
      </div>
    </header>
  );
};

export default Headercomponent;
