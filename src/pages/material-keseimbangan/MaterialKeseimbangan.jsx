import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialKeseimbangan.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icBabKeseimbangan from "../../assets/icons/cloud-keseimbangan-pasar-big.png";
import icBabKeseimbanganHover from "../../assets/icons/cloud-keseimbangan-pasar-hover-big.png";
import icKeseimbangan1 from "../../assets/icons/keseimbangan-1.1.png";
import icKeseimbangan1Hover from "../../assets/icons/keseimbangan-1.1-hover.png";
import icKeseimbangan2 from "../../assets/icons/keseimbangan-2.1.png";
import icKeseimbangan2Hover from "../../assets/icons/keseimbangan-2.1-hover.png";
import icKeseimbangan3 from "../../assets/icons/keseimbangan-3.1.png";
import icKeseimbangan3Hover from "../../assets/icons/keseimbangan-3.1-hover.png";
import arrow from "../../assets/icons/Arrow.png";
import Footer from "components/Footer/Footer";

const MaterialKeseimbangan = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/material">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Materi Belajar - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div>
          <div className={styles["judul-bab"]}>
            <img
              className={styles["img-belakang"]}
              src={icBabKeseimbanganHover}
              alt="Keseimbangan Pasar"
            />
            <img
              className={styles["img-depan"]}
              src={icBabKeseimbangan}
              alt="Keseimbangan Pasar"
            />
          </div>
        </div>

        <div className={styles["sub-judul"]}>
          <div className={styles["permintaan-satu"]}>
            <Link to="/materialsubkeseimbangan1">
              <img
                className={styles["img-belakang"]}
                src={icKeseimbangan1Hover}
                alt="Keseimbangan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icKeseimbangan1}
                alt="Keseimbangan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-dua"]}>
            <Link to="/materialsubkeseimbangan2">
              <img
                className={styles["img-belakang"]}
                src={icKeseimbangan2Hover}
                alt="Keseimbangan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icKeseimbangan2}
                alt="Keseimbangan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-tiga"]}>
            <Link to="/materialsubkeseimbangan3">
              <img
                className={styles["img-belakang"]}
                src={icKeseimbangan3Hover}
                alt="Keseimbangan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icKeseimbangan3}
                alt="Keseimbangan Pasar"
              />
            </Link>
          </div>
        </div>

        <div className={styles["arrows"]}>
          <div className={styles["arrow-satu"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-dua"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-tiga"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MaterialKeseimbangan;
