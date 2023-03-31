import styles from "./NavBar.module.scss";

export const NavBar = () => {
  return (
    <div className={styles.container}>
      <a href="#countdown">Date</a>
      <div className={styles.separator} />
      <a href="#address">Place</a>
      <div className={styles.separator} />
      <a href="#map">Map</a>
      <div className={styles.separator} />
      <a href="#gallery">Gallery</a>
      <div className={styles.separator} />
      <a href="#bank">Bank account</a>
    </div>
  );
};
