import React from "react";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="register-box">
      <div className="register-logo">
        <a href="#">
          <b>Samin</b>RAY
        </a>
      </div>

        <Outlet />
    </div>
  );
};

export default AuthLayout;
