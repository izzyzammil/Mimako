import React from "react";
import { Link } from "react-router-dom";

import styles from "./MaterialSubPemintaan2.module.css";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icSubPermintaan2 from "../../assets/icons/permintaan-isi2.png";
import icOke from "../../assets/icons/icon-park_bad-one.png";
import Footer from "components/Footer/Footer";

const MaterialSubPermintaan2 = () => {
  return (
    <div className={styles["image-bg-materi"]}>
      <div className={styles["headers"]}>
        <Link to="/materialpermintaan">
          <div className={styles["item-header"]}>
            <img src={icBack} alt="menu-home" width="42" height="34" />
            <p>| Permintaan Pasar - Faktor-Faktor yang Mempengaruhi</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["container"]}>
        <div className={styles["main-content"]}>
          <div className={styles["left-content"]}>
            <img
              className={styles["img-frame"]}
              src={icSubPermintaan2}
              alt="Pengertian Permintaan"
            />
          </div>
          <div className={styles["right-content"]}>
            <div className={styles["isi-materi"]}>
              <h2>Faktor-Faktor yang Memengaruhi Permintaan</h2>
              <div className={styles["materi"]}>
                Dalam melihat situasi saat terjadinya permintaan akan
                memunculkan argumentasi alasan yang beragam di setiap pandangan
                konsumen sendiri. Apakah seorang konsumen murni meminta barang
                dan memutuskan membelinya karena sifat urgensi atau seberapa
                butuh, berdasarkan selera, berdasar pada bentuk, atau kemampuan
                harga? Tidak ada tolok ukur yang pasti bila permintaan itu
                terjadi karena pertimbangan oleh faktor yang sama oleh setiap
                manusia. Namun, faktor yang menyertai barang atau jasa masih
                bisa dinyatakan seberapa dominasinya yang dirasakan seorang
                konsumen hingga muncul permintaannya. Berikut klasifikasi faktor
                yang dominan dalam memberikan pengaruhnya bagi konsumen ketika
                melakukan permintaan terhadap suatu barang: <br /> <br />
                <strong> 1. Harga Barang itu Sendiri </strong> <br />
                Untuk memahami poin faktor harga barang itu sendiri, pahami
                setiap kalimat pada ilustrasi sebagai berikut dan tentukan apa
                yang Anda lakukan sebagai bentuk kebijakan pengelolaan uang:
                <br /> <br />
                Pada saat kondisi perekonomian normal (tidak pada libur
                nasional, libur hari besar, tidak terjadi pandemi, atau tidak
                terjadi krisis), bakso sebagai menu sebuah rumah makan di kantin
                sekolah Anda dihargai setara dengan Rp8.000,00 tiap porsinya
                yang setara jumlah dengan uang saku Anda. Pasca terjadinya masuk
                sekolah setelah libur hari raya, bakso di kantin yang biasa Anda
                beli tersebut mengalami kenaikan harga menjadi Rp10.000,00
                sedangkan jumlah uang saku Anda masih pada jumlah yang sama
                yaitu Rp8.000,00. Lalu, Bagaimana perilaku Anda sebagai konsumen
                dalam menanggapi kenaikan harga tersebut?
                <br /> <br />
                Kemungkinan yang muncul sebagai jawaban atas pertanyaan tersebut
                adalah Anda sebagai konsumen dengan daya beli yang terbatas
                (hanya Rp8.000,00) akan mengganti bakso dengan jenis makanan
                lain yang lebih terjangkau. Bahkan bisa jadi alternatif jawaban
                yang keluar ialah perilaku Anda untuk mengurangi konsumsi bakso
                di sekolah dengan membawa bekal sendiri dari rumah. Hal ini
                lumrah terjadi sebagai respon akan rasa takut bila uang saku
                yang dimiliki tidak cukup untuk beli bakso dan memenuhi
                kebutuhan lain saat berada di sekolah. Nah, jawaban adanya
                peralihan permintaan dari bakso ke makanan lain atau malah
                memutuskan untuk membawa bekal ini akan menurunkan permintaan
                akan bakso itu sendiri sebagai sebab yang dipicu oleh kenaikan
                harga. Sehingga fenomena tersebut membuktikan bila harga barang
                yang naik akan menurunkan jumlah barang yang diminta dengan
                sendirinya.
                <br /> <br />
                <strong>
                  2. Harga Barang berdasarkan sifatnya (Substitusi atau
                  Komplementer)
                </strong>
                <br />
                Barang substitusi didefinisikan sebagai barang pengganti
                (alternatif) yang memiliki kemiripan daya guna dari barang
                terkait. Dimisalkan seperti daging sapi merupakan barang
                substitusi pada barang daging ayam. Pernahkah Anda memperhatikan
                bila daging sapi mengalami kenaikan harga, maka konsumen daging
                hewan akan beralih pada daging lain sebagai substitusinya yaitu
                daging ayam karena harga yang masih relatif terjangkau. Hal ini
                memicu meningkatnya permintaan konsumen terhadap daging ayam.
                Sedangkan permintaan pada daging sapi akan menurun dengan
                sendirinya. Sehingga harga barang substitusi (dalam hal ini
                daging ayam) bisa memberikan pengaruh pada tingkatan jumlah
                permintaan di barang yang dapat digantikannya (daging sapi).
                <br /> <br />
                Berlaku pula pada barang komplementer yang biasa ditangkap
                sebagai barang pelengkap dalam pemenuhan kebutuhan. Dimisalkan
                barang komplementer yang dimaksud sebagai potret fenomena ialah
                spidol dengan tinta dimana spidol tidak akan bisa dipakai jika
                tintanya habis. Bila harga tinta terjadi kenaikan harga, maka
                akan menurunkan jumlah tinta yang diminta sebagai dampak
                pertama. Kemudian secara otomatis akan berpengaruh pada jumlah
                permintaan spidol yang berkurang sebagai dampak kedua.
                <br /> <br />
                <strong>3. Pendapataan Konsumen</strong> <br />
                Pada barang normal, diketahui ada korelasi positif antara
                pendapatan dengan permintaan barang. Tidak bisa dipungkiri jika
                setiap orang mempunyai kecenderungan saat bertambahnya
                pendapatannya, maka bertambah juga barang yang diminta sebagai
                bentuk pemenuhan kebutuhan atas aktifitas yang tinggi demi
                mendapatkan uang yang lebih banyak. Misalnya seperti pada
                karyawan yang mulanya staff menjadi kepala divisi dengan
                kenaikan jabatan menjadikan pendapatan yang diterima lebih
                tinggi. Karyawan tersebut yang awalnya menggunakan pakaian biasa
                akan membeli jas yang lebih bagus, tas branded, dan sepatu jenis
                baru. Hal ini terjadi sebagai respons terhadap bertambahnya
                pendapatan karena jobdesc yang lebih tinggi, entah karena rapat
                hingga larut malam atau bertemu dengan orang-orang penting yang
                membuat karyawan yang naik jabatan harus berpenampilan lebih
                baik dari sebelumnya. Atau seorang siswa sekolah menengah atas
                yang nilainya unggul dan seorang juara kelas, uang sakunya akan
                ditambahkan oleh orang tuanya sebagai reward ataupun sebagai
                penunjang fasilitas siswa tersebut untuk mempertahankan
                prestasinya. Sehingga permintaan barang siswa tersebut akan
                meningkat dengan sendirinya.
                <br /> <br />
                <strong>4. Selera Konsumen</strong> <br />
                Pernahkah Anda dalam posisi sudah berada di toko dengan daftar
                skala prioritas kebutuhan yang sudah di buat namun ternyata
                ketersediaan barang yang Anda butuhkan tidak sesuai dengan
                selera yang Anda sukai? Analoginya dimisalkan saat seorang
                konsumen memiliki selera yang tinggi pada barang bermerek, maka
                konsumen tersebut akan memprioritaskan membeli barang dengan
                merek yang disukai (preference). Hal ini membuat permintaan akan
                barang bermerek akan stagnan pada tingkat yang tinggi meskipun
                harga barang tersebut terjadi kenaikan. Dengan demikian, selera
                atau cita rasa yang dimiliki oleh konsumen terhadap barang
                tertentu yang disukai (preference) akan memberikan signifikansi
                pengaruh entah tinggi atau rendah permintaan pada barang
                tersebut di harga tertentu.
                <br /> <br />
                <strong>5. Pertambahan Jumlah Penduduk Suatu Wilayah</strong>
                <br />
                Konkretnya seperti yang dicontohkan pada kebutuhan makanan
                pokok. Hal ini dapat dilihat pada sebagian besar penduduk
                Indonesia mengonsumsi makanan pokok yaitu beras. Apabila jumlah
                penduduk terjadi kenaikan, maka akan berpengaruh pula pada
                peningkatan akan beras yang diminta oleh masyarakat tersebut.
                <br /> <br />
                <strong>6. Asumsi terhadap Perubahan Harga</strong> <br />
                Kecenderungan seseorang membuat konsumen memiliki anggapan
                sendiri terhadap harga barang. Jika konsumen menganggap harga
                suatu barang terus naik (entah karena trend atau adanya
                perubahan kegiatan ekonomi), maka akan dapat diasumsikan barang
                yang diminta mengalami kenaikan pula. Berlaku pula kejadian yang
                berbalik, jika barang tertentu terjadi penurunan harga secara
                terus-menerus, maka konsumen akan menyimpulkan perilaku yang
                diputuskan hendak menunda pembelian sampai harga mencapai
                tingkat terendah. <br />
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

export default MaterialSubPermintaan2;
