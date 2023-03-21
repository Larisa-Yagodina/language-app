import React, {useContext, useEffect, useState} from 'react';
import MainMenu from "./main-menu/MainMenu";
import Alerts from "./redux/Alerts";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import LoginForm from "./auth-login-logout/LoginForm";
import UserService from "./auth-login-logout/services/UserService";
import RegistrationForm from "./auth-login-logout/RegistrationForm";


const App = () => {

    const {storeUser} = useContext(Context)
    const appName = 'English UP';

    useEffect(() => {
        if (localStorage.getItem('token')) {
            storeUser.checkAuth()
        }
    }, [])

    // const [users, setUsers] = useState([])
    // async function getUsers() {
    //     try {
    //         const response = await UserService.fetchUsers();
    //         setUsers(response.data);
    //     } catch (e) {
    //         console.log(e)
    //     }
    // }

    if (storeUser.isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if (!storeUser.isAuth) {
        return (
            <div>
                <LoginForm appName={appName}/>
            </div>
        )
    }

    return (
        <div style={{margin: 12}}>

            <MainMenu appName={appName}/>
            <Alerts/>
        </div>
    );
};

export default observer(App);