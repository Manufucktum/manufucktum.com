import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/about.scss'

const About = () => {
    const [manu]  = useContext(ManuContext)

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "linear" }}
            className="about-container"
            style={{ backgroundColor: manu.light, color: manu.dark }}
        > 
        
            <Nav /> 
                {Object.keys(manu.api).length !== 0 && (
                    <div className="about-info">
                        <h1>{manu.api.general.title}</h1>
                        <div className="about-box">
                            <p>{manu.api.general.desc}</p>
                        </div> 
                    </div> 
                )}
            <Footer />
         </motion.section>
    )
}

export default About