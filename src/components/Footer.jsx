import React, { useContext } from 'react'
import { motion } from 'framer-motion'
import { ManuContext } from '../providers/ManuProvider'

import '../styles/footer.scss'

const Footer = () => {
    const [manu] = useContext(ManuContext)
    return (
        <footer className="footer-container">
               <motion.a 
                    href="https://instagram.com/manufucktum" 
                    target="_blank" 
                    rel="noreferrer"
                    style={{ color: manu.dark }}
                >
                   Instagram  
               </motion.a>
               <a 
                    href="https://discord.gg/MTFdv9Day6" 
                    target="_blank" 
                    rel="noreferrer"
                >
                    Discord
                </a>
                {/* <a
                    href="/faq"
                    style={{ color: manu.dark }}
                >
                    F.A.Q.
                </a>  */}
                {/* <a 
                    href="/imprint"
                    style={{ color: manu.dark}}
                >
                    Newsletter
                </a>        */}
                <a 
                    href="/imprint"
                    style={{ color: manu.dark}}
                >
                    Impressum
                </a>
        </footer>
    )
}

export default Footer