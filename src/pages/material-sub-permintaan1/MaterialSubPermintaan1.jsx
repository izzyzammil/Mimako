import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPemintaan1.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPermintaan1 from "../../assets/icons/permintaan-isi1.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPermintaan1 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpermintaan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Permintaan Pasar - Pengertian Permintaan</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPermintaan1}
              alt="Pengertian Permintaan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Pengertian Permintaan</h2>
              <div className={styles["materi"]}>
                Upaya yang dilakukan seseorang dalam memenuhi kebutuhan dalam
                hidupnya tidak lepas dari hal-hal yang didapati dalam kegiatan
                perekonomian. Setiap orang memiliki perbedaan kecenderungan
                sudut pandang dalam melihat barang yang tersedia di pasar
                meskipun ditujukan untuk memenuhi kebutuhan yang sama. Misalkan,
                ketika setiap orang merasakan lapar yang sama pada rentang waktu
                yang hamper serupa (makan pagi, siang, dan malam) namun perilaku
                mereka dalam memilih barang yang tersedia guna memenuhi rasa
                lapar itu berbeda-beda. Ada yang lebih memilih untuk membeli
                bakso, ada yang ingin mie ayam, atau bahkan lebih selera dengan
                makanan lain yang jumlah dan kualitas dengan ukuran yang berbeda
                pula. Nah, keputusan atas upaya yang diinginkan guna memperoleh
                sejumlah barang atau jasa jenis tertentu dalam rangka memenuhi
                kebutuhan tersebut biasa dikenal dengan sebutan permintaan
                (demand). <br />
                <br />
                Merujuk pada setiap permintaan seseorang yang muncul dalam
                keputusannya membutuhkan barang atau jasa bisa dikategorikan
                pada beberapa definisi yaitu: <br />
                1. Permintaan efektif didasarkan pada anggapan yang berorientasi
                kepada cara konsumen mengambil keputusan barang atau jasa yang
                diminta (permintaan) disertai dengan dasar daya beli (kemampuan
                membayar). <br />
                2. Permintaan absolut dimaknai sebagai sebuah pemenuhan akan
                barang yang diminta tanpa adanya dasar daya beli (kemampuan
                membayar). Jadi, permintaan absolut murni atas apa yang
                diinginkan konsumen sendiri untuk memenuhi kebutuhannya tidak
                dengan pertimbangan lain. <br />
                3. Permintaan potensial didefinisikan dalam cara seseorang
                memilih barang dan jasa yang diperlukan dengan dasar daya beli
                namun belum dilakukan sebuah transaksi pembelian. <br />
                <br />
                Identifikasi ketiga macam permintaan tersebut dalam ilmu ekonomi
                menunjukkan adanya permintaan efektif yang dilakukan seorang
                konsumen secara rasional. Hal ini dikarenakan permintaan yang
                ditujukan kepada barang atau jasa dalam jumlah tertentu
                hendaknya mempunyai makna keputusan yang relevan terhadap daya
                beli dari konsumen sendiri. Dan lebih lanjut, permintaan akan
                memproyeksikan rasionalitas argumentasi yang bisa
                dipertanggungjawabkan dalam perilaku ekonomi ketika permintaan
                tersebut muncul. Sehingga bisa dikerucutkan pada sebuah
                statement bila permintaan (demand) akan dimaknai sebagai
                berbagai barang dan jasa sebagai bentuk pemenuh kebutuhan oleh
                konsumen yang diwakili pada jumlah tertentu, diharga tertentu,
                dan pada jangka waktu tertentu. <br />
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

export default MaterialSubPermintaan1;
