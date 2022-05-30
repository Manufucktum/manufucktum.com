import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import { Link,NavLink,useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Slider from "react-slick";


import '../styles/artists.scss'

const Artists = () => {
    const [manu]  = useContext(ManuContext);
    let color = manu.dark;
    var settings = {
        dots: false,
        infinite: true,
        arrows: false,
        autoplay:true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <motion.div 
            className="artists-container"
            style={{ backgroundColor: manu.light }}
        >
               <Nav />    
            {Object.keys(manu.api).length !== 0 && (
 
                <div className="artists">
                    {manu.api.exhibits.map(exhibit=> {
                        if(exhibit.id && exhibit.active){
                            console.log(exhibit);
                            if(exhibit.color == 'light'){
                                color = manu.light;
                            }
                            return (
                            <div className="artist-box" key={exhibit.id}>
                            <Link 
                                to={`/collections/${exhibit.id}`} 
                                key={exhibit.id}
                                className="main-ref-link">
                             <Slider {...settings}>
                               {manu.api.nfts.map(nft=> {
                                   if(manu.api.nfts.length > 0 && exhibit.id == nft.exhibit_id){
                                    return (
                                        <div key={nft.id} className="artist-wrapper">
                                   
                                        <ReactPlayer
                                            url= {nft.file }
                                            width="500"
                                            pip={false}
                                            config={{
                                                file: {
                                                attributes: {
                                                    controlsList: "nodownload noremoteplayback noplaybackrate",
                                                    playsInline: true,
                                                },
                                                },
                                            }}
                                                playing={false}
                                                playsinline={true}
                                                height="500"
                                                className="video"
                                            />  
                                        </div>
                                    
                                    )
                                   }
                                   if(exhibit.id == nft.exhibit_id && nft.minted){
                                    return (
                                        <div key={nft.id} className="artist-wrapper">
                                   
                                        <ReactPlayer
                                            url= {nft.file }
                                            width="500"
                                            pip={false}
                                            config={{
                                                file: {
                                                attributes: {
                                                    controlsList: "nodownload noremoteplayback noplaybackrate",
                                                    playsInline: true,
                                                },
                                                },
                                            }}
                                                playing={false}
                                                playsinline={true}
                                                height="500"
                                                className="video"
                                            />  
                                        </div>
                                    
                                    )
                                 }})
                                }
                                </Slider>
                                <div className="artist-desc" style={{ color:color }}>
                                    <h1>{exhibit.title}</h1>
                                    <p>{exhibit.artist_name}</p>
                                </div>
                            </Link>
                        </div>
                    )
                }
            })}
                </div> 
            )}
                 <Footer/>
        </motion.div>
    )
}

export default Artists