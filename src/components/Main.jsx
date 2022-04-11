import React, { useContext } from 'react'
import { ManuContext } from '../providers/ManuProvider'

const Main = () => {
    const [manu, setManu] = useContext(ManuContext)
    console.log("main manu: ", manu)
    return (
        <main>
            <p>Main</p>
        </main>
    )
}


export default Main