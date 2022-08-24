import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialPermintaan.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icBabPermintaan from "../../assets/icons/cloud-permintaan-pasar-big.png";
import icBabPermintaanHover from "../../assets/icons/cloud-permintaan-pasar-hover-big.png";
import icPermintaan1 from "../../assets/icons/permintaan-1.1.png";
import icPermintaan1Hover from "../../assets/icons/permintaan-1.1-hover.png";
import icPermintaan2 from "../../assets/icons/permintaan-2.1.png";
import icPermintaan2Hover from "../../assets/icons/permintaan-2.1-hover.png";
import icPermintaan3 from "../../assets/icons/permintaan-3.1.png";
import icPermintaan3Hover from "../../assets/icons/permintaan-3.1-hover.png";
import icPermintaan4 from "../../assets/icons/permintaan-4.1.png";
import icPermintaan4Hover from "../../assets/icons/permintaan-4.1-hover.png";
import icPermintaan5 from "../../assets/icons/permintaan-5.1.png";
import icPermintaan5Hover from "../../assets/icons/permintaan-5.1-hover.png";
import arrow from "../../assets/icons/Arrow.png";
import Footer from "components/Footer/Footer";

const MaterialPermintaan = () => {
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
              src={icBabPermintaanHover}
              alt="Permintaan Pasar"
            />
            <img
              className={styles["img-depan"]}
              src={icBabPermintaan}
              alt="Permintaan Pasar"
            />
          </div>
        </div>

        <div className={styles["sub-judul"]}>
          <div className={styles["permintaan-satu"]}>
            <Link to="/materialsubpermintaan1">
              <img
                className={styles["img-belakang"]}
                src={icPermintaan1Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPermintaan1}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-dua"]}>
            <Link to="/materialsubpermintaan2">
              <img
                className={styles["img-belakang"]}
                src={icPermintaan2Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPermintaan2}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-tiga"]}>
            <Link to="/materialsubpermintaan3">
              <img
                className={styles["img-belakang"]}
                src={icPermintaan3Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPermintaan3}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-empat"]}>
            <Link to="/materialsubpermintaan4">
              <img
                className={styles["img-belakang"]}
                src={icPermintaan4Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPermintaan4}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-lima"]}>
            <Link to="/materialsubpermintaan5">
              <img
                className={styles["img-belakang"]}
                src={icPermintaan5Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPermintaan5}
                alt="Permintaan Pasar"
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
          <div className={styles["arrow-empat"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-lima"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialPermintaan;
