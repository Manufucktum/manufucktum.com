import React from 'react'
import { io } from "socket.io-client"
import '../styles/interaction.scss'
const socket = io("https://api.manufucktum.com", { transports: ["websocket"] });

const Interaction = () => {

    function interact(){
        socket.emit('feat');
    }

    return (
        <div className="interaction-container">
            <button onClick={()=> interact()}>
                <span className="interaction-icon"> 
                    <svg viewBox="0 0 10 35" fill="white">        
                        <polygon  points="36.7,10.8 6,10.8 15.2,2.2 13.2,0 0,12.3 13.2,24.5 15.2,22.3 6,13.8 36.7,13.8 "/>
                    </svg>
                </span> Push the Button   
                <span className="interaction-timer">10sek</span>
            </button>
        </div>
    )
}

export default Interaction