import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import Nav from '../components/Nav'

import '../styles/collections.scss'

const Collections = () => {
    const [manu]  = useContext(ManuContext)
    return (
        <main className="main-container">

        <section className="about-container">
        <Nav/>
        {Object.keys(manu.api).length !== 0 && (
                <>
                    <h1>{manu.api.general.title}</h1>
                    <p>{manu.api.general.desc}</p>
                </> 
           )}
         </section>

         </main>
    )
}

export default Collections