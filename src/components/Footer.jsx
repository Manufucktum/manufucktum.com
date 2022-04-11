import React from 'react'

import '../styles/footer.scss'

const Footer = () => {
    return (
        <footer
            className="footer-container"
        >
           <p><a href="https://instagram.com/manufucktum" target="_blank" rel="noreferrer">Instagram</a></p>
           <p><a href="https://discord.gg/MTFdv9Day6" target="_blank" rel="noreferrer">Discord</a></p>
           {/* <p>Presse</p> */}
           {/* <p>Newsletter</p>    */}        
           <p><a href="/imprint" >Impressum</a></p> 
         
        </footer>
        
    )
}

export default Footer