import React, { useState, useEffect, useMemo, useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { useWindowSize } from '../hooks/useWindowSize'

import About from '../components/About'
import CurrentArtist from '../components/CurrentArtist'
import Nav from '../components/Nav'
import Video from '../components/Video'
import Footer from '../components/Footer'
import Interaction from '../components/Interaction'

import '../styles/main.scss'

const Live = () => {
    const [manu, setManu] = useContext(ManuContext)
    console.log("main manu: ", manu)
    const size = useWindowSize()
    const [dimensionsVideo, setDimensionsVideo] = useState({width: 'auto', height: 'auto'})
    const [dimensionsContent, setDimensionsContent] = useState({width: 'auto', height: 'auto'})

    useEffect(() => {
        if(size.width <= 800){
            setDimensionsVideo(state => ({ 
                ...state,
                height: size.width,
                width: size.width
            }))
        } else {
            setDimensionsVideo(state => ({ 
                ...state,
                height: size.height,
                width: size.height
            }))
        }
        setDimensionsContent(state => ({ ...state, width: size.width - size.height }))
    }, [size.width, size.height])

    const infoComponent = useMemo(() => {
            if (manu.currentInfoComponent === 'about') {
                return <About />
            } else {
                return <CurrentArtist />
            }
    }, [manu.currentInfoComponent])

    return (
        <main className="main-container">
             <Nav /> 
           
            <section 
                className="main-video-container" 
                style={{
                    width: dimensionsVideo.width,
                    height: dimensionsVideo.height
                }} 
            >
                <Video />
            </section>
            <section 
                className="info-container" 
                style={{
                    width: size.width >= 800 ? dimensionsContent.width : 'calc(100% - 30px)',
                    overflowY: size.width >= 800 ? 'auto' : null
                }} 
            > 
            
                {infoComponent}
                <Interaction />
                <Footer />
            </section> 
        </main>
    )
}


export default Live