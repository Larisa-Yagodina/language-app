import React, {useContext, useEffect, useState} from 'react';
import MainMenu from "./main-menu/MainMenu";
import Alerts from "./redux/Alerts";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import LoginForm from "./auth-login-logout/LoginForm";
import UserService from "./auth-login-logout/services/UserService";


const App = () => {

    const {storeUser} = useContext(Context)
    const [users, setUsers] = useState([])

    useEffect(() => {
        if (localStorage.getItem('token')) {
            storeUser.checkAuth()
        }
    }, [])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            setUsers(response.data);
        } catch (e) {
            console.log(e)
        }
    }

    if (storeUser.isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }

    if (!storeUser.isAuth) {
        return (
            <div>
                <LoginForm/>
            </div>

        )
    }

    console.log(storeUser)

    return (
        <div style={{margin: 12}}>
            <h3>{storeUser.isAuth
                ? <div>
                    Пользователь {storeUser.user.email} авторизован
                    <button onClick={() => storeUser.logout()}>Logout</button>
                </div>
                : `Необходима авторизация`}</h3>
            <h3>{storeUser.user.isActivated === 'true' ? 'Пользователь активирован' : 'Подтвердите аккаунт'}</h3>
            <button onClick={getUsers}>Получить пользователей</button>
            {users.map(el =>
                <li key={el.email}>{el.email}</li>
            )}
            <MainMenu/>
            <Alerts/>
        </div>
    );
};

export default observer(App);