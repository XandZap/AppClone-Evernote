import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../../../styles/users.scss"
import HeaderLogged from "../../../components/header_logged";
import UpdatePassword from "../../../components/users/edit/updatepassword";

const UsersEditScreen = () => (
  <Fragment>
    <HeaderLogged/>
    <Fragment>
      <div className="container-editor" id="background">
      <div className="columns box is-centered ">
        <ul className="edit">
          <div className="column">
            <li>
              <button className="button edit is-custom-purple is-outlined"><Link to="/users/edit/update">Atualizar nome e email</Link></button>
            </li>
          </div>
          <div className="column">
            <li>
              <button className="button edit is-custom-purple is-outlined"><Link to="/users/edit/updatepassword">Atualizar senha</Link></button>
            </li>
          </div>
          <div className="column">
            <li>
              <button className="button del is-danger is-outlined"><Link to="/users/edit/delete">Deletar conta</Link></button>
            </li>
          </div>
        </ul>
      </div>
      </div>
    </Fragment>
  </Fragment>
);

export default UsersEditScreen;
