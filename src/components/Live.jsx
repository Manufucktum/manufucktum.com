import React, { useState, useEffect, useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";
import { useWindowSize } from "../hooks/useWindowSize";

import CurrentArtist from "../components/CurrentArtist";
import Nav from "../components/Nav";
// import Video from "../components/Video";
// import Threed from "../components/3d";
import Mediaswitch from "../components/Mediaview";
// import Footer from "../components/Footer";
// import Interaction from "../components/Interaction";
import "../styles/main.scss";

const Live = () => {
  const [manu, setManu] = useContext(ManuContext);
  // console.log("main manu: ", manu)
  const size = useWindowSize();
  const [dimensionsVideo, setDimensionsVideo] = useState({
    width: "auto",
    height: "auto",
  });
  const [dimensionsContent, setDimensionsContent] = useState({
    width: "auto",
    height: "auto",
  });
  let view = 1;
  useEffect(() => {
    if (size.width <= 800) {
      setDimensionsVideo((state) => ({
        ...state,
        height: size.width-45,
        width: size.width-45,
      }));
    } else {
      setDimensionsVideo((state) => ({
        ...state,
        height: size.height-45,
        width: size.height-45,
      }));
    }
    setDimensionsContent((state) => ({
      ...state,
      width: size.width - size.height,
    }));
  }, [size.width, size.height]);

  return (
    <main className="main-container">
      <Nav width={dimensionsContent.width} />
      <section
        className="main-video-container"
        style={{
          width: dimensionsVideo.width,
          height: dimensionsVideo.height,
        }}
      >
        {/* <Mediaswitch /> */}
      </section>
      <section
        className="info-container"
        style={{
          width: size.width >= 800 ? dimensionsContent.width : "100%",
          overflowY: size.width >= 800 ? "auto" : null,
        }}
      >
        {/* <Interaction /> */}
        <CurrentArtist />
      </section>
    </main>
  );
};

export default Live;
