import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { editUser } from "../../../redux/slicer/userSlice";

const EditUser = () => {
  const { id } = useParams();
  const redirect = useNavigate();
  const dispatch = useDispatch();
  const schema = yup.object().shape({
    userName: yup
      .string()
      .min(4, "نام کاربری باید بیشتر از 4 کارکتر باشد")
      .max(20, "نام کاربری باید کمتر از 20 کارکتر باشد")
      .required("نام کاربری الزامی می باشد"),
    email: yup
      .string()
      .email("ایمیل را صحیح وارد کنید")
      .required("ایمیل الزامی می باشد"),
    //   .required("کلمه عبور الزامی می باشد"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const user = useSelector((state) => state.user.value).find(
    (user) => user.id == id
  );
  if (!user) {
    return (
      <div className="text-center mt-5">
        <h3>کاربری یافت نشد</h3>
      </div>
    );
  }

  const onSubmitHandler = async (data) => {
    const edit_user = { id, userName: data.userName, email: data.email };
    dispatch(editUser(edit_user));
    redirect("/user");
  };

  return (
    <div className="row">
      <div className="col-12">
        <div class="card card-primary">
          <div class="card-header">
            <h3 class="card-title">ویرایش کاربر {user.userName}</h3>
          </div>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <div class="card-body">
              <div class="form-group">
                <label for="exampleInputEmail1">ایمیل</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="ایمیل"
                  {...register("email")}
                  defaultValue={user.email}
                />
              </div>
              <div className="text-danger mb-2">{errors.email?.message}</div>
              <hr />
              <div class="form-group">
                <label for="exampleInputPassword1">نام کاربری</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="کلمه عبور"
                  {...register("userName")}
                  defaultValue={user.userName}
                />
              </div>
              <div className="text-danger mb-2">{errors.userName?.message}</div>
            </div>

            <div class="card-footer">
              <button type="submit" class="btn btn-outline-primary ml-4">
                تایید
              </button>
              <Link to="/user" class="btn btn-outline-danger">
                انصراف
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
