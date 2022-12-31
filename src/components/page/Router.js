import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLayout from "../common/layout/AdminLayout";
import AuthLayout from "../common/layout/AuthLayout";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";
import PageNotFound from "./error/PageNotFound";
import Index from "./home/Index";
import { Provider, useSelector } from "react-redux";
import store from "../../redux/store";
import Logout from "./auth/Logout";
import Users from "./admin/Users";
import EditUser from "./admin/EditUser";

const Router = () => {
  const user = useSelector((state) =>
    state.user.value.find((u) => u.token == localStorage.getItem("token"))
  );
  console.log(user);

  return (
    <BrowserRouter>
      <Routes>
        {user ? (
          <Route path="/" element={<AdminLayout />}>
            <Route index element={<Index />} />
          </Route>
        ) : null}

        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          {user ? (
          <Route path="logout" element={<Logout />} />
          ): null}
        </Route>
        {user && user.role == "admin" ? (
          <Route path="/user" element={<AdminLayout />}>
            <Route index element=<Users /> />
            <Route path=":id" element={<EditUser />} />
          </Route>
        ) : null}
        {user ? (
          <Route path="*" element={<AdminLayout />}>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        ) : (
          <Route path="*" element={<AuthLayout />}>
            <Route path="*" element={<Login />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
