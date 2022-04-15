import React, { useContext } from 'react';
import { ManuContext } from "../providers/ManuProvider";
import { NavLink } from 'react-router-dom'
import '../styles/nav.scss';
import ConnectWallet from '../components/ConnectWallet'


const Nav = () => {
    const [manu, setManu] = useContext(ManuContext)

    return (
        <nav className="nav-container">
            <ul className="nav-links">
                <li className="nav-logo-container">
                    <NavLink activeclassname="active" to="/">
                        <svg viewBox="0 0 100 100" fill="white">
                            <path d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z" stroke="black" strokeWidth="6"/>
                        </svg>
                    </NavLink>
                </li>
                <li><NavLink activeclassname="active" to="/live">Live</NavLink></li>
                <li><NavLink activeclassname="active" to="/collections">Collections</NavLink></li>
                <li><NavLink activeclassname="active" to="/about">About</NavLink></li>
            </ul>
            <ConnectWallet/>
        </nav>
    )
}

export default Nav