import React, {useEffect} from 'react';
import { useLocation, Navigate, useNavigate } from "react-router-dom";
import {connect} from "react-redux";
import {checkAuth} from "../redux/actionsAuthorisation";

const RequireAuth = ({children, user, checkAuth}) => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/private/my-lessons';
    console.log(location.state?.from?.pathname)

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    const userIsAuth = user.isAuth; //return true - авторизован /false - не авторизован
    console.log("userIsAuth — ", userIsAuth)

    if (userIsAuth) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} />

};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(checkAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);