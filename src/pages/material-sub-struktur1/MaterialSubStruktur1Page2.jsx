import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubStruktur1Page2.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icBaganPasarSempurna from "../../assets/icons/bagan-pasar-sempurna.png";
import icNext from "../../assets/icons/icon-park_bad-one.png";
import icPrevious from "../../assets/icons/icon-park_arrow-circle-left.png";
import Footer from "components/Footer/Footer";

const MaterialSubStruktur1Page2 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialstruktur">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Struktur Pasar - Pasar Persaingan Sempurna</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["img-bagan"]}>
          <img src={icBaganPasarSempurna} alt="" />
        </div>

        <div className={styles["button"]}>
          <div className={styles["tombol-back"]}>
            <Link to="/materialsubstruktur1page1">
              <img src={icPrevious} alt="tombol back" />
              baca lagi
            </Link>
          </div>
          <div className={styles["tombol-next"]}>
            <Link to="/materialstruktur">
              oke, saya paham
              <img src={icNext} alt="tombol next" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialSubStruktur1Page2;
