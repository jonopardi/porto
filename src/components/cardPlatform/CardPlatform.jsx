import React from "react";
import { useRef, useEffect, useState } from "react";
import styles from "./CardPlatform.module.css";
import { FaCss3, FaReact, FaHtml5, FaNode } from "react-icons/fa";
import { SiJavascript, SiExpress, SiMongodb, SiFirebase } from "react-icons/si";
const TO_SCROLL = 1;
const CardPlatform = ({ cardName, refCard, cardIcon }) => {
  const [scrolled, setScrolled] = useState(0);
  const styleIcon = { fontSize: "35px" };
  let data = [
    {
      Icon: <FaHtml5 style={styleIcon} />,
      Name: "HTML",
    },
    {
      Icon: <FaCss3 style={styleIcon} />,
      Name: "CSS",
    },
    {
      Icon: <SiJavascript style={styleIcon} />,
      Name: "Javascript",
    },
    {
      Icon: <FaReact style={styleIcon} />,
      Name: "React JS",
    },
    {
      Icon: <SiExpress style={styleIcon} />,
      Name: "Express JS",
    },
    {
      Icon: <FaNode style={styleIcon} />,
      Name: "Node JS",
    },
    {
      Icon: <SiMongodb style={styleIcon} />,
      Name: "Mongo DB",
    },
    {
      Icon: <FaReact style={styleIcon} />,
      Name: "React Native",
    },
    {
      Icon: <SiFirebase style={styleIcon} />,
      Name: "Firebase/ Firestore",
    },
  ];
  const [timer, setTimer] = useState(0);
  const handleSlide = () => {
    const container = document.querySelector("#selectedContainer");
    container.scrollLeft = scrolled + TO_SCROLL;
    setScrolled((prev) => prev + TO_SCROLL);
  };

  let newArray = data.concat(data);

  // useEffect(() => {
  //   const container = document.querySelector("#selectedContainer");
  //   const containerContent = container.innerHTML;
  //   const width = container.scrollWidth;

  //   setTimeout(() => {
  //     container.scrollLeft = scrolled + TO_SCROLL;
  //     setScrolled((prev) => prev + TO_SCROLL);

  //     if (scrolled > width / 2 - 100) {
  //       container.insertAdjacentHTML("beforeend", containerContent);
  //     }

  //     setTimer((prev) => prev + 1);
  //   }, 1);
  // }, [timer]);

  return (
    // <div className={styles.content__container}>
    //   <div className={styles.contentOuter__container}>
    //     <div className={styles.landingName__container}/>
    //----------------------------------------------------------
    // <div className={styles.content__autoScroll}>
    //   <div className={styles.container} id="selectedContainer">
    //     {newArray.map((item, index) => (
    //       <div key={index} className={styles.card}>
    //         <div className={styles.card__container}>
    //           <div className={styles.cardIcon__container}> {item.Icon}</div>

    //           <div className={styles.card__name}>{item.Name}</div>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <div className={styles.content__autoScroll}>
      <article className={styles.wrapper}>
        <div className={styles.marquee}>
          <div className={styles.marquee_group}>
            {/* <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={`${styles.fa} ${styles.er}`}></i> */}
            {newArray.map((item, index) => (
              <div key={index} className={`${styles.fa} ${styles.card}`}>
                <div className={styles.card__container}>
                  <div className={styles.cardIcon__container}> {item.Icon}</div>

                  <div className={styles.card__name}>{item.Name}</div>
                </div>
              </div>
            ))}
          </div>
          <div aria-hidden="ture" className={styles.marquee_group}>
            {/* <i className={`${styles.fa} ${styles.es}`}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i>
            <i className={styles.fa}></i> */}
            {newArray.map((item, index) => (
              <div key={index} className={`${styles.fa} ${styles.card}`}>
                <div className={styles.card__container}>
                  <div className={styles.cardIcon__container}> {item.Icon}</div>

                  <div className={styles.card__name}>{item.Name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </article>
    </div>
    //-------------------------------------------------------------
    //     </div>
    //   </div>
    // </div>
  );
};

export default CardPlatform;
