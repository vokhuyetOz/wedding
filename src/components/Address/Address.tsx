import React from "react";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import { MapChurch, MapEvent } from "./Map/Map";
import { GoogleMap, Marker } from "./GoogleMap/GoogleMap";
import styles from "./Address.module.scss";
import { usePlatform } from "../../hooks/usePlatform";

const RenderStatus = (status: Status): React.ReactElement => {
  if (status === Status.LOADING) return <h3>{status}</h3>;
  if (status === Status.FAILURE) return <h3>{status}</h3>;
  return <></>;
};

export const Address = () => {
  const centerMap = { lat: 20.623054, lng: 106.256304 };

  const { isTablet, isMobile, isDesktop } = usePlatform();

  // const centerChurch = { lat: -34.789099160710435, lng: -56.0781287 };
  // const centerParty = { lat: -34.7893193, lng: -56.0795449 };

  // const markers = [
  //   {
  //     id: 1,
  //     name: "Fiesta",
  //     position: centerParty,
  //   },
  //   {
  //     id: 2,
  //     name: "Iglesia",
  //     position: centerChurch,
  //   },
  // ];
  let fontSize = 50;
  if (isDesktop) {
    fontSize = 100;
  }
  return (
    <div className={styles.container} id="address">
      <MapEvent />
      <span className={styles.subtitle}>
        Hand in hand Today Tomorrow Forever 💕
      </span>
      <MapChurch />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          fontFamily: "AngelaWhite",
        }}
      >
        <a
          href="https://goo.gl/maps/uBPfkdFP8Kh3CuZJA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span
            className={styles.header}
            style={{ textDecoration: "underline" }}
          >
            Google Map
          </span>
        </a>
      </div>

      <Wrapper
        apiKey="AIzaSyBugsBftDqS6MVGA4iWDiGxAT7PrQXPKlg"
        render={RenderStatus}
      >
        <GoogleMap center={centerMap} zoom={16}>
          <Marker position={centerMap} />
        </GoogleMap>
      </Wrapper>
    </div>
  );
};
