import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <ul className="footer-wrapper">
          <NavLink to=""><li>Privacy Policy</li></NavLink>
          <NavLink to=""><li>Cookies Policy</li></NavLink>
          <NavLink to=""><li>Blog</li></NavLink>
          <NavLink to=""><li>Contact</li></NavLink>
          <NavLink to=""><li>FAQ</li></NavLink>
        </ul>
      </div>
    </>
  );
};

export default Footer;
