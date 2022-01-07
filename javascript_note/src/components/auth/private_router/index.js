import React from "react";
import { Navigate, Outlet } from "react-router-dom";
//import { Component } from 'react/cjs/react.production.min';

/*const PrivateRoute = ({ Component }) => (
  localStorage.getItem("user") 
    ? <Component/> 
    : <Navigate to="/login" />
);*/

const PrivateRoute = () => 
  localStorage.getItem("user") 
  ? <Outlet /> 
  : <Navigate to="/login" />;


export default PrivateRoute;
