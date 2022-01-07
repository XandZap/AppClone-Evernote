import React, { Fragment, useEffect, useState } from "react";
import UsersService from "../../../../services/user";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(null);
  const [eye, setEye] = useState("");

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setPassword(user["password"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.updatePassword({ password: password });
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  const handleEye = () => {
    if (eye == "password") setEye("text");
    else setEye("password");
  };

  return (
    <Fragment>
      <div className="container-editor" id="background">
        <div className="columns box is-centered" >
          <form onSubmit={handleSubmit} id="password">
            <div className="control">
              <label htmlFor="name">Mudar a senha:</label>
            </div>
            <div className="field has-addons">
              <p className="control">
                <input
                  className="input"
                  id="name"
                  onChange={(e) => setPassword(e.target.value)}
                  type={eye}
                  required
                  name="name"
                />
              </p>
              <p className="control has-icons-right">
                <button className="button is-small is-right" type="button" onClick={handleEye}>
                  <FontAwesomeIcon icon={faEye} />
                </button>
              </p>
            </div>
            <div className="column has-text-centered">
              <button className="button is-custom-purple" type="submit">
                Atualizar
              </button>
            </div>
            <div className="colum">
              {status == "error" && <p className="tag is-danger">Problem in update the password</p>}
              {status == "success" && <p className="tag is-primary">Updated password with success</p>}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdatePassword;
