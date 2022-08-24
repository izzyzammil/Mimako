import React from "react";
import { Link } from "react-router-dom";

import styles from "./Guide.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import Footer from "components/Footer/Footer";

const Guide = () => {
  return (
    <div className={styles["image-bg-petunjuk"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
            <p>| Petunjuk Belajar - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <h2>Petunjuk Belajar</h2>
        <div className={styles["bg-petunjuk"]}>
          <div className={styles["teks-petunjuk"]}>
            <p>
              Terdapat beberapa penjelasan sebelum peserta didik memakai Mind
              Mapping Ekonomi (MIMAKO) sebagai media pembelajaran dengan materi
              keseimbangan pasar dan struktur pasar. Sila diamati petunjuk
              belajar sebelum menggunakan Mind Mapping Ekonomi (MIMAKO) sebagai
              berikut:
            </p>
            <ol>
              <li>
                Bacalah dengan cermat informasi terkait Mind Mapping Ekonomi
                (MIMAKO).
              </li>
              <li>
                Ketahui kompetensi apa yang harus Anda kuasai setelah memakai
                media pembelajaran Mind Mapping Ekonomi (MIMAKO) ini.
              </li>
              <li>
                Gunakan peta konsep untuk menentukan materi yang dirasa ingin
                dipelajari dan dipahami terlebih dahulu.
              </li>
              <li>
                Mind Mapping Ekonomi (MIMAKO) berisi inti sari materi yang ingin
                Anda pelajari. Struktur materi berupa pengidentifikasian tiap
                poin, landasan teori, dan penerapan yang menyertainya baik
                berupa contoh ilustrasi, studi kasus, hingga perhitungan rumus.
              </li>
              <li>
                Jika ada kesulitan belajar dan mengoperasikan media pembelajaran
                Mind Mapping Ekonomi (MIMAKO), bertanyalah pada guru atau
                pengajar dan mintalah penjelasan.
              </li>
              <li>
                Ikuti langkah-langkah yang ada dalam Mind Mapping Ekonomi
                (MIMAKO) untuk mengerjakan tugas atau soal yang terdapat di
                dalamnya. Kemudian cocokan hasil pekerjaan Anda dengan kunci
                jawaban yang telah tersedia di akhir tampilan evaluasi belajar.
              </li>
              <li>
                Apabila terdapat istilah yang belum jelas, penulis menyediakan
                menu Glosarium yang berisi pengertian dari istilah-istilah yang
                terdapat pada materi keseimbangan pasar dan struktur pasar.
              </li>
              <li>
                Dianjurkan menggunakan referensi lain baik dari buku, internet,
                maupun sumber-sumber lain yang berkaitan dngan materi yang ada
                pada Mind Mapping Ekonomi (MIMAKO).
              </li>
              <li>
                Operasikan media pembelajaran dengan bijak dan kerjakan dengan
                sungguh-sungguh sesuai dengan petunjuk yang ada pada Mind
                Mapping Ekonomi (MIMAKO).
              </li>
            </ol>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Guide;
