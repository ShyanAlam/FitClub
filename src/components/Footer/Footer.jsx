import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import instagram from "../../assets/instagram.png";
import linkedin from "../../assets/linkedin.png";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <hr />
      <div className="footer">
        <div className="social-links">
          <a href="https://github.com/magupta1" target="_blank"><img src={github} alt="github" /></a>
         <a><img src={instagram} alt="instagram" /></a>
          <a href="https://www.linkedin.com/in/mukesh-gupta-49108624a/" target="_blank"><img src={linkedin} alt="linkedin" /></a>
        </div>
        <div className="logo-f">
          <img src={logo} alt="" />
        </div>
      </div>
      <div className="blur blur-f1"></div>
      <div className="blur blur-f2"></div>
    </div>
  );
};

export default Footer;
