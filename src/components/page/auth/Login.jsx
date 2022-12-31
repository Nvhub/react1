import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addToken, addUser } from "../../../redux/slicer/userSlice";
import store from "../../../redux/store";
import uuid from "../../../util/uuid";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import generateToken from "../../../util/generateToken";

export const Login = () => {
  const [userPassError, setUserPassError] = useState(false);

  const users = useSelector((state) => state.user.value);

  const redirect = useNavigate();
  const dispatch = useDispatch();

  const checkUser = async (userName, password) => {
    const user = users.find(
      (user) => user.username === userName && user.password === password
    );
    if (user == null) setUserPassError(true);
    else {
      const token = generateToken(50);
      localStorage.setItem("token", token);
    }
  };



  const schema = yup.object().shape({
    userName: yup
      .string()
      .min(4, "نام کاربری باید بیشتر از 4 کارکتر باشد")
      .max(20, "نام کاربری باید کمتر از 20 کارکتر باشد")
      .required("نام کاربری الزامی می باشد"),
    password: yup
      .string()
      .min(6, "کلمه عبور باید بیشتر از 6 کارکتر باشد")
      .max(32, "کلمه عبور باید کمتر از 32 کارکتر باشد")
      .required("کلمه عبور الزامی می باشد"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = async (data) => {
    console.log(data);
    
    const user = users.filter(
      (user) => user.username === data.username && user.password === data.password
    );

    
    if (user.length == 0) setUserPassError(true);
    else{
      const token = generateToken(50);
      localStorage.setItem("token", token);
      dispatch(addToken({id: user[0].id, token}))
      redirect('/')
    }
  };

  return (
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">ثبت نام</p>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className={'form-control'}
              placeholder="نام کاربری"
              {...register("userName")}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-user"></span>
              </div>
            </div>
          </div>
          <p className="text-center text-danger">{errors.userName?.message}</p>

          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="کلمه عبور"
              {...register("password")}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <p className="text-center text-danger">{errors.password?.message}</p>
          {userPassError ? (
            <p className="text-center text-danger">
              کاربری با این نام و یا کلمه عبور یافت نشد
            </p>
          ) : null}

          <p>
            ایا حساب دیگری دارید ؟<Link to={"/auth/register"}>وارد شوید </Link>
          </p>
          <div className="row">
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-primary btn-block btn-flat"
              >
                ثبت نام
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
