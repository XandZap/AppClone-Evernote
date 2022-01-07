import React, { Fragment } from "react";
import HeaderLogged from "../../../../components/header_logged/index";
import UpdatePassword from "../../../../components/users/edit/updatepassword";
import "../../../../styles/users.scss"

const UpdatepasswordScreen = () => (
  <Fragment>
    <HeaderLogged/>
    <UpdatePassword/>
  </Fragment>
);

export default UpdatepasswordScreen;