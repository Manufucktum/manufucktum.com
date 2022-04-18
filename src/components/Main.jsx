import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'

import CurrentEvent from '../components/CurrentEvent'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Main = () => {
    const [manu] = useContext(ManuContext)

    return (
        <main 
            className="main-container"
            style={{ backgroundColor: manu.light }}
        >
            <Nav /> 
            <div className="main-body">
                <CurrentEvent />
            </div>
            <Footer />
        </main>
    )
}


export default Main