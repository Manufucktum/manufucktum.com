import React, { useContext } from 'react'

import { ManuContext } from "../providers/ManuProvider"
// import Lightbox from '../components/Lightbox'

import '../styles/current-artist.scss'

const CurrentArtist = () => {
    const [manu] = useContext(ManuContext)
    
    return (
        <div className="current-artist-container">
            {Object.keys(manu.currentArtist).length !== 0 && (
                <>
                
                    <div className="artist-info" style={{ color: manu.dark }}>
                        <h1>{manu.currentArtist.name}</h1>
                    </div>
                    <h5>{manu.api.exhibits[0].title}</h5>
                    <p><b>Progress:</b> 3/10 </p>
                    <p><b>Size:</b> {manu.api.exhibits[0].width}cm x {manu.api.exhibits[0].height}cm x {manu.api.exhibits[0].depths}cm </p>
                    <p><b>Materials:</b> {manu.api.exhibits[0].materials}</p>
                  
                    <p>{manu.api.exhibits[0].description}</p> 
                    <a 
                        href="/collections"
                        className="collections-nft-link"
                        style={{ background: manu.dark, color: manu.light }}   
                    >
                        Check out the NFTs in the Collection
                    </a>
                </>
            )}            
        </div>
    )
}

export default CurrentArtist