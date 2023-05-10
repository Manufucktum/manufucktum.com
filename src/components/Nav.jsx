import React, { useContext } from 'react';
 import { motion } from 'framer-motion'
import { ManuContext } from "../providers/ManuProvider";
import { NavLink, useLocation } from 'react-router-dom'

import ConnectWallet from '../components/ConnectWallet'
import '../styles/nav.scss';

const Nav = ({width}) => {
    const [manu] = useContext(ManuContext)
    const location = useLocation()

    // console.log(location)

    return (
        <nav className="nav-container"  style={{
            width:width,
            // left: location.pathname === '/latest' ? "auto": 0,
            // right: location.pathname === '/latest' ? 0:"auto"
          
        }} >
          
            <ul className="nav-links" >  
                <li> 
                    
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
            </NavLink></li>
                {/* <li>
                    <NavLink to="/latest"  style={{ 
                        backgroundColor: location.pathname === '/latest' ? manu.dark : manu.light,
                        color: location.pathname === '/latest' ? manu.light : manu.dark, 
                    }}
                    whilehover={{ backgroundColor: manu.dark, color: manu.light }}>Latest</NavLink>
                </li> */}
                {/* <li>
                    <NavLink to="/collections"  style={{ 
                        backgroundColor: location.pathname === '/collections' ? manu.dark : manu.light,
                        color: location.pathname === '/collections' ? manu.light : manu.dark, 
                    }}
                    whilehover={{ backgroundColor: manu.dark, color: manu.light }}>Projects</NavLink>
                </li> */}
                {/* <li>
                    <NavLink to="/about" style={{ 
                        backgroundColor: location.pathname === '/about' ? manu.dark : manu.light,
                        color: location.pathname === '/about' ? manu.light : manu.dark
                    }}
                    whilehover={{ backgroundColor: manu.dark, color: manu.light }}>About</NavLink>
                </li> */}
            </ul>
            <ConnectWallet/>
        </nav> 
    )
}

export default Nav