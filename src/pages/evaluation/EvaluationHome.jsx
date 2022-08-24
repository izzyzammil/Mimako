import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import styles from "./EvaluationHome.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icStartQuiz from "../../assets/icons/start-quiz.png";
import { login } from "features/userSlice";
import { useDispatch } from "react-redux";
import Footer from "components/Footer/Footer";

const EvaluationHome = () => {
  const [identitas, setIdentitas] = useState({ nama: "", kelas: "", no: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const mulaiQuiz = (e) => {
    e.preventDefault();

    dispatch(
      login({
        nama: identitas.nama,
        kelas: identitas.kelas,
        no: identitas.no,
        loggedIn: true,
      })
    );

    if (
      identitas.nama === "" ||
      identitas.kelas === "" ||
      identitas.no === ""
    ) {
      setError("*Isi dulu yuk identitasmu! :)");
    } else {
      navigate("/evaluationexam");
    }
  };

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
        <h2>Sebelum mulai bermain Quiz, kenalan dulu yuk!</h2>

        <div className={styles["main-content"]}>
          <form className={styles["left-content"]}>
            {error && (
              <div className={styles["msg-error"]}>
                <p>{error}</p>
              </div>
            )}

            <input
              type="text"
              name="nama"
              placeholder="Nama lengkapmu siapa?"
              value={identitas.nama}
              onChange={(e) =>
                setIdentitas({ ...identitas, nama: e.target.value })
              }
              autoFocus
            />
            <input
              type="text"
              name="kelas"
              placeholder="Kelas berapa?"
              value={identitas.kelas}
              onChange={(e) =>
                setIdentitas({ ...identitas, kelas: e.target.value })
              }
            />
            <input
              type="text"
              name="no-absen"
              placeholder="Nomor absen berapa?"
              value={identitas.no}
              onChange={(e) =>
                setIdentitas({ ...identitas, no: e.target.value })
              }
            />
          </form>

          <div className={styles["right-content"]}>
            <img
              src={icStartQuiz}
              alt="mulai-quiz"
              onClick={(e) => mulaiQuiz(e)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EvaluationHome;
