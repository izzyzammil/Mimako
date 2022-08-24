import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubStruktur2Page1.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubStruktur2 from "../../assets/icons/struktur-isi2.png";
import icNext from "../../assets/icons/icon-park_arrow-circle-right.png";
import Footer from "components/Footer/Footer";

const MaterialSubStruktur2Page1 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialstruktur">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Struktur Pasar - Pasar Persaingan Tidak Sempurna</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubStruktur2}
              alt="Pengertian Struktur"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Pasar Persaingan Tidak Sempurna</h2>
              <p>
                Salah satu hal yang melatarbelakangi munculnya bentuk pasar
                persaingan tidak sempurna disebabkan karena adanya kepemilikan
                sistem dari pasar persaingan sempurna yang tidak berjalan dengan
                baik. Struktur pasar pada sistem yang terjalin di pasar
                persaingan tidak sempurna menandai adanya kuasa yang lebih
                dominan dari penjual saat menentukan harga. Kondisi didukung
                karena keberadaan penjual di pasar lebih mampu untuk memengaruhi
                perubahan harga daripada pembeli produk.
                <br />
                <br />
                Jika Anda berada pada pasar persaingan sempurna, Anda akan
                ditemui oleh kondisi dimana penjual di suatu pasar mempunyai
                jumlah yang lebih banyak dibanding dengan jumlah pembeli yang
                hadir. Berbeda dengan pasar persaingan tidak sempurna. Pada
                pasar ini, Anda hanya menemui beberapa kelompok penjual yang
                mempunyai dominasi tinggi pada produk yang ditawarkan. Meski
                jumlah yang tergolong lebih kecil, penjual memiliki hak tawar
                atas penjualan pada produk tertentu yang dimiliki. Oleh karena
                itu, biasanya dicirikan jika hanya penjual tersebutlah yang
                diperbolehkan untuk menjual barang tertentu pada jumlah definit.
                <br />
                <br />
                Berikut skema mind mapping yang mencakup materi karakteristik,
                kelebihan, dan kelemahan dari pasar persaingan tidak sempurna.
                Klasifikasikan poin-poin materi ke dalam kotak yang tersedia
                sesuai dengan relevansi hubungan tiap garisnya!
              </p>
            </div>

            <div className={styles["button"]}>
              <div className={styles["tombol-next"]}>
                <Link to="/materialsubstruktur2page2">
                  lanjut
                  <img src={icNext} alt="tombol next" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MaterialSubStruktur2Page1;
