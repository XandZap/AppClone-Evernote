import React, { Fragment } from "react";
import HeaderLogged from "../../../../components/header_logged/index";
import DeleteUser from "../../../../components/users/edit/delete";

const DeleteScreen = () => (
  <Fragment>
    <HeaderLogged/>
    <DeleteUser/>
  </Fragment>
);

export default DeleteScreen;