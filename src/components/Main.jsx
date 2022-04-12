import React, { useState, useEffect, useMemo, useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { useWindowSize } from '../hooks/useWindowSize'

import About from '../components/About'
import CurrentArtist from '../components/CurrentArtist'
import Nav from '../components/Nav'
import Video from '../components/Video'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Main = () => {

  

    const [manu, setManu] = useContext(ManuContext)
    

    // const infoComponent = useMemo(() => {
    //         if (manu.currentInfoComponent === 'about') {
    //             return <About />
    //         } else {
    //             return <CurrentArtist />
    //         }
    // }, [manu.currentInfoComponent])

    return (
        <main className="main-container">
            <section 
                className="main-container">
                <Nav /> 
                <CurrentArtist />
                <Footer />
            </section> 
        </main>
    )
}


export default Main