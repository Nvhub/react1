import React from "react";

const AppTitle = () => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0 text-dark">خانه</h1>
          </div>
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item">
                <a href="#">خانه</a>
              </li>
              <li className="breadcrumb-item active">صفحه اصلی</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppTitle;
