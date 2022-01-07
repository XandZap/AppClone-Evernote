import React, { Fragment, useEffect, useState } from "react";
import UsersService from "../../../../services/user";
import { Link } from "react-router-dom";

const DeleteUser = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.delete();
      setStatus("success");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <Fragment>
      <div className="container-editor" id="background">
        <div className="columns box is-centered">
          <form onSubmit={handleSubmit}>
            <div className="del notification is-danger has-text-centered">
              Você tem certeza que deseja deletar o usuario?
              <button className="button is-link has-text-black"><Link style={{ textDecoration: 'none' }} to="/notes">Não, voltar as Notas</Link></button>
              <button className="button is-warning is-small">sim, deletar</button>
              
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default DeleteUser;