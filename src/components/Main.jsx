import React, { useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import ReactGA from "react-ga4";
import CollectionsOverview from "../components/CollectionsOverview";
import CurrentEvent from "../components/CurrentEvent";
import About from "../components/About";

import Nav from "../components/Nav";
import "../styles/main.scss";
import Artists from "./Artists";

const Main = () => {
  const [manu] = useContext(ManuContext);
  ReactGA.initialize("G-MCKDP3X4TN");
  ReactGA.send("pageview");
  return (
    <>
      {/* <Nav /> */}
      {/* <Sidebarmenu /> */}
      {/* <CurrentEvent /> */}
      <Artists></Artists>
      <CollectionsOverview />
      <Footer />
    </>
  );
};

export default Main;
