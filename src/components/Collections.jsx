import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'

import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/collections.scss'

const Collections = () => {
    const [manu]  = useContext(ManuContext)
    console.log(manu)

    return (
        <motion.div 
            className="collections-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
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
                                <h3>{nft.title}</h3>
                                <ReactPlayer
                                    url={nft.file}
                                    width="100%"
                                    className="collections-"
                                />
                                <a 
                                    href={nft.mintable_link}
                                    className="colections-link"
                                >
                                  Buy NFT on Mintable
                                </a>
                                <p>material: {nft.materials.map(material => `${material}, `)}</p>
                                <p>{nft.series_number} of {nft.series_length}</p>
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