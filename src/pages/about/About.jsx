import React from "react";
import { Link } from "react-router-dom";

import styles from "./About.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icLKPD from "../../assets/icons/logo_lkpd.png";
import icMiniHome from "../../assets/icons/ic-mini-home.png";
import Footer from "components/Footer/Footer";

const About = () => {
  return (
    <div className={styles["image-bg-tentang"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
            <p>| Tentang - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["left-content"]}>
          <img src={icLKPD} alt="logo LKPD" width="240" />
          <p>
            Media pembelajaran Mind Mapping Ekonomi (MIMAKO) offline desktop
            version yang dikembangkan ini dilandasi pada aplikasi media
            pembelajaran Mind Mapping Ekonomi (MIMAKO) berbasis android
            sebelumnya. Pengembangan media pembelajaran ini berfokus pada
            Kompetensi Dasar 3.4 yaitu mendeskripsikan terbentuknya keseimbangan
            pasar dan struktur pasar. Mind Mapping Ekonomi (MIMAKO) ini disusun
            untuk menambah variasi dan inovasi bahan belajar peserta didik,
            serta membantu peserta didik untuk memahami materi yang disampaikan
            dengan lebih mudah karena penjelasan langsung berfokus pada intisari
            materi yang harus dipahami oleh peserta didik. Terlebih aplikasi
            yang mewadahi sistem hitung rumus serta proyeksi gambar kurva dari
            data yang diinput oleh peserta didik diharapkan mampu meningkatkan
            pemahaman materi tersebut meskipun dalam skema pembelajaran jarak
            jauh. Mind Mapping Ekonomi (MIMAKO) ini bersifat informasi, tugas,
            langkah kerja, dan penilaian.
          </p>
          <br />
          <p>
            Mind Mapping Ekonomi (MIMAKO) ini sesuai dengan kurikulum 2013 yang
            tersusun berbentuk media pembelajaran dengan memiliki 6 menu utama
            yaitu: profil dan informasi, petunjuk belajar, glosarium, materi
            belajar, evaluasi belajar, Belajar rumus dan kurva, dan glosarium.
            Di bagian akhir Mind Mapping Ekonomi (MIMAKO) terdapat pelatihan
            untuk mengukur pemahaman peserta didik mengenai materi yang telah
            dipelajari.
          </p>
        </div>
        <div className={styles["divider"]}></div>
        <div className={styles["right-content"]}>
          <h2>Prasyarat</h2>
          <p>
            Sebelum memakai Mind Mapping Ekonomi (MIMAKO) sebagai media
            pembelajaran, peserta didik harus sudah memiliki kemampuan dasar
            tentang permintaan, penawaran, dan keseimbangan pasar yang meliputi:
            pengertian permintaan dan penawaran, faktor-faktor yang memengaruhi
            permintaan dan penawaran, hukum permintaan dan penawaran, fungsi
            permintaan dan penawaran, kurva permintaan dan penawaran,
            keseimbangan harga permintaan dan penawaran, elastisitas permintaan
            dan penawaran, serta struktur pasar persaingan sempurna hingga pasar
            persaingan tidak sempurna.
          </p>
          <br />
          <br />
          <h2>Kompetensi Inti</h2>
          <table>
            <thead>
              <tr>
                <th style={{ width: "10%" }}>KI 1</th>
                <td>Menghayati dan mengamalkan ajaran agama yang dianutnya.</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>KI 2</th>
                <td>
                  Menghayati dan pengamalkan perilaku jujur, disiplin, tanggung
                  jawab, peduli (gotong royong, kerjasama, toleran, damai)
                  santun, percaya diri, dalam berinteraksi secara efektif dengan
                  lingkungan sosial dan alam dalam jangkauan pergaulan dan
                  keberadaannya.
                </td>
              </tr>
              <tr>
                <th>KI 3</th>
                <td>
                  Memahami, menerapkan, dan menganalisis pengetahuan faktual,
                  konseptual, prosedural, dan metakognitif berdasarkan rasa
                  ingin tahunya tentang ilmu pengetahuan, teknologi, seni,
                  budaya, dan humaniora dengan wawasan kemanusiaan, kebangsaan,
                  kenegaraan, dan peradaban terkait penyebab fenomena dan
                  kejadian, serta menerapkan pengetahuan prosedural pada bidang
                  kajian yang spesifik sesuai dengan bakat dan minatnya untuk
                  memecahkan masalah.
                </td>
              </tr>
              <tr>
                <th>KI 4</th>
                <td>
                  Mengolah, menalar, dan menyaji dalam ranah konkret dan ranah
                  abstrak terkait dengan pengembangan dari yang dipelajarinya di
                  sekolah secara mandiri, bertindak secara efektif dan kreatif,
                  serta mampu menggunakan metoda sesuai kaidah keilmuan.
                </td>
              </tr>
            </tbody>
          </table>

          <br />
          <br />
          <h2>Kompetensi Dasar</h2>
          <p>
            <strong>3.4.</strong> Mendeskripsikan terbentuknya keseimbangan
            pasar dan struktur pasar
            <br />
            <strong>4.4.</strong> Menyajikan hasil pengamatan tentang perubahan
            harga dan kuantitas keseimbangan di pasar.
          </p>
          <br />
          <br />
          <h2>Indikator</h2>
          <p>
            <strong>3.4.1</strong> Menjelaskan pengertian permintaan <br />
            <strong>3.4.2</strong> Meyebutkan faktor-faktor yang memengaruhi
            permintaan <br />
            <strong>3.4.3</strong> Menelaah hukum permintaan <br />
            <strong>3.4.4</strong> Menghitung fungsi permintaan <br />
            <strong>3.4.5</strong> Menganalisis sistematika proyeksi kurva
            permintaan <br />
            <strong>3.4.6</strong>Mendeskripsikan pengertian penawaran <br />
            <strong>3.4.7</strong> Mengidentifikasi faktor-faktor yang
            memengaruhi penawaran
            <br />
            <strong>3.4.8</strong> Menelaah hukum penawaran <br />
            <strong>3.4.9</strong> Menghitung fungsi penawaran <br />
            <strong>3.4.10</strong> Menganalisis terbentuknya proyeksi kurva
            penawaran <br />
            <strong>3.4.11</strong> Menelaah keseimbangan harga yang terjadi di
            pasar <br />
            <strong>3.4.12</strong> Mengidentifikasi elastisitas permintaan
            <br />
            <strong>3.4.13</strong> Mengidentifikasi elastisitas pernawaran
            <br />
            <strong>3.4.14</strong> Menganalisis secara kritis informasi pasar
            persaingan sempurna <br />
            <strong>3.4.15</strong> Mengenalisis secara kritis informasi pasar
            persaingan tidak sempurna <br />
            <strong>4.4.1</strong> Menyajikan hasil perhitungan terkait temuan
            perubahan harga
            <br />
            <strong>4.4.2</strong> Menyajikan hasil temuan perubahan kuantitas
            dalam keseimbangan pasar
          </p>

          <br />
          <br />
          <h2>Tujuan Pembelajaran</h2>
          <ol>
            <li>Peserta didik dapat menjelaskan pengertian permintaan</li>
            <li>
              Peserta didik dapat meyebutkan faktor-faktor yang memengaruhi
              permintaan
            </li>
            <li>Peserta didik dapat menelaah hukum permintaan</li>
            <li>Peserta didik dapat menghitung fungsi permintaan</li>
            <li>
              Peserta didik dapat menganalisis sistematika proyeksi kurva
              permintaan
            </li>
            <li>Peserta didik dapat mendeskripsikan pengertian penawaran</li>
            <li>
              Peserta didik dapat mengidentifikasi faktor-faktor yang
              memengaruhi penawaran
            </li>
            <li>Peserta didik dapat menelaah hukum penawaran</li>
            <li>Peserta didik dapat menghitung fungsi penawaran</li>
            <li>
              Peserta didik dapat menganalisis terbentuknya proyeksi kurva
              penawaran
            </li>
            <li>
              Peserta didik dapat menelaah keseimbangan harga yang terjadi di
              pasar
            </li>
            <li>Peserta didik dapat mengidentifikasi elastisitas permintaan</li>
            <li>Peserta didik dapat mengidentifikasi elastisitas pernawaran</li>
            <li>
              Peserta didik dapat menganalisis secara kritis informasi pasar
              persaingan sempurna
            </li>
            <li>
              Peserta didik dapat mengenalisis secara kritis informasi pasar
              persaingan tidak sempurna
            </li>
            <li>
              Peserta didik mampu menyajikan hasil perhitungan terkait temuan
              perubahan harga
            </li>
            <li>
              Peserta didik mampu menyajikan hasil temuan perubahan kuantitas
            </li>
          </ol>
        </div>
      </div>

      <div className={styles["pengembang"]}>
        <div className={styles["background"]}>
          <div className={styles["title"]}>
            <h4>Dikembangkan bersama tim LKPD Mata Pelajaran Ekonomi</h4>
          </div>

          <div className={styles["container-pengembang"]}>
            <div className={styles["left"]}>
              <ol>
                <li>Dr. Harti, M.Si.</li>
                <li>Dr. Norida Canda Sakti, M.Si.</li>
                <li>Dr. Tri Sudarwanto, S.Pd., M.SM.</li>
                <li>Drs. Saino, M.Pd.</li>
                <li>Devangga Putra Adhitya P., S.Pd., M.Pd.</li>
                <li>Isna Aulia Nur Habibah, S.Pd.</li>
                <li>Ahmad Nurul Misbah, S.Pd.</li>
                <li>Heni Kurnia Sari, S.E.</li>
                <li>Saiful Arif, S.Pd.</li>
                <li>Nurwati, S.Pd.</li>
                <li>Totok Sukarsono, S.Pd.</li>
                <li>Ernawati, S.Pd.</li>
              </ol>
            </div>
            <div className={styles["center"]}>
              <ol start={"13"}>
                <li>Erna Suryani, S.Pd.</li>
                <li>Lilik Puji Astutik, S.Pd.</li>
                <li>Ismail Huda, S.Pd.</li>
                <li>Herni Cahyowati, S.Pd.</li>
                <li>Rini Sulistyowati, S.Pd., M.Pd.</li>
                <li>Saiful Aini, S.Pd.</li>
                <li>Sunjaya, S.Pd.</li>
                <li>Nurwito, S.Pd.</li>
                <li>Warkini, M.Pd.</li>
                <li>Sri Handayani, S.Pd.</li>
                <li>Yayuk Yitnowani W.U., S.Pd.</li>
                <li>Evy Nur Hidayah, S.Pd.</li>
              </ol>
            </div>
            <div className={styles["right"]}>
              <ol start={"25"}>
                <li>Desi Paramita Putri, S.Pd.</li>
                <li>Sriningsih, S.Pd.</li>
                <li>Panca Putih Wardhani, S.Pd.</li>
                <li>Wahid Fahruddin Is P., S.E., M.Pd.</li>
                <li>Drs. Abd. Sukariono</li>
                <li>Dra. Indah Hariani</li>
                <li>Suja’I, S.Pd., M.Pd.</li>
                <li>Moch. Akhiyar, S.Pd.</li>
                <li>Suhartini S.Pd., M.Pd.</li>
                <li>Shokib, S.Pd., M.Pd.</li>
                <li>Dra. Zunik Sholihah</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["button"]}>
        <div className={styles["tombol-selesai"]}>
          <Link to="/home">
            Yuk belajar lagi
            <img src={icMiniHome} alt="tombol-selesai" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
