import React from "react";
import "./ContactForm.css";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { grey } from "@mui/material/colors";

const ContactForm = () => {
  return (
    <div>
      <div className="contact-form">
        <div className="contact-form-first-section">
          <h1>Let's Talk</h1>
          <div className="contact-link">
            <WhatsAppIcon
              style={{ fontSize: 40, margin: "0px", padding: "0px" }}
              sx={{ color: grey[300] }}
            />
            <p>hello@offshorebankaccounts.com</p>
          </div>
          <div className="contact-link">
            <WhatsAppIcon style={{ fontSize: 40 }} sx={{ color: grey[300] }} />
            <p>live:gediminas_71</p>
          </div>
          <div className="contact-link">
            <WhatsAppIcon style={{ fontSize: 40 }} sx={{ color: grey[300] }} />
            <p>+971562077140</p>
          </div>
          <div className="contact-link">
            <WhatsAppIcon style={{ fontSize: 40 }} sx={{ color: grey[300] }} />
            <p>+971562077140</p>
          </div>
          <div className="contact-link">
            <WhatsAppIcon style={{ fontSize: 40 }} sx={{ color: grey[300] }} />
            <p>+971562077140</p>
          </div>
        </div>
        <div className="contact-form-second-section">
          <h1>Schedule Your Complimentary Consulation</h1>
          <div className="form-wrapper">

     
          <div className="contact-form-input-wrapper">
            <input type="text" placeholder="Your Name *" />
          </div>
          <div className="contact-form-input-wrapper">
            <input type="text" placeholder="Your Phone number *" />
          </div>
          <div className="contact-form-input-wrapper">
            <input type="text" placeholder="Your Email *" />
          </div>
          <div className="contact-form-input-wrapper">
            <input type="text" placeholder="Subject *" />
          </div>
          <div className="contact-form-input-wrapper">
            <textarea
              placeholder="How can we Help *"
              className="contact-form-text-area"
              name=""
              id=""
              cols="30"
              rows="6"
            ></textarea>
          </div>
          <div className="checkbox-input">
            <input type="checkbox" name="" id="" />
            <p>I would like to make call</p>
          </div>
          <div className="checkbox-group">
            <h4>Services you are interested in</h4>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
            <div className="checkbox-input">
              <input type="checkbox" name="" id="" />
              <p>I would like to make call</p>
            </div>
          </div>
          <div className="checkbox-input">
            <input type="checkbox" name="" id="" />
            <p>I would like to make call</p>
          </div>
          <p>All fields marked with an asterisk (*) must be filled.</p>
          <div className="contact-button">
                Submit
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
