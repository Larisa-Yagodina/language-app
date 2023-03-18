import React, {useContext, useState} from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from "@mui/material/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Link} from "react-router-dom";

const LoginForm = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {storeUser} = useContext(Context);

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
                onClick={() => storeUser.login(email, password)}
                variant="outlined"
            > Login </Button>

                <div style={{textAlign: 'center', margin: '20%'}}>
                    Нет аккаунта?
                    {' '}
                    <Link type='button' to="/registration">
                         Зарегистрироваться
                    </Link>

                </div>



        </Box>


    );
};

export default observer(LoginForm);