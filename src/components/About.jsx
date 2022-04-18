import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/about.scss'

const About = () => {
    const [manu]  = useContext(ManuContext)
    console.log(manu);

    return (
        <section 
            className="about-container"
            style={{ backgroundColor: manu.light, color: manu.dark }}
        > 
        
            <Nav /> 
                {Object.keys(manu.api).length !== 0 && (
                    <div className="about-info">
                        <h1>{manu.api.general.title}</h1>
                        <p>{manu.api.general.desc}</p>
                    </div> 
                )}
            <Footer />
         </section>
    )
}

export default About