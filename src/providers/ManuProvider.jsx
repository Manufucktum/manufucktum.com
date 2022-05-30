import React, { useEffect, useState, createContext } from 'react'

import { randomColor } from '../helpers'

import fallbackData from '../data/projects'

export const ManuContext = createContext()

const ManuProvider = ({ children }) => {
    const [manu, setManu] = useState({
        api: {},
        currentArtist: {},
        currentNfts: {},
        currentExhibition: {},
        dark: '',
        light: '',
        live:'',
        featured:false
    })

    useEffect(() => {
        
        const url = "https://api.manufucktum.com/projects/all";
     
        const fetchData = async () => {
        //   try {
        //     const response = await fetch(url);
        //     const json = await response.json();
        //     console.log(json);
        //     setManu(state => ({
        //         ...state, 
        //         api: json,
        //         currentArtist: json.artist[0]
        //     }))
        //   } catch (error) {
            let currentNfts = [];

            for (let i = 0;i < fallbackData.nfts.length; i++) {
                if(fallbackData.artist[2].id == fallbackData.nfts[i].artist_id){
                 currentNfts.push(fallbackData.nfts[i]);

                }   
            }
            console.log(currentNfts)
        
            setManu(state => ({
                ...state, 
                api: fallbackData,
                currentArtist:  fallbackData.artist[2],
                currentNfts:currentNfts
            })) 
        //     console.log("error", error);
        //   }
        };
    
        fetchData();
    }, []);
    useEffect(() => {
        fetch('https://api.manufucktum.com/stream-status')
        .then(response => response.json())
        .then(data => {
            let live = true;
            console.log(data.live.id);
                if(data.live.id){
                    live = true;
                } else {
                    live = false;
                }
            setManu(state => ({
                ...state, 
                live:live
            }))
        })
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