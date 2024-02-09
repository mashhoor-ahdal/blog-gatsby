import * as React from 'react'
import {footer_container,footerLinks} from './Footer.module.css'

const Footer = () => {
  return (
    
        <footer>
            <div className={footer_container}>
              <div className={footerLinks}>
              <a href='https://github.com/mashhoorahdal' target='__blank'>
                Github 
              </a>
              <a href='https://mashhoorahdal.github.io/portfolio/' target='__blank'>
                Portfolio 
              </a>
              </div>
              <p>Developed by Mashhoor Ahdal</p>
            </div>
        </footer>
    
  )
}

export default Footer