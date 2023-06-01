import React from "react";

//redux
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import Login from "../Component/Login";


const AuthRoute = () => {
  debugger;
  const isAuth = true;

  return isAuth ? <Outlet /> : <Login />;
};

export default AuthRoute;
