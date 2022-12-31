import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <section className="content">
      <div className="error-page">
        <h2 className="headline text-warning"> 404</h2>

        <div className="error-content">
          <h3><i className="fas fa-exclamation-triangle text-warning"></i> اوه</h3>

          <p>
             متاسفا صفحه مورد نظر یافت نشد امکان دارد این صفحه حذف شده باشد و دیگر وجود نداشته باشد
            <Link to={'/'}>برگشت به خانه</Link>
          </p>


        </div>

      </div>

    </section>
  );
};

export default PageNotFound;
