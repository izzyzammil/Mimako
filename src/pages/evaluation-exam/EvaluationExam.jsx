import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTimer } from "react-timer-hook";

import styles from "./EvaluationExam.module.css";
import { soal as dataSoal } from "../../components/quiz/DataSoal";

import icBack from "../../assets/icons/back.png";
import icUnesa from "../../assets/icons/unesa.png";
import icClock from "../../assets/icons/flat-color-icons_alarm-clock.png";
import icNext from "../../assets/icons/icon-park_arrow-circle-right2.png";
import icPrevious from "../../assets/icons/icon-park_arrow-circle-left.png";
import icSubmit from "../../assets/icons/icon-park_turn-on.png";
import { evalResult, result } from "features/userSlice";
import { useDispatch } from "react-redux";
import Footer from "components/Footer/Footer";

const EvaluationExam1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soal, setQuiz] = useState(dataSoal);
  const [score, setScore] = useState({
    correct: 0,
    wrong: 0,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const JumlahSoal = 30;
  const FinalScore = Math.round(score.correct * (100 / JumlahSoal));

  const handleSubmit = (e) => {
    navigate("/evaluationscorepage");

    dispatch(
      result({
        nilai: FinalScore,
        nilaiBenar: score.correct,
        nilaiSalah: score.wrong,
        jumlahSoal: JumlahSoal,
      })
    );
  };

  const { question, options, question2, image, imgSize } = soal[currentIndex];

  const MINUTES = 45 * 60;
  const time = new Date();
  time.setSeconds(time.getSeconds() + MINUTES);

  const { seconds, minutes } = useTimer({
    expiryTimestamp: time,
    onExpire: () => handleSubmit(),
  });

  let iki = [];

  const checkScore = () => {
    const questionAnswered = soal.filter((item) => item.selected);
    const questionCorrect = questionAnswered.filter((item) =>
      item.options.find(
        (option) => option.correct && option.selected === option.correct
      )
    );

    const setEval = questionCorrect.filter((item) => item.id);
    setEval.map((item, index) => {
      iki.push(item.id);
    });

    setScore({
      correct: questionCorrect.length,
      wrong: JumlahSoal - questionCorrect.length,
    });

    dispatch(evalResult({ cek: iki }));
  };

  useEffect(() => {
    checkScore();
  }, [soal]);

  const nextQuestion = () => {
    if (JumlahSoal - 1 === currentIndex) return;
    setCurrentIndex(currentIndex + 1);
  };

  const previousQuestion = () => {
    if (currentIndex === 0) return;
    setCurrentIndex(currentIndex - 1);
  };

  const selectOption = (indexSelected, indexOptionSelected) => {
    setQuiz(
      soal.map((item, index) =>
        index === indexSelected
          ? {
              ...item,
              selected: true,
              options: options.map((item, index) =>
                index === indexOptionSelected
                  ? { ...item, selected: true }
                  : { ...item, selected: false }
              ),
            }
          : item
      )
    );
  };

  const tampilSoal = () => {
    if (currentIndex <= JumlahSoal) {
      return (
        <div className={styles["main-content"]}>
          <div className={styles["content-soal"]}>
            {question}
            <br />
            <img src={image} alt="" height={imgSize} />
            <br />
            {question2}
          </div>

          <div className={styles["content-jawaban"]}>
            {options.map((item, index) => (
              <button
                style={{
                  backgroundColor: item?.selected ? "#C5C5F7" : "white",
                }}
                onClick={() => selectOption(currentIndex, index)}
                key={index}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      );
    }
  };

  return (
    <div className={styles["image-bg-evaluasi"]}>
      <div className={styles["headers"]}>
        {currentIndex === 0 ? (
          <div className={styles["item-header"]}>
            <Link
              to={{
                pathname: "/evaluationhome",
              }}
            >
              <img src={icBack} alt="menu-home" width="42" height="34" />
              <p>| Evaluasi Belajar - Mind Mapping</p>
            </Link>
          </div>
        ) : (
          <div className={styles["item-header"]}>
            <img
              src={icBack}
              alt="menu-home"
              width="42"
              height="34"
              onClick={() => previousQuestion()}
            />
            <p>| Evaluasi Belajar - Mind Mapping</p>
          </div>
        )}
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["timer"]}>
          <img src={icClock} alt="waktu-soal" />
          <p>
            {minutes}:{seconds}
          </p>
        </div>

        <div className={styles["penanda-soal"]}>
          <h1>
            {currentIndex + 1}/{JumlahSoal}
          </h1>
        </div>

        {tampilSoal()}

        {/* <div className={styles["main-content"]}>
          <div className={styles["content-soal"]}>
            {question}
            <br />
            <img src={image} alt="" height={imgSize} />
            <br />
            {question2}
          </div>

          <div className={styles["content-jawaban"]}>
            {options.map((item, index) => (
              <button
                style={{
                  backgroundColor: item?.selected ? "#C5C5F7" : "white",
                }}
                onClick={() => selectOption(currentIndex, index)}
                key={index}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div> */}
      </div>
      <div className={styles["button"]}>
        <div
          className={styles["tombol-mundur"]}
          onClick={() => previousQuestion()}
        >
          <img src={icPrevious} alt="tombol-back" />
          eh bentar, cek dulu
        </div>

        {JumlahSoal - 1 === currentIndex ? (
          <div
            className={styles["tombol-submit"]}
            onClick={() => handleSubmit()}
          >
            Submit
            <img src={icSubmit} alt="tombol-submit" />
          </div>
        ) : (
          <div
            className={styles["tombol-lanjut"]}
            onClick={() => nextQuestion()}
          >
            lanjut
            <img src={icNext} alt="tombol-lanjut" />
          </div>
        )}
      </div>

      <div className={styles["exam-footer"]}>
        <Footer />
      </div>
    </div>
  );
};

export default EvaluationExam1;
