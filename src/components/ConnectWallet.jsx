import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ManuContext } from '../providers/ManuProvider'
import '../styles/wallet.scss'

const ConnectWallet = () => {
    const [manu] = useContext(ManuContext)

    return (
        <div 
            className="wallet-container"   
        >
            <motion.button
                style={{ 
                    backgroundColor: manu.light, 
                    color: manu.dark, 
                    border: `1px solid ${manu.dark}`,
                    borderBottomLeftRadius : 5 
                }}
                whileHover={{ backgroundColor: manu.dark, color: manu.light }}
            >
               Connect Wallet 
            </motion.button>
        </div>
    )
}

export default ConnectWallet