import React, { useState, useEffect, useRef } from "react";
import personvector from "../../assets/personvector1.png";
import styles from "./landingName.module.css";
import { TypeAnimation } from "react-type-animation";

const LandingName = () => {
  const [height, setHeight] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   setHeight(ref.current.clientHeight);
  // });
  return (
    <div id="index" className={styles.content__container}>
      <div className={styles.contentOuter__container}>
        <div className={styles.landingName__container}>
          <div className={styles.imgLanding__container}>
            <img src={personvector} className={styles.img__landing} />
          </div>

          <div className={styles.name__container}>
            <p className={styles.name}>
              Dionisius Berliano Surya Wijaya{height}
            </p>

            <p className={styles.title}>
              <TypeAnimation
                preRenderFirstString={true}
                sequence={[
                  1500,
                  "Frontend", // Types 'One'
                  1500, // Waits 1s
                  "Mobile", // Deletes 'One' and types 'Two'
                  1500, // Waits 2s
                  "Backend",
                  // Types 'Three' without deleting 'Two'
                  () => {
                    console.log("Sequence completed");
                  },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{
                  fontSize: "1.1em",
                  display: "inline-block",
                  backgroundColor: "#FFFF00",
                  fontWeight: "bold",
                  color: "#4E330B",
                }}
              />
              Developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingName;
