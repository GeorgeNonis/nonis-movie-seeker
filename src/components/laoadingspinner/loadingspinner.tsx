import React from "react";
import styles from "./styles.module.scss";

const LoadingSpinner = () => {
  return (
    <div className={styles.spinner}>
      <div className={styles.spiner}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoadingSpinner;
