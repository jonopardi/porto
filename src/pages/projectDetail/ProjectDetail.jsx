import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import porto from "../../../porto.json";
import { useTranslation, Trans } from "react-i18next";
import styles from "./ProjectDetail.module.css";
import {
  TbArrowBigRightLinesFilled,
  TbArrowBigLeftLinesFilled,
} from "react-icons/tb";
import Loader from "../../components/loader/Loader";
import Footer from "../../components/footer/Footer";

function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language;
  let navigate = useNavigate();
  const { id } = useParams();
  const filtered = porto.find((el) => el.id === Number(id));
  //   console.log(filtered);
  const imgArr = filtered.images;
  const refs = useRef([]);
  const [img, setImg] = useState(filtered.images[0]);

  //   const hoverHandler = (image, i) => {
  //     setImg(image);
  //     refs.current[i].classList.add("actived");
  //     for (var j = 0; j < imgArr.length; j++) {
  //       if (i !== j) {
  //         refs.current[j].classList.remove("actived");
  //       }
  //     }
  //   };
  const hoverHandler = (image, i) => {
    setImg(image);
    if (refs.current[i]) {
      refs.current[i].classList.add(styles.actived);
      for (var j = 0; j < imgArr.length; j++) {
        if (i !== j && refs.current[j]) {
          refs.current[j].classList.remove(styles.actived);
        }
      }
    }
  };

  // Clear refs on component unmount
  useEffect(() => {
    return () => {
      refs.current = [];
    };
  }, []);

  const addRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  const redirect = (id) => {
    // const id = event.target.getAttribute("data-item");
    navigate(`/projects/${id}`);
    // setFetchStatus(true);
  };

  const [loading, setLoading] = useState(true);
  const counter = useRef(0);
  const imageLoaded = () => {
    counter.current += 1;
    if (counter.current >= imgArr.length) {
      setLoading(false);
    }
  };

  const renderButton = () => {
    const length = porto.length;
    const index = porto.indexOf(filtered);
    console.log(index);
    const before = index === 0 ? length - 1 : index - 1;
    const next = index === length - 1 ? 0 : index + 1;
    const groupButton = (
      <div className={styles.btn__group}>
        <button
          onClick={() => redirect(porto[before].id)}
          className={styles.btn__redirect}
        >
          <span className={styles.btn__text}>
            <TbArrowBigLeftLinesFilled className={styles.icon} size={30} />
            {porto[before].title}
          </span>
        </button>
        <button
          onClick={() => redirect(porto[next].id)}
          className={styles.btn__redirect}
        >
          <span className={styles.btn__text}>
            {porto[next].title}
            <TbArrowBigRightLinesFilled className={styles.icon} size={30} />
          </span>
        </button>
      </div>
    );
    // console.log(buttonBefore);
    return groupButton;
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.content__container}>
        <div className={styles.contentOuter__container}>
          <div className={styles.landingName__container}>
            <div className={styles.selected__imageContainer}>
              <img src={img} className={styles.selected__image} />
            </div>
            <div className={styles.images__container}>
              {loading && (
                <div style={{ position: "relative" }}>
                  <Loader />
                </div>
              )}
              {filtered.images.length !== 0 ? (
                filtered.images.map((image, i) => (
                  <div
                    style={{ display: loading ? "none" : "block" }}
                    className={
                      i == 0
                        ? `${styles.img_wrap} ${styles.actived}`
                        : ` ${styles.img_wrap}`
                    }
                    key={i}
                    onMouseOver={() => hoverHandler(image, i)}
                    onClick={() => hoverHandler(image, i)}
                    ref={addRefs}
                    // ref={(el) => (refs.current[i] = el)}
                  >
                    {/* {console.log(i)} */}
                    <img src={image} alt="" onLoad={imageLoaded} />
                  </div>
                ))
              ) : (
                <img
                  className=""
                  alt="-"
                  src="https://t3.ftcdn.net/jpg/02/48/42/64/360_F_248426448_NVKLywWqArG2ADUxDq6QprtIzsF82dMF.jpg"
                />
              )}
            </div>
            <div className={styles.body__container}>
              <h2 className={styles.project__title}>{filtered.title}</h2>
              <h4>
                URL:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={filtered.url}
                >
                  {filtered.url}
                </a>
              </h4>
              {currentLanguage === "id" ? (
                <p className={styles.project__detail}>
                  {filtered.description.id}
                </p>
              ) : (
                <p className={styles.project__detail}>
                  {filtered.description.en}
                </p>
              )}
              <div>
                <p style={{ fontWeight: "bold", fontSize: "21px" }}>
                  {t("key_features")}:
                </p>
                <ul>
                  {filtered.key_features.map((el) => {
                    return <li>{el}</li>;
                  })}
                </ul>
              </div>
              <div>
                <p style={{ fontWeight: "bold", fontSize: "21px" }}>
                  {t("features")}:
                </p>
                <ul>
                  {filtered.features.map((el) => {
                    return <li>{el}</li>;
                  })}
                </ul>
              </div>
              <div>
                <p>
                  <span style={{ fontWeight: "bold", fontSize: "21px" }}>
                    {t("built_with")}:
                  </span>{" "}
                  {filtered.built_with}
                </p>
              </div>
              <div>{renderButton()}</div>
            </div>
            {/* ProjectDetail{id}
            Current Language: {currentLanguage} */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ProjectDetail;
