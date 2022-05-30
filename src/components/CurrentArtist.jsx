import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Progress from './Progress'

import { ManuContext } from "../providers/ManuProvider"
// import Lightbox from '../components/Lightbox'

import '../styles/current-artist.scss'

const CurrentArtist = () => {
    const [manu] = useContext(ManuContext);
    // console.log(manu);
    let progress = 0;
    let next = 0;
    let finished = false;
    // console.log(manu.api.nfts);
    if(manu.api.nfts){
        for (let i = 0;i < manu.api.nfts.length; i++) {
            if(manu.api.nfts[i].minted && manu.currentArtist.id == manu.api.nfts[i].artist_id){
                progress++;
            }   
        }
      // the 11 need to be replaced by a refactored object from within the provider
        if(progress < manu.api.nfts[11].series_length){
            next = manu.api.nfts[11].mint_date;
        } else if(progress ==  manu.api.nfts[11].series_length) {
            finished = true;
        } else {
            next = 0;
        }
    }
    const num = 2;
    return (
        <div className="current-artist-container">
            {Object.keys(manu.currentArtist).length !== 0 && (
                <>
                    <div className="artist-info" style={{ color: manu.dark }}>
                        <h1>{manu.currentArtist.name}</h1>
                    </div>
                    <h5>{manu.api.exhibits[num].title}</h5>
                    <div className="ref">
                        <Link 
                            to={"/collections/"+manu.api.exhibits[num].id} 
                            className="ref-link"
                            style={{ backgroundColor: manu.dark }}
                            >
                            <p style={{ color: manu.light }}>See the whole Collection</p>
                            <svg viewBox="0 0 10 35" fill={manu.light}>        
                                <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                            </svg>
                        </Link >
                    </div>   
                  <Progress/>
                    <p><b>Size:</b> {manu.api.exhibits[num].width}cm x {manu.api.exhibits[num].depths}cm x {manu.api.exhibits[num].height}cm</p>
                    <p><b>Materials:</b> {manu.api.exhibits[num].materials}</p>
                    <p>{manu.api.exhibits[num].description}</p> 
                </>
            )}            
        </div>
    )
}

export default CurrentArtist