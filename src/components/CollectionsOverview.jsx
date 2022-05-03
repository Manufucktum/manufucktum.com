import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import Nav from './Nav'
import Footer from './Footer'


import '../styles/collections-overview.scss'

const CollectionsOverview = () => {
    const [manu]  = useContext(ManuContext)
    console.log(manu)

    return (
        <div 
            className="collectionsview-container"
        >

            {Object.keys(manu.api).length !== 0 && (
                <div className="collectionsview-artist" style={{ color: manu.dark }}>
                    <h1>Latest NFTs</h1>
                   
            
                    <div className="collectionsoverview-nfts">
                        {manu.api.nfts.slice(0,2).map(nft => (
                            <div className="collections-nft" key={nft.id}>
                                <div className="collections-image">
                                   <ReactPlayer
                                    url= {nft.file }
                                    width="500"
                                    height="500"
                                    className="collections-"
                                />
                                </div>
                                <div className="collections-desc">
                                <h3>{nft.title}</h3>
                             
                               
                                <p>material: {nft.materials.map(material => `${material}, `)}</p>
                                <p>Minting on: {new Date(nft.mint_date*1000).toLocaleDateString('en-GB')}</p>
                                <p>{nft.series_number} of {nft.series_length}</p>
                               
                                </div>
                            </div>
                        ))}
                    </div>
                    <a 
                                    href="/collections"
                                    className="colectionsoverview-link"
                                    style={{ background: manu.dark, color: manu.light }}   
                                >
                                See the whole Collection 
                                </a>
                </div> 
           
            )}

         
        </div>
    )
}

export default CollectionsOverview