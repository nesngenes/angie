import React from 'react'

import './about.css';

import {images} from '../../constants'

const AboutUs = () => {
  return (
    <div className='about-page'>
      <div className='about-content'>
        <div className='about-heading'>
          <img src={images.AngieLogo} alt="" />
          <h1 className='main-heading'>Welcome to our Spa </h1>
        </div>
        <div className='absolute-content'>
          <img className='rose-massage' data-aos="fade-right" data-aos-duration="1000" src={images.roseMassage} alt="" />
          <img className='rose-bath' data-aos="fade-left" data-aos-duration="1000" src={images.roseBath} alt="" />
          <div className='about-us' data-aos="fade-up" data-aos-duration="1000">
            <h2>About Us</h2>
            <div className='about-line'></div>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs