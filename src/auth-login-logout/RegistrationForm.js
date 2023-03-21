import React, {useContext, useState} from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from "@mui/material/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import LogoHeader from "./LogoHeader";
import {Link} from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {storeUser} = useContext(Context);

    const [openForm, setOpenForm] = useState(false)

    return (
        <div>
            {!openForm ?
            <div onClick={() => setOpenForm(true)} style={{textAlign: 'center', margin: '30%'}}>
                Нет аккаунта?
                {' '}
                <Link type='button' to="/registration">
                    Зарегистрироваться
                </Link>
            </div>
            :
            <div>
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
                    <LogoHeader/>
                    <h3>Регистрация</h3>

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

                    <Button
                        onClick={() => storeUser.registration(email, password)}
                        variant="outlined"
                    > Register</Button>

                </Box>
            </div>
            }
        </div>

    );
};

export default observer(LoginForm);