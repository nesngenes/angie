import React, {useState} from 'react'

import {images} from '../../constants'

import './navbar.css'

const Navbar = () => {
  const [isMobile, setisMobile] = useState(false);

  return (
    <div className='navbar' data-aos="fade-up">
      <img className='navbar-logo' src={images.AngieLogo} alt="angie-spa-logo" />
      <div className={isMobile ? 'navbar-menus-mobile' : 'navbar-menus'}>
        <a>Home</a>
        <a>About</a>
        <a>Services</a>
        <a>Contact</a>
        <a>Location</a>
      </div>
      <img src={images.mobileMenu} onClick={() => setisMobile(!isMobile)} alt="menus" id='humberger-menu' />
      <div className='navbar-sosmed'>
        <img src={images.ig} alt="" />
        <img src={images.tw} alt="" />
        <img src={images.fb} alt="" />
      </div>
    </div>
  )
}

export default Navbar