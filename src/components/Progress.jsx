import React, { useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";

import "../styles/footer.scss";

const Progress = () => {
  const [manu] = useContext(ManuContext);
  let progress = -1;
  let next = 0;
  let finished = false;

  if (manu.currentNfts) {
    for (let i = 0; i < manu.currentNfts.length; i++) {
      if (
        manu.currentNfts[i].minted &&
        manu.currentArtist.id === manu.currentNfts[i].artist_id
      ) {
        progress++;
      }
    }
    // console.log(progress);
    if (progress !== -1) {
      if (
        progress < manu.currentNfts[progress].series_length &&
        progress >= 0
      ) {
        next = manu.api.nfts[progress].mint_date;
      } else if (progress == manu.currentNfts[progress].series_length) {
        next = 0;
      } else {
        finished = true;
      }
    }
    // console.log(next);
    // console.log(progress);
    // console.log(finished);
  }
  if (!finished && progress >= 0) {
    return (
      <>
        {" "}
        <p className="progress">
          <b>Progress:</b> {progress + 1}/
          {manu.currentNfts[progress].series_length}{" "}
        </p>{" "}
      </>
    );
  } else if (progress === -1) {
    return null;
  } else {
    return (
      <>
        {" "}
        <p className="progress">
          <b>Progress:</b> Finished{" "}
        </p>{" "}
      </>
    );
  }
};

export default Progress;
