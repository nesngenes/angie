import React from 'react'

import './services.css'
import { images } from '../../constants'

const Services = () => {
  return (
    <div className='services-page'>
        <h1 className='main-heading'>Main Services & <br/>
Special Features</h1>
        <img src={images.rosePetals} alt="rose-petals" className='rose-petals'/>
        <div className='services-content'>
            <div className='service' data-aos="fade-up" data-aos-duration="1000">
                <div>
                    <h3>Queens Bath</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src={images.queensBath} alt="queens-bath-image" className='queens-bath' />
            </div>
            <div className='service' data-aos="fade-left" data-aos-duration="1000">
                <img src={images.bodyMassage} alt="body-massage-image" className='body-massage' />
                <div>
                    <h3>Body Massage</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <button className='all-service-button'>See All Service</button>
            <button className='appoinment-button'>Make Appointment</button>
            <div className='service' data-aos="fade-right" data-aos-duration="2000">
                <img src={images.facial} alt="facial-image" className='facial-image'/>
                <div>
                    <h3>Facial</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
            </div>
            <div className='service' data-aos="fade-up" data-aos-duration="2000">
                <div>
                    <h3>Body Scrub</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <img src={images.scrub} alt="body-scrub" />
            </div>
        </div>
        <img src={images.batuBunga} alt="batuBunga" className='batu-bunga'/>
    </div>
  )
}

export default Services