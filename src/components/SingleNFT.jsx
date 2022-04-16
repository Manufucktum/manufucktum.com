import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'

import '../style/single-nft.scss'

const SingleNFT = ({ nft }) => {
    const [manu, setManu] = useContext(ManuContext)

    return (
        <section className="single-nft-container">
            <p>NFT</p>
        </section>
    )
}

export default SingleNFT