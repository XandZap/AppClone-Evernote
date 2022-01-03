import React, { Fragment, useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/user";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [RedirectToRegister, setRedirectToRegister] = useState(false);
  const [RedirectToNotes, setRedirectToNotes] = useState(false);
  const [error, setError] = useState(false);

  const HandleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      const user = await UsersService.login({ email: email, password: password });
      setRedirectToNotes(true);
    } catch (error) {
      setError(true);
    }
  };

  if (RedirectToRegister) return <Navigate to={{ pathname: "/register" }} />;
  else if (RedirectToNotes) return <Navigate to={{ pathname: "/notes" }} />;

  return (
    <Fragment>
      <div className="columns is-centered">
        <form onSubmit={HandleSubmit}>
          <div className="column is-12">
            {/*Email*/}
            <div className="field">
              <label htmlFor="email" className="label is-small">
                Email:
              </label>
              <div className="control">
                <input
                  className="input"
                  id="email"
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
                  id="password"
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
                <div breakpoint="mobile">
                  <div className="columns">
                    <div className="column">
                      <a onClick={e => setRedirectToRegister(true)} className="button is-white has-text-custom-purple">Register or</a>
                    </div>
                    <div className="column">
                      <button className="button is-custom-purple is-outlined">Login</button>
                    </div>
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
}

export default LoginForm;
