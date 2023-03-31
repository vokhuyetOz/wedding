import { FC } from "react";

import styles from "./Gifts.module.scss";
import Image from "next/image";

type BankProps = {
  bank?: string;
  account: string;
  branch?: string;
};

const Bank: FC<BankProps> = ({ bank, account, branch }) => {
  return (
    <div className={styles.bankAccountContainer}>
      {branch && <span>{branch}</span>}
      {/* <span>{account}</span> */}
      <Image
        // size={256}
        // style={{ height: "auto", maxWidth: "100%", width: "100%" }}
        // value={account}
        // viewBox={`0 0 256 256`}
        src={account}
        width={256}
        height={350}
        // style={{ width: 256, height: 256 }}
        alt="account"
      />
    </div>
  );
};

export const Gifts = () => {
  // const { isMobile } = usePlatform();

  // const redirectToStore = () => {
  //   window.open(
  //     "https://www.laiberica.com.uy/weddings/gard-ferronato-sanes-lezcano/public_list",
  //     "_blank"
  //   );
  // };

  return (
    <div id="bank" className={styles.container}>
      {/* <h1>Lista de regalos</h1> */}
      <div className={styles.content}>
        <div className={styles.data}>
          <h2 className={styles.header}>BANK ACCOUNT</h2>
          <div className={styles.banks}>
            <div className={styles.sameBank}>
              <h3 className={styles.header}>Nguyen Van Hung</h3>
              <Bank account="/main/gifts/acb.jpg" branch="ACB" />
            </div>
            <div className={styles.sameBank}>
              <h3 className={styles.header}>Le Thi Huyen</h3>
              <Bank account="/main/gifts/vcb.jpg" branch="Vietcombank" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
