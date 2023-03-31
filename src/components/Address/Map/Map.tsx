import Image from "next/image";
import React, { FC } from "react";
import { usePlatform } from "../../../hooks/usePlatform";
import styles from "./Map.module.scss";

type PlaceProps = {
  header?: string;
  place?: string;
  info?: string;
  image: string;
  alt?: string;
  url?: string;
};

const PlaceMobile: FC<PlaceProps> = ({
  header,
  place,
  info,
  image,
  alt,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <div className={styles.imageContainer}>
          <Image
            alt={alt}
            src={image}
            width={367}
            height={244}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <a
          className={styles.bottom}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </a>
      </div>
    </div>
  );
};

const PlaceDesktop: FC<PlaceProps> = ({
  header,
  place,
  info,
  image,
  alt,
  url,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span className={styles.header}>{header}</span>
        <a
          className={styles.bottom}
          href={url}
          target="_blank"
          rel="noreferrer"
        >
          <span className={styles.text}>{place}</span>
          <span className={styles.text}>{info}</span>
        </a>
      </div>
      <div className={styles.imageContainer}>
        <Image alt={alt} src={image} width={367 * 2} height={244 * 2} />
      </div>
    </div>
  );
};

export const MapChurch = () => {
  const { isMobile } = usePlatform();
  const Church = isMobile ? PlaceMobile : PlaceDesktop;
  return (
    <Church
      header="HUYEN"
      // place="Iglesia San José de Manga"
      // info="18:30 puntual"
      alt="HUYEN"
      image="/main/maps/huyen.jpeg"
      // url={urls.church}
    />
  );
};

export const MapEvent = () => {
  const { isMobile } = usePlatform();
  const Event = isMobile ? PlaceMobile : PlaceDesktop;

  return (
    <Event
      header="HUNG"
      // place="Regency Park Hotel"
      // info="Salón Los Olivos"
      alt="HUNG"
      // url={urls.party}
      image="/main/maps/hung.jpeg"
    />
  );
};
