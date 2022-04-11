import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'

import '../styles/about.scss'

const About = () => {
    const [manu]  = useContext(ManuContext)
    return (
        <section className="about-container"> <h1>MANUFUCKTUM</h1>
            <p>{manu.api.desc}</p>
         </section>
    )
}

export default About