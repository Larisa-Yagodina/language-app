import React, {useContext, useState} from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from "@mui/material/Button";
import {Context} from "../index";
import {Link} from "react-router-dom";
import LogoHeader from "./LogoHeader";
import {connect} from "react-redux";
import {registrationAction, login} from '../redux/actions'


const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {storeUser} = useContext(Context);
    const [openRegistrationForm, setOpenRegistrationForm] = useState(false)


    return (

        <Box
            sx={{
                margin: '0 25% 5% 25%',
                py: 10,
                display: 'grid',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <LogoHeader appName={props.appName}/>

            {!props.user?.data?.isActivated &&
                <>
                    <h2>{!openRegistrationForm ? 'Вход' : 'Регистрация'}</h2>
                    <Input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"
                        variant="outlined"
                    />
                    <Input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Password"
                        variant="outlined"
                        type="password"
                    />

                    {!openRegistrationForm ?
                        <Link to="/" style={{textDecoration: 'none', color: 'black'}}>
                        <Button
                            onClick={() => props.login(email, password)}
                            variant="outlined"
                        > Login </Button>
                        </Link>
                        :
                        <Button
                            //onClick={() => storeUser.registration(email, password)}
                            onClick={() => props.registrateUser(email, password)}
                            variant="outlined"
                        > Register</Button>
                    }


                    {!openRegistrationForm ?
                        < >
                            <div onClick={() => setOpenRegistrationForm(true)}
                                 style={{textAlign: 'center', margin: '20% 0 2% 0'}}>
                                Нет аккаунта?
                                {' '}
                                <Link type='button' to="/registration">
                                    Зарегистрироваться
                                </Link>
                            </div>
                            <div style={{textAlign: 'center'}}>
                                Забыли пароль?
                                {' '}
                                <Link type='button' to="/refresh-password">
                                    Создать новый пароль
                                </Link>
                            </div>
                        </ >
                        :
                        <div style={{textAlign: 'center', margin: '20%'}}>
                            <Link onClick={() => setOpenRegistrationForm(false)} type='button' to="/login">
                                Зайти в аккаунт
                            </Link>
                        </div>
                    }
                </>
            }
            {
                (!props.user?.data?.isActivated && props.user?.data?.email) &&
                <h3>Ваш емэйл ожидает подтверждения, чтобы можно было приступить к занятиям.</h3>

            }

        </Box>


    )
        ;
};

const mapStateToProps = (state) => ({
    user: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    registrateUser: (email, password) => dispatch(registrationAction(email, password)),
    login: (email, password) => dispatch(login(email, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);