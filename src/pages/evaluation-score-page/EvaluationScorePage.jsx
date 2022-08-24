import React from "react";
import { Link } from "react-router-dom";
import Pdf from "react-to-pdf";
import { useDispatch, useSelector } from "react-redux";

import styles from "./EvaluationScorePage.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icAvatar from "../../assets/icons/avatar.png";
import icDownload from "../../assets/icons/ic_round-download.png";
import icDone from "../../assets/icons/ic-mini-home.png";
import icTryAgain from "../../assets/icons/emoticon.png";
import { logout, selectUser, setAnswer, setNilai } from "features/userSlice";

import { soal } from "../../components/quiz/DataSoal";
import Footer from "components/Footer/Footer";

const EvaluationScorePage = () => {
  const user = useSelector(selectUser);
  const result = useSelector(setNilai);
  const cek = useSelector(setAnswer);
  const lastIndex = cek.length;

  let soalId = [];
  soal.map((item, index) => {
    if (index <= result.jumlahSoal - 1) soalId.push(item.id);
  });

  var difference = soalId.filter((x) => !cek[lastIndex - 1].cek.includes(x));

  let hasilEvaluasi = [];
  for (let i = 0; i < difference.length; i++) {
    const noSoal = soal[difference[i] - 1].id;
    const isiEvaluasi = soal[difference[i] - 1].evaluation;
    hasilEvaluasi.push({ noSoal: noSoal, isiEvaluasi: isiEvaluasi });
  }

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(logout());
  };

  const ref = React.createRef();

  const resultExam = () => {
    if (result.nilai >= 0 && result.nilai < 75) {
      return <p>(TIDAK LULUS)</p>;
    } else if (result.nilai >= 75 && result.nilai <= 100) {
      return <p>(LULUS)</p>;
    }
  };

  return (
    <div className={styles["image-bg-evaluasi"]} ref={ref}>
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
        <div className={styles["papan-skor"]}>
          <div className={styles["left-content"]}>
            <p>Hasil Kamu: </p>
            <div className={styles["skor"]}>
              <p className={styles["nilai-skor"]}>{result.nilai}/75</p>
              <p className={styles["kkm"]}>(KKM)</p>
            </div>
            <div className={styles["hasil-lulus"]}>{resultExam()}</div>
          </div>

          <div className={styles["divider"]}></div>

          <div className={styles["right-content"]}>
            <div className={styles["atribut-siswa"]}>
              <div className={styles["avatar-siswa"]}>
                <img src={icAvatar} alt="avatar siswa" />
              </div>
              <div className={styles["identitas-siswa"]}>
                <p>
                  {user.nama}
                  <br />
                  {user.kelas} - {user.no}
                </p>
              </div>
            </div>
            <div className={styles["keterangan-soal"]}>
              <table>
                <tbody>
                  <tr>
                    <td>Jumlah Soal</td>
                    <td>:</td>
                    <td>{result.jumlahSoal}</td>
                  </tr>
                  <tr>
                    <td>Jawaban Benar</td>
                    <td>:</td>
                    <td>{result.nilaiBenar}</td>
                  </tr>
                  <tr>
                    <td>Jawaban Salah</td>
                    <td>:</td>
                    <td>{result.nilaiSalah}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className={styles["tombol-download"]}>
          <Pdf
            targetRef={ref}
            filename={`${user.nama}.pdf`}
            x={1}
            y={0.5}
            scale={0.77}
          >
            {({ toPdf }) => (
              <img src={icDownload} alt="download" onClick={toPdf} />
            )}
          </Pdf>
        </div>

        <div className={styles["tabel-evaluasi"]}>
          <table border="2" className={styles["evaluasi"]}>
            <thead>
              <tr>
                <th>Nomor Soal</th>
                <th>Evaluasi</th>
              </tr>
            </thead>
            <tbody>
              {hasilEvaluasi.map((item, index) => (
                <tr key={index}>
                  <td>{item.noSoal}</td>
                  <td>{item.isiEvaluasi}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles["button"]}>
        <div className={styles["tombol-mengulang"]}>
          <Link to="/evaluationhome">
            <img
              src={icTryAgain}
              alt="tombol-back"
              onClick={(e) => handleLogout(e)}
            />
            Saya mau coba lagi
          </Link>
        </div>
        <div className={styles["tombol-selesai"]}>
          <Link to="/home">
            Saya sudah selesai
            <img src={icDone} alt="tombol-lanjut" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EvaluationScorePage;
