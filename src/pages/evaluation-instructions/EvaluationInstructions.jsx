import React from "react";
import { Link } from "react-router-dom";

import styles from "./EvaluationInstructions.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import awan from "../../assets/icons/awan.png";
import Footer from "components/Footer/Footer";

const EvaluationInstructions = () => {
  return (
    <div className={styles["image-bg-evaluasi"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
            <p>| Evaluasi Belajar - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["title"]}>
          <h2>PETUNJUK PENGERJAAN SOAL</h2>
          <h2>APLIKASI MIND MAPPING EKONOMI (MIMAKO)</h2>
          <h2>VERSI OFFLINE DEKSTOP</h2>
        </div>

        <div className={styles["text-petunjuk-soal"]}>
          <p className={styles["sub-title"]}>
            <strong>A. Yang Perlu Diperhatikan Sebelum Mengerjakan:</strong>
          </p>

          <ol className={styles["desc"]}>
            <li>
              Pastikan Laptop atau PC yang digunakan untuk mengerjakan soal
              memiliki sistem operasi minimal windows 8 dan RAM 2 Gigabita.
            </li>
            <li>
              Waktu mengerjakan sesuai durasi waktu yang tersedia dalam
              aplikasi.
            </li>
            <li>
              Bagi yang terlambat masuk aplikasi soal, durasi pengerjaan sesuai
              pada input waktu yang telah ditetapkan pada aplikasi.
            </li>
          </ol>

          <p className={styles["sub-title"]}>
            <strong>B. Petunjuk Umum</strong>
          </p>

          <ol className={styles["desc"]}>
            <li>
              Isi identitas Anda pada tampilan halaman pembuka yang tersedia di
              menu evaluasi belajar.
            </li>
            <li>
              Periksa dan bacalah soal-soal dengan saksama sebelum Anda
              menjawabnya.
            </li>
            <li>Dahulukan menjawab soal-soal yang Anda anggap mudah.</li>
            <li>
              Jumlah soal sebanyak 20 butir pilihan ganda yang disertai dengan 5
              alternatif jawaban.
            </li>
            <li>
              Kerjakan soal pilihan ganda dengan cara klik salah satu opsi, lalu
              klik tombol “lanjut” untuk mengerjakan soal nomor berikutnya.
            </li>
            <li>
              Periksa kembali pekerjaan Anda! Jawaban masih dapat diubah dengan
              klik tombol “cek dulu” untuk menampilkan soal sesuai nomor yang
              dikehendaki.
            </li>
            <li>
              Setelah semua soal pilihan ganda selesai dikerjakan, klik tombol
              “Submit” untuk melihat hasil nilai dan laporan evaluasi yang sudah
              terekam oleh aplikasi.
            </li>
          </ol>
        </div>

        <div className={styles["button"]}>
          <div className={styles["tombol-lanjut"]}>
            <Link to="/evaluationhome">{`Next >>>`}</Link>
          </div>
        </div>
      </div>

      <Footer />

      <div>
        <img src={awan} alt="background awan" className={styles["cloud"]} />
      </div>
    </div>
  );
};

export default EvaluationInstructions;
