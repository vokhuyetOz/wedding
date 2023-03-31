import React from "react";
import styles from "./PulsatingDot.module.scss";
import MusicIcon from "../../../public/main/music/icon.svg";

export function PulsatingDot({ muted }: { muted: boolean }) {
  let style;
  if (!muted) {
    style = styles.circle;
  }
  return (
    <div className={style}>
      <div
        style={{
          overflow: "hidden",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          boxShadow: "3px 12px 62px -6px rgba(0,0,0,0.83)",
        }}
      >
        <MusicIcon />
      </div>
    </div>
  );
}
