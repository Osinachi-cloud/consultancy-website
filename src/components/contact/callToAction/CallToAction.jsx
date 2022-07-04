import React from 'react'
import ContactHeader from '../contactHeader/ContactHeader'
import "./CallToAction.css"
import { NavLink } from "react-router-dom"
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import {grey } from "@mui/material/colors";



const CallToAction = () => {
  return (
    <div className="callToAction">
         <ContactHeader/>
         <div className="call-to-action-wrapper">
            <div className="call-to-action-wrapper-first">
            </div>
            <div className="call-to-action-wrapper-second">
                <ul className="call-to-action-item-list">
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                    <NavLink className="call-to-action-item-link" to="">
                        <li className="call-to-action-item">
                            <WhatsAppIcon style={{ fontSize: 100 }} sx={{ color: grey[300] }} />
                            <p>Lorem ipsum dolor sit amet.</p>
                        </li>
                    </NavLink>
                </ul>
            </div>
            <div className="call-to-action-wrapper-third">
            </div>
         </div>


    </div>
  )
}

export default CallToAction