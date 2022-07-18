import React from 'react'
import './header.css'
import CTA from './CTA'
import Mine from '../../assets/mine.PNG'
import Mouse from '../../assets/mouse.png'
/* import {BsMouse} from 'react-icons/bs' */
import HeaderSocial from './HeaderSocials'

import LogoClock from '../../assets/Nav/logoClock.jsx'

/* import Spline  from "@splinetool/react-spline" */

const Header = () => {
  return (
    <header id="home">
      <LogoClock />

      {/* <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" className="spline" /> */}
      {/* <Spline scene="https://prod.spline.design/jJLlopKqICs-AcgG/scene.splinecode" className="spline"/> */}

      <div className="container header__container">
        {/* <h2 className="header__title">Lumi<span>Code</span></h2> */}
        <h5>Hello I'm</h5>
        <h1>Olumide Jones</h1>
        {/* <img className="Mine" src={Mine} alt="mouse" /> */}
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />
        <HeaderSocial />

        <div className="me">
           {/* <img src={Mine} alt="me" /> */}
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down </a>
        <a href="#contact" className="scroll__down_anchor"><img className="mouse" src={Mouse} alt="mouse" /></a>
      </div>
    </header>
  )
}

export default Header
