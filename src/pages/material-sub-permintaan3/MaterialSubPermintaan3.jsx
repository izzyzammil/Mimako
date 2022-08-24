import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPemintaan3.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPermintaan3 from "../../assets/icons/permintaan-isi3.png";
import icQuotePermintaan3 from "../../assets/icons/img-permintaan-isi3.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPermintaan3 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpermintaan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Permintaan Pasar - Hukum Permintaan</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPermintaan3}
              alt="Pengertian Permintaan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Hukum Permintaan</h2>
              <div className={styles["materi"]}>
                Hasrat seorang konsumen akan menuntunnya mempunyai perilaku
                tertentu ketika bertransaksi. Perhatikan toko-toko yang ada di
                lingkungan sekitar Anda, apa yang terjadi jika penjual
                meberlakukan skema “banting harga”? Pembeli yang minat akan
                barang tersebut terjadi perubahan semakin banyak atau
                sebaliknya? Jawabannya silakan Anda amati reaksi dari konsumen
                yang melalui informasi banting harga tersebut. Mungkin peluang
                bagi konsumen minimal untuk melihat-lihat barang yang harganya
                didiskon akan lebih besar meskipun konsumen tersebut belum pasti
                membelinya. Kecenderungan seseorang dalam mencari utility
                maksimal atas pengorbanan sejumlah uang untuk barang yang
                dikonsumsi membuat individu akan mencari harga terendah demi
                mendapatkan barang atau jasa dengan jumlah dan kualitas yang
                serupa. Kecenderungan ini lah yang memicu seseorang akan
                cenderung mengonsumsi produk dengan jumlah yang lebih banyak
                ketika terjadinya penurunan harga. <br /> <br />
                <img src={icQuotePermintaan3} alt="quote" height="98" /> <br />
                Dalam fenomena hukum permintaan, berlaku ketentuan ceteris
                paribus yang diasumsikan jika terdapat faktor lain yang turut
                memengaruhi permintaan dianggap konstan atau tidak berubah.
                Sehingga yang memengaruhi permintaan hanya ada dua sisi yaitu
                harga (price) dan jumlah barang yang diminta (quantity). Ceteris
                paribus meliputi asumsi faktor yang dianggap tetap di antaranya:
                <br /> <br />
                1. Penghasilan personal tetap. <br /> 2. Preference (selera
                konsumen atau kesenangan orang akan suatu barang itu tetap).
                <br /> 3. Barang substitusi mengalami stagnasi pengembangan
                (tetap). <br /> 4. Jumlah penduduk (tetap). <br />
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

export default MaterialSubPermintaan3;
