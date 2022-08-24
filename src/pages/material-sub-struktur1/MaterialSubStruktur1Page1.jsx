import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubStruktur1Page1.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubStruktur1 from "../../assets/icons/struktur-isi1.png";
import icNext from "../../assets/icons/icon-park_arrow-circle-right.png";
import Footer from "components/Footer/Footer";

const MaterialSubStruktur1Page1 = () => {
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
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubStruktur1}
              alt="Pengertian Struktur"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Pasar Persaingan Sempurna</h2>
              <p>
                Bila Anda memasuki suatu pasar, cobalah mulai amati
                sekelilingnya. Anda akan mendapati begitu banyak penjual dan
                pembeli jika yang Anda masuki ialah bentuk pasar persaingan
                sempurna. Hal ini juga ditandai dengan bebasnya para penjual dan
                pembeli memasuki pasar. Implikasinya pada transaksi yang ada di
                dalamnya ialah jumlah penjualan barang akan lebih sedikit jika
                disandingkan dengan jumlah keseluruhan barang yang terjual di
                pasar tersebut. Alasannya sangat jelas, karena banyaknya penjual
                dan pembeli yang ada dalam satu pasar yang sama. Ya, para
                penjual di pasar persaingan sempurna tidak bisa menentukan harga
                pasar dan pastinya salah satu penjual tidak bisa menguasai pasar
                tersebut. Itulah yang membuat pada pasar ini, penjual hanya bisa
                menawarkan barang yang tersedia lebih sedikit dari jumlah
                penawaran totalnya. Oleh sebab itu, konsekuensi penjual dan
                pemeli yang memasuki pasar ialah permintaan dan penawaran di
                dalam pasar tersebut menentukan harga barangnya sendiri
                (equilibrium). Inilah yang membuat adanya tawar-menawar pada
                pasar persaingan sempurna. Harga tidak bisa ditentukan oleh satu
                atau sekelompok penjual maupun pembeli saja. Karena adanya
                kebebasan untuk menentukan harga dari masing-masing kesepakatan
                ketika transaksi membuat struktur pasar paling ideal adalah
                pasar persaingan sempurna. Asumsi yang melandasi pernyataan
                tersebut ialah skema jual-beli yang ada bisa menjamin
                terciptanya efisiensi ekonomi suatu pasar.
                <br />
                <br />
                Berikut skema mind mapping yang mencakup materi karakteristik,
                kelebihan, dan kelemahan dari pasar persaingan sempurna.
                Klasifikasikan poin-poin materi ke dalam kotak yang tersedia
                sesuai dengan relevansi hubungan tiap garisnya!
              </p>
            </div>

            <div className={styles["button"]}>
              <div className={styles["tombol-next"]}>
                <Link to="/materialsubstruktur1page2">
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

export default MaterialSubStruktur1Page1;
