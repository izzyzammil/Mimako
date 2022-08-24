import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubKeseimbangan2.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubKeseimbangan2 from "../../assets/icons/keseimbangan-isi2.png";
import icQuoteKeseimbangan21 from "../../assets/icons/img-keseimbangan-isi2-1.png";
import icQuoteKeseimbangan22 from "../../assets/icons/img-keseimbangan-isi2-2.png";
import icQuoteKeseimbangan23 from "../../assets/icons/img-keseimbangan-isi2-3.png";
import icQuoteKeseimbangan24 from "../../assets/icons/img-keseimbangan-isi2-4.png";
import icQuoteKeseimbangan25 from "../../assets/icons/img-keseimbangan-isi2-5.png";
import icQuoteKeseimbangan26 from "../../assets/icons/img-keseimbangan-isi2-6.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubKeseimbangan2 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialkeseimbangan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Keseimbangan Pasar - Elastisitas Permintaan</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubKeseimbangan2}
              alt="Pengertian Keseimbangan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Elastisitas Permintaan</h2>
              <div className={styles["materi"]}>
                Pernahkan Anda memperhatikan besaran perubahan harga suatu
                barang dengan jumlah barang yang diminta? Dimisalkan, ketika
                kedelai dengan harga dari Rp10.000,00 seorang pembeli bisa
                mendapatkan 5kg sedangkan ketika harga mengalami penurunan
                Rp8.000,00 yang membuat pembeli berani membeli kedelai lebih
                banyak yaitu 7kg. Apakah bisa Anda simpulan setiap harga menurun
                Rp2.000,00 pembeli akan menginginkan kedelai 2kg lebih banyak?
                Hal ini belum tentu terjadi. Karena ketidakpastian dari hal-hal
                yang mungkin terjadi tersebut padahal intuisi menangkap
                peristiwa inilah perlu adanya elastisitas permintaan. Oleh sebab
                itu, dibutuhkan ukuran untuk bisa mengukur dengan lebih presisi
                persentase peralihan jumlah kedelai yang diminta konsumen ketika
                harga kedelai juga berubah. Nah, proporsi perubahan pada jumlah
                barang yang diminta dibagi dengan proposi perubahan harga
                barangnya dapat diukur dengan rumus:
                <br />
                <br />
                <img src={icQuoteKeseimbangan21} alt="quote" height="62.25" />
                <br />
                Dalam membantu mempermudah pemahaman pada perbandingan proporsi
                harga dengan jumlah barangnya, maka dapat digunakan rumus
                berikut: <br />
                <br />
                <img src={icQuoteKeseimbangan22} alt="quote" height="65.25" />
                <br />
                Untuk lebih jelasnya, Anda bisa melihat elastisitas permintaan
                dengan kategori yang beragam di setiap perubahan proporsinya.
                Berikut perhitungan elastisitas permintaan dengan kepemilikan
                beberapa kemungkinan:
                <br />
                <br />
                Untuk lebih jelasnya, Anda bisa melihat elastisitas permintaan
                dengan kategori yang beragam di setiap perubahan proporsinya.
                Berikut perhitungan elastisitas permintaan dengan kepemilikan
                beberapa kemungkinan:
                <br />
                <br />
                <strong>1. Permintaan Elastis</strong> <br />
                Permintaan elastis dapat dilihat pada ilustrasi permisalan harga
                kedelai di pasa Murung Raya pada Rp20.000,00 mendapat 20kg.
                Namun saat terjadi penurunan harga menjadi Rp19.000,00 pembeli
                akan menambah jumlah kedelai yang dibeli menjadi 35kg. Hal ini
                dapat diperhitungkan ukuran elastisitasnya dengan cara berikut:{" "}
                <br />
                <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-1"]}
                    src={icQuoteKeseimbangan23}
                    alt="quote"
                    height="142"
                  />
                  <img
                    className={styles["img-2"]}
                    src={icQuoteKeseimbangan24}
                    alt="quote"
                    height="189.75"
                  />
                </div>
                <br />
                Pengukuran elastisitas tersebut dapat diartikan sebagai bentuk
                perubahan yang responsif dari harga yang beralih menurun
                sejumlah Rp1.000,00 membuat besaran kedelai yang diminta
                beranjak pada peningatan jumlah 15kg. Hal ini menunjukkan
                permintaan elastis terjadi ketika adanya perubahan jumlah barang
                yang diminta lebih besar dari presentase perubahan harganya.
                <br />
                <br />
                <strong>2. Permintaan Inelastis</strong> <br />
                Permintaan inelastis adalah kebalikan dari permintaan elastis.
                Inelastis terjadi ketika perubahan jumlah barang yang diminta
                lebih kecil dari persentase perubahan harganya. Bila dalam
                ilustrasi permisalan harga kedelai di pasa Murung Raya yang
                mulanya pada Rp20.000,00 mendapat 20kg, kini ketika harga turun
                menjadi Rp19.000,00 pembeli hanya menambah jumlah kedelai yang
                dibeli menjadi 20,5kg saja. Sehingga jika dihitung dengan
                mencari koefisien elastisitas ditemukan: <br />
                <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-3"]}
                    src={icQuoteKeseimbangan25}
                    alt="quote"
                    height="165.75"
                  />
                  <img
                    className={styles["img-4"]}
                    src={icQuoteKeseimbangan26}
                    alt="quote"
                    height="189.75"
                  />
                </div>
                <div className={styles["button"]}>
                  <div className={styles["tombol-paham"]}>
                    <Link to="/materialkeseimbangan">
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

export default MaterialSubKeseimbangan2;
