import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import Nav from '../components/Nav'

import '../styles/collections.scss'

const Collections = () => {
    const [manu]  = useContext(ManuContext)
    return (
        <main className="main-container">

        <section className="about-container"> <h1>MANUFUCKTUM</h1>
        <Nav/>
            <p>{manu.api.desc}</p>
         </section>

         </main>
    )
}

export default Collections