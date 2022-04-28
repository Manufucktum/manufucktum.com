import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { ManuContext } from "../providers/ManuProvider";

import '../styles/current-event.scss'

const CurrentArtist = () => {
    const [manu] = useContext(ManuContext)

    return (
        <div 
            className="current-box"
            style={{ color: manu.dark }} 
        >
            <h1>Current Exhibition</h1>
            <div className="ref">
                <Link 
                    to="/live" 
                    className="ref-link"
                    style={{ backgroundColor: manu.dark }}
                >
                    <p style={{ color: manu.light }}>Watch Now</p>
                    <svg viewBox="0 0 10 35" fill={manu.light}>        
                        <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                    </svg>
                </Link >
                {/* <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse </p> */}
           </div>
            <div 
                className="current"
                style={{ borderColor: manu.dark }}    
            >
                {Object.keys(manu.currentArtist).length !== 0 && (
                    <>
                        <Link to="/live"> 
                            <h1>{manu.api.exhibits[0].title}</h1>
                            <h5>sound installation by <br />{manu.currentArtist.name}</h5>

                        </Link>
                    </>
                )}            
            </div>
        </div>
    )
}


export default CurrentArtist