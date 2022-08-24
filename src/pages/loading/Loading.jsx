import React from "react";
import { Link } from "react-router-dom";

import styles from "./Loading.module.css";

const Loading = () => {
  return (
    <div>
      <div className={styles["image-bg"]}>
        <div className={styles["button"]}>
          <div className={styles["tombol-lanjut"]}>
            <Link to="/home">{`Next >>>`}</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
