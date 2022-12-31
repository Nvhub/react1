import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { addUser } from "../../../redux/slicer/userSlice";
import {store} from "../../../redux/store";
import uuid from "../../../util/uuid";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const Register = () => {

  const redirect = useNavigate();

  const schema = yup.object().shape({
    email: yup
      .string()
      .email("ایمیل را صحیح وارد کنید")
      .required("ایمیل الزامی می باشد"),
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
    rePassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "کلمه عبور با تکرار آن مطابقت ندارد")
      .required("تکرار کلمه عبور الزامی می باشد"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmitHandler = (data) => {
    const user = {
      id: uuid(),
      userName: data.userName,
      email: data.email,
      password: data.password,
      token: "",
    };
    store.dispatch(addUser(user));
    redirect("/");
  };

  return (
    <div className="card">
      <div className="card-body register-card-body">
        <p className="login-box-msg">ثبت نام</p>

        <form onSubmit={handleSubmit(onSubmitHandler)}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
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
              type="email"
              className="form-control"
              placeholder="ایمیل"
              {...register("email")}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-envelope"></span>
              </div>
            </div>
          </div>
          <p className="text-center text-danger">{errors.email?.message}</p>
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

          <div className="input-group mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="تکرار کلمه عبور "
              {...register("rePassword")}
            />
            <div className="input-group-append">
              <div className="input-group-text">
                <span className="fas fa-lock"></span>
              </div>
            </div>
          </div>
          <p className="text-center text-danger">
            {errors.rePassword?.message}
          </p>

          <p>
            ایا حساب دیگری دارید ؟<Link to={"/auth/login"}>وارد شوید </Link>
          </p>
          <div className="row">
            <div className="col-12">
              <button type="submit" className="btn btn-primary btn-block btn-flat">
                ثبت نام
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
