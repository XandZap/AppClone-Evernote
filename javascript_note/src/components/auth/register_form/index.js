import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/user";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.register({ name: name, email: email, password: password });
      setRedirectToLogin(true);
    } catch (error) {
      setError(true);
    }
  };

  if (redirectToLogin) return <Navigate to={{ pathname: "/login" }} />;

  return (
    <Fragment>
      <div className="columns is-centered">
        <form onSubmit={HandleSubmit}>
          <div className="column is-12">
            {/*Name*/}
            <div className="field">
              <label className="label is-small" htmlFor="name">
                Name:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="name"
                  id="name"
                  required
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>
            {/*Email*/}
            <div className="field">
              <label htmlFor="email" className="label is-small">
                Email:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            {/*Password*/}
            <div className="field">
              <label htmlFor="password" className="label is-small">
                Password:
              </label>
              <div className="control">
                <input
                  className="input"
                  type="password"
                  required
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            {/*Buttons*/}
            <div className="field">
              <div className="control">
                <div className="columns">
                  <div className="column">
                    <a
                      className="button is-white has-text-custom-purple"
                      onClick={(e) => setRedirectToLogin(true)}
                    >
                      Login or
                    </a>
                  </div>
                  <div className="column">
                    <button className="button is-custom-purple is-outlined">Register</button>
                  </div>
                </div>
              </div>
            </div>
            {error && <p className="helper has-text-danger-dark">Email or Password invalid</p>}
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default RegisterForm;
