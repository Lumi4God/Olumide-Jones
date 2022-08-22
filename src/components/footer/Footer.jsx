import React from 'react'
import './footer.css'
import {FaSpotify} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'



const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>LUMICODE</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://open.spotify.com/artist/3yqkjMHcqHPOqML0JH89mA" target="_blank" rel="noopener noreferrer"><FaSpotify/></a>
        <a href="https://www.instagram.com/tribe_of_jones/" target="_blank" rel="noopener noreferrer"><FiInstagram/></a>
        <a href="https://twitter.com/LumiJones" target="_blank" rel="noopener noreferrer"><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; LUMICODE. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer