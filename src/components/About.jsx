import React, { useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

import "../styles/about.scss";

const About = () => {
  const [manu] = useContext(ManuContext);

  return (
    <motion.section
      transition={{ duration: 1, ease: "linear" }}
      className="about-container"
      style={{ backgroundColor: manu.light, color: manu.dark }}
    >
      <Nav />
      {/* <Sidebarmenu /> */}
      {Object.keys(manu.api).length !== 0 && (
        <div className="about-info">
          <svg viewBox="0 0 100 100">
            <path
              d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z"
              strokeWidth="4"
              style={{
                fill: "transparent",
                stroke: manu.dark,
              }}
            />
          </svg>
          <div className="about-box">
            <h1>What is Manufucktum and what are we doing here?</h1>
            <p>{manu.api.general.desc}</p>
          </div>
        </div>
      )}
      <Footer />
    </motion.section>
  );
};

export default About;
