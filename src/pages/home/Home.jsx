import React from "react";
import { Link } from "react-router-dom";

import styles from "./Home.module.css";

import Footer from "components/Footer/Footer";

import icHome from "../../assets/icons/ic-home.png";
import icUnesa from "../../assets/icons/unesa.png";
import icKurva from "../../assets/icons/menu_kurva.png";
import icKurvaHover from "../../assets/icons/menu_kurva_hover.png";
import icAbout from "../../assets/icons/menu_about.png";
import icAboutHover from "../../assets/icons/menu_about_hover.png";
import icGuide from "../../assets/icons/menu_guide.png";
import icGuideHover from "../../assets/icons/menu_guide_hover.png";
import icGlosarium from "../../assets/icons/menu_glosarium.png";
import icGlosariumHover from "../../assets/icons/menu_glosarium_hover.png";
import icMaterial from "../../assets/icons/menu_material.png";
import icMaterialHover from "../../assets/icons/menu_material_hover.png";
import icEvaluation from "../../assets/icons/menu_evaluation.png";
import icEvaluationHover from "../../assets/icons/menu_evaluation_hover.png";
import awan from "../../assets/icons/awan.png";

const Home = () => {
  return (
    <div className={styles["image-bg-dashboard"]}>
      <div className={styles["headers"]}>
        <div className={styles["item-header"]}>
          <img src={icHome} alt="menu-home" width="45" height="45" />
          <label>| Mind Mapping</label>
        </div>
        <img src={icUnesa} alt="logo-unesa" height="41" />
      </div>
      <div className={styles["main-menu"]}>
        <div className={styles["upper-menu"]}>
          <Link to="/kurva">
            <img
              className={styles["img-back"]}
              src={icKurvaHover}
              alt="menu-kurva"
            />
            <img
              className={styles["img-front"]}
              src={icKurva}
              alt="menu-kurva"
            />
          </Link>
        </div>
        <div className={styles["group-menu"]}>
          <div className={styles["menu-about"]}>
            <Link to="/about">
              <img
                className={styles["img-back"]}
                src={icAboutHover}
                alt="menu-about"
              />
              <img
                className={styles["img-front"]}
                src={icAbout}
                alt="menu-about"
              />
            </Link>
          </div>

          <div className={styles["menu-guide"]}>
            <Link to="/guide">
              <img
                className={styles["img-back"]}
                src={icGuideHover}
                alt="menu-guide"
              />
              <img
                className={styles["img-front"]}
                src={icGuide}
                alt="menu-guide"
              />
            </Link>
          </div>

          <div className={styles["menu-glosarium"]}>
            <Link to="/glosarium">
              <img
                className={styles["img-back"]}
                src={icGlosariumHover}
                alt="menu-glosarium"
              />
              <img
                className={styles["img-front"]}
                src={icGlosarium}
                alt="menu-glosarium"
              />
            </Link>
          </div>

          <div className={styles["menu-material"]}>
            <Link to="/material">
              <img
                className={styles["img-back"]}
                src={icMaterialHover}
                alt="menu-material"
              />
              <img
                className={styles["img-front"]}
                src={icMaterial}
                alt="menu-material"
              />
            </Link>
          </div>

          <div className={styles["menu-evaluation"]}>
            <Link to="/evaluationinstructions">
              <img
                className={styles["img-back"]}
                src={icEvaluationHover}
                alt="menu-evaluation"
              />
              <img
                className={styles["img-front"]}
                src={icEvaluation}
                alt="menu-evaluation"
              />
            </Link>
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

export default Home;
