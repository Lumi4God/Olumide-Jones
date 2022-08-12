import React, { useEffect } from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolioIMGs/portfolio-1.jpeg'
import IMG2 from '../../assets/portfolioIMGs/portfolio-2.jpeg'
import IMG3 from '../../assets/portfolioIMGs/portfolio-3.PNG'
import IMG4 from '../../assets/portfolioIMGs/portfolio-4.jpeg'
import IMG5 from '../../assets/portfolioIMGs/portfolio-5.jpg'
import IMG6 from '../../assets/portfolioIMGs/portfolio-6.jpeg'
import IMG7 from '../../assets/portfolioIMGs/portfolio-7.jpeg'
import IMG8 from '../../assets/portfolioIMGs/portfolio-8.jpeg'
import IMG9 from '../../assets/portfolioIMGs/portfolio-9.jpeg'
//aos
import Aos from 'aos'
import 'aos/dist/aos.css'


// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'An Arcade Image-Jackpot game',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/Image-Jackpot-game/'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Official music Website of the Tribe of Jones',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/React-SPA-musician-page/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'A fully responsive Game page, (My Final Project)',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/game-page-final/'
  },
  {
    id: 4,
    image: IMG4,
    title: 'A digital clock with alarm function that greets you',
    github: 'https://github.com/Lumi4God',
    demo: 'https://a-digital-clock-with-alarm-function.vercel.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'A Quiz app with sound on click',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/React-Quiz-app/'
  },
  {
    id: 6,
    image: IMG6,
    title: 'My Tiktok game',
    github: 'https://github.com/Lumi4God',
    demo: 'https://tic-tac-toe-game-indol.vercel.app/'
  },
  {
    id: 7,
    image: IMG7,
    title: 'My Musicfy project, a music machine',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/A-music-player/'
  },
  {
    id: 8,
    image: IMG8,
    title: 'A Loan Calculator',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/loan-calculator/'
  },
  {
    id: 9,
    image: IMG9,
    title: 'A Free Web Front-page Template',
    github: 'https://github.com/Lumi4God',
    demo: 'https://lumicode17.github.io/Template-001/'
  }
]


const Portfolio = () => {

  //aos 
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
 

  return (
    <section id='portfolio' data-aos="fade-right" /*YOU CAN ALSO DO THE TIMING HERE data-aos-duration="4000" */>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} rel="noreferrer" className='btn' target='_blank'>Github</a>
                <a href={demo} rel="noreferrer" className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio