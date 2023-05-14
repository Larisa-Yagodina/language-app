import {registration} from "../auth-login-logout/services/AuthServiceFunction";
import AuthService from "../auth-login-logout/services/AuthService";

export function registrationAction(email, password, callback) {

    return async (dispatch) => {
        try {
            const response = await registration(email, password)
            localStorage.setItem('token', response.data.accessToken);
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user
                },
            })
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    message: "Для активации аккаунта вам на почту было отправлено письмо",
                    alertColour: 'success'
                },
            })
            callback()
        } catch (e) {
            const message = e.response.data.includes('local recipient verification failed')
                ? "Email doesn't exist"  : 'Something went wrong';
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
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
        try {
            const response = await AuthService.refresh();
            localStorage.setItem('token', response.data.accessToken);
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user

                },
            })

        } catch (e) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Необходимо авторизоваться", alertColour: 'error'},
            })
        } finally {
            dispatch({
                type: 'SET_LOADING',
                payload: false,
            })
        }
    }
}

export function resetPassword(email, password, oldPassword) {
    return async (dispatch) => {
        try {
            const response = await AuthService.setNewPassword(email, password, oldPassword);
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    message: response.data,
                    alertColour: 'success'
                },
            })
        } catch (e) {
            const message = e.response.data;
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
        }
    }
}

export function forgotPasswordSendEmail(email) {
    return async (dispatch) => {
        try {
            const response = await AuthService.sendEmailToSetNewPassword(email);
            localStorage.setItem('token', response.data.token);
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    // message: response.data,
                    message: "На ваш емэйл отправлено письмо со ссылкой",
                    alertColour: 'success'
                },
            })
        } catch (e) {
            const message = e.response.data;
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
        }
    }
}

export function forgotPasswordReset(id, password) {
    return async (dispatch) => {
        try {
            const response = await AuthService.resetPasswordThroughEmail(id, password);
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    message: response.data,
                    //message: 'password was changed successfully',
                    alertColour: 'success'
                },
            })
        } catch (e) {
            const message = e.response.data;
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
        }
    }
}


export function requestForActivationLinkMail(email) {
    return async (dispatch) => {
        try {
            const response = await AuthService.activateThroughEmail(email);
            dispatch({
                type: 'OPEN_ALERT',
                payload: {
                    message: response.data,
                    //message: 'password was changed successfully',
                    alertColour: 'success'
                },
            })
        } catch (e) {
            const message = e.response.data;
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
        }
    }
}