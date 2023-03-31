import Image from "next/image";
import React from "react";
import styles from "./Date.module.scss";

const Content = () => {
  return (
    <>
      <div className={styles.dateContainer}>
        <span style={{ fontFamily: "kba", fontSize: "10vw" }}>09/04/2022</span>
      </div>
      <span className={styles.subtitle}>party whole day</span>
    </>
  );
};

export const Date = () => {
  return (
    <div className={styles.container} id="#hashtag">
      <div className={styles.imageContainer}>
        <Image
          src="/main/hashtag/branches-mobile.png"
          width={375}
          height={175}
          layout="responsive"
          alt="branches"
        />
      </div>

      <div className={styles.content}>
        <Content />
      </div>
    </div>
  );
};
