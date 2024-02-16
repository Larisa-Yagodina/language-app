import axios from "axios";
import {useDispatch} from "react-redux";

// export const API_URL = 'http://localhost:5000';
export const API_URL = 'https://english-app-server.vercel.app/';

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config;
})

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    const originalRequest = error.config;

    if (error.response.status == 401 && error.config && !error.config._isRetry) {
        originalRequest._isRetry = true;
        try{
            const response = await axios.get(`${API_URL}/user/refresh`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
            console.log('НЕ АВТОРИЗОВАН')
            const dispatch = useDispatch()
            dispatch({type: 'DELETE_USER', payload: null})
        }
    }
    throw error;
})


export default $api;
