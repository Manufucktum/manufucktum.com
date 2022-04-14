import React, { useEffect, useState, createContext } from 'react'

import tempData from '../data/AprilData.json'

export const ManuContext = createContext()

const ManuProvider = ({ children }) => {
    const [manu, setManu] = useState({
        currentInfoComponent: 'artist',
        api: {},
        currentArtist:{}
    })

    useEffect(() => {
        
        const url = "https://api.manufucktum.com/projects/all";
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();
            console.log(json);
            setManu(state => ({
                ...state, 
                api: json,
                currentArtist: json.artist[0]
            }))
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    return (
        <ManuContext.Provider
            value={[manu, setManu]}
        >
            {children}
        </ManuContext.Provider>
    )
}

export default ManuProvider