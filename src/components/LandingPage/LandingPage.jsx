import React from 'react'

import './landing.css'
import Navbar from '../Navbar/Navbar'

const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar />
      <div className='landing-page-main'>
          <h1 data-aos="fade-right" data-aos-duration="800">Make yourself a priority</h1>
          <h2>Angie Spa is the best place for you to relax your body & mind </h2>
          <button className='book-now-button'>Book Now</button>
          <button className='explore-button'>Explore</button>
      </div>
    </div>
  )
}

export default LandingPage