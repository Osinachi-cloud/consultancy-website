import React from 'react'
import CallToAction from './callToAction/CallToAction'
import ContactForm from './contactForm/ContactForm'
import ContactHeader from './contactHeader/ContactHeader'

const Contact = () => {
  return (
    <>
         <ContactHeader/>
         <ContactForm/>
         <CallToAction/>
    </>
  )
}

export default Contact