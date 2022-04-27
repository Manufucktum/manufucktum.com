import React, { useContext } from 'react';
import { motion } from 'framer-motion'
import { ManuContext } from "../providers/ManuProvider";
import { NavLink, useLocation } from 'react-router-dom'

import ConnectWallet from '../components/ConnectWallet'
import '../styles/nav.scss';

const Nav = () => {
    const [manu] = useContext(ManuContext)
    const location = useLocation()
    console.log(location)

    return (
        <nav className="nav-container">
            <NavLink 
                to="/" 
                className="nav-logo-container" 
                style={{ 
                    backgroundColor: manu.dark
                }}
            >
                <motion.svg 
                    viewBox="0 0 100 100" 
                >
                    <path 
                        d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z" 
                        strokeWidth="4" 
                        style={{
                            fill: manu.dark,
                            stroke: manu.light
                        }}    
                    />
                </motion.svg>
            </NavLink>
            <ul className="nav-links" style={{ borderTop: `2px solid ${manu.dark}` }}>  
                <motion.li
                    style={{ 
                        backgroundColor: location.pathname === '/live' ? manu.dark : manu.light,
                        color: location.pathname === '/live' ? manu.light : manu.dark, 
                    }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                >
                    <NavLink to="/live">Live</NavLink>
                </motion.li>
                <motion.li
                    style={{ 
                        backgroundColor: location.pathname === '/collections' ? manu.dark : manu.light,
                        color: location.pathname === '/collections' ? manu.light : manu.dark, 
                    }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                >
                    <NavLink to="/collections">Collections</NavLink>
                </motion.li>
                <motion.li
                    style={{ 
                        backgroundColor: location.pathname === '/about' ? manu.dark : manu.light,
                        color: location.pathname === '/about' ? manu.light : manu.dark,
                        borderBottomRightRadius: 5
                    }}
                    whileHover={{ backgroundColor: manu.dark, color: manu.light }}
                >
                    <NavLink to="/about">About</NavLink>
                </motion.li>
            </ul>
            <ConnectWallet/>
        </nav> 
    )
}

export default Nav