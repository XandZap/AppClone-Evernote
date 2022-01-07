import React, { useState, useEffect } from "react";
import logoImage from "../../assets/images/logo-white.png";
import "../../styles/header.scss";
import UsersService from "../../services/user";
import { Link, Navigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList } from "@fortawesome/free-solid-svg-icons";

function HeaderLogged(props) {
  const [redirectToHome, setRedirectToHome] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [name, setName] = useState("");

  //recuperar nome do usuario
  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem('user'));
    setName(user['name']);
  }

  useEffect(() =>{
    initializeUser()    
  }, [])

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  const burgerClick = () => {
    setIsActive(!isActive);
  };

  const logOut = async () => {
    await UsersService.logout();
    setRedirectToHome(true);
  };

  

  if (redirectToHome) return <Navigate to="/" />;

  return (
    <nav className="navbar is-custom-purple" role="navigation" aria-label="main navigation" id="navbar-logged">
      <div className="navbar-brand">
        <div className="columns">
          <div className="column is-11 is-offset-1">
            <Link to="/notes">
              <img src={logoImage} alt="logo" />
            </Link>
          </div>
        </div>

        <a
          onClick={burgerClick}
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

        <div className="navbar-item navbar-start" align="start">
          <div className="navbar-item">
            <button className="button is-white is-outlined"  onClick={() => props.setIsOpen(true)}>
              <FontAwesomeIcon icon={faList} />
            </button>
          </div>
        </div>

        <div className="navbar-item navbar-end" align="center">
          <div className="navbar-item">
            <div className={`dropdown is-right ${isActive ? "is-active" : ""}`}>
              <div classNames="dropdown-trigger">
                <button className="button is-white is-outlined" onClick={handleToggle}>
                  <span>{`${name} ▼`}</span>
                </button>
              </div>
            
              <div className="dropdown-menu ">
                <div className="dropdown-content">
                  <div className="dropdown-item ">
                    <Link to="/users/edit">User Edit</Link>
                  </div>
                  <hr className="dropdown-divider" />
                  <div className="dropdown-item">
                    <a href="#" onClick={(e) => logOut()}>
                      LogOut
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default HeaderLogged;
