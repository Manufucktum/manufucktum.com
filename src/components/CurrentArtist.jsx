import React, { useState, useContext, useEffect, } from 'react'
import { useWindowSize } from "../hooks/useWindowSize"

import { ManuContext } from "../providers/ManuProvider";
import Lightbox from '../components/Lightbox'

import '../styles/current-artist.scss'
// import { Link } from "gatsby";

const CurrentArtist = () => {
   
    const size = useWindowSize()
    const [manu, setManu] = useContext(ManuContext)
    const [dimensionsVideo, setDimensionsVideo] = useState({width: 'auto', height: 'auto'})

    useEffect(() => {
        if(size.width <= 800){
            setDimensionsVideo(state => ({ 
                ...state,
                height: size.width,
                width: size.width
            }))
        } else {
            setDimensionsVideo(state => ({ 
                ...state,
                height: size.height,
                width: size.height
            }))
        }
    }, [size.width, size.height])
    let amount = 0;
    console.log(manu);
    
    return (
       
        <div className="current-artist-container">
            {Object.keys(manu.currentArtist).length !== 0 && (
                <>
                
                    <div className="artist-info">
                        <h1>{manu.currentArtist.name}</h1>
                        {/* <h5>b. {artist.artist.birthcity}, {artist.artist.birthyear}</h5> 
                        <p>lives and works in {artist.artist.workcity}</p>*/}
                    </div>
                    <h5>{manu.api.artist[0].title}</h5>
                    <p><b>Progress:</b> 3/10 </p>
                    <p><b>Size:</b> {manu.api.exibits[0].width}cm x {manu.api.exibits[0].height}cm x {manu.api.exibits[0].depths}cm </p>
                    <p><b>Materials:</b> {manu.api.exibits[0].materials}</p>
                  
               <p>{manu.api.exibits[0].description}</p> 
                    <div className="current-artist-nfts">
                        {/* <h3>NFTs</h3> */}
                        {/* <Lightbox width={dimensionsVideo.width} height={dimensionsVideo.width} videos={data.currentArtist.nfts}/> */}
                    </div>
                </>
            )}            
        </div>
    )
}

export default CurrentArtist