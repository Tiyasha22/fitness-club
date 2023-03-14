import React from "react";
import { Github, LinkedIn, Instagram, Logo } from "../../assets";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="Footer-container">
      <hr />
      <div className="footer">
        <div className="socialmedia-links">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
        <div className="logo-f">
          <img src={Logo} alt="" />
        </div>
        <div>
          <span>Made by Tiyasha Mohanty</span>
          <span>Learnt from ZAINKEEPSCODE</span>
        </div>
      </div>
      <div className="blur footer-blur-1"></div>
      <div className="blur footer-blur-2"></div>
    </div>
  );
};

export default Footer;
