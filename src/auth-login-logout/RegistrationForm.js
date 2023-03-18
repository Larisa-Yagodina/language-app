import React, {useContext, useState} from 'react';
import Box from '@mui/joy/Box';
import Input from '@mui/joy/Input';
import Button from "@mui/material/Button";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

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
                    onClick={() => storeUser.registration(email, password)}
                    variant="outlined"
                > Register</Button>

        </Box>


    );
};

export default observer(LoginForm);