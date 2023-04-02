import axios from 'axios';
import AuthService from "../auth-login-logout/services/AuthService";
import {registration} from '../auth-login-logout/services/AuthServiceFunction'
import $api, {API_URL} from "../auth-login-logout/IndexLogin";
import {addUserPhrase, fetchUserPhrases} from "../auth-login-logout/services/UserService";

//const URI = 'https://english-app-server.vercel.app';
// const URI = 'http://localhost:5000'
export const URI = 'https://english-app-server.up.railway.app'


export function getUserSentences() {
    return (dispatch) => {
        axios.get(`${URI}/userPhrases`)
            .then(res => {
                console.log('phrases ok')
                dispatch({
                    type: 'GET_USER_SENTENCES',
                    payload: res.data,
                })
            })
            .catch(err =>
                console.log(err)
            )
    }
}

export function getUserPhrases() {
    return async (dispatch) => {
        try {
            const response = await fetchUserPhrases();
            //const response = await props.fetchUsers();
            dispatch({
                type: 'GET_USER_SENTENCES',
                payload: response.data,
            })
        } catch (e) {
            console.log(e)
        }
    }
}

export function addUserPhraseWithCheckAuth(word) {
    return async (dispatch) => {
        try {
            const response = await addUserPhrase(word)
            console.log(response)
            dispatch(
                getUserPhrases()
            );
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase has been added successfully", alertColour: "success"},
            })
            console.log("OK")
        }
        catch (err) {
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Phrase hasn't been changed", alertColour: "error"},
            })
        }
    }
}

// export function addUserPhrase(word) {
//     return (dispatch) => {
//         axios.post(`${URI}/userPhrases`, word)
//             .then(res => {
//                 dispatch(
//                     getUserSentences()
//                 );
//                 dispatch({
//                     type: 'OPEN_ALERT',
//                     payload: {message: "Phrase has been added successfully", alertColour: "success"},
//                 })
//                 console.log("OK")
//             })
//             .catch(err => {
//                     console.log("ERROR")
//                     dispatch({
//                         type: 'OPEN_ALERT',
//                         payload: {message: "Phrase hasn't been changed", alertColour: "error"},
//                     })
//                 }
//             )
//     }
// }

export function changeUserPhrase(id, changes) {
    return (dispatch) => {
        axios.patch(`${URI}/userPhrases/${id}`, changes)
            .then(res => {
                dispatch(getUserSentences());
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase has been changed successfully", alertColour: 'success'},
                })
            })
            .catch(err =>
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase hasn't been changed", alertColour: 'error'},
                })
            )
    }
}


export function deleteUserPhrase(id) {
    return (dispatch) => {
        axios.delete(`${URI}/userPhrases/${id}`)
            .then(res => {
                dispatch(getUserSentences());
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase has been deleted successfully", alertColour: 'success'},
                })
            })
            .catch(err =>
                dispatch({
                    type: 'OPEN_ALERT',
                    payload: {message: "Phrase hasn't been delete", alertColour: 'error'},
                })
            )
    }
}


export function registrationAction(email, password) {
    return async (dispatch) => {
        try {
            const response = await registration(email, password)
            localStorage.setItem('token', response.data.accessToken);
            console.log(response?.data?.user)
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
            const message = e.response.data.split(': ')[1].split('<br>')[0];
            //alert(message === 'Message failed' ? 'Этот адрес не существует' : message)
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message, alertColour: 'error'},
            })
            //console.log(e.response?.data?.message)
        }
    }

}

export function login(email, password) {
    return async (dispatch) => {
        try {
            const response = await AuthService.login(email, password);
            localStorage.setItem('token', response.data.accessToken);
            console.log(response)
            dispatch({
                type: 'SET_USER',
                payload: {
                    isAuth: true,
                    user: response?.data?.user,
                    isLoggedIn: true,
                },
            })
            // this.setAuth(true)
            // this.setUser(response.data.user)
        } catch (e) {
            const message = e.response.data.split(': ')[1].split('<br>')[0];
            //alert(message)
            console.log(e)
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
            const response = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true});
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
            console.log(e.response?.data?.message)
            dispatch({
                type: 'OPEN_ALERT',
                payload: {message: "Ошибка рефреш", alertColour: 'error'},
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


    // export function fetchUsers(){
    //     return async (dispatch) => {
    //         $api.get('/users')
    //     }
    // }

