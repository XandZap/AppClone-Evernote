import React, { Fragment, useState } from "react";
import HeaderLogged from "../../components/header_logged";
import Notes from "../../components/notes";


const NotesScreens = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Fragment>
      <HeaderLogged setIsOpen={setIsOpen} />
      <Notes setIsOpen={setIsOpen} isOpen={isOpen}/>
    </Fragment>
  );
};

export default NotesScreens;
