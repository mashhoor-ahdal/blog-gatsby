import * as React from 'react'
import {footer_container} from './Footer.module.css'

const Footer = () => {
  return (
    
        <footer>
            <div className={footer_container}>
              <a href='https://github.com/mashhoorahdal' target='__blank'>
                Github 
              </a>
              <p>Developed by Mashhoor Ahdal</p>
            </div>
        </footer>
    
  )
}

export default Footer