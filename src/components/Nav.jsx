import React, { useContext } from 'react';
import { ManuContext } from "../providers/ManuProvider";

import '../styles/nav.scss';

const Nav = () => {
    const [manu, setManu] = useContext(ManuContext)

    return (
        <nav className="nav-container">
            <div className="nav-links">
                <div className="nav-logo-container">
                    <svg viewBox="0 0 100 100" fill="none">
                        <path d="M39.5 32L61 68.5H82L61 32L39.5 68.5H18L39.5 32Z" stroke="black" strokeWidth="6"/>
                    </svg>
                </div>
                <p
                    onClick={() => {
                        // setCurrentInfoComponent('artist')
                        setManu(state => ({ ...state, currentInfoComponent: 'artist' }))
                    }}
                    className="nav-link"
                    style={manu.currentInfoComponent === 'artist'
                        ? { color: 'white', background: 'black' }
                        : { color: 'black', background: 'white' }
                    }
                >Current Artist</p>
                {/* <p
                    onClick={() => {
                        // setData(state => ({ ...state, viewCollectionsNav: !state.viewCollectionsNav }))
                        setInfoCom('collection')
                    }}
                    className={styles.link}
                    style={infoCom === 'collection'
                    ? { color: 'white', background: 'black' }
                    : { color: 'black', background: 'white' }
                }
                >Collections</p> */}

                <p
                    onClick={() => {
                        // setCurrentInfoComponent('about')
                        setManu(state => ({ ...state, currentInfoComponent: 'about' }))
                    }}
                    style={manu.currentInfoComponent === 'about'
                    ? { color: 'white', background: 'black' }
                    : { color: 'black', background: 'white' }
                }
                    className="nav-link"
                >About</p>
            </div>
        </nav>
    )
}

export default Nav