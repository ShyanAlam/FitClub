import React, { useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import {Link, link} from 'react-scroll'

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <img className="logo" src={Logo} alt="" />
      {menuOpen === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            cursor: 'pointer',
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpen(true)}
        >
          <img
            src={bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem", cursor: 'pointer'}}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li><Link
          onClick={() => setMenuOpen(false)}
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          >Home</Link></li>

          <li><Link
          onClick={() => setMenuOpen(false)}
          to="programs"
          spy={true}
          smooth={true}
          >Programs</Link></li>

          <li><Link
          onClick={() => setMenuOpen(false)}
          to="reasons"
          spy={true}
          smooth={true}
          >Why us</Link></li>

          <li><Link
          onClick={() => setMenuOpen(false)}
          to="plans"
          spy={true}
          smooth={true}
          >Plans</Link></li>
          <li><Link
          onClick={() => setMenuOpen(false)}
          to= "Testimonials"
          spy={true}
          smooth={true}
          >Testimonials</Link></li>
        </ul>
      )}
    </div>
  );
};

export default Header;
