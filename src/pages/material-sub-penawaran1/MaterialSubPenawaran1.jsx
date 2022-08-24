import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPenawaran1.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPenawaran1 from "../../assets/icons/penawaran-isi1.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPenawaran1 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpenawaran">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Penawaran Pasar - Pengertian Penawaran</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPenawaran1}
              alt="Pengertian Penawaran"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Pengertian Penawaran</h2>
              <div className={styles["materi"]}>
                Mari mengibaratkan masing-masing diri menjadi seorang produsen
                yang tidak hanya memproduksi sebuah barang tetapi juga
                menjualkannya! Pada kegiatan ekonomi tertentu, pasti seorang
                produsen membuat barang tidak selalu untuk dirinya sendiri.
                Produsen juga akan menjual barang atau jasa yang dipunyai untuk
                mendapatkan penghasilan dari perolehan labanya. Hasil laba yang
                menjadi penghasilan akan digunakan untuk memenuhi kebutuhan
                sehari-hari atau menambah modal usaha yang dimiliki. Kegiatan
                yang dilakukan produsen tersebutlah yang merupakan sebuah
                aktivitas penawaran.
                <br /> <br />
                Penawaran dikenal sebuah kegiatan ekonomi yang dijalankan
                seseorang dalam rangka memberikan informasi terkait jumlah
                barang dan jasa yang ditersedia untuk dibeli oleh konsumen.
                Jumlah barang yang tersedia di pasar untuk dijual biasanya
                disertai dengan tingkat harga dan kesesuaian waktu tertentu.
                Produk yang menjadi obyek penawaran juga relative. Produk bisa
                dibuat dari referensi banyaknya permintaan yang ada di pasar
                dari analisis tren, selera, dan inovasi atau kebaharuan. Atau
                bisa pula didapat dari idealisme produsen sendiri dalam
                keinginannya untuk membuat produk yang seperti apa.
                <br /> <br />
                Penerapan penawaran di beberapa fenomena menempatkannya pada
                beragam jenis istilah. Pertama, terdapat penawaran individual
                yang merupakan sebuah aktivitas perekonomian yang dilakukan oleh
                produsen atau pengusaha untuk menawarkan barang yang dijual.
                Kedua, terdapat penawaran kolektif yang juga istilah untuk
                mewakili cara produsen atau pengusaha secara simultan dalam
                menawarkan keseluruhan penawaran pada suatu wilayah tertentu.
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

export default MaterialSubPenawaran1;
