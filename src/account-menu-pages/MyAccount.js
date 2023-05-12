import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {appLinks} from "../routes/appLinks";

const MyAccount = (props) => {

    return (
        <div style={{margin: '35px 20px'}}>
            <h1>My Account</h1>
            <h3>Email: {props.user.data.email}</h3>
            { props.user.data.isActivated === "false" || props.user.data.isActivated === false &&
                <p style={{color: 'red'}}>Ваш емэйл ожидает подтверждения. <button>Получить емэйл еще раз</button></p>
            }

            <Link type='button' to={appLinks.changePassword}>
                Сменить пароль
            </Link>
        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser
})

export default connect(mapStateToProps)(MyAccount);