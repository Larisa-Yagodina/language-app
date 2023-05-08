import React, {useEffect, useState} from 'react';
import Alerts from "./redux/Alerts";
import {connect} from "react-redux";
import ConfirmationEmailWaiting from "./auth-login-logout/ConfirmationEmailWaiting";
import {checkAuth} from "./redux/actionsAuthorisation";
import MainMenu2 from "./main-menu/MainMenu2";
import AuthWrapper from "./auth-login-logout/AuthWrapper";


const App = (props) => {

    useEffect(() => {
        if (localStorage.getItem('token')) {
            props.checkAuth()
        }
    }, [])

    const [users, setUsers] = useState([])



    if (props.user?.isLoading) {
        return (
            <div>Загрузка...</div>
        )
    }


    if (props.user?.isAuth && props.user?.data?.isActivated === 'false') {

        return (
            <div>
                <ConfirmationEmailWaiting />
                <Alerts/>
            </div>
        )
    }

    if (!props.user?.isAuth) {
        return (
            <div>
                {/*<MainMenu appName={appName}/>*/}
                <AuthWrapper/>
                <Alerts/>
            </div>
        )
    }

    return (
        <div style={{margin: 12}}>
            <MainMenu2 />
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