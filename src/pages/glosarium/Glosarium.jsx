import React from "react";
import { Link } from "react-router-dom";

import styles from "./Glosarium.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icDone from "../../assets/icons/ic-mini-home.png";
import Footer from "components/Footer/Footer";

const Glosarium = () => {
  return (
    <div className={styles["image-bg-glosarium"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
            <p>| Glosarium - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <h2>Glosarium</h2>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <div className={styles["item-left-content1"]}>
              <div>
                <p>B</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content2"]}>
              <div>
                <p>C</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content3"]}>
              <div>
                <p>E</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content4"]}>
              <div>
                <p>F</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content5"]}>
              <div>
                <p>I</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content6"]}>
              <div>
                <p>K</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content7"]}>
              <div>
                <p>M</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content8"]}>
              <div>
                <p>P</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content9"]}>
              <div>
                <p>S</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>

            <div className={styles["item-left-content10"]}>
              <div>
                <p>U</p>
              </div>
              <div className={styles["divider"]}></div>
            </div>
          </div>

          <div className={styles["right-content"]}>
            <h3>Barriers to entry</h3>
            <p>
              Barriers to entry merupakan penyebutan untuk mengistilahkan adanya
              faktor-faktor yang bisa menghalangi penjual atau produsen baru
              untuk memasuki wilayah pasar atau industri tertentu (berjualan
              disitu). Hal ini ditujukan guna membatasi persaingan internal
              dalam satu pasar yang sama. Hambatan yang diberlakukan biasanya
              mencakup biaya awal yang tinggi, hambatan peraturan, atau hambatan
              lain yang mencegah pesaing baru memasuki sektor bisnis dengan
              mudah.
            </p>
            <h3>Ceteris paribus</h3>
            <p>
              Ceteris paribus didefinisikan secara harfiah sebagai bentuk
              faktor-faktor lain dianggap tetap atau konstan. Dalam Bahasa
              Inggris, ceteris paribus berarti semuanya sama. Istilah ini
              dipakai sebagai asumsi pemikiran ekonomi sebagai asumsi dalam
              melihat indikasi atas pengaruh satu variabel ekonomi terhadap
              variabel lain bisa berlaku asalkan semua variable pada kondisi
              yang konstan (tidak berubah).
            </p>
            <h3>Equilibrium</h3>
            <p>
              Equilibrium adalah istilah yang digunakan dalam melambangkan hasil
              kombinasi variable ekonomi (biasanya harga dan kuantitas).
              Kombinasi ini disertai pertanda titik potong dalam kurva yang
              mengandung makna arah mana proses ekonomi dikatakan seimbang.
              Penggunaan equilibrium sering ditemui pada kondisi penawaran,
              permintaan, atau kekuatan-kekuatan perekonomian hingga dikatakan
              seimbang. Equilibrium akan mengunci variable ekonomi supaay tetap
              tidak berubah pada nilainya kecuali adanya pengaruh eksternal
              (ceteris paribus). Keseimbangan ekonomi juga disebut sebagai
              keseimbangan pasar.
            </p>
            <h3>Excess supply</h3>
            <p>
              Excess supply sebagai pertanda kondisi ekonomi yang mencakup
              penawaran pasar bagi suatu komoditas terjadi kelebihan atau lebih
              besar daripada permintaan pasar untuk barang yang sama.
              Implikasinya, barang tersebut akan mengalami penurunan harga
              pasar.
            </p>
            <h3>Excess demand</h3>
            <p>
              Excess demand sebagai pertanda kondisi ekonomi yang mencakup
              permintaan pasar bagi suatu komoditas terjadi kelebihan atau lebih
              besar daripada penawaran pasar untuk barang yang sama.
              Implikasinya, barang tersebut akan mengalami peningkatan harga
              pasar.
            </p>
            <h3>Forecasting</h3>
            <p>
              Forcasting sebagai suatu bentuk metode peramalan dalam memprediksi
              suatu kondisi di masa yang akan datang (bisa dipakai pada bidang
              ekonomi) dengan skema perhitungan bukan mengira-ngira. Cara ini
              sering dipakai untuk memperhitungkan kondisi ekonomi beberapa
              tahun ke depan dengan asumsi jika kondisi saat ini terus terjadi.
              Tujuannya ialah untuk memberikan pertanda jangka panjang dalam
              perekonomian di masa depan. Sehingga bisa diantisipasi dengan
              kebijakan yang diberlakukan hari ini.
            </p>
            <h3>Invisible hand</h3>
            <p>
              Bentuk pemikiran Adam Smith dalam aliran ilmu ekonomi klasik yang
              menandai adanya kekuatan atau mekanisme yang tidak terlihat dalam
              membimbing individu-individu untuk tanpa sadar menguntungkan
              masyarakat melalui pengejaran kepentingan pribadinya.
            </p>
            <h3>Komplementer</h3>
            <p>
              Barang yang hanya dapat menjalankan fungsinya bila dilengkapi
              dengan barang lain. Bentuk kombinasi dari dua barang yang saling
              berpasangan dan bersifat saling melengkapi.
            </p>
            <h3>Konstanta</h3>
            <p>
              Tanda dalam suatu rumus perhitungan yang melambangkan nilai dari
              suatu obyek yang nominalnya sudah ditentukan dan tidak bisa diubah
              selama proses perhitungan (bersifat konstan).
            </p>
            <h3>Mind mapping</h3>
            <p>
              Suatu metode kategorisasi beberapa konsep yang saling berkaitan
              satu dengan yang lainnya. Mind mapping memakai kunci-kunci materi
              sebagai jalan untuk memahami materi. Kata kunci tersebut
              dikombinasikan dengan bentuk gambar, garis, dan tautan sehingga
              setiap konsep akan menunjukkan keterkaitan dan keterikatan ide-ide
              yang beralur di antaranya.
            </p>
            <h3>Preference</h3>
            <p>
              Preference itu kesukaan. Sebuah karakteristis tertentu yang
              dimiliki pada suatu produk yang ingin dimiliki oleh konsumen.
              Kecenderungan tinggi dalam menyukai kriteria tertentu yang melekat
              pada barang atau jasa bisa memengaruhi keputusan dalam perilaku
              ekonomi konsumen. Keinginan yang kuat untuk memiliki kriteria
              tertentu yang disukai biasanya berupa tingkat kebahagian, tingkat
              kepuasan, atau pun utilitas dari produk.
            </p>
            <h3>Price maker</h3>
            <p>
              Kondisi dalam suatu pasar yang menunjukkan dominasi perusahaan
              yang mampu menentukan harga terhadap barang yang ditawarkan. Hal
              ini disebabkan tidak adanya lagi pengganti yang sempurna untuk
              barang atau jasa tersebut. Kondisi ini terdapat banyak barang yang
              bersifat substitusi hanya memiliki kemiripan saja tetapi secara
              fungsi tidak sebagi barang aslinya. Umumnya, peristiwa ini hadir
              pada pasar monopoli atau terjadi pada pasar dengan keberadaan
              perusahaan dengan barang yang berbeda dari yang pesaing tawarkan
              (tiada duanya).
            </p>
            <h3>Price taker</h3>
            <p>
              Kondisi dalam suatu pasar yang menunjukkan tidak adanya dominasi
              penjual atau pembeli dalam menentukan harga. Harga ditentukan
              dengan bebas dan atas kesepakatan para pelaku ekonomi. Sehingga
              semua pelaku ekonomi dianggap sebagai pengambil harga di pasar
              persaingan sempurna. Biasanya pada kondisi ini terdapat barang
              identik, tidak ada hambatan untuk masuk atau keluar pasar, pangsa
              pasar yang relatif kecil, dan keseluruhan pembeli yang ada pada
              pasar tersebut punya hak penuh. Kebebasan ini yang membuat suatu
              pasar minim ada yang mendominasi.
            </p>
            <h3>Substitusi</h3>
            <p>
              Dalam ekonomi mikro, substitusi dikaitkan dengan barang yang bisa
              dipakai sebagai pengganti barang asli. Subtitusi berlaku jika
              barang tersebut dapat dipakai dan mempunyai tujuan yang sama bagi
              konsumen. Oleh karena itu, substitusi didefinisikan sebagai
              persepsi konsumen dalam melihat dua barang yang serupa atau
              sebanding. Sehingga membuat konsumen dengan kepemilikan lebih dari
              satu barang substitusi menyebabkan lebih sedikit keinginan untuk
              mendapatkan barang lain.
            </p>
            <h3>Utility</h3>
            <p>
              Utility dimaknai dengan lebih ringkas sebagai bentuk kepuasan
              total yang diterima Ketika melakukan konsumsi barang atau jasa.
              Kepuasan total biasanya didapat karena telah melalui pilihan
              rasional. Kepuasan total biasanya berpengaruh langsung pada
              permintaan terhadap barang atau jasa di kondisi harga tertentu.
            </p>
            <br />
          </div>
        </div>
      </div>

      <div className={styles["button"]}>
        <div className={styles["tombol-lanjut"]}>
          <Link to="/home">
            Yuk belajar lagi
            <img src={icDone} alt="tombol-lanjut" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};
export default Glosarium;
