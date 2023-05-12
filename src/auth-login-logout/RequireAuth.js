import React, {useEffect} from 'react';
import { useLocation, Navigate } from "react-router-dom";
import {connect} from "react-redux";
import {checkAuth} from "../redux/actionsAuthorisation";

const RequireAuth = ({children, user, checkAuth}) => {

    const location = useLocation();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            checkAuth()
        }
    }, [])

    const userIsAuth = user.isAuth; //return true - авторизован /false - не авторизован

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