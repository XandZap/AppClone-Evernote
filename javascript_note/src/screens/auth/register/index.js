import React, { Fragment } from "react";
import Header from "../../../components/header";
import logoImage from "../../../assets/images/logo.png";
import "../../../styles/auth.scss";
import RegisterForm from "../../../components/auth/register_form";


const RegisterScreen = () => {
  return (
    <Fragment>
      <Header />
      <section className="section is-medium" id="auth">
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-3">
              <div className="card">
              <div className="card-content">
                <section className="section">
                  <div className="columns is-centered">
                    <div className="column is-12">
                      <img src={logoImage} alt="Placeholder image" />
                    </div>
                  </div>
                  <div className="columns">
                    <div className="column is-12">
                      <p className="title is-6 has-text-grey has-text-centered">Your notes on the cloud</p>
                    </div>
                  </div>
                  <RegisterForm/>
                </section>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </Fragment>
  );
};

export default RegisterScreen;
