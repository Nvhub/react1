import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const user = useSelector(state => state.user.value).find(user => user.token == localStorage.getItem('token'))
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    <ul className="navbar-nav">
      <li className="nav-item">
        <a className="nav-link" data-widget="pushmenu" href="#">
          <i className="fas fa-bars"></i>
        </a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <Link to="/" className="nav-link">
          خانه
        </Link>
      </li>

    </ul>

    <form className="form-inline ml-3">
      <div className="input-group input-group-sm">
        <input
          className="form-control form-control-navbar"
          type="search"
          placeholder="جستوجو"
          aria-label="Search"
        />
        <div className="input-group-append">
          <button className="btn btn-navbar" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
    </form>

    <ul className="navbar-nav mr-auto-navbav">
      <li className="nav-item dropdown"> {user.userName} خوش آمدید </li>
    </ul>
  </nav>
  );
};

export default Navbar;
