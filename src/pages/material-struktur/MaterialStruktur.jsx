import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialStruktur.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icBabStruktur from "../../assets/icons/cloud-struktur-pasar-big.png";
import icBabStrukturHover from "../../assets/icons/cloud-struktur-pasar-hover-big.png";
import icStruktur1 from "../../assets/icons/struktur-1.1.png";
import icStruktur1Hover from "../../assets/icons/struktur-1.1-hover.png";
import icStruktur2 from "../../assets/icons/struktur-2.1.png";
import icStruktur2Hover from "../../assets/icons/struktur-2.1-hover.png";
import arrow from "../../assets/icons/Arrow.png";
import Footer from "components/Footer/Footer";

const MaterialStruktur = () => {
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
              src={icBabStrukturHover}
              alt="Struktur Pasar"
            />
            <img
              className={styles["img-depan"]}
              src={icBabStruktur}
              alt="Struktur Pasar"
            />
          </div>
        </div>

        <div className={styles["sub-judul"]}>
          <div className={styles["permintaan-satu"]}>
            <Link to="/materialsubstruktur1page1">
              <img
                className={styles["img-belakang"]}
                src={icStruktur1Hover}
                alt="Struktur Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icStruktur1}
                alt="Struktur Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-dua"]}>
            <Link to="/materialsubstruktur2page1">
              <img
                className={styles["img-belakang"]}
                src={icStruktur2Hover}
                alt="Struktur Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icStruktur2}
                alt="Struktur Pasar"
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
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialStruktur;
