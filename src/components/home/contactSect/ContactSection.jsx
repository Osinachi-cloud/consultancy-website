import React from 'react'
import "./contact.css"
import { NavLink } from 'react-router-dom'

const ContactSection = () => {
  return (
    <div className="contact-section">
        <div className="contact-wrapper">
            <p>Can’t find what you’re looking for? We know that it is not easy to navigate in the offshore world, and we do not believe that there exists a one-fits-all solution.</p>
            <NavLink to="" className="contact-button">Let's talk</NavLink>
        </div>
        
    
    </div>
  )
}

export default ContactSection