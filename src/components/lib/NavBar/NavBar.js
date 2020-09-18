import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";

import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

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
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            Découvrez moi <i className="fab fa-typo3" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                to="/descriptive"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Descriptif
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/training"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Formation
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/experience"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Expérience
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/adprev"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                AD-PREVOYANCE
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle="btn--outline">Contactez moi</Button>}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
