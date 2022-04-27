import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'

import CurrentEvent from '../components/CurrentEvent'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Main = () => {
    const [manu] = useContext(ManuContext)

    return (
        <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="main-container"
            style={{ backgroundColor: manu.light }}
        >
            <Nav /> 
            <CurrentEvent />
            <Footer />
        </motion.main>
    )
}


export default Main