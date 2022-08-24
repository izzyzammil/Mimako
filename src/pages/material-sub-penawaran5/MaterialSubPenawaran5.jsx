import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPenawaran5.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPenawaran5 from "../../assets/icons/penawaran-isi5.png";
import icQuotePenawaran51 from "../../assets/icons/img-penawaran-isi5-1.png";
import icQuotePenawaran52 from "../../assets/icons/img-penawaran-isi5-2.png";
import icQuotePenawaran53 from "../../assets/icons/img-penawaran-isi5-3.png";
import icQuotePenawaran54 from "../../assets/icons/img-penawaran-isi5-4.png";
import icQuotePenawaran55 from "../../assets/icons/img-penawaran-isi5-5.png";
import icQuotePenawaran56 from "../../assets/icons/img-penawaran-isi5-6.png";
import icQuotePenawaran57 from "../../assets/icons/img-penawaran-isi5-7.png";
import icQuotePenawaran58 from "../../assets/icons/img-penawaran-isi5-8.png";
import icQuotePenawaran59 from "../../assets/icons/img-penawaran-isi5-9.png";
import icQuotePenawaran510 from "../../assets/icons/img-penawaran-isi5-10.png";
import icArrow from "../../assets/icons/arrows-big.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPenawaran5 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpenawaran">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Penawaran Pasar - Kurva Penawaran</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPenawaran5}
              alt="Pengertian Penawaran"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Kurva Penawaran</h2>
              <div className={styles["materi"]}>
                Terdapat analogi yang mempermudah Anda dalam memahami kurva
                penawaran. Coba bayangkan kurva penawaran ialah lengan tangan
                sebelah kiri Anda. Silangkan tangan kiri Anda dan posisikan
                tepat mengarah ke dada dan pundak seperti pada gambar berikut:{" "}
                <br /> <br />
                <img src={icQuotePenawaran51} alt="quote" height="164.25" />
                <br />
                Posisi tangan yang persis seperti pada gambar tersebut
                melambangkan kurva penawaran. Perhatikanlah garis merah yang
                diibaratkan sebagai kurva penawaran akan menunjukkan adanya
                letak presisi dari kiri bawah (siku lengan) ke kanan atas (arah
                menuju pundak). Nah, sama seperti kurva permintaan, kurva
                penawaran juga hanya dipengaruhi oleh dua sisi yaitu sisi
                vertical yang melambangkan harga (P) dan sisi horizontal yang
                mewakili barang yang ditawarkan (Q) sedangkan faktor lain
                seperti selera, warna, rasa, bentuk, model, dan lainnya dianggap
                konstan atau pada taraf tetap tidak berubah (ceteris paribus).
                Dengan demikian kurva penawaran bisa dimaknai sebagai proyeksi
                hubungan yang saling berkorelasi dari jumlah barang yang
                ditawarkan pada level harga yang berlaku di pasar. Penjelasan
                lebih lanjut akan diwakili oleh proyeksi kurva penawarann dari
                tabel data berikut: <br /> <br />
                <img src={icQuotePenawaran52} alt="quote" height="180" />
                <br />
                Dengan dilandasi pada himpunan data harga (P) dan jumlah barang
                yang diminta (Q) di atas, maka bisa dibentuk proyeksi kurva
                permintaan seperti berikut: <br /> <br />
                <img src={icQuotePenawaran53} alt="quote" height="154.125" />
                <br />
                Merujuk pada proyeksi himpunan data penawaran pada tabel yang
                diwujudkan dalam skema kurva, menunjukkan posisi harga dan
                jumlah barang yang diminta berbanding lurus lurus. Sehingga
                kemiringan kurva penawaran bersifat positif. Artinya, semakin
                tinggi harga suatu barang yang sudah tersedia di pasar akan
                membuat semakin banyak pula jumlah barang tersebut ditawarkan
                pada konsumen. <br /> <br />
                Bermodalkan data-data yang telah di himpun dan dapat membentuk
                kurva penawaran, Anda juga bisa mencari fungsi penawarannya.
                Dengan lebih sederhana, ambil dua pasang titik ordinat pada
                tabel data untuk mwakili perhitungan fungsi penawaran seperti
                ketika P1 = 1 dan P2 = 2 akan berpasangan dengan jumlahnya yaitu
                Q1 = 3 dan Q2 = 6. Dua pasang titik ordinat tersebut kemudian
                dimasukkan ke dalam persamaan berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePenawaran54} alt="quote" height="67.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePenawaran55} alt="quote" height="150" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePenawaran56} alt="quote" height="159" />
                </div>
                <br />
                Sementara itu, pada kurva penawaran juga bisa mengalami
                perubahan titik keseimbangan akibat dari berubahnya dua sisi
                utama yang memengaruhi yaitu harga dan jumlah barang yang
                ditawarkan. Kurva penawaran yang didalamnya terjadi perubahan
                harga (P) dan jumlah barang yang diminta (Q) sedangkan faktor
                lain dianggap tetap (ceteris paribus) akan membuat titik
                keseimbangan (equilibrium) bergerak disepanjang kurva. Proyeksi
                pergerakan titik keseimbangan dapat dilihat lebih detail pada
                gambar berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePenawaran57} alt="quote" height="165" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePenawaran58} alt="quote" height="199.2" />
                </div>
                <br />
                Lebih lanjut, implikasi dari adanya pengaruh berubahnya faktor
                selain harga (P) dan barang yang ditawarkan (Q) dalam hal ini
                ceteris paribut tidak lagi konstan, akan membuat kurva penawaran
                mengalami pergeseran seperti pada gambar berikut: <br />
                <br />
                <div className={styles["group-img"]}>
                  <img src={icQuotePenawaran59} alt="quote" height="172.5" />
                  <img src={icArrow} alt="quote" height="32" />
                  <img src={icQuotePenawaran510} alt="quote" height="136.5" />
                </div>
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

export default MaterialSubPenawaran5;
