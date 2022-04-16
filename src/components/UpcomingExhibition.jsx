import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'

import '../style/upcoming-exhibit.scss'

const UpcomingExhibit = ({ nft }) => {
    const [manu, setManu] = useContext(ManuContext)

    return (
        <section className="upcoming-exhibit-container">
            <p>UpcomingExhibit</p>
        </section>
    )
}

export default UpcomingExhibit