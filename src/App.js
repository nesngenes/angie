import React from 'react'

import LandingPage from './components/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import AboutUs from './components/AboutUs/AboutUs'
import Feedback from './components/Feedback/Feedback'
import Services from './components/Services/Services'

const App = () => {
  return (
    <div>
        <LandingPage />
        <AboutUs />
        <Services />
        <Feedback />
        <Footer />
    </div>
  )
}

export default App