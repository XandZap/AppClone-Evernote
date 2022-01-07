import React, { Fragment, useEffect, useState } from "react";
import UsersService from "../../../../services/user";
//import "../../../../styles/users.scss"

const UpdateName = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const initializeUser = async () => {
    const user = await JSON.parse(localStorage.getItem("user"));
    setName(user["name"]);
    setEmail(user["email"]);
  };

  useEffect(() => {
    initializeUser();
  }, []);

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {
      await UsersService.update({ email: email, name: name });
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
            <div className="column">
              <label htmlFor="name">Mudar o nome:</label>
              <input
                className="input"
                id="name"
                onChange={(e) => setName(e.target.value)}
                type="text"
                value={name || ""}
                required
                name="name"
              />
            </div>

            <div className="column">
              <label htmlFor="email">Mudar o email:</label>
              <input
                className="input"
                id="email"
                type="email"
                value={email || ""}
                onChange={(e) => setEmail(e.target.value)}
                required
                name="email"
              />
            </div>
            <div className="column has-text-centered">
              <button className="button is-custom-purple" type="submit">
                Atualizar
              </button>
            </div>
            <div className="colum">
              {status == "error" && <p className="tag is-danger">Problem in update</p>}
              {status == "success" && <p className="tag is-primary">Updated with success</p>}
            </div>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default UpdateName;
