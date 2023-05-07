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
    
    return (
        <div className="current-artist-container">
            {Object.keys(manu.currentArtist).length !== 0 && (
                <>
                    <div className="artist-info">
                        <h1>{manu.currentArtist.name}</h1>
                    </div>
                    <h3>{manu.api.exhibits[manu.current].title}</h3>
                    <div className="ref">
                        <Link 
                            to={"/collections/"+manu.api.exhibits[manu.current].id} 
                            className="ref-link"
                            >
                            <h5 >See the whole Collection</h5>
                            <svg viewBox="0 0 10 35">        
                                <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                            </svg>
                        </Link >
                    </div>   
                  <Progress/>
                    <p><b>Size:</b> {manu.api.exhibits[manu.current].width}cm x {manu.api.exhibits[manu.current].depths}cm x {manu.api.exhibits[manu.current].height}cm</p>
                    <p><b>Materials:</b> {manu.api.exhibits[manu.current].materials}</p>
                    <p>{manu.api.exhibits[manu.current].description}</p> 
                </>
            )}            
        </div>
    )
}

export default CurrentArtist