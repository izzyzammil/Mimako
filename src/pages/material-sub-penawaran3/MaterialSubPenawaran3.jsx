import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPenawaran3.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPenawaran3 from "../../assets/icons/penawaran-isi3.png";
import icQuotePenawaran31 from "../../assets/icons/img-penawaran-isi3-1.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPenawaran3 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpenawaran">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Penawaran Pasar - Hukum Penawaran</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPenawaran3}
              alt="Pengertian Penawaran"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Hukum Penawaran</h2>
              <div className={styles["materi"]}>
                Perhatikan ilustrasi berikut! Coba bayangkan Anda saat ini
                merupakan seorang penjual ayam goreng pada sebuah kedai yang
                ramai pembeli. Sebagai penjual dalam melihat kenaikan harga
                pasar ayam goreng yang semula Rp8.000,00 menjadi Rp.10.000,00
                pasti akan menambah pula jumlah barang yang ditawarkan. Ini
                terjadi karena menganggap semakin banyak barang yang mungkin
                terjual, pasti akan mendatangkan keuntungan yang lebih optimal.
                Berbanding terbalik saat harga ayam goreng ternyata menurun dari
                Rp.6.000,00 ke Rp.7.000,00 pasti Anda sebagai penjual akan
                menurunkan jumlah barang yang ditawarkan. Hal ini disebabkan
                anggapan seberapa besar pun jumlah ayam goreng yang berhasil
                dijual, kecenderungan perolehan keuntungan akan tetap di bawah
                harga awal ayam goreng tersebut diproduksi.
                <br /> <br />
                Perbedaan perilaku ini mempunyai tujuan yang jelas. Saat harga
                ayam goreng naik dan Anda lebih memilih menambah barang yang
                dijual, pasti ditujukan untuk menambah keuntungan. Sedangan
                ketika harga ayam goreng turun dan Anda memilih mengurangi
                jumlah barang yang dijual, tujuannya tidak lain ialah mengurang
                peluang dalam merasakan kerugian yang diderita. <br /> <br />
                <img src={icQuotePenawaran31} alt="quote" height="114" />
                <br />
                Namun, hukum penawaran tersebut juga perlu diperhatikan syarat
                keberlakuan ceteris paribus. Ceteris paribus diposisikan sebagai
                faktor lain di luar harga dan jumlah barang yang ditawarkan
                harus bersifat konstan atau tetap. Faktor lain yang dimaksud
                ialah biaya produksi, harga barang lain, dan tingkat teknologi
                untuk produksi barang tersebut. Di sisi lain, penawaran
                diklasifikasikan menjadi beberapa jenis seperti: <br /> <br />
                <strong>1. Dilihat dari Realitas Penawaran</strong>
                <table>
                  <tbody>
                    <tr>
                      <td>a. Persediaan</td>
                      <td>:</td>
                      <td>
                        kondisi dimana semua barang yang dipunyai oleh produsen
                        merupakan barang yang siap ditawarkan pada pasar.
                      </td>
                    </tr>

                    <tr>
                      <td>b. Penawaran Riil</td>
                      <td>:</td>
                      <td>
                        kondisi yang menunjukkan besaran jumlah atas barang yang
                        tersedia ialah benar-benar ditawarkan untuk dijual di
                        pasar dengan berbagai tingkat harga.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <strong>2. Dilihat dari Jumlah Penyedia (Supplier)</strong>
                <table>
                  <tbody>
                    <tr>
                      <td>a. Penawaran Individual</td>
                      <td>:</td>
                      <td>
                        kondisi saat penawaran muncul dari penjual atau produsen
                        sendiri untuk menjualnya.
                      </td>
                    </tr>
                    <tr>
                      <td>b. Penawaran Pasar (Kolektif)</td>
                      <td>:</td>
                      <td>
                        kondisi saat penawaran muncul secara kolektif dari
                        beberapa atau seluruh penjual yang ada di pasar
                        selingkung.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <br />
                <strong>3. Dilihat dari Jenis yang Ditawarkan</strong>
                <table>
                  <tbody>
                    <tr>
                      <td>a. Faktor Produksi</td>
                      <td>:</td>
                      <td>
                        kondisi saat masyarakat secara sadar melakukan penawaran
                        kepada perusahaan mencakup faktor produksi yang dipunyai
                        (tenaga, alat, dan modal, maupun tanah).
                      </td>
                    </tr>
                    <tr>
                      <td>b. Faktor Konsumsi</td>
                      <td>:</td>
                      <td>
                        kondisi saat masyarakat diberikan peluang untuk dipenuhi
                        kebutuhannya dengan dilakukan penawaran hasil produksi
                        perusahaan barang terkait.
                      </td>
                    </tr>
                  </tbody>
                </table>
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

export default MaterialSubPenawaran3;
