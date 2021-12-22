import React, { Fragment } from "react";
import presentationImage from "../../assets/images/presentation.png";
import Header from "../../components/header";
import "../../styles/home.scss";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  return (
    <Fragment>
      <Header />
      <section className="section are-medium" id="home">
        <div className="container">
          <div className="columns">
            <div className="column is-5">
              <h2 className="title is-2 has-text-white is-spaced">
                Create notes easily and access when you wants on the cloud
              </h2>
              <h5 className="subtitle is-5 is-spaced has-text-light">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or
                web designs.
                <br />
                <br />
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print.
              </h5>
              <Link to="/register" className="button is-outlined is-white is-large">
                <strong>Register for free Now</strong>
              </Link>
            </div>
            <div className="column is-6 is-offset-1">
              <figure className="image">
                <img src={presentationImage} />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default HomeScreen;
