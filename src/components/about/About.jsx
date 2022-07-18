import React from 'react'
import './about.css'
import ME from '../../assets/me-about-me.PNG'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {MdLibraryMusic} from 'react-icons/md'

/* import Award1 from '../../assets/awards/DCI-Fullstack Developer-2Stars-2022-05-16.png'
import Award2 from '../../assets/awards/DCI-JavascriptDeveloper-3stars-2022-05-16.png'
import Award3 from '../../assets/awards/DCI-UserInterfaceDeveloper-3stars- 022-05-16.png'
import Award4 from '../../assets/awards/DCI-UserInterfaceDeveloper-3stars- 022-05-16.png'
import Award5 from '../../assets/awards/DCI-React Developer-2Stars-2022-05-16.png' */

const About = () => {
  

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About-me-frame" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1 Year</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>Worldwide</small>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>

            <article className='about__card'>
              <MdLibraryMusic className='about__icon'/>
              <h5>Music</h5>
              <small>4 Singles out</small>
            </article>
          </div>

          <p>
          I'm a diligent Web Developer with a passion for solving problems and learning new things, also a
                        visually sophisticated and technologically proficient person; I'm also a Musician, and a Content creator. For all responsive and
                        multi-functional Web - don't search further.<br></br> 
                        <strong><i> DO YOU WANT TO KNOW MORE ABOUT ME? <br></br> &#128071;&#127996;&#128071;&#127996;</i></strong>
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

          {/* <section className="badges">
                <img src={Award1} alt="badge" className="badgeImg"></img>
                <img src={Award2} alt="badge" className="badgeImg"></img>
                <img src={Award3} alt="badge" className="badgeImg"></img>
                <img src={Award4} alt="badge" className="badgeImg"></img>
                <img src={Award5} alt="badge" className="badgeImg"></img>     
          </section> */}

          

        </div>
      </div>
    </section>
  )
}

export default About