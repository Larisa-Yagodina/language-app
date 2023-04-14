import React, {useState} from 'react';
import {Link} from "react-router-dom";
import LoginForm from "./LoginForm";
import {connect} from "react-redux";
import RegistrationForm from "./RegistrationForm";

const AuthWrapper = (props) => {

    const [openRegistrationForm, setOpenRegistrationForm] = useState(false)

    return (
        <div>

            {!openRegistrationForm ?
                <LoginForm appName={props.appName} setOpenRegistrationForm={setOpenRegistrationForm}/>
                :
                <RegistrationForm appName={props.appName} setOpenRegistrationForm={setOpenRegistrationForm}/>
            }

            {
                (!props.user?.data?.isActivated && props.user?.data?.email) &&
                <h3>Ваш емэйл ожидает подтверждения, чтобы можно было приступить к занятиям.</h3>
            }

        </div>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser,
})

export default connect(mapStateToProps)(AuthWrapper);

