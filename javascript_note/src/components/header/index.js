import React, { Fragment } from "react";
import logoImage from "../../assets/images/logo.png";
import '../../styles/header.scss'

const Header = () => {
    return (
        <Fragment>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            <img src={logoImage}/>
                        </a>

                        <a
                            role="button"
                            class="navbar-burger"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarBasicExample"
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <div class="navbar-item has-dropdown is-hoverable"></div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">item 1</div>
                        </div>
                    </div>
                </div>
            </nav>
        </Fragment>
    );
};

export default Header;
