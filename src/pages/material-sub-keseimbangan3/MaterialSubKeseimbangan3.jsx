import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubKeseimbangan3.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubKeseimbangan3 from "../../assets/icons/keseimbangan-isi3.png";
import icQuoteKeseimbangan31 from "../../assets/icons/img-keseimbangan-isi3-1.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubKeseimbangan3 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialkeseimbangan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Keseimbangan Pasar - Elastisitas Penawaran</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubKeseimbangan3}
              alt="Pengertian Keseimbangan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Elastisitas Penawaran</h2>
              <div className={styles["materi"]}>
                Pada hakikatnya, elastisitas yang terjadi sebagai bentuk
                penawaran suatu barang tertentu didasarkan pada analisis jangka
                pendeknya. Seorang produsen membuat barang ada jumlah tertentu
                pastinya tidak serta merta langsung ditawarkan kepada konsumen.
                Perilaku produsen yang mengisyaratkan pada perusahaan untuk
                menawarkan sebagian barang yang dibuat dan menyimpan sebagian
                barang lainnya untuk dijual di waktu yang tepat (saat harga naik
                atau peminat barang meningkat) melalui reseller maupun dari
                distributor. Nah, analisis sebagian barang yang dijual untuk
                melihat bagaimana respons pembeli dan perubahan harga yang
                terjadi di pasar. Peristiwa identifikasi derajat kepekaan
                penawaran pada barang tersebutlah yang diistilahkan dengan
                elastisitas penawaran. Jadi, elastisitas dalam ruang lingkup ini
                merupakan perubahan jumlah penawaran yang berubah seiring dengan
                implikasi peralihan harga barang itu sendiri. Nilai koefisien
                dari elastisitas penawaran bisa memakai formula seperti berikut:
                <br />
                <br />
                <img src={icQuoteKeseimbangan31} alt="quote" height="57" />
                <br />
                Keterangan: <br />
                Es = Elastisitas penawaran <br />
                Q = Kuantitas sebelum terjadinya harga yang berubah <br />
                P = Harga awal <br />
                ΔQ = Penawaran jumlah barang yang berubah <br />
                ΔP = Jumlah harga barang yang ditawarkan berubah <br />
                <br />
                Perubahan elastisitas antara proporsi harga dan proporsi jumlah
                barang pada penawaran hamper mengalami kemiripan dengan
                elastisitas permintaan. Hanya saja jika permintaan didasarkan
                pada barang yang hendak dibeli konsumen, pada penawaran ini
                dilandasi pada barang yang hendak dijual oleh produsen. Uraian
                lebih rinci pada kemungkinan yang dimunculkan pada perhitungan
                elastisitas permintaan sebagai berikut:
                <br />
                <br />
                <table border="1">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Jenis Elastisitas</th>
                      <th>Ukuran Elastisitas</th>
                      <th>Logika</th>
                      <th>Contoh Barang</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1.</td>
                      <td>Penawaran Elastis</td>
                      <td>E {">"} 1</td>
                      <td>ΔQ {">"} ΔP</td>
                      <td>
                        Terjadi karena tawaran barang dengan jumlah yang lebih
                        besar dari perubahan harga.
                        <br />
                        <br />
                        Misalkan, kedelai dengan harga Rp10.000,00 mendapat 10kg
                        kemudian harga naik 100% menjadi Rp20.000,00 seharusnya
                        pembeli mendapat peningkatan jumlah kedelai 100% juga
                        sebesar 20kg. Tetapi ternyata kenaikan harga sejumlah
                        Rp10.000,00 ini membuat jumlah barang yang ditawarkan
                        meningkat 15kg.
                        <br />
                        <br />
                        Contoh barang yaitu kebutuhan tersier (luxury).
                      </td>
                    </tr>
                    <tr>
                      <td>2.</td>
                      <td>Penawaran Inelastis</td>
                      <td>E {"<"} 1</td>
                      <td>ΔQ {"<"} ΔP</td>
                      <td>
                        Terjadi ketika harga yang berubah sebesar X% diikuti
                        dengan lebih kecilnya dari X% jumlah barang yang
                        ditawarkan. <br />
                        Contoh barang yaitu kebutuhan pokok.
                      </td>
                    </tr>
                    <tr>
                      <td>3.</td>
                      <td>Permintaan Normal (Uniter)</td>
                      <td>E = 1</td>
                      <td>ΔQ = ΔP</td>
                      <td>
                        Terjadi ketika harga yang berubah sejumlah X% diikuti
                        dengan penawaran pada barang itu sendiri dengan besaran
                        yang sama yaitu X%. <br />
                        Contoh barang yaitu kebutuhan sekunder.
                      </td>
                    </tr>
                    <tr>
                      <td>4.</td>
                      <td>Permintaan Elastis Sempurna</td>
                      <td>E = ~</td>
                      <td>ΔQ, ΔP = 0</td>
                      <td>
                        Terjadi ketika barang yang ditawarkan berubah sejumlah
                        X% namun harga tidak mengalami perubahan atau 0%. <br />
                        Contoh barang yaitu gandum dan minyak goreng.
                      </td>
                    </tr>
                    <tr>
                      <td>5.</td>
                      <td>Permintaan Inelastis Sempurna</td>
                      <td>E = 0</td>
                      <td>ΔQ = 0, ΔP</td>
                      <td>
                        Terjadi ketika barang yang ditawarkan berubah sejumlah
                        0% (tetap) namun harga mengalami harga yang beralih
                        sejumlah X%. <br />
                        Contoh barang yaitu tanah dan air minum.
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default MaterialSubKeseimbangan3;
