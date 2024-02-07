import React, { useRef, useEffect, useState } from "react";
import styles from "./Home.module.css";
import Bio from "../../components/bio/Bio";
import LandingName from "../../components/landingName/LandingName";
import AboutMe from "../../components/aboutMe/AboutMe";
import CardPlatform from "../../components/cardPlatform/CardPlatform";
import Projects from "../../components/projects/Projects";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div className={styles.wrap} id="wrap">
      <LandingName />
      <AboutMe />
      {/* <div className={styles.content__autoScroll}> */}
      {/* <CardPlatform /> */}
      {/* </div> */}
      <Bio />
      <Projects />
      <Footer />
      {/* <div className={styles.content__container}>B</div>
      <div className={styles.content__container1}>C</div>
      <div className={styles.content__container}>D</div>
      <div className={styles.content__container}>E</div>
      <div className={styles.content__container}>E</div>
      <div className={styles.content__container}>E</div> */}
    </div>
  );
};

export default Home;
