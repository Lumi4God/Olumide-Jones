import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import Mine from '../../assets/mine.PNG'
import Mouse from '../../assets/mouse.png'
import LogoClock from '../../assets/Nav/logoClock.jsx'
/* import {BsMouse} from 'react-icons/bs' */



/* import Spline  from "@splinetool/react-spline" */

const Header = () => {
 

  return (
    <header id="home">
      {<LogoClock />}

      {/* <Spline scene="https://draft.spline.design/1SIsKQFH-TVtEI-0/scene.spline" className="spline" /> */}
      {/* <Spline scene="https://prod.spline.design/jJLlopKqICs-AcgG/scene.splinecode" className="spline"/> */}

      <div className="container header__container">
        {/* <h2 className="header__title">Lumi<span>Code</span></h2> old logo*/}
        <h5>Hello I'm</h5>
        <h1>Olumide Jones</h1>
        <h5 className="text-light">A</h5>
        {/* <h5 className="text-light">Fullstack Developer</h5> old title under my name*/}

        <div className="typingContainer">
          <div className="text">
            <ul>
              <li><span className="span1">Fullstack Developer</span></li>
              <li><span className="span2">Designer</span></li>
              <li><span className="span3">Musician</span></li>
              <li><span className="span4">Content creator</span></li>
            </ul>
          </div>
        </div>

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
