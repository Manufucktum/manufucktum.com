import React, { useEffect, useState, createContext } from "react";

import { randomColor } from "../helpers";

import fallbackData from "../data/projects";

export const ManuContext = createContext();

const ManuProvider = ({ children }) => {
  const [manu, setManu] = useState({
    api: {},
    currentArtist: {},
    currentNfts: {},
    currentExhibition: {},
    dark: "",
    light: "",
    live: "",
    featured: true,
    current:0
  });

  useEffect(() => {
    // const url = "https://api.manufucktum.com/projects/all";

    const fetchData = async () => {
      let currentNfts = [];

      for (let i = 0; i < fallbackData.nfts.length; i++) {
        if (
          fallbackData.artist[fallbackData.general.current].id ==
          fallbackData.nfts[fallbackData.general.current].artist_id
        ) {
          currentNfts.push(fallbackData.nfts[i]);
        }
      }
      //   console.log(currentNfts);

      setManu((state) => ({
        ...state,
        api: fallbackData,
        currentArtist: fallbackData.artist[fallbackData.general.current],
        currentNfts: currentNfts,
        current:fallbackData.general.current
      }));
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   fetch("https://api.manufucktum.com/stream-status")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       let live = true;
  //       // console.log(data.live.id);
  //       if (data.live.id) {
  //         live = true;
  //       } else {
  //         live = false;
  //       }
  //       setManu((state) => ({
  //         ...state,
  //         live: live,
  //       }));
  //     });
  // }, []);

  useEffect(() => {
    setManu((state) => ({
      ...state,
      dark: randomColor(0, 44, 1),
      light: randomColor(250, 255, 1),
    }));
  }, []);

  return (
    <ManuContext.Provider value={[manu, setManu]}>
      {children}
    </ManuContext.Provider>
  );
};

export default ManuProvider;
