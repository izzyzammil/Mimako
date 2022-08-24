import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialPenawaran.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icBabPenawaran from "../../assets/icons/cloud-penawaran-pasar-big.png";
import icBabPenawaranHover from "../../assets/icons/cloud-penawaran-pasar-hover-big.png";
import icPenawaran1 from "../../assets/icons/penawaran-1.1.png";
import icPenawaran1Hover from "../../assets/icons/penawaran-1.1-hover.png";
import icPenawaran2 from "../../assets/icons/penawaran-2.1.png";
import icPenawaran2Hover from "../../assets/icons/penawaran-2.1-hover.png";
import icPenawaran3 from "../../assets/icons/penawaran-3.1.png";
import icPenawaran3Hover from "../../assets/icons/penawaran-3.1-hover.png";
import icPenawaran4 from "../../assets/icons/penawaran-4.1.png";
import icPenawaran4Hover from "../../assets/icons/penawaran-4.1-hover.png";
import icPenawaran5 from "../../assets/icons/penawaran-5.1.png";
import icPenawaran5Hover from "../../assets/icons/penawaran-5.1-hover.png";
import arrow from "../../assets/icons/Arrow.png";
import Footer from "components/Footer/Footer";

const MaterialPenawaran = () => {
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
              src={icBabPenawaranHover}
              alt="Penawaran Pasar"
            />
            <img
              className={styles["img-depan"]}
              src={icBabPenawaran}
              alt="Penawaran Pasar"
            />
          </div>
        </div>

        <div className={styles["sub-judul"]}>
          <div className={styles["permintaan-satu"]}>
            <Link to="/materialsubpenawaran1">
              <img
                className={styles["img-belakang"]}
                src={icPenawaran1Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPenawaran1}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-dua"]}>
            <Link to="/materialsubpenawaran2">
              <img
                className={styles["img-belakang"]}
                src={icPenawaran2Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPenawaran2}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-tiga"]}>
            <Link to="/materialsubpenawaran3">
              <img
                className={styles["img-belakang"]}
                src={icPenawaran3Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPenawaran3}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-empat"]}>
            <Link to="/materialsubpenawaran4">
              <img
                className={styles["img-belakang"]}
                src={icPenawaran4Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPenawaran4}
                alt="Permintaan Pasar"
              />
            </Link>
          </div>
          <div className={styles["permintaan-lima"]}>
            <Link to="/materialsubpenawaran5">
              <img
                className={styles["img-belakang"]}
                src={icPenawaran5Hover}
                alt="Permintaan Pasar"
              />
              <img
                className={styles["img-depan"]}
                src={icPenawaran5}
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

export default MaterialPenawaran;
