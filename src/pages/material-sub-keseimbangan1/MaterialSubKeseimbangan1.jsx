import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubKeseimbangan1.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubKeseimbangan1 from "../../assets/icons/keseimbangan-isi1.png";
import icQuoteKeseimbangan11 from "../../assets/icons/img-keseimbangan-isi1-1.png";
import icQuoteKeseimbangan12 from "../../assets/icons/img-keseimbangan-isi1-2.png";
import icQuoteKeseimbangan13 from "../../assets/icons/img-keseimbangan-isi1-3.png";
import icQuoteKeseimbangan14 from "../../assets/icons/img-keseimbangan-isi1-4.png";
import icQuoteKeseimbangan15 from "../../assets/icons/img-keseimbangan-isi1-5.png";
import icQuoteKeseimbangan16 from "../../assets/icons/img-keseimbangan-isi1-6.png";
import icQuoteKeseimbangan17 from "../../assets/icons/img-keseimbangan-isi1-7.png";
import icQuoteKeseimbangan18 from "../../assets/icons/img-keseimbangan-isi1-8.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubKeseimbangan1 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialkeseimbangan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Keseimbangan Pasar - Keseimbangan Harga</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubKeseimbangan1}
              alt="Pengertian Keseimbangan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Keseimbangan Harga Permintaan dan Penawaran</h2>
              <div className={styles["materi"]}>
                {/* <p> */}
                Amatilah pasar yang terdapat di lingkungan sekitar Anda! Coba
                Anda melakukan identifikasi dari penerapan permintaan dan
                penawaran pada pasar tersebut. Permintaan di bawa oleh pembeli
                atau konsumen yang merupakan masyarakat sekitar untuk
                membelanjakan uangnya berdasarkan skala prioritas barang yang
                perlu dibeli. Sedangkan penawaran dibuat oleh penjual atau para
                tengkulak dalam menjajakkan barang yang tersedia di lapaknya.
                Nah, hubungan interaksi yang menyebabkan adanya kesepadanan yang
                tercipta dari jumlah barang yang diminta dengan jumlah barang
                yang ditawarkan pada periode tertentu dan harga yang disepakati
                dinamai dengan berlakunya istilah harga keseimbangan
                (equilibrium). Oleh karena itu, harga keseimbangan (equilibrium)
                ialah titik potong yang tercipta dari persimpangan kurva
                permintana dan kurva penawaran pada satu proyeksi yang sama.
                <br />
                <br />
                Penjual dan pembeli yang dipertemukan pada satu pasar yang sama
                dan menyepakati harga suatu barang tertentu sehingga tercapainya
                transaksi adalah tujuan dinamakannya harga keseimbangan. Yang
                perlu menjadi catatan ialah kondisi saat harga keseimbangan
                sudah tercipta, penjual maupun pembeli mempunyai anggapan yang
                sama untuk tidak menambah dan mengurangi jumlah barang yang
                dijual dan dibeli. Barang yang dijual terletak pada jumlah yang
                sama dengan barang yang dibeli saat harga keseimbangan tersebut
                disepakati dan susah terjadi transaksi.
                <br />
                <br />
                Mari perdalam pemahaman dengan contoh penerapan harga
                keseimbangan melalui fungsi permintaan dan penawaran dari data
                yang telah dihimpun pada materi mind mapping poin sebelumnya.
                Ibaratkan bahasan ini mengacu pada satu produk yaitu kedelai.
                Disajikan contoh data pada tabel permintaan dan penawaran di
                Pasar Murung Raya seperti berikut: <br /> <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-1"]}
                    src={icQuoteKeseimbangan11}
                    alt="quote"
                    height="192"
                  />
                  <img
                    className={styles["img-2"]}
                    src={icQuoteKeseimbangan12}
                    alt="quote"
                    height="144"
                  />
                </div>
                <br />
                Dengan berlandaskan pada perolehan data yang menjadi acuan
                jumlah barang yang diminta dan barang yang ditawarkan pada
                tingkat harga yang sama tersebut, diperoleh fungsi permintaan
                dan penawarannya sejumlah: <br />
                <br />
                <img src={icQuoteKeseimbangan13} alt="quote" height="69" />
                <br />
                Dari fungsi permintaan dan fungsi penawaran kedelai yang sudah
                didapatkan inilah akan dibentuk proyeksi kurva keseimbangan
                harga di Pasar Murung Raya pada periode waktu tertentu saat
                transaksi antara penjual dan pembeli disepakati. Berikut bentuk
                kurva yang dikehendaki dari data dan fungsi yang sudah ditemui:
                <br />
                <br />
                <img src={icQuoteKeseimbangan14} alt="quote" height="177" />
                <br />
                Setelah ditemukan dugaan sementara berdasar pada data tabel
                permintaan dan penawaran untuk harga keseimbangan yang berlaku
                di Pasar Murung Raya, perlu tindak lanjut untuk mengecek letak
                pada tingkat harga Rp3,00 untuk mendapatkan jumlah 9ons biji
                kedelai sudah tepat atau belum. Maka harus dicari harga
                keseimbangan secara matermatis melalui syarat keseimbangan yaitu
                total permintaan harus sama dengan total penawaran atau yang
                disimbolkan dengan rumus berikut: <br />
                <br />
                <img src={icQuoteKeseimbangan15} alt="quote" height="69" />
                <br />
                Perlu diingat jika konstanta (a) pada fungsi penawaran boleh
                nominal positif (+) dan boleh nominal negatif (-). Menurut data
                yang tersedia pada poin materi fungsi permintaan dan fungsi
                penawaran sebelumnya, maka bisa diperhitungkan harga
                keseimbangannya melalui cara berikut: <br />
                <br />
                <div className={styles["group-img"]}>
                  <img
                    className={styles["img-3"]}
                    src={icQuoteKeseimbangan16}
                    alt="quote"
                    height="163.2"
                  />
                  <img
                    className={styles["img-4"]}
                    src={icQuoteKeseimbangan17}
                    alt="quote"
                    height="163.2"
                  />
                </div>
                <br />
                Melalui singkonisasi kesepadanan data dan perhitungan sistematis
                tersebut diperoleh temuan yang sama pada tingkat harga Rp3,00
                diperoleh 9ons biji kedelai merupakan tingkat harga keseimbangan
                di pasar Murung Raya. Lalu pertanyaannya bagaimana jika syarat
                permintaan dan penawaran tidak terpenuhi (tidak pada tingkat
                yang sama)? Pertanyaan ini dapat ditemukan jawabannya pada
                identifikasi pasar yang Anda amati di lingkungan sekitar rumah.
                Ketika Anda mendapati temuan pada harga tertentu, jumlah barang
                yang dijual pada pasar tersebut (Qs) lebih banyak daripada
                jumlah yang akan dibeli (Qd) atau penawaran lebih besar daripada
                permintaannya, peristiwa apa yang mungkin bisa terjadi?
                <br />
                <br />
                Ketika Qs {">"} Qd, maka hal yang mungkin saja bisa terjadi
                ialah kelebihan penawaran (excess supply). Cobalah mengamati
                ilustrasi barang kedelai di pasar Murung Raya melalui analisis
                kurva di bawah pernyataan ini! Jika harga dari Rp3,00 mengalami
                kenaikan menjadi Rp4,00 (titik keseimbangan bergerak dari E ke
                B). Hal ini menurut hukum penawaran akan membuat jumlah kedelai
                yang ditawarkan (Q) bertambah menjadi 12ons biji kedelai (dari E
                ke B). Sedangkan menurut hukum permintaan akan membuat jumlah
                kedelai yang ditawarkan menjadi 7ons saja (E ke A). Kelebihan
                barang dalam skema penawaran dengan permintaannya dalam hal ini
                merupakan selisih kuantitas 7 ke 12 (garis A ke B) dinamakan
                excess supply. Kelebihan barang yang ditawarkan sedangkan jumlah
                permintaan barang tersebut tidak pada tingkat yang sama
                tersebutlah membuat penjual menjadi kelebihan stok. Sehingga
                untuk menjual barang yang tersisa, maka penjual harus rela
                menurunkan harganya sampai pada Rp3,00. Implikasinya, strategi
                ini membuat barang yang ditawarkan sama dengan jumlah barang
                yang diminta pada tingkat 9ons kedelai. <br />
                <br />
                <img src={icQuoteKeseimbangan18} alt="quote" height="187.2" />
                <br />
                Sebaliknya, kelebihan permintaan dapat terjadi ketika harga per
                ons kedelai yang awalnya Rp3,00 menurun jadi Rp2,00. Turunnya
                harga barang membuat kedelai yang ditawarkan tengkulak ke
                konsumen mengalami penurunan pula hingga menjadi 6ons. Sedangkan
                ketika harga kedelai murah, pembeli akan antusias untuk membeli
                kedelai sebanyak mungkin yang menjadikan permintaan akan kedelai
                mencapai 11ons. Kelebihan kedelai yang diminta terhadap kedelai
                yang ditawarkan membuat adanya gap kuantitas kedelai pada pasar
                Murung Raya sejumlah 5ons diperoleh dari selisih 11ons dan 6ons
                jarak garis C ke D (excess demand). Sehingga penjual harus
                mengambil strategi demi menghindari penjualan produk yang
                terlalu murah dan berakibat pada kekurangan barang. Oleh karena
                itu, melihat pembeli yang bersedia berkorban lebih besar untuk
                mendapat kedelai (daya beli tinggi) karena persaingan perebutan
                saat harga murah, maka penjual perlu menaikkan harga. Strategi
                menaikkan harga ini perlu terus dilakukan hingga kelebihan
                permintaan (excess demand) hilang.
                <br />
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

export default MaterialSubKeseimbangan1;
