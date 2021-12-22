import React, { Fragment, useState } from "react";
import logoImage from "../../assets/images/logo.png";
import "../../styles/header.scss";
import { Link } from "react-router-dom";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const burgerClick = () =>{
    setIsActive(!isActive);
  }

  return (
    <Fragment>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item">
              <Link to="/">
                <img src={logoImage} />
              </Link>
            </a>

            <a onClick={burgerClick}
              role="button"
              className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="navbarBasicExample"
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable"></div>
            </div>

            <div className="navbar-end">
              <div className="navbar-item">
                <div className="columns">
                  <div className="column">
                    <Link to="/register" className="button is-white has-text-custom-purple">
                      Register
                    </Link>
                  </div>
                  <div class="column">
                    <Link to="/login" className="button is-outlined is-custom-purple">
                      Login
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
