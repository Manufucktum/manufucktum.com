import React, { useContext } from 'react'
import { Link,NavLink, useLocation } from 'react-router-dom'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import Nav from './Nav'
import Footer from './Footer'


import '../styles/collections-overview.scss'

const CollectionsOverview = () => {
    const [manu]  = useContext(ManuContext)
    // console.log(manu)
    let progress = 0;
    // console.log(manu.api.nfts);
    if(manu.api.nfts){
        for (let i = 0;i < manu.api.nfts.length; i++) {
            if(manu.api.nfts[i].minted){
                progress++;
            }
        }
    }
  
    
    return (
        <div 
            className="collectionsview-container"
        >
            {Object.keys(manu.api).length !== 0 && (
                <div className="collectionsview-artist" style={{ color: manu.dark }}>
                    <h1>Latest NFTs</h1>
                    <div className="collectionsoverview-nfts">
                        {manu.api.nfts.slice(progress-2,progress).reverse().map(nft => (
                             <Link className='collections-nft'
                             to="/collections"  key={nft.id}>
                                <div className="collectionsoverview-image">
                                <ReactPlayer
                                    url= {nft.file }
                                    width="500"
                                    controls
                                    pip={false}
                                    config={{
                                    file: {
                                      attributes: {
                                        controlsList: "nodownload noremoteplayback noplaybackrate",
                                        playsInline: true,
                                      },
                                    },
                                  }}
                                    muted={true}
                                    loop={true}
                                    playing={false}
                                    playsinline={true}
                                    height="500"
                                    className="collections-"
                                />
                                </div>
                                <div className="collectionsoverview-desc">
                                <h1>{nft.nft_title}</h1>
                                <h3>{nft.title}</h3>
                                <p>material: {nft.materials.map(material => `${material}, `)}</p>
                                <p>{nft.minted ? "Minted on: " : "Minting on: " }{new Date(nft.mint_date*1000).toLocaleDateString('de-DE')}</p>
                                <p>{nft.series_number} of {nft.series_length}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="main-ref">
                <Link 
                    to="/collections" 
                    className="main-ref-link"
                    style={{ backgroundColor: manu.dark }}
                >
                    <p style={{ color: manu.dark }}> See the whole Collection</p>
                    <svg viewBox="0 0 10 35" fill={manu.dark}>        
                        <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                    </svg>
                </Link >
                {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p> */}
           </div>
                </div> 
            )}
        </div>
    )
}

export default CollectionsOverview