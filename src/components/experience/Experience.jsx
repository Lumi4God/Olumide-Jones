import React/* , { useEffect } */ from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
/* import Award1 from '../../assets/awards/DCI-Fullstack Developer-2Stars-2022-05-16.png'
import Award2 from '../../assets/awards/DCI-UserInterfaceDeveloper-3stars- 022-05-16.png'
import Award3 from '../../assets/awards/DCI-JavascriptDeveloper-3stars-2022-05-16.png'
import Award4 from '../../assets/awards/DCI-UserInterfaceDeveloper-3stars- 022-05-16.png'
import Award5 from '../../assets/awards/DCI-React Developer-2Stars-2022-05-16.png' */


const Experience = () => {
  

  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        {/* END OF FRONTEND */}

        <div className="experience__backend">
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Node JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Express JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            {/* <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> */}
           {/*  <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
      {/* <section className="badges">
                <img src={Award1} alt="badge" className="badgeImg"></img>
                <img src={Award2} alt="badge" className="badgeImg"></img>
                <img src={Award3} alt="badge" className="badgeImg"></img>
                <img src={Award4} alt="badge" className="badgeImg"></img>
                <img src={Award5} alt="badge" className="badgeImg"></img>     
      </section> */}
    </section>
  )
}

export default Experience