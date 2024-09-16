import React from 'react'
import './Hero.css'
import profile_img from '../../Assests/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'


const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={profile_img} alt="" />
        <h1> <span>I'm Srinivasan,</span> Frontend Developer based in India.</h1>
        <p>I am a frontend developer from Tirupati, India with 1.5 years of experience in frontend development. </p>
         <div className='hero-action'>
            <div className='hero-connect'>
            <AnchorLink className='anchor-link' offset={50} href='#contact' >Connect with me</AnchorLink>
            </div>
            <div className='hero-resume'>
                My Resume
            </div>
        </div>     
    </div>
  )
}

export default Hero
