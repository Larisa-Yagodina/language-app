import {registration} from "../auth-login-logout/services/AuthServiceFunction";
import AuthService from "../auth-login-logout/services/AuthService";
import { Navigate } from "react-router-dom";
import React from "react";


export function registrationAction(email, password) {

    return async (dispatch) => {
        try {
            const response = await registration(email, password)
            localStorage.setItem('token', response.data.accessToken);
            //console.log(response?.data?.user)
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user
                },
            })
            // this.setAuth(true)
            // this.setUser(response?.data?.user)
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    message: "Для активации аккаунта вам на почту было отправлено письмо",
                    alertColour: 'success'
                },
            })
            //alert('Для активации аккаунта вам на почту было отправлено письмо')
        } catch (e) {
            const message = e.response.data;
            //alert(message === 'Message failed' ? 'Этот адрес не существует' : message)
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
            //console.log(e.response?.data?.message)
        }
    }

}

export function login(email, password, callback) {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user,
                    isLoggedIn: true,
                },
            });
            callback();
        } catch (e) {
            const message = e.response.data;
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
        }
    }
}

export function logout() {
    return async (dispatch) => {
        try {
            const response = await AuthService.logout();
            localStorage.removeItem('token');
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: false,
                    data: {},
                },
            })
            return <Navigate to='/login' />
            // this.setAuth(false)
            // this.setUser({})
        } catch (e) {
            console.log(e.response?.data?.message)
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: e.response?.data?.message, alertColour: 'error'},
            })
        }
    }
}

export function checkAuth() {
    return async (dispatch) => {

        dispatch({
            type: 'SET_LOADING',
            payload: true,
        })
        //this.setLoading(true);
        try {
            // const response = await AuthService.login(email, password);
            //const response = await axios.get(`https://localhost:5000/user/refresh`, {withCredentials: true});
            const response = await AuthService.refresh();
            localStorage.setItem('token', response.data.accessToken);
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user

                },
            })
            // this.setAuth(true)
            // this.setUser(response?.data?.user)
        } catch (e) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Необходимо авторизоваться", alertColour: 'error'},
                // payload: {message: e.response?.data?.message, alertColour: 'error'},

            })
        } finally {
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
            //this.setLoading(false)
        }
    }
}