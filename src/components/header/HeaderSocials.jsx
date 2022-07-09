import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/olumide-jones-ab2031215/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/Lumi4God" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.youtube.com/c/Lumigoodboi" target="_blank" rel="noreferrer"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials