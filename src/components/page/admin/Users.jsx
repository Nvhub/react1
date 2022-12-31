import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { removeUser } from "../../../redux/slicer/userSlice";

const Users = () => {
  const users = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    const me = users.find(user => user.token == localStorage.getItem('token'))
    
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "آیا مطمئنید",
        text: "آیا مایل به حذف این کاربر هستید ؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "بله , حذف شود",
        cancelButtonText: "خیر , انصراف",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          if(me.id == id){
            swalWithBootstrapButtons.fire({
              title: "خطا !",
              text: "شما حساب خود را نمی توانید حذف کنید",
              icon: "error",
              confirmButtonText: "تایید",
            });
            
          }
          else{
            dispatch(removeUser(id))
            swalWithBootstrapButtons.fire({
              title: "عملیات با موفقیت انجام شد !",
              text: "کاربر با موفقیت حذف شد",
              icon: "success",
              confirmButtonText: "تایید",
            });
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "انصراف",
            text: "کاربر با انصراف شما حذف نشد",
            icon: "error",
            confirmButtonText: "تایید",
          });
        }
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">لیست کاربران</h3>
            </div>
            <div className="card-body p-0">
              <table className="table table-condensed">
                <thead>
                  <tr>
                    <th className="text-center">#</th>
                    <th className="text-center">نام کاربری</th>
                    <th className="text-center">ایمیل</th>
                    <th className="text-center">دسترسی مدریت</th>
                    <th className="text-center">تنظیمات</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <tr key={user.id}>
                      <td className="text-center">{user.id}</td>
                      <td className="text-center">{user.userName}</td>
                      <td className="text-center">{user.email}</td>
                      <td className="text-center">
                        {/* <span className="badge bg-danger">55%</span> */}
                        {user.role == "admin" ? (
                          <i className="fas fa-check text-success"></i>
                        ) : (
                          <i className="fas fa-ban text-danger"></i>
                        )}
                      </td>
                      <td className="text-center">
                        <a href="#" onClick={() => deleteHandler(user.id)}>
                          <i className="far fa-trash-alt text-danger ml-3"></i>
                        </a>
                        <Link to={`/user/${user.id}`}>
                          <i className="far fa-edit text-info"></i>
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
