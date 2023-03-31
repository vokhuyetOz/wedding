import styles from "./Header.module.scss";
import Image from "next/image";
import {
  Parallax,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";
import { usePlatform } from "../../hooks/usePlatform";
import Names from "../../../public/main/header/names.svg";
import NamesMobile from "../../../public/main/header/names-mobile.svg";
import BranchTopLeft from "../../../public/main/header/images/top-left.svg";
import BranchTopRight from "../../../public/main/header/images/top-right.svg";
import BranchTopRightMobile from "../../../public/main/header/images/top-right-mobile.svg";
import BranchBottomLeft from "../../../public/main/header/images/bottom-left.svg";
import BranchBottomLeftMobile from "../../../public/main/header/images/bottom-left-mobile.svg";
import BranchBottomRight from "../../../public/main/header/images/bottom-right.svg";

export const Header = () => {
  const { isTablet, isMobile } = usePlatform();

  let fontSize: string | number = 100;
  let subSize: string | number = 60;
  if (isMobile) {
    fontSize = "20vw";
    subSize = "8vw";
  }
  let image = "/main/header/header_banner.jpeg";
  if (isMobile) {
    image = "/main/header/header_banner_v.jpeg";
  }
  return (
    <>
      <ParallaxBanner style={{ width: "100vw", height: "100vh" }}>
        <ParallaxBannerLayer
          image={image}
          speed={-20}
          expanded={false}
          scale={[1, 1.2]}
          opacity={[0.9, 1]}
          className={styles.container}
        />
        <div
          className={styles.container}
          id="#"
          style={{ position: "relative", width: "100vw", height: "100vh" }}
        >
          {!isTablet && <BranchTopLeft className={styles.itemTopLeft} />}

          {isTablet ? (
            <BranchTopRightMobile className={styles.itemTopRight} />
          ) : (
            <BranchTopRight className={styles.itemTopRight} />
          )}
          {/* {!isTablet && <div className={styles.space} />} */}

          <Parallax
            speed={-10}
            translateY={["0", "20%"]}
            scale={isTablet ? [1, 1] : [2, 1.5]}
            className={styles.names}
          >
            <div className={styles.namesContainer}>
              <span style={{ fontFamily: "AngelaWhite", fontSize }}>Hung</span>
              <span style={{ fontFamily: "AngelaWhite", fontSize: subSize }}>
                {" "}
                and{" "}
              </span>
              <span style={{ fontFamily: "AngelaWhite", fontSize }}>Huyen</span>
            </div>
          </Parallax>
          {/* {isTablet ? (
            <BranchBottomLeftMobile
              className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
            />
          ) : (
            <BranchBottomLeft
              className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
            />
          )} */}
          {isTablet && (
            <BranchBottomLeftMobile
              className={isTablet ? styles.itemTopLeft : styles.itemBottomLeft}
            />
          )}
          {/* {!isTablet && (
            <BranchBottomRight className={styles.itemBottomRight} />
          )} */}
        </div>
      </ParallaxBanner>
    </>
  );
};
