import React, { useState, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./Projects.module.css";
import { useTranslation, Trans } from "react-i18next";
import portos from "../../../porto.json";

const Projects = () => {
  let navigate = useNavigate();
  const { t } = useTranslation();
  console.log(portos);
  const handleDetail = (id) => {
    // const id = event.target.getAttribute("data-item");
    navigate(`/projects/${id}`);
    // setFetchStatus(true);
  };

  const [mouseLocation, setMouseLocation] = useState({ x: 0, y: 0 });
  const [isTooltipShown, setIsTooltipShown] = useState(false);
  const [productName, setProductName] = useState("Your Product Name"); // Set your actual product name here
  const mouseLocationRef = useRef({ x: 0, y: 0 });
  const productNameHandleHover = (event) => {
    // setMouseLocation({
    //   x: event.pageX,
    //   y: event.pageY,
    // });
    const x = event.pageX;
    const y = event.pageY;
    // Update the ref directly
    mouseLocationRef.current = { x, y };

    // Use the x and y directly, without updating state
    document.querySelector(`.${styles.tooltip}`).style.top = y + "px";
    document.querySelector(`.${styles.tooltip}`).style.left = x + "px";

    // setIsTooltipShown(true);
  };

  const productNameHandleNoHover = () => {
    // setIsTooltipShown(false);
  };
  return (
    <div id="projects" className={styles.content__container}>
      <div className={styles.contentOuter__container}>
        <div className={styles.landingName__container}>
          <h1>{t("about_me_title")}</h1>

          {/* <div
            className={styles.box}
            onMouseMove={productNameHandleHover}
            onMouseLeave={productNameHandleNoHover}
          >
            {productName}
            <div
              className={styles.tooltip}
              style={{
                // display: isTooltipShown ? "block" : "none",
                display: "block",
                top: `${mouseLocationRef.current.y}px`,
                left: `${mouseLocationRef.current.x}px`,
              }}
            >
              {productName}
            </div>
          </div> */}
          <div className={styles.card__container}>
            {/* <div className={styles.card}>
              <div className={styles.header}>
                <div className={styles.imgBox}>
                  <img
                    className={styles.imgHeader}
                    src="https://res.cloudinary.com/dyg40ju7w/image/upload/f_auto,q_auto/weoctipeg828qefqgd4t"
                  />
                </div>
              </div>

              <div className={styles.content}>
                <p>
                  Lorem ipsum dolor sit tali amet, consectus uy adipiscing it
                  amet it...
                </p>
                <a className={styles["btn-link"]}>Read More...</a>
              </div>
            </div> */}
            {portos.map((el) => {
              return (
                <>
                  <div className={styles.card}>
                    <div
                      onClick={() => handleDetail(el.id)}
                      className={styles.header}
                      onMouseMove={productNameHandleHover}
                      onMouseLeave={productNameHandleNoHover}
                    >
                      {/* <div className={styles.imgBox}> */}
                      <img className={styles.imgHeader} src={el.images[0]} />
                      {/* </div> */}
                    </div>

                    <div className={styles.content}>
                      <p
                        onClick={() => handleDetail(el.id)}
                        className={styles.titleProject}
                      >
                        {el.title}
                      </p>
                      <a className={styles["btn-link"]}>Read More...</a>
                    </div>
                  </div>
                </>
              );
            })}
            <div className={styles.stillCountingContainer}>
              <p className={styles.stillCounting}>And still counting...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
