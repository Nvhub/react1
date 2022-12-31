import userEvent from "@testing-library/user-event";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Aside = () => {

  const user = useSelector(state => state.user.value).find(user => user.token == localStorage.getItem('token'))
  return (
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <a href="index3.html" className="brand-link">
      <img
        src="/dist/img/AdminLTELogo.png"
        alt="AdminLTE Logo"
        className="brand-image img-circle elevation-3"
        style={{ opacity: ".8" }}
      />
      <span className="brand-text font-weight-light">AdminLTE 3</span>
    </a>

    <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-rtl os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">
      <div className="os-resize-observer-host">
        <div
          className="os-resize-observer observed"
          style={{ left: "auto", right: "0px" }}
        ></div>
      </div>
      <div
        className="os-size-auto-observer"
        style={{ height: "calc(100% + 1px)", float: "right" }}
      >
        <div className="os-resize-observer observed"></div>
      </div>
      <div
        className="os-content-glue"
        style={{ margin: "0px", width: "249px", height: "402px" }}
      ></div>
      <div className="os-padding">
        <div
          className="os-viewport os-viewport-native-scrollbars-invisible"
          style={{ overflowY: "scroll" }}
        >
          <div
            className="os-content"
            style={{ padding: "0px 8px", height: "100%", width: "100%" }}
          >
            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <img
                  src="/dist/img/user2-160x160.jpg"
                  className="img-circle elevation-2"
                  alt="User Image"
                />
              </div>
              <div className="info">
                <a href="#" className="d-block">
                 {user.userName}
                </a>
              </div>
            </div>

            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item has-treeview menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-home"></i>
                    <p>
                      خانه
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to="/" className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>صفحه اصلی</p>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li className="nav-item has-treeview  menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-user"></i>
                    <p>
                      احراز هویت
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    {/* <li className="nav-item">
                      <Link to={'/auth/login'} className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>ورود</p>
                      </Link>
                    </li> */}
                    <li className="nav-item">
                      <Link to={'/auth/logout'} className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>خروج</p>
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/auth/register'} className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>ثبت نام</p>
                      </Link>
                    </li>
                  </ul>
                </li>
                  {user.role == 'admin' ? (
                    <li className="nav-item has-treeview  menu-open">
                  <a href="#" className="nav-link active">
                    <i className="nav-icon fas fa-users"></i>
                    <p>
                     مدریت کاربران
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <Link to={'/user/'} className="nav-link active">
                        <i className="far fa-circle nav-icon"></i>
                        <p>لیست کاربران</p>
                      </Link>
                    </li>
 
                  </ul>
                </li>
                  ): null}
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable 'os-scrollbar-auto-hidden'">
        <div className="os-scrollbar-track">
          <div
            className="os-scrollbar-handle"
            style={{ width: "100%", transform: "translate(0px, 0px)" }}
          ></div>
        </div>
      </div>
      <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
        <div className="os-scrollbar-track">
          <div
            className="os-scrollbar-handle"
            style={{ height: "37.5233%", transform: "translate(0px, 0px)" }}
          ></div>
        </div>
      </div>
      <div className="os-scrollbar-corner"></div>
    </div>
  </aside>
  );
};

export default Aside;
