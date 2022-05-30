import React, { useContext,useEffect,useState } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import ReactPlayer from 'react-player'
import { useParams } from "react-router-dom";
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/collections.scss'

const Artist = () => {
    const [manu]  = useContext(ManuContext);
    const params = useParams();
    console.log(params);
    console.log(manu);
    const [collections,setCollections] = useState({}); 
    const [basefile,setBasefile] = useState({}); 
    useEffect(() => {
        if(Object.keys(manu.api).length){
            manu.api.exhibits.map( exhibit => {
                if(exhibit.id == params.id){
                // console.log(exhibit)
                    setCollections(exhibit);
                    setBasefile(exhibit.basefile);
                }
            })
        }
    },[manu.api,params])

    return (
        <motion.div 
            className="collections-container"
            style={{ backgroundColor: manu.light }}>
            <Nav />    

            {Object.keys(collections).length !== 0 && (
                <div className="collections-artist" style={{ color: manu.dark }}>
                    <div className="collection-wrapper">
                        <div className="collection-title">
                    <h1>{collections.artist_name}</h1>
                      
                        </div>
                        <div className="collection-preview">
              
                        <ReactPlayer
                            url= {basefile }
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
                            playing={true}
                            playsinline={true}
                            height="500"
                            className="collections-"
                        />
                    </div>
                    <div className="collection-desc">
                    <h2>{collections.title}</h2>
                        <p>{collections.description}</p>
                    </div>
                </div>
                <div className="collections-nfts">
                    {manu.api.nfts.map(nft => {
                        if(nft.exhibit_id == collections.id){
                    
                            return( 
                            <div className="collections-nft" key={nft.id}>
                            <div className="collections-image">
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
                            <div className="collections-desc">
                            <h1>{nft.nft_title}</h1>
                            <h3>{nft.title}</h3>
                            <p>material: {nft.materials.map(material => `${material}, `)}</p>
                            <p>{nft.minted ? "Minted on: " : "Minting on: " }{new Date(nft.mint_date*1000).toLocaleDateString('de-DE')}</p>
                            <p>{nft.series_number} of {nft.series_length}</p>
                            {nft.minted ? 
                                <a  target="_blank" href={nft.opensea_link}  className="colections-link"  style={{backgroundColor: manu.dark }}>Buy NFT on Opensea</a> : ''
                            }
                            { new Date().getTime() > nft.mint_date*1000 && !nft.minted ? 
                                <a href="#"  className="colections-link" style={{ backgroundColor: manu.dark }}>Processing <div className="lds-dual-ring"></div></a> 
                                : ''
                            }
                            </div>
                        </div>
                        )
                        }  
                    })}
                </div>
            </div> )}
            <Footer/>
        </motion.div>
    )
}

export default Artist