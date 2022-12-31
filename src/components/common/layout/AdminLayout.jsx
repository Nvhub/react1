import React from "react"
import { Outlet } from "react-router";

import AppTitle from "../include/AppTitle";
import Aside from "../include/Aside";
import Footer from "../include/Footer";
import Navbar from "../include/Navbar";

const AdminLayout = () => {

  // store.dispatch(getAllUsers([
  //   {id:1, userName: 'vahid', email:'vahid@gmail.com',password:'vahid1234'},
  //   {id:2, userName: 'reza', email:'reza@gmail.com',password:'reza1234'},
  // ]))

  return (
    <div className="wrapper">
      <Navbar />

      <Aside />

      <div className="content-wrapper" >
        <AppTitle />
        <section className="content">
          <div className="container-fluid"><Outlet /></div>
        </section>
      </div>

      <Footer />

      <div id="sidebar-overlay"></div>
    </div>
  );
};

export default AdminLayout;
