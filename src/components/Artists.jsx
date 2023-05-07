import React, { useContext } from "react";
import { ManuContext } from "../providers/ManuProvider";
import { motion } from "framer-motion";
import { Link, NavLink, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Slider from "react-slick";

import "../styles/artists.scss";

const Artists = () => {
  const [manu] = useContext(ManuContext);
  let color = manu.dark;
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <motion.div
      className="artists-container"
      style={{ backgroundColor: manu.light }}
    >
      <Nav />
      <div className="collection-artistoverview"> 
    <h2>Projects</h2>
     </div>
      {Object.keys(manu.api).length !== 0 && (
        <div className="artists">
          {manu.api.exhibits.map((exhibit) => {
            if (exhibit.id && exhibit.active) {
              // console.log(exhibit);
              if (exhibit.color == "light") {
                color = manu.light;
              }
              return (
                <div className="artist-box" key={exhibit.id}>
                  <Link
                    to={`/collections/${exhibit.id}`}
                    key={exhibit.id}
                    className="main-ref-link"
                  >
                    <Slider {...settings}>
                      {manu.api.nfts.map((nft) => {
                        if (
                          manu.api.nfts.length > 0 &&
                          exhibit.id == nft.exhibit_id
                        ) {
                          return (
                            <div key={nft.id} className="artist-wrapper">
                              <img
                                src={nft.preview}
                                alt={nft.description}
                                style={{ width: "100%" }}
                              />
                            </div>
                          );
                        }
                        if (exhibit.id == nft.exhibit_id && nft.minted) {
                          return (
                            <div key={nft.id} className="artist-wrapper">
                              <img
                                src={nft.preview}
                                alt={nft.description}
                                style={{ width: "100%" }}
                              />
                            </div>
                          );
                        }
                      })}
                    </Slider>
                    <div className="artist-desc-wrapper">
                      <div className="artist-desc">
                        <h1>{exhibit.title}</h1>
                        <h3>{exhibit.artist_name}</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            }
          })}
        </div>
      )}
      <Footer />
    </motion.div>
  );
};

export default Artists;
