import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router";
import { Redirect } from "react-router-dom";
import { removeToken } from "../../../redux/slicer/userSlice";
import { store } from "../../../redux/store";

const Logout = () => {
    const user = useSelector(state => state.user.value).find(user => user.token == localStorage.getItem('token'))
    useEffect(() => {    
        store.dispatch(removeToken(user))
        localStorage.removeItem('token')
    }, []);
    
    return(<Navigate to={'/auth/login'} />)
};

export default Logout;
