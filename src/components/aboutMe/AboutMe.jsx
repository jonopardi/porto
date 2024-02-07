import React from "react";
import styles from "./AboutMe.module.css";
import { useTranslation, Trans } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();
  return (
    <div id="aboutme" className={styles.content__container}>
      <div className={styles.contentOuter__container}>
        <div className={styles.landingName__container}>
          <h1>{t("about_me_title")}</h1>
          <p align="justify" className={styles.paragraph}>
            {t("about_me")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
