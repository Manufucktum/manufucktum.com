import React, { useContext } from 'react';
import { motion } from 'framer-motion'
import { ManuContext } from "../providers/ManuProvider";
import { NavLink } from 'react-router-dom'

import ConnectWallet from '../components/ConnectWallet'
import '../styles/nav.scss';


const Nav = () => {
    const [manu, setManu] = useContext(ManuContext)

    const activeLink = {
        background: manu.dark,
        color: manu.light
    }

    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li className="nav-logo-container">
                    <NavLink activeclassname={activeLink} to="/">
                        <motion.svg 
                            viewBox="0 0 100 100" 
                            style={{
                                fill: manu.light,
                                stroke: manu.dark
                            }}
                            whileHover={{
                                fill: manu.dark,
                                stroke: manu.light
                            }}
                        >
                            <path d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z" strokeWidth="6" />
                        </motion.svg>
                    </NavLink>
                </li>
                <motion.li
                    style={{ backgroundColor: manu.light, color: manu.dark }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                ><NavLink activeclassname="active" to="/live">Live</NavLink></motion.li>
                <motion.li
                    style={{ backgroundColor: manu.light, color: manu.dark }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                ><NavLink activeclassname="active" to="/collections">Collections</NavLink></motion.li>
                <motion.li
                    style={{ backgroundColor: manu.light, color: manu.dark }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                ><NavLink activeclassname="active" to="/about">About</NavLink></motion.li>
            </ul>
            <ConnectWallet/>
        </nav> 
    )
}

export default Nav