import React, {useContext, useState} from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from "@mui/material/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";
import LogoHeader from "./LogoHeader";

const LoginForm = (props) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {storeUser} = useContext(Context);
    const [openRegistrationForm, setOpenRegistrationForm] = useState(false)

    return (

        <Box
            sx={{
                margin: '0 30% 5% 30%',
                py: 10,
                display: 'grid',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
            }}
        >
            <LogoHeader appName={props.appName}/>
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

                <Button
                    onClick={() => storeUser.login(email, password)}
                    variant="outlined"
                > Login </Button>
                :
                <Button
                    onClick={() => storeUser.registration(email, password)}
                    variant="outlined"
                > Register</Button>

            }


            {!openRegistrationForm ?
                < >
                <div onClick={() => setOpenRegistrationForm(true)} style={{textAlign: 'center', margin: '20% 0 2% 0'}}>
                    Нет аккаунта?
                    {' '}
                    <Link type='button' to="/registration">
                        Зарегистрироваться
                    </Link>
                </div>
                <div  style={{textAlign: 'center'}}>
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


        </Box>


    )
        ;
};

export default observer(LoginForm);