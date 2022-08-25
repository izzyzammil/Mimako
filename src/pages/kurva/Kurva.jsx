import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

import styles from "./Kurva.module.css";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icClear from "../../assets/icons/icon-park_clear-format.png";
import Footer from "components/Footer/Footer";

const Kurva = ({
  xDomain = [-1, 3],
  yDomain = [-5, 15],
  xAxisOn0 = true,
  yAxisOn0 = true,
  verticalTickValues = [],
  horizontalTickValues = [0],
}) => {
  // TODO Rumus kiri, bagian kiri atas
  const [qd1, setQd1] = useState(0);
  const [a1, setA1] = useState(0);
  const [a11, setA11] = useState(0);
  const [b1, setB1] = useState(0);
  const [p1, setP1] = useState(0);
  const [cek1, setCek1] = useState();

  const onQD1 = (e) => {
    e.preventDefault();
    setQd1(a1 - b1 * p1);
  };

  // TODO Rumus kiri, bagian kiri bawah
  const [qTemp, setQTemp] = useState(0);
  const [a2Temp, setA2Temp] = useState(0);
  const [qd2, setQd2] = useState(0);
  const [a2, setA2] = useState(0);
  const [b2, setB2] = useState(0);

  const onQD2 = (e) => {
    e.preventDefault();
    setQd2((a2 - qTemp) / b2);
  };

  // TODO Rumus kiri, bagian kanan
  const [qd3, setQd3] = useState(0);
  const [a3, setA3] = useState(0);
  const [b3, setB3] = useState(0);
  const [p3, setP3] = useState(0);

  const onQD3 = (e) => {
    e.preventDefault();
    let temp = b3 * p3;
    setQd3(a3 - temp);
  };

  // TODO Rumus tengah, bagian kiri atas
  const [qs1, setQs1] = useState(0);
  const [a4, setA4] = useState(0);
  const [a44, setA44] = useState(0);
  const [b4, setB4] = useState(0);
  const [p4, setP4] = useState(0);
  const [cek4, setCek4] = useState(0);

  const onQS1 = (e) => {
    e.preventDefault();
    const temp = Number(b4 * p4);
    setQs1(a4 + temp);
  };

  // TODO Rumus tengah, bagian kiri bawah
  const [qStemp, setQsTemp] = useState(0);
  const [a5Temp, setA5Temp] = useState(0);
  const [qs2, setQs2] = useState(0);
  const [a5, setA5] = useState(0);
  const [b5, setB5] = useState(0);

  const onQS2 = (e) => {
    e.preventDefault();
    return setQs2((a5 + qStemp) / -b5);
  };

  // TODO Rumus tengah, bagian kanan
  const [qs3, setQs3] = useState(0);
  const [a6, setA6] = useState(0);
  const [b6, setB6] = useState(0);
  const [p6, setP6] = useState(0);

  const onQS3 = (e) => {
    e.preventDefault();
    let temp = Number(b6 * p6);
    setQs3(Number(a6 + temp));
  };

  // TODO: Rumus step 1
  const [a7, setA7] = useState(0);
  const [b7, setB7] = useState(0);
  const [a8, setA8] = useState(0);
  const [b8, setB8] = useState(0);
  const [pAbove, setPAbove] = useState(0);
  const [pUnder, setPUnder] = useState(0);
  const [p8, setP8] = useState(0);

  const onP = (e) => {
    e.preventDefault();
    let under = -b8 - b7;
    let above = a8 + -a7;
    setP8(above / under);
  };

  // TODO: Rumus Step 2
  const [a9, setA9] = useState(0);
  const [b9, setB9] = useState(0);
  const [p9, setP9] = useState(0);

  const [qdLast, setQdLast] = useState(0);

  const onQdLast = (e) => {
    e.preventDefault();
    let temp = b7 * p8;
    setQdLast(Number(a7 - temp));
  };

  // TODO: Get data from table
  const [pTable1, setPTable1] = useState();
  const [pTable2, setPTable2] = useState();
  const [pTable3, setPTable3] = useState();
  const [pTable4, setPTable4] = useState();
  const [pTable5, setPTable5] = useState();
  const [pTable6, setPTable6] = useState();
  const [pTable7, setPTable7] = useState();
  const [pTable8, setPTable8] = useState();
  const [pTable9, setPTable9] = useState();
  const [pTable10, setPTable10] = useState();

  const [qdTable1, setQdTable1] = useState();
  const [qdTable2, setQdTable2] = useState();
  const [qdTable3, setQdTable3] = useState();
  const [qdTable4, setQdTable4] = useState();
  const [qdTable5, setQdTable5] = useState();
  const [qdTable6, setQdTable6] = useState();
  const [qdTable7, setQdTable7] = useState();
  const [qdTable8, setQdTable8] = useState();
  const [qdTable9, setQdTable9] = useState();
  const [qdTable10, setQdTable10] = useState();

  const [qsTable1, setQsTable1] = useState();
  const [qsTable2, setQsTable2] = useState();
  const [qsTable3, setQsTable3] = useState();
  const [qsTable4, setQsTable4] = useState();
  const [qsTable5, setQsTable5] = useState();
  const [qsTable6, setQsTable6] = useState();
  const [qsTable7, setQsTable7] = useState();
  const [qsTable8, setQsTable8] = useState();
  const [qsTable9, setQsTable9] = useState();
  const [qsTable10, setQsTable10] = useState();

  // TODO: Plotting the value to axis
  const data01 = [
    { x: qd1, y: 0 },
    { x: 0, y: qd2 },
  ];
  const data02 = [
    { x: qs1, y: 0 },
    { x: 0, y: qs2 },
    { x: qdLast, y: p8 },
    { x: qdLast * 1.09, y: p8 * 1.09 },
  ];

  const dataTable01 = [
    { x: qdTable1, y: pTable1 },
    { x: qdTable2, y: pTable2 },
    { x: qdTable3, y: pTable3 },
    { x: qdTable4, y: pTable4 },
    { x: qdTable5, y: pTable5 },
    { x: qdTable6, y: pTable6 },
    { x: qdTable7, y: pTable7 },
    { x: qdTable8, y: pTable8 },
    { x: qdTable9, y: pTable9 },
    { x: qdTable10, y: pTable10 },
  ];
  const dataTable02 = [
    { x: qsTable1, y: pTable1 },
    { x: qsTable2, y: pTable2 },
    { x: qsTable3, y: pTable3 },
    { x: qsTable4, y: pTable4 },
    { x: qsTable5, y: pTable5 },
    { x: qsTable6, y: pTable6 },
    { x: qsTable7, y: pTable7 },
    { x: qsTable8, y: pTable8 },
    { x: qsTable9, y: pTable9 },
    { x: qsTable10, y: pTable10 },
  ];

  const handleClearData1 = (e) => {
    e.preventDefault();
    setA1(0);
    setB1(0);
    setP1(0);
    setA11(0);
    setCek1(0);
    setQd1(0);
    setA2(0);
    setB2(0);
    setQd2(0);
    setA3(0);
    setB3(0);
    setP3(0);
    setQd3(0);
  };

  const handleClearData2 = (e) => {
    e.preventDefault();
    setA4(0);
    setB4(0);
    setP4(0);
    setCek4(0);
    setQs1(0);
    setA5(0);
    setB5(0);
    setQs2(0);
    setA6(0);
    setB6(0);
    setP6(0);
    setQs3(0);
  };

  const handleClearData3 = (e) => {
    e.preventDefault();
    setA7(0);
    setB7(0);
    setA8(0);
    setB8(0);
    setPAbove(0);
    setPUnder(0);
    setP8(0);
    setA9(0);
    setB9(0);
    setP9(0);
    setQdLast(0);
  };

  const handleClearDataTable = (e) => {
    e.preventDefault();
    window.location.reload(false);
    setPTable1();
    setPTable2();
    setPTable3();
    setPTable4();
    setPTable5();
    setPTable6();
    setPTable7();
    setPTable8();
    setPTable9();
    setPTable10();
    setQdTable1();
    setQdTable2();
    setQdTable3();
    setQdTable4();
    setQdTable5();
    setQdTable6();
    setQdTable7();
    setQdTable8();
    setQdTable9();
    setQdTable10();
    setQsTable1();
    setQsTable2();
    setQsTable3();
    setQsTable4();
    setQsTable5();
    setQsTable6();
    setQsTable7();
    setQsTable8();
    setQsTable9();
    setQsTable10();
  };

  return (
    <div className={styles["image-bg-kurva"]}>
      <div className={styles["headers"]}>
        <Link to="/home">
          <div className={styles["item-header"]}>
            <img src={icHome} alt="menu-home" width="45" height="45" />
            <p>| Belajar Rumus {"&"} Kurva - Mind Mapping</p>
          </div>
        </Link>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>

      <div className={styles["container"]}>
        <div className={styles["left-content"]}>
          <div className={styles["left"]}>
            <form action="">
              <p style={{ textAlign: "center" }}>Diasumsikan:</p>
              <div className={styles["label1"]}>
                <label>Jika P = </label>
                <input type="text" placeholder="...." />
                <label>, maka Q = </label>
                <input type="text" placeholder="...." />
              </div>
              <p className={styles["text-Qd"]}>
                Di mana, <strong>Qd = a - b x P</strong>
              </p>
              <div className={styles["label2"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a1"
                  value={a1}
                  onChange={(e) => setA1(Number(e.target.value))}
                />
                <label>-</label>
                <input
                  type="text"
                  name="b1"
                  value={b1}
                  onChange={(e) => setB1(Number(e.target.value))}
                />
                <label>x</label>
                <input
                  type="text"
                  name="p1"
                  value={p1}
                  onChange={(e) => setP1(Number(e.target.value))}
                />
              </div>
              <div className={styles["label3"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a1"
                  value={a1}
                  onChange={(e) => setA11(Number(e.target.value))}
                  disabled
                />
                <label>-</label>
                <input
                  type="text"
                  name="cek1"
                  value={b1 * p1}
                  onChange={(e) => setCek1(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label4"]}>
                <label>=</label>
                <input
                  type="text"
                  name="qd1"
                  value={qd1}
                  onChange={(e) => setQd1(Number(e.target.value))}
                  disabled
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    onQD1(e);
                  }}
                >
                  Hitung
                </button>
              </div>
              <div className={styles["label5"]}>
                <label>Jika P = </label>
                <input type="text" placeholder="...." />
                <label>, maka Q = </label>
                <input type="text" placeholder="...." />
              </div>
              <p className={styles["text-Qd"]}>
                Di mana, <strong>Qd = a - b x P</strong>
              </p>
              <div className={styles["label6"]}>
                <input
                  type="text"
                  name="Qd"
                  value={qTemp}
                  onChange={(e) => {
                    setQTemp(Number(e.target.value));
                  }}
                />
                <label>=</label>
                <input
                  type="text"
                  name="a2"
                  value={a2}
                  onChange={(e) => setA2(Number(e.target.value))}
                />
                <label>-</label>
                <input
                  type="text"
                  name="b2"
                  value={b2}
                  onChange={(e) => setB2(Number(e.target.value))}
                />
                <label>x</label>
                <label style={{ marginLeft: 6 }}>
                  <strong>P</strong>
                </label>
              </div>
              <div className={styles["label7"]}>
                <input
                  type="text"
                  name="b2"
                  value={b2}
                  onChange={(e) => setA1(Number(e.target.value))}
                  disabled
                />
                <label>x</label>
                <label style={{ marginRight: 14, marginLeft: 10 }}>
                  <strong>P</strong>
                </label>
                <label>=</label>
                <input
                  type="text"
                  name="a2"
                  value={a2}
                  onChange={(e) => setA2(e.target.value)}
                  disabled
                />
                <label>-</label>
                <input
                  type="text"
                  name="Qd"
                  value={qTemp}
                  onChange={(e) => {
                    setQTemp(Number(e.target.value));
                  }}
                  disabled
                />
              </div>
              <div className={styles["label8"]}>
                <p>
                  <strong>P</strong>
                </p>
                <label>=</label>
                <input
                  type="text"
                  name="a2Temp"
                  value={Number(a2 - qTemp)}
                  onChange={(e) => setA2Temp(Number(e.target.value))}
                  disabled
                />
                <label>/</label>
                <input
                  type="text"
                  name="b2"
                  value={b2}
                  onChange={(e) => setB2(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label9"]}>
                <p>
                  <strong>P</strong>
                </p>
                <label>=</label>
                <input
                  type="text"
                  name="qd2"
                  value={qd2}
                  onChange={(e) => setQd2(Number(e.target.value))}
                  disabled
                />
                <button type="submit" onClick={(e) => onQD2(e)}>
                  Hitung
                </button>
              </div>
            </form>
          </div>

          <div className={styles["right"]}>
            <form action="">
              <p>
                <strong>Qd = a – b.P</strong>
              </p>
              <div className={styles["label1"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a3"
                  value={a3}
                  onChange={(e) => setA3(Number(e.target.value))}
                />
                <label>-</label>
                <input
                  type="text"
                  name="b3"
                  value={b3}
                  onChange={(e) => setB3(Number(e.target.value))}
                />
                <label>x</label>
                <input
                  type="text"
                  name="p3"
                  value={p3}
                  onChange={(e) => setP3(Number(e.target.value))}
                />
              </div>
              <div className={styles["label2"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a3"
                  value={a3}
                  onChange={(e) => setA3(Number(e.target.value))}
                  disabled
                />
                <label>-</label>
                <input
                  type="text"
                  name="a1"
                  value={b3 * p3}
                  onChange={(e) => setA1(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label3"]}>
                <label>=</label>
                <input
                  type="text"
                  name="qd3"
                  value={qd3}
                  onChange={(e) => setQd3(Number(e.target.value))}
                  disabled
                />
                <label>
                  <strong>unit</strong>
                </label>
              </div>
              <button type="submit" onClick={(e) => onQD3(e)}>
                Hitung
              </button>

              <div className={styles["button"]}>
                <div
                  className={styles["tombol-clear"]}
                  onClick={(e) => handleClearData1(e)}
                >
                  clear data
                  <img src={icClear} alt="tombol-clear" />
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className={styles["center-content"]}>
          <div className={styles["left"]}>
            <form action="">
              <p style={{ textAlign: "center" }}>Diasumsikan:</p>
              <div className={styles["label1"]}>
                <label>Jika P = </label>
                <input type="text" placeholder="...." />
                <label>, maka Q = </label>
                <input type="text" placeholder="...." />
              </div>
              <p className={styles["text-Qd"]}>
                Di mana, <strong>Qs = -a + b x P</strong>
              </p>
              <div className={styles["label2"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a4"
                  value={Number(a4)}
                  onChange={(e) => setA4(Number(e.target.value))}
                />
                <label>+</label>
                <input
                  type="text"
                  name="b4"
                  value={Number(b4)}
                  onChange={(e) => setB4(Number(e.target.value))}
                />
                <label>x</label>
                <input
                  type="text"
                  name="p4"
                  value={Number(p4)}
                  onChange={(e) => setP4(Number(e.target.value))}
                />
              </div>
              <div className={styles["label3"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a4"
                  value={Number(a4)}
                  onChange={(e) => setA4(Number(e.target.value))}
                  disabled
                />
                <label>+</label>
                <input
                  type="text"
                  name="cek4"
                  value={Number(b4 * p4)}
                  onChange={(e) => setCek4(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label4"]}>
                <label>=</label>
                <input
                  type="text"
                  name="qs1"
                  value={Number(qs1)}
                  onChange={(e) => setQs1(Number(e.target.value))}
                  disabled
                />
                <button
                  type="submit"
                  onClick={(e) => {
                    onQS1(e);
                  }}
                >
                  Hitung
                </button>
              </div>
              <div className={styles["label5"]}>
                <label>Jika P = </label>
                <input type="text" placeholder="...." />
                <label>, maka Q = </label>
                <input type="text" placeholder="...." />
              </div>
              <p className={styles["text-Qd"]}>
                Di mana, <strong>Qs = -a + b x P</strong>
              </p>
              <div className={styles["label6"]}>
                <input
                  type="text"
                  name="Qs"
                  value={qStemp}
                  onChange={(e) => {
                    setQsTemp(Number(e.target.value));
                  }}
                />
                <label>=</label>
                <input
                  type="text"
                  name="a5"
                  value={a5}
                  onChange={(e) => setA5(Number(e.target.value))}
                />
                <label>+</label>
                <input
                  type="text"
                  name="b5"
                  value={b5}
                  onChange={(e) => setB5(Number(e.target.value))}
                />
                <label>x</label>
                <label style={{ marginLeft: 6 }}>
                  <strong>P</strong>
                </label>
              </div>
              <div className={styles["label7"]}>
                <input
                  type="text"
                  name="b5"
                  value={-b5}
                  onChange={(e) => setB5(Number(e.target.value))}
                  disabled
                />
                <label>x</label>
                <label style={{ marginRight: 14, marginLeft: 10 }}>
                  <strong>P</strong>
                </label>
                <label>=</label>
                <input
                  type="text"
                  name="a5"
                  value={a5}
                  onChange={(e) => setA5(Number(e.target.value))}
                  disabled
                />
                <label>+</label>
                <input
                  type="text"
                  name="Qs"
                  value={qStemp}
                  onChange={(e) => {
                    setQsTemp(Number(e.target.value));
                  }}
                  disabled
                />
              </div>
              <div className={styles["label8"]}>
                <p>
                  <strong>P</strong>
                </p>
                <label>=</label>
                <input
                  type="text"
                  name="a5Temp"
                  value={Number(a5 + qStemp)}
                  onChange={(e) => setA5Temp(Number(e.target.value))}
                  disabled
                />
                <label>/</label>
                <input
                  type="text"
                  name="b5"
                  value={-b5}
                  onChange={(e) => setB5(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label9"]}>
                <p>
                  <strong>P</strong>
                </p>
                <label>=</label>
                <input
                  type="text"
                  name="qs2"
                  value={qs2}
                  onChange={(e) => setQs2(Number(e.target.value))}
                  disabled
                />
                <button type="submit" onClick={(e) => onQS2(e)}>
                  Hitung
                </button>
              </div>
            </form>
          </div>

          <div className={styles["right"]}>
            <form action="">
              <p>
                <strong>Qd = a – b.P</strong>
              </p>
              <div className={styles["label1"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a6"
                  value={Number(a6)}
                  onChange={(e) => setA6(Number(e.target.value))}
                />
                <label>+</label>
                <input
                  type="text"
                  name="b6"
                  value={Number(b6)}
                  onChange={(e) => setB6(Number(e.target.value))}
                />
                <label>x</label>
                <input
                  type="text"
                  name="p6"
                  value={Number(p6)}
                  onChange={(e) => setP6(Number(e.target.value))}
                />
              </div>
              <div className={styles["label2"]}>
                <label>=</label>
                <input
                  type="text"
                  name="a6"
                  value={Number(a6)}
                  onChange={(e) => setA6(Number(e.target.value))}
                  disabled
                />
                <label>+</label>
                <input
                  type="text"
                  name="a6"
                  value={Number(b6 * p6)}
                  onChange={(e) => setA6(Number(e.target.value))}
                  disabled
                />
              </div>
              <div className={styles["label3"]}>
                <label>=</label>
                <input
                  type="text"
                  name="qs3"
                  value={Number(qs3)}
                  onChange={(e) => setQs3(Number(e.target.value))}
                  disabled
                />
                <label>
                  <strong>unit</strong>
                </label>
              </div>
              <button type="submit" onClick={(e) => onQS3(e)}>
                Hitung
              </button>

              <div className={styles["button"]}>
                <div
                  className={styles["tombol-clear"]}
                  onClick={(e) => handleClearData2(e)}
                >
                  clear data
                  <img src={icClear} alt="tombol-clear" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className={styles["content-step"]}>
        <div className={styles["right"]}>
          <div className={styles["kurva"]}>
            <ScatterChart
              width={600}
              height={400}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="x"
                name="P"
                domain={[0, "dataMax"]}
                tickCount={21}
              />

              <YAxis
                type="number"
                dataKey="y"
                name="Q"
                domain={[0, "dataMax"]}
                tickCount={7}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter
                name="Qd"
                data={data01}
                fill="#FF0000"
                line
                shape="circle"
              />
              <Scatter
                name="Qs"
                data={data02}
                fill="#00FF00"
                line
                shape="circle"
              />
            </ScatterChart>
          </div>
        </div>

        <div className={styles["right-content"]}>
          <div className={styles["text-awal"]}>
            <p className={styles["step"]}>
              <strong>STEP 1</strong>
            </p>
            <p className={styles["Qd"]}>Qd` = Qs</p>
            <p className={styles["rumus"]}>a – b x P = a + b x P</p>
          </div>
          <div className={styles["label-right1"]}>
            <input
              type="text"
              name="a7"
              value={a7}
              onChange={(e) => setA7(Number(e.target.value))}
            />
            <label>-</label>
            <input
              type="text"
              name="b7"
              value={b7}
              onChange={(e) => setB7(Number(e.target.value))}
            />
            <label>x</label>
            <label style={{ marginLeft: 14, marginRight: 16 }}>
              <strong>P</strong>
            </label>
            <label>=</label>
            <input
              type="text"
              name="a8"
              value={a8}
              onChange={(e) => setA8(Number(e.target.value))}
            />
            <label>+</label>
            <input
              type="text"
              name="b8"
              value={b8}
              onChange={(e) => setB8(Number(e.target.value))}
            />
            <label>x</label>
            <label style={{ marginLeft: 6 }}>
              <strong>P</strong>
            </label>
          </div>
          <div className={styles["label-right2"]}>
            <input
              type="text"
              name="b8"
              value={-b8}
              onChange={(e) => setB8(Number(e.target.value))}
              disabled
            />
            <label>x</label>
            <label style={{ marginLeft: 14, marginRight: 16 }}>
              <strong>P</strong>
            </label>
            <label>-</label>
            <input
              type="text"
              name="b7"
              value={b7}
              onChange={(e) => setB7(Number(e.target.value))}
              disabled
            />
            <label>x</label>
            <label style={{ marginLeft: 14, marginRight: 16 }}>
              <strong>P</strong>
            </label>

            <label>=</label>
            <input
              type="text"
              name="a8"
              value={a8}
              onChange={(e) => setA8(Number(e.target.value))}
              disabled
            />
            <label>-</label>
            <input
              type="text"
              name="a7"
              value={a7}
              onChange={(e) => setA7(Number(e.target.value))}
              disabled
            />
          </div>
          <div className={styles["label-right3"]}>
            <input
              type="text"
              name="hasil P"
              value={Number(-b8 - b7)}
              readOnly
              disabled
            />
            <label>x</label>
            <label style={{ marginLeft: 14, marginRight: 16 }}>
              <strong>P</strong>
            </label>
            <label>=</label>
            <input
              type="text"
              name="temp2"
              value={Number(a8 + -a7)}
              onChange={(e) => setPAbove(Number(e.target.value))}
              disabled
            />
          </div>
          <div className={styles["label-right4"]}>
            <input
              type="text"
              name="P Atas"
              value={Number(a8 + -a7)}
              onChange={(e) => setPAbove(Number(e.target.value))}
              disabled
            />
          </div>

          <div className={styles["text-group"]}>
            <p>
              <strong>P</strong> =
            </p>
            <div className={styles["divider"]}></div>
          </div>

          <div className={styles["label-right5"]}>
            <input
              type="text"
              name="P Bawah"
              value={Number(-b8 - b7)}
              onChange={(e) => setPUnder(Number(e.target.value))}
              disabled
            />
          </div>
          <div className={styles["label-right6"]}>
            <label>
              <strong>P</strong> =
            </label>
            <input
              type="text"
              name="p Result"
              value={p8}
              onChange={(e) => setP8(Number(e.target.value))}
              disabled
            />
            <label>
              <strong>unit</strong>
            </label>
          </div>
          <button
            type="submit"
            onClick={(e) => {
              onP(e);
            }}
          >
            Hitung
          </button>

          <div className={styles["text-awal"]}>
            <p className={styles["step"]}>
              <strong>STEP 2</strong>
            </p>
            <p className={styles["Qd2"]}>Qd = a – b x P</p>
          </div>
          <div className={styles["label-right7"]}>
            <label>=</label>
            <input
              type="text"
              name="a9"
              value={a7}
              onChange={(e) => setA9(Number(e.target.value))}
            />
            <label>-</label>
            <input
              type="text"
              name="b9"
              value={b7}
              onChange={(e) => setB9(Number(e.target.value))}
            />
            <label>x</label>
            <input
              type="text"
              name="Qd End"
              value={p8}
              onChange={(e) => setP9(Number(e.target.value))}
            />
          </div>
          <div className={styles["label-right7"]}>
            <label>=</label>
            <input
              type="text"
              name="a9"
              value={a7}
              onChange={(e) => setA9(Number(e.target.value))}
              disabled
            />
            <label>-</label>
            <input type="text" name="a9" value={b7 * p8} readOnly disabled />
          </div>
          <div className={styles["label-right7"]}>
            <label>=</label>
            <input type="text" name="Qd End" value={qdLast} readOnly disabled />
            <label>
              <strong>unit</strong>
            </label>
          </div>

          <div className={styles["container-button"]}>
            <button type="submit" onClick={(e) => onQdLast(e)}>
              Hitung
            </button>

            <div className={styles["button-2"]}>
              <div
                className={styles["tombol-clear"]}
                onClick={(e) => handleClearData3(e)}
              >
                clear data
                <img src={icClear} alt="tombol-clear" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["content-table"]}>
        <div className={styles["left"]}>
          <table border="1">
            <thead>
              <tr>
                <th>P</th>
                <th>Qd</th>
                <th>Qs</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable1"
                    value={pTable1}
                    onChange={(e) => setPTable1(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable1"
                    value={qdTable1}
                    onChange={(e) => setQdTable1(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable1"
                    value={qsTable1}
                    onChange={(e) => setQsTable1(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable2"
                    value={pTable2}
                    onChange={(e) => setPTable2(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable2"
                    value={qdTable2}
                    onChange={(e) => setQdTable2(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable2"
                    value={qsTable2}
                    onChange={(e) => setQsTable2(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable3"
                    value={pTable3}
                    onChange={(e) => setPTable3(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable3"
                    value={qdTable3}
                    onChange={(e) => setQdTable3(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable3"
                    value={qsTable3}
                    onChange={(e) => setQsTable3(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable4"
                    value={pTable4}
                    onChange={(e) => setPTable4(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable4"
                    value={qdTable4}
                    onChange={(e) => setQdTable4(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable4"
                    value={qsTable4}
                    onChange={(e) => setQsTable4(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable5"
                    value={pTable5}
                    onChange={(e) => setPTable5(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable5"
                    value={qdTable5}
                    onChange={(e) => setQdTable5(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable5"
                    value={qsTable5}
                    onChange={(e) => setQsTable5(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable6"
                    value={pTable6}
                    onChange={(e) => setPTable6(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable6"
                    value={qdTable6}
                    onChange={(e) => setQdTable6(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable6"
                    value={qsTable6}
                    onChange={(e) => setQsTable6(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable7"
                    value={pTable7}
                    onChange={(e) => setPTable7(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable7"
                    value={qdTable7}
                    onChange={(e) => setQdTable7(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable7"
                    value={qsTable7}
                    onChange={(e) => setQsTable7(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable8"
                    value={pTable8}
                    onChange={(e) => setPTable8(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable8"
                    value={qdTable8}
                    onChange={(e) => setQdTable8(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable8"
                    value={qsTable8}
                    onChange={(e) => setQsTable8(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable9"
                    value={pTable9}
                    onChange={(e) => setPTable9(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable9"
                    value={qdTable9}
                    onChange={(e) => setQdTable9(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable9"
                    value={qsTable9}
                    onChange={(e) => setQsTable9(Number(e.target.value))}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="text"
                    name="pTable10"
                    value={pTable10}
                    onChange={(e) => setPTable10(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qdTable10"
                    value={qdTable10}
                    onChange={(e) => setQdTable10(Number(e.target.value))}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    name="qsTable10"
                    value={qsTable10}
                    onChange={(e) => setQsTable10(Number(e.target.value))}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className={styles["right"]}>
          <div className={styles["kurva"]}>
            <ScatterChart
              width={600}
              height={400}
              margin={{
                top: 20,
                right: 20,
                bottom: 20,
              }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="x"
                name="P"
                domain={[0, "dataMax"]}
                tickCount={21}
              />

              <YAxis
                type="number"
                dataKey="y"
                name="Q"
                domain={[0, "dataMax"]}
                tickCount={21}
              />
              <Tooltip cursor={{ strokeDasharray: "3 3" }} />
              <Legend />
              <Scatter
                name="QdTable"
                data={dataTable01}
                fill="#FF0000"
                line
                shape="circle"
              />
              <Scatter
                name="QsTable"
                data={dataTable02}
                fill="#00FF00"
                line
                shape="circle"
              />
            </ScatterChart>
          </div>
        </div>
      </div>

      <div className={styles["button-3"]}>
        <div
          className={styles["tombol-clear"]}
          onClick={(e) => handleClearDataTable(e)}
        >
          clear data
          <img src={icClear} alt="tombol-clear" />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Kurva;
