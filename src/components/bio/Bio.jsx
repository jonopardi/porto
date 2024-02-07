import React from "react";
import styles from "./Bio.module.css";
import personvector from "../../assets/personvector1.png";

const Bio = () => {
  return (
    <div className={styles.content__container}>
      <div className={styles.contentOuter__container}>
        <div className={styles.landingName__container}>
          <h1>About Me</h1>
          <p align="justify" className={styles.paragraph}>
            I'm a recent graduate from Universitas Atma Jaya Yogyakarta with a
            degree in Informatics, proudly maintaining a GPA of 3.58. My journey
            into the world of coding began around 2019-2020. My specialization
            lies in Javascript, especially React JS, and I've been learning a
            lot about JavaScript to become a fullstack developer. Despite being
            a fresh graduate, I've already undertaken various projects,
            showcasing my dedication and passion for coding. While I may lack
            formal work experience, my enthusiasm and commitment are evident in
            the projects I've successfully completed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
