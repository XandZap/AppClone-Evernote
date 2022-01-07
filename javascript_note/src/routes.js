import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/auth/private_router";
import LoginScreen from "./screens/auth/login";
import RegisterScreen from "./screens/auth/register";
import HomeScreen from "./screens/home";
import NotesScreens from "./screens/notes/index";
import UsersEditScreen from "./screens/users/edit";
import DeleteScreen from "./screens/users/edit/delete";
import UpdateScreen from "./screens/users/edit/update";
import UpdatepasswordScreen from "./screens/users/edit/updatepassword";

const RouteComponent = () => (
  <Router>
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/notes" element={<PrivateRoute />}>
          <Route path="" element={<NotesScreens />} />
        </Route>
      <Route path="/users/edit" element={<PrivateRoute/>}>
            <Route path="" element={<UsersEditScreen/>}/>
          </Route>
      <Route path="/users/edit/update" element={<PrivateRoute/>}>
            <Route path="" element={<UpdateScreen/>}/>
          </Route>
      <Route path="/users/edit/updatepassword" element={<PrivateRoute/>}>
            <Route path="" element={<UpdatepasswordScreen/>}/>
          </Route>
      <Route path="/users/edit/delete" element={<PrivateRoute/>}>
            <Route path="" element={<DeleteScreen/>}/>
          </Route>
    </Routes>
  </Router>
);

export default RouteComponent;
