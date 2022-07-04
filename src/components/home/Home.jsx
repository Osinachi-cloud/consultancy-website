import React from 'react'
import ContactSection from './contactSect/ContactSection'
import ContactSectionTwo from './contactSectTwo/ContactSectionTwo'
import Hero from './hero/Hero'
import Services from './services/Services'
import Slider from './slider/Slider'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Services/>
        <ContactSection/>
        <Slider/>
        <ContactSectionTwo/>
    </div>
  )
}

export default Home