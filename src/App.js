import React, {useEffect, useState} from 'react';
import MainMenu from "./main-menu/MainMenu";
import Alerts from "./redux/Alerts";
import LoginForm from "./auth-login-logout/LoginForm";
import {connect} from "react-redux";
import ConfirmationEmailWaiting from "./auth-login-logout/ConfirmationEmailWaiting";
import {checkAuth} from "./redux/actions";
import UserService from "./auth-login-logout/services/UserService";
import MainMenu2 from "./main-menu/MainMenu2";


const App = (props) => {

    //const {storeUser} = useContext(Context)

    const appName = 'English UP';

    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.checkAuth()
        }
    }, [])

    const [users, setUsers] = useState([])

    async function getUsers() {
        try {
            const response = await UserService.fetchUsers();
            //const response = await props.fetchUsers();
            setUsers(response.data);
            console.log(response.data)
        } catch (e) {
            console.log(e)
        }
    }

    if (props.user.isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }


    if (props.user.isAuth && props.user.data.isActivated === 'false') {
        return (
            <div>
                <ConfirmationEmailWaiting appName={appName}/>
                <Alerts/>
            </div>
        )
    }

    if (!props.user.isAuth) {
        return (
            <div>
                {/*<MainMenu appName={appName}/>*/}
                <LoginForm appName={appName}/>
                <Alerts/>
            </div>
        )
    }

    return (
        <div style={{margin: 12}}>
            <MainMenu2 appName={appName}/>
            {/*<MainMenu appName={appName}/>*/}
            {/*<button onClick={getUsers}>fetch users</button>*/}

            <Alerts/>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

const mapDispatchToProps = (dispatch) => ({
    checkAuth: () => dispatch(checkAuth())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default observer(App);