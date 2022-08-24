import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPemintaan5.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPermintaan5 from "../../assets/icons/permintaan-isi5.png";
import icQuotePermintaan51 from "../../assets/icons/img-permintaan-isi5-1.png";
import icQuotePermintaan52 from "../../assets/icons/img-permintaan-isi5-2.png";
import icQuotePermintaan53 from "../../assets/icons/img-permintaan-isi5-3.png";
import icQuotePermintaan54 from "../../assets/icons/img-permintaan-isi5-4.png";
import icQuotePermintaan55 from "../../assets/icons/img-permintaan-isi5-5.png";
import icQuotePermintaan56 from "../../assets/icons/img-permintaan-isi5-6.png";
import icQuotePermintaan57 from "../../assets/icons/img-permintaan-isi5-7.png";
import icQuotePermintaan58 from "../../assets/icons/img-permintaan-isi5-8.png";
import icQuotePermintaan59 from "../../assets/icons/img-permintaan-isi5-9.png";
import icArrow from "../../assets/icons/arrows-big.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPermintaan5 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpermintaan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Permintaan Pasar - Kurva Permintaan</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPermintaan5}
              alt="Pengertian Permintaan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Kurva Permintaan</h2>
              <div className={styles["materi"]}>
                Kurva permintaan adalah bentuk proyeksi seberapa besar korelasi
                yang terjadi antara harga dan jumlah barang yang diminta. Maka,
                permintaan yang dibuat oleh konsumen selalu dipengaruhi oleh dua
                hal yaitu harga (price) yang dilambangkan “P” pada sumbu
                vertikal dan jumlah barang yang diminta (quantity) yang
                disimbolkan dengan huruf “Q”. Sedangkan faktor-faktor lain
                seperti selera, warna, rasa, bentuk, model, dan lainnya dianggap
                konstan atau pada taraf tetap (tidak berubah) yang dinamakan
                oleh ceteris paribus. Lebih jelasnya, kurva permintaan dapat
                dibuat berasal dari data yang dihimpun seperti berikut: <br />
                <br />
                <img src={icQuotePermintaan51} alt="quote" height="240" />
                <br />
                Dengan dilandasi pada himpunan data harga (P) dan jumlah barang
                yang diminta (Q) di atas, maka bisa dibentuk proyeksi kurva
                permintaan seperti berikut:
                <br /> <br />
                <img src={icQuotePermintaan52} alt="quote" height="159.75" />
                <br />
                Bermodalkan data-data yang telah di himpun dan dapat membentuk
                kurva permintaan, Anda juga bisa mencari fungsi permintaannya.
                Dengan lebih sederhana, ambil dua pasang titik ordinat yang
                mewakili perhitungan fungsi permintaan seperti ketika P1 = 1 dan
                P2 = 2 akan berpasangan dengan jumlahnya yaitu Q1 = 13 dan Q2 =
                11. Dua pasang titik ordinat tersebut kemudian dimasukkan ke
                dalam persamaan berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePermintaan53} alt="quote" height="67.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePermintaan54} alt="quote" height="175.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePermintaan55} alt="quote" height="159" />
                </div>
                <br />
                Dalam implementasinya, kurva permintaan juga bisa mengalami
                perubahan titik keseimbangan akibat dari faktor-faktor yang
                memengaruhinya. Kurva permintaan yang didalamnya terjadi
                perubahan harga (P) dan jumlah barang yang diminta (Q) sedangkan
                faktor lain dianggap tetap (ceteris paribus) akan membuat titik
                keseimbangan (equilibrium) bergerak disepanjang kurva. Proyeksi
                pergerakan titik keseimbangan dapat dilihat lebih detail pada
                gambar berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePermintaan56} alt="quote" height="190.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePermintaan57} alt="quote" height="199.2" />
                </div>
                <br />
                Di sisi lain, kurva permintaan tidaknya berhenti pada pergerakan
                sepanjang kurva saja. Namun kurva juga bisa bergeser ke kiri
                atau ke kanan dari kurva utama. Yang melatarbelakangi pergeseran
                tersebut tidak lagi karena harga (P) dan kuantitas (Q). tetapi
                lebih kepada faktor lain (ceteris paribus) yang mulanya dianggap
                konstan, kini mengalami peralihan karena adanya kondisi ekonomi
                tertentu. Faktor selain harga dan kuantitas yang turut menggeser
                kurva permintaan adalah perubahan harga barang lain (substitusi
                dan komplementer), perubahan taraf pendapatan perseorangan,
                intensitas kebutuhan yang berbeda dari biasanya, selera
                konsumen, dan peralaman (forecasting) dari harga barang di masa
                yang akan dating, hingga jumlah penduduk yang berubah
                signifikan. Implikasi dari peristiwa tersebut akan membuat kurva
                permintaan mengalami pergeseran seperti pada gambar berikut:
                <br /> <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePermintaan58} alt="quote" height="190.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePermintaan59} alt="quote" height="181.2" />
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

export default MaterialSubPermintaan5;
