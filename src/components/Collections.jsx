import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/collections.scss'

const Collections = () => {
    const [manu]  = useContext(ManuContext);
   
    return (
        <motion.div 
            className="collections-container"
          
       
            style={{ backgroundColor: manu.light }}
        >
            <Nav/>

            {Object.keys(manu.api).length !== 0 && (
                <div className="collections-artist" style={{ color: manu.dark }}>
                    <h1>{manu.api.artist[0].name}</h1>
                    <h2>{manu.api.exhibits[0].title}</h2>
                    <p>{manu.api.exhibits[0].description}</p>
                    <div className="collections-nfts">
                        {manu.api.nfts.map(nft => (
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
                                {nft.minted ? 
                                    <a 
                                        href={nft.mintable_link}
                                        className="colections-link"
                                        style={{backgroundColor: manu.dark }}>
                                            
                                        Buy NFT on Mintable
                                    </a> : ''
                                }
                                { new Date().getTime() < nft.mint_date*1000 ? 
                                    <a href="#"  className="colections-link" style={{ backgroundColor: manu.dark }}>Processing <div className="lds-dual-ring"></div></a> 
                                    : ''
                                }
                                </div>
                            </div>
                        ))}
                    </div>
                </div> 
            )}

            <Footer />
        </motion.div>
    )
}

export default Collections