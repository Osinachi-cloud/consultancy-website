import React from 'react'
import './ContactSectionTwo.css'
import { NavLink } from 'react-router-dom'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const ContactSectionTwo = () => {
  return (
    <div className="contact-section-wrapper">
        <div className="contact-section-two">
            <div className="first-section-1">
                    <p>Let's Talk</p>
                    <div>
                      <EmailOutlinedIcon style={{fontSize:"40px", marginRight:"0.5rem"}}/>
                      <span>hello@offshorebankaccounts.com</span>
                    </div>
            </div>
            <div className="second-section-2">
                <h1>Tailor-made solutions for your needs</h1>
                <p>We know that it is not easy to navigate in the offshore world, and we do not believe that there exists a one-fits-all solution.
                </p>
                <NavLink to="" className="button">Get in touch</NavLink>
            </div>

        </div>
    </div>
  )
}

export default ContactSectionTwo