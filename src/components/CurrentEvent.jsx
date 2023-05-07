import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { ManuContext } from "../providers/ManuProvider";

import "../styles/current-event.scss";

const CurrentArtist = () => {
  const [manu] = useContext(ManuContext);
    // console.log(manu);

  return (
    <div className="current-box" style={{ color: manu.dark }}>
      <h2>Last Exhibition</h2>
      <div className="current-box-wrapper">
        <div className="current" style={{ borderColor: manu.dark }}>
          {Object.keys(manu.currentArtist).length !== 0 && (
            <>
              <Link to="/live">
                <h1>{manu.api.exhibits[manu.current].title}</h1>
                <h3>installation by {manu.currentArtist.name}</h3>
              </Link>
            </>
          )}
        </div>

        <div className="current-date">
          From:
          <h2>
            {Object.keys(manu.api).length !== 0
              ? new Date(
                  manu.api.exhibits[manu.current].start_date * 1000
                ).toLocaleDateString("de-DE")
              : null}{" "}
          </h2>
          To:
          <h2>
            {Object.keys(manu.api).length !== 0
              ? new Date(
                  manu.api.exhibits[manu.current].end_date * 1000
                ).toLocaleDateString("de-DE")
              : null}
          </h2>
        </div>
        <div className="ref">
          <Link to="/live" className="ref-link">
            <h5>Wtf are you still doing here? Watch it now!</h5>
            <svg viewBox="0 0 10 35">
              <polygon points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 " />
            </svg>
          </Link>
          {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p> */}
        </div>
      </div>
    </div>
  );
};

export default CurrentArtist;
