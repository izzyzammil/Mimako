import React from "react";
import { Link } from "react-router-dom";

import styles from "./Material.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icKD34 from "../../assets/icons/cloud-KD-34.png";
import icKD34Hover from "../../assets/icons/cloud-KD-34-hover.png";
import icBabPermintaan from "../../assets/icons/cloud-permintaan-pasar.png";
import icBabPermintaanHover from "../../assets/icons/cloud-permintaan-pasar-hover.png";
import icBabPenawaran from "../../assets/icons/cloud-penawaran-pasar.png";
import icBabPenawaranHover from "../../assets/icons/cloud-penawaran-pasar-hover.png";
import icBabKeseimbangan from "../../assets/icons/cloud-keseimbangan-pasar-fix.png";
import icBabKeseimbanganHover from "../../assets/icons/cloud-keseimbangan-pasar-hover.png";
import icBabStruktur from "../../assets/icons/cloud-struktur-pasar.png";
import icBabStrukturHover from "../../assets/icons/cloud-struktur-pasar-hover.png";
import arrow from "../../assets/icons/Arrow.png";
import Footer from "components/Footer/Footer";

const Material = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
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
              src={icKD34Hover}
              alt="KD 3.4"
            />
            <img className={styles["img-depan"]} src={icKD34} alt="KD 3.4" />
          </div>
        </div>

        <div className={styles["sub-bab"]}>
          <div className={styles["bab-permintaan"]}>
            <Link to="/materialpermintaan">
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
            </Link>
          </div>
          <div className={styles["bab-penawaran"]}>
            <Link to="/materialpenawaran">
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
            </Link>
          </div>
          <div className={styles["bab-keseimbangan"]}>
            <Link to="/materialkeseimbangan">
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
            </Link>
          </div>
          <div className={styles["bab-struktur"]}>
            <Link to="/materialstruktur">
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
            </Link>
          </div>
        </div>

        <div className={styles["arrows"]}>
          <div className={styles["arrow-permintaan"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-penawaran"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-keseimbangan"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
          <div className={styles["arrow-struktur"]}>
            <img src={arrow} alt="Tanda Panah" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Material;
