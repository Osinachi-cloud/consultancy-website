import React from 'react'
import "./ContactHeader.css"

const ContactHeader = () => {
  return (
    <div className="contact-header">
        <div className="background-shade">
          <div className="contact-first-section">
              <div className="contact-page-title">
                  <h1>Contact Us</h1>
              </div>
          </div>
          <div className="contact-second-section">
              <h1 className="contact-header-title">
                    Money never sleeps, neither do we
              </h1>
              <p className="contact-text-body">
                      As serving clients from all around the globe and partnering 
                      with financial institutions in different times zones and
                      being the intermediary between them our working hours never stops. 
                      So you are welcome to contact us via livechat on this website, email,
                       telephone, Telegram, Signal or Skype. We will do our best to respond 
                       as quick as possible.
              </p>
          </div>
         
           

        </div>
        
    </div>
  )
}

export default ContactHeader