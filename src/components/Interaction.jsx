import React, { useState, useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";
import { io } from "socket.io-client";
import "../styles/interaction.scss";
const socket = io("https://api.manufucktum.com", { transports: ["websocket"] });

const Interaction = () => {
  let [counter, setCounter] = useState(10);
  const [manu] = useContext(ManuContext);

  const count = function () {
    // console.log(counter);
    setCounter(counter--);
    if (counter >= 0) {
      setTimeout(() => {
        count();
      }, 1000);
    } else {
      setCounter(10);
    }
  };
  //     const counterwatcher = useMemo(()=> {
  //    return
  //     },[counter]);
  function interact() {
    socket.emit("feat");
    count();
  }

  if (manu.live && manu.featured) {
    return (
      <div className="ref">
        <button
          onClick={() => interact()}
        >
      
            <svg viewBox="0 0 10 35" fill={manu.dark}>
              <polygon points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 " />
            </svg>
          <h5>Press to interact, but no rush, it will take a few seconds!
          <span className="interaction-timer"> - {counter}sec</span></h5>
        </button>
      </div>
    );
  } else if (!manu.featured) {
    return null;
  } else {
    return (
      <div className="interaction-container">
        <span>
          {" "}
          We are dealing with connection issues right now, the video displayed
          is a rendered video from the livestream. Come back later to see the
          live installation!
        </span>
      </div>
    );
  }
};

export default Interaction;
