import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import HomeScreen from "./screens/home";
import NotesScreens from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";

const RouteComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/notes" element={<NotesScreens />} />
      <Route path="/users/edit" element={<UsersEditScreen/>} />
    </Routes>
  </Router>
);

export default RouteComponent;
