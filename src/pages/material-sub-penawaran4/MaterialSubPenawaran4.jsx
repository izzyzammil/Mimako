import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPenawaran4.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPenawaran4 from "../../assets/icons/penawaran-isi4.png";
import icQuotePenawaran41 from "../../assets/icons/img-penawaran-isi4-1.png";
import icQuotePenawaran42 from "../../assets/icons/img-penawaran-isi4-2.png";
import icQuotePenawaran43 from "../../assets/icons/img-penawaran-isi4-3.png";
import icQuotePenawaran44 from "../../assets/icons/img-penawaran-isi4-4.png";
import icArrow from "../../assets/icons/arrows-big.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPenawaran4 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpenawaran">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Penawaran Pasar - Fungsi Penawaran</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPenawaran4}
              alt="Pengertian Penawaran"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Fungsi Penawaran</h2>
              <div className={styles["materi"]}>
                Selaras dengan hukum penawarannya, fungsi penawaran mewakili
                proyeksi kondisi dengan situasi ketika harga naik akan
                meningkatkan jumlah barang yang ditawarkan. Begitu pula ketika
                terjadi penurunan harga. Maka pada fungsi penawaran ini Anda
                akan mendapat simpulan fungsi dengan sifat positif. Hal ini
                ditujukan pada kejadian yang sama antara harga dan jumlah
                penawaran barangnya. Dengan demikian diperoleh fungsi penawaran
                seperti dirumuskan pada gambar berikut: <br /> <br />
                <img src={icQuotePenawaran41} alt="quote" height="46.5" />
                <br />
                Keterangan fungsi melalui huruf rumus ialah sama dengan fungsi
                permintaan secara makna. Hanya saja perbedaannya terletak pada
                tidak adanya tanda minus (-) pada rumus ini konstanta (a) bisa
                berkedudukan dengan nominal positif maupun negatif. Uraian lebih
                jelas terkait penerapan rumus dapat dilihat pada ilustrasi
                ketika penawaran suatu barang diwakilkan pada persamaan fungsi
                Qs = -6 + 3P. hitunglah seberapa besar jumlah barang yang
                ditawarkan jika harganya mencapai Rp3,00? <br /> <br />
                <img src={icQuotePenawaran42} alt="quote" height="109.5" />
                <br />
                Dengan demikian, 3 unit adalah total jumlah barang yang
                ditawarkan oleh penjual pada saat harga berada pada besaran
                Rp3,00. Apabila diproyeksikan pada bentuk kurva, maka fungsi
                permintaan yang menempatkan nominal sebesar Qs = -6 + 3.P
                seperti pada gambar berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-1"]}
                    src={icQuotePenawaran43}
                    alt="quote"
                    height="139.8"
                  />
                  <img src={icArrow} alt="quote" height="32" />
                  <img
                    className={styles["img-2"]}
                    src={icQuotePenawaran44}
                    alt="quote"
                    height="238.5"
                  />
                </div>
                <br />
                Penjelasan atas jawaban tersebut ialah diasumsikan jika penjual
                tersebut tidak akan menawarkan barang yang dipunyai lagi ketika
                harga 0 atau barang tersebut sudah tidak punya nilai lagi.
                Sedangkan penjual akan mulai untuk menjualkan barang yang sama
                dikesempatan kedua jika harga barang yang ditawarkan di atas
                Rp2,00.
                <div className={styles["button"]}>
                  <div className={styles["tombol-paham"]}>
                    <Link to="/materialpenawaran">
                      oke, saya paham
                      <img src={icOke} alt="tombol paham" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialSubPenawaran4;
