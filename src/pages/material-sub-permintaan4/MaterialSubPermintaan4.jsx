import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPemintaan4.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPermintaan4 from "../../assets/icons/permintaan-isi4.png";
import icQuotePermintaan41 from "../../assets/icons/img-permintaan-isi4-1.png";
import icQuotePermintaan42 from "../../assets/icons/img-permintaan-isi4-2.png";
import icQuotePermintaan43 from "../../assets/icons/img-permintaan-isi4-3.png";
import icQuotePermintaan44 from "../../assets/icons/img-permintaan-isi4-4.png";
import icArrow from "../../assets/icons/arrows-big.png";
import icQuotePermintaan46 from "../../assets/icons/img-permintaan-isi4-6.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPermintaan4 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpermintaan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Permintaan Pasar - Fungsi Permintaan</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPermintaan4}
              alt="Pengertian Permintaan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Fungsi Permintaan</h2>
              <div className={styles["materi"]}>
                Kausalitas yang terjadi sebagai akibat dari kecenderungan
                konsumen dalam melihat harga dan permintaan dimaknai sebagai
                hubungan fungsional atau interdependen. Namun, perlu
                diperhatikan jika keterikatan yang saling memengaruhi antara
                harga dan permintaan ini bersifat negative. Hal ini dipengaruhi
                oleh hukum permintaan itu sendiri. Negatif yang dituju dalam
                fungsi permintaan dimaknai ketika harga barang turun akan
                membuat jumlah barang yang diminta mengalami kenaikan, begitu
                pula sebaliknya. Pernyataan ini dapat diringkas melalui simbol
                seperti berikut: <br /> <br />
                <img src={icQuotePermintaan41} alt="quote" height="73.5" />
                <br />
                Merujuk pada simbol hukum permintaan tersebut, bisa disimpulkan
                secara matematis perwujudan rumus persamaan untuk fungsi
                permintaan seperti berikut:
                <br /> <br />
                <img src={icQuotePermintaan42} alt="quote" height="46.5" />
                <br />
                Keterangan: <br />
                Qd = jumlah (Quantity) <br />
                a = konstanta <br />
                b = koefisien pengarah (slope) <br />
                P = tingkat harga <br /> <br />
                Lebih lanjut, terdapat permisalan yang membantu Anda dalam
                memahami penerapan rumus di atas. Perhatikanlah! Rumus tersebut
                bisa mewakili besaran permintaan yang turut berubah seiring
                dengan terjadinya pergantian harga. Dimisalkan pada suatu
                periode tertentu dalam perkeonomian pasar berlaku fungsi
                permintaan yang diketahui jumlah a adalah 46 dan b adalah 3
                sedangkan harga yang berlaku sebesar Rp12,00. Hitunglah besaran
                jumlah barang yang diminta oleh konsumen untuk memenuhi
                kebutuhannya pada pasar tersebut? <br /> <br />
                <img src={icQuotePermintaan43} alt="quote" height="107.25" />
                <br />
                Dengan demikian, 9 unit adalah total jumlah barang yang diminta
                oleh konsumen pada saat harga berada pada besaran Rp12,00.
                Apabila diproyeksikan pada bentuk kurva, maka fungsi permintaan
                yang menempatkan nominal sebesar Qd = 45 – 3.P seperti pada
                gambar berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-1"]}
                    src={icQuotePermintaan44}
                    alt="quote"
                    height="164.25"
                  />
                  <img src={icArrow} alt="quote" height="32" />
                  <img
                    className={styles["img-2"]}
                    src={icQuotePermintaan46}
                    alt="quote"
                    height="238.5"
                  />
                </div>
                <br />
                <div className={styles["button"]}>
                  <div className={styles["tombol-paham"]}>
                    <Link to="/materialpermintaan">
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

export default MaterialSubPermintaan4;
