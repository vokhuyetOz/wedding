/* eslint-disable react/no-unescaped-entities */
import React from "react";
import styles from "./Message.module.scss";

export const Message = () => {
  return (
    <div className={styles.container} id="#message">
      <span className={styles.header}>We married!</span>
      <span className={styles.subtitle}>
        After so much waiting... it's finally the day!
      </span>
      <span className={styles.subtitle}>We hope you can be part of it</span>
    </div>
  );
};
