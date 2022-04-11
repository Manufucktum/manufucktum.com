import React, { useState, createContext } from 'react'

import tempData from '../data/AprilData.json'

export const ManuContext = createContext()

const ManuProvider = ({ children }) => {
    const [manu, setManu] = useState({
        currentInfoComponent: 'artist',
        api: tempData,
        currentArtist: tempData.collections[0]
    })
    
    return (
        <ManuContext.Provider
            value={[manu, setManu]}
        >
            {children}
        </ManuContext.Provider>
    )
}

export default ManuProvider