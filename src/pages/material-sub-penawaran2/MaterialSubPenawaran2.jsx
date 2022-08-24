import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPenawaran2.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPenawaran2 from "../../assets/icons/penawaran-isi2.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPenawaran2 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpenawaran">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Penawaran Pasar - Faktor-Faktor yang Mempengaruhi</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPenawaran2}
              alt="Pengertian Penawaran"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Faktor-Faktor yang Memengaruhi Penawaran</h2>
              <div className={styles["materi"]}>
                Produsen dalam menjajakkan atau menawarkan barang yang tersedia
                untuk dijual tidak bisa semata-mata langsung menjual begitu saja
                di pasar. Perlu diperhatikan adanya pertimbangan-pertimbangan
                yang mungkin muncul sebagai analisis respon setelah barang
                tersebut ditawarkan. Berikut penjelasan lebih rinci terkait
                hal-hal penting yang perlu diperhatikan sebelum melakukan
                penawaran kepada konsumen:
                <br /> <br />
                <strong>1. Harga Barang itu Sendiri.</strong>
                <br />
                Berlaku selaras dengan hukum penawarannya, korelasi antara harga
                dan penawaran bersifat positif. Hal ini terjadi ketika harga
                barang mengalami kenaikan, maka akan diikuti dengan naiknya
                jumlah barang yang ditawarkan di pasar oleh produsen. Sehingga
                produsen lebih berorientasi pada mencari keuntungan yang lebih
                tinggi dengan semakin banyaknya menawarkan jumlah barang ketika
                harga terjadi peningkatan.
                <br /> <br />
                <strong>2. Progresif inovasi dan Kebaharuan Teknologi.</strong>
                <br />
                Dukungan teknologi yang muncul dan berkolaborasi pada
                bidang-bidang ekonomi membuat efektifitas dan efisiensi
                khususnya pada skema produksi semakin meningkat. Seperti analogi
                ketika produksi baju yang dilakukan dengan sentuhan mesin jahit
                biasa hanya akan memproduksi baju sejumlah 10 potong dalam waktu
                satu bulan. Sedangkan saat penjahit menggunakan kebaharuan
                teknolog dalam bentuk mesin jahit listrik, output baju yang
                dihasilkan dalam satu bulan meningkat menjadi 15 potong baju.
                Hal ini menunjukkan adanya sisi positif dalam mengelola segala
                sumber daya yang digunakan dalam proses produksi. Keunggulan
                yang dirasakan menjadi lebih baik dari segi kualitas dan jumlah
                barang yang dihasilkan.
                <br /> <br />
                <strong>3. Harga Input.</strong>
                <br />
                Syarat yang perlu dipahami pada poin ini yaitu biaya produksi
                akan berjalan selaras dengan harga harga input barang tersebut.
                Biaya yang dikeluarkan sejumlah harga barang input selalu
                menyertai pada produksi suatu barang. Ibarat seperti memproduksi
                baju, penjahit tidak melulu menghitung harga terkait bahan dasar
                pembuatan baju saja. Tetapi juga disertakan upah tenaga kerja,
                bunga modal, sewa tanah, dan keuntungan yang hendak ditentukan
                oleh penjual sebagai laba bersih bukan omzet. Keuntungan muncul
                sebagai hasil dari upaya penjual dalam menentukan selisih yang
                ada dari harga jual produk dan biaya yang dipakai untuk
                melaksanakan produksi. Afinitas dari pernyataan tersebut
                didapati bila harga jual berada pada tingkat yang tidak berubah
                (tetap) dan biaya yang dipakai untuk produksi sebuah barang
                mengalami penurunan, maka secara otomatis penjual akan semakin
                besar memeroleh keuntungan. Oleh karena itu, diperoleh sebuah
                paradigma jika biaya produksi yang turun akan memengaruhi secara
                signifikan peningkatan level penawaran terhadap barang yang
                sama. Jumlah Perusahaan dalam Industri. <br /> <br />
                <strong>4. Jumlah Perusahaan dalam Industri.</strong>
                <br />
                Kedudukan kuantitas perusahaan dalam suatu kegiatan industri
                akan beralur relatif konstan pada jangka pendek. Sebaliknya,
                perusahaan-perusahaan baru akan lebih tinggi probabilitas dalam
                memasuki pasar pada jangka panjang. Sebagai bentuk ersaingan,
                banyaknya perusahaan yang masuk pada pasar yang sama khususnya
                menjual barang yang serupa akan memengaruhi peningkatan jumlah
                penawaran pada tingkat tertentu. Periode ini akan menanjak
                seiring dengan sampainya titik optimum pasar yang ditandai
                dengan masa stagnasi daya jual barang terkait dan menurunya
                hasrat konsumen untuk bertransaksi pada barang tersebut. Hingga
                masa ini terjadi, maka perusahaan akan mengalami penurunan
                karena harus beralih pada produk untuk menghindari kerugian.
                Penurunan perusahaan yang menawarkan barang tersebut, maka
                penawaran akan turun dengan sendirinya. (invisible hand)
                <br /> <br />
                <strong>
                  5. Perubahan Harga Barang Substitusi dan Komplementer.
                </strong>
                <br />
                Poin ini menandai adanya pengaruh akibat adanya harga barang
                substitusi maupun barang komplementer yang berubah. Dicontohkan
                pada peristiwa nasi putih sebagai barang utama dan nasi jagung
                sebagai barang substitusi. Penawaran harga nasi putih terjadi
                penurunan saat harga barang substitusinya yaitu nasi jagung
                mengalami peningkatan. Hal ini membuat harga nasi putih akan
                relatife lebih murah bila disandingkan dengan harga nasi jagung.
                <br /> <br />
                Perlakuan sebaliknya berlaku juga pada barang komplementer.
                Dimisalkan pada kejadian sepatu dan kaos kaki sebagai barang
                yang saling melengkapi (komplementer). Peningkatan harga yang
                dirasakan oleh sepatu akan seiring dengan bertambahnya penawaran
                pada barang komplementernya yaitu kaos kaki.
                <br /> <br />
                <strong>
                  6. Peramalan Harga Produk di Masa yang Akan Datang.
                </strong>
                <br />
                Pernahkah Anda melihat beberapa penjual menahan penawaran pada
                barang yang hendak dijual saat periode tertentu dengan prakiraan
                harga akan terus mengalami kenaikan dan hanya akan menjualnya
                pada harga tertinggi? Ya, misalkan para tengkulak dengan
                kekuatan modal besar akan membeli beras sebanyak mungkin pada
                periode satu bulan terakhir ketika harga yang relatif masih
                lebih murah. Pembelian beras skala besar ini dilakukan dengan
                asumsi jika harga tersebut akan terus mengalami kenaikan
                dikemudian hari. Kegiatan memborong beras yang didasarkan pada
                terjadinya perkiraan kenaikan harga ini akan membuat tengkulak
                menunda penjualan beras (mengurangi penawaran). Sehingga stok
                beras menjadi lebih sedikit dari permintaannya di pasar. Hal ini
                memicu harga akan tetap pada asumsi awal (terus mengalami
                kenaikan). Dan tengkulak hanya akan menjual pada posisi harga
                tertinggi dengan harapan mendapat keuntungan optimum di masa
                mendatang. <br />
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

export default MaterialSubPenawaran2;
