import React from 'react'

import './footer.css'

import {images} from '../../constants'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content' id='ft-1'>
        <div className='angie-footer-logo'>
          <h3>Angie Spa</h3>
          <img src={images.rose} alt="rose" className='rose' />
        </div>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <img src={images.ig} alt="ig" />
        <img src={images.tw} alt="tw" />
        <img src={images.fb} alt="fb" />
      </div>
      <div className='footer-content' id='ft-2'>
        <h3>Services</h3>
        <p>Message</p>
        <p>Facial</p>
        <p>Scrub</p>
        <p>Mask</p>
        <p>Others</p>
      </div>
      <div className='footer-content' id='ft-3'>
        <h3>Quick Link</h3>
        <p>Home</p>
        <p>About</p>
        <p>Services</p>
        <p>Contact</p>
        <p>Location</p>
      </div>
    </div>
  )
}

export default Footer