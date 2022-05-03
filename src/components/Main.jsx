import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'
import { motion } from 'framer-motion'

import CollectionsOverview from '../components/CollectionsOverview'
import CurrentEvent from '../components/CurrentEvent'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

import '../styles/main.scss'

const Main = () => {
    const [manu] = useContext(ManuContext)

    return (
      <>
            <Nav /> 
            <CurrentEvent />
            <CollectionsOverview/>
            <Footer />
            </>
    )
}


export default Main