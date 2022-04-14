import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import Nav from '../components/Nav'

import '../styles/about.scss'

const About = () => {
    const [manu]  = useContext(ManuContext)
    console.log(manu);
    return (
        <section className="about-container"> 
        
            <Nav /> 
            {Object.keys(manu.api).length !== 0 && (
                <>
                    <h1>{manu.api.general.title}</h1>
                    <p>{manu.api.general.desc}</p>
                </> 
           )}
         </section>
    )
}

export default About