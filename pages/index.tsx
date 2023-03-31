/* eslint-disable @next/next/no-sync-scripts */
import type { NextPage } from "next";
import Head from "next/head";
import {
  Header,
  Address,
  Gifts,
  Rsvp,
  Footer,
  Message,
  Date,
  Countdown,
  Layout,
  NavBar,
  Music,
  Bubbles,
} from "../src/components";
import { ParallaxProvider } from "react-scroll-parallax";
import styles from "../styles/Home.module.css";
import { AlBum } from "../src/components/AlBum/AlBum";
import Script from "next/script";

const Home: NextPage = () => {
  const title = "Hung & Huyen";
  const description =
    "This is my our pleasure that you are coming to our wedding";

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>{title}</title>
          <meta name="description" content={description} />
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:url" content="https://hung-huyen.vercel.app/" />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          {/* <script type="text/javascript" src="/static/script.js"></script> */}
        </Head>
        <ParallaxProvider>
          <Layout>
            <Header />
            <NavBar />
            <Message />
            <Countdown />
            <Date />
            <Address />
            <AlBum />
            {/* <Rsvp /> */}
            {/* <Hashtag /> */}
            <Gifts />
            <Footer />
            <Bubbles />
            <Music />
          </Layout>
        </ParallaxProvider>
      </div>
    </>
  );
};

export default Home;
