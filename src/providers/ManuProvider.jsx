import React, { useEffect, useState, createContext } from 'react'

import { randomColor } from '../helpers'

import fallbackData from '../data/projects'

export const ManuContext = createContext()

const ManuProvider = ({ children }) => {
    const [manu, setManu] = useState({
        api: {},
        currentArtist: {},
        dark: '',
        light: ''
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
            setManu(state => ({
                ...state, 
                api: fallbackData,
                currentArtist: fallbackData.artist[0]
            })) 
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

    useEffect(() => {
        setManu(state => ({
            ...state,
            dark: randomColor(0, 44, 1),
            light: randomColor(250, 255, 1)
        }))
    }, [])

    return (
        <ManuContext.Provider
            value={[manu, setManu]}
        >
            {children}
        </ManuContext.Provider>
    )
}

export default ManuProvider