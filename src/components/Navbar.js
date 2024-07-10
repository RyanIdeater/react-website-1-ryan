import React, { useState, useEffect } from "react";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Button } from "./Button";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closedMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closedMobileMenu}>
            SportTV <i className="fas fa-futbol" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link tp="/" className="nav-links" ocClick={closedMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link tp="/services" className="nav-links" ocClick={closedMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link tp="/tvstream" className="nav-links" ocClick={closedMobileMenu}>
                TV & Streaming
              </Link>
            </li>
            <li className="nav-item">
              <Link tp="/sign-up" className="nav-links-mobile" ocClick={closedMobileMenu}>
                Sign up
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
