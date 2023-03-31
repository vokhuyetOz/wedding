import styles from "./Footer.module.scss";

const wpHungNumber = "0348 641 146";
const wpHuyenNumber = "0978 514 537";
// const wpGus = "https://wa.me/59894040117";
// const wpPat = "https://wa.me/59896557755";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Nav */}
        <div className={styles.navBar}>
          <h2>Section</h2>
          <a href="#countdown">Date</a>
          <a href="#map">Place</a>
          <a href="#gallery">Gallery</a>
          <a href="#bank">Bank Account</a>
        </div>
        {/* Contact */}
        <div className={styles.contactContainer}>
          <h2>Contact</h2>
          <div className={styles.numbers}>
            <a
              className={styles.whatsapp}
              // onClick={() => window.open(wpGus, "_blank")}
            >
              <span> Hung - {wpHungNumber}</span>
            </a>
            <a
              className={styles.whatsapp}
              // onClick={() => window.open(wpPat, "_blank")}
            >
              {/* <WhatsappIcon className={styles.logo} /> */}
              <span>Huyen - {wpHuyenNumber}</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
