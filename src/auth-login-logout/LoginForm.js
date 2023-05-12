import React, {useState} from 'react';
import Box from '@mui/joy/Box';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import {registrationAction, login} from '../redux/actionsAuthorisation'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {loginSchema} from "../utils/Validation";
import TextField from "@mui/material/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Divider, IconButton, InputAdornment } from '@mui/material';
import {useLocation, useNavigate} from "react-router-dom";
import {appLinks} from "../routes/appLinks";


const LoginForm = (props) => {

    const navigate = useNavigate();
    const location = useLocation();
    const fromPage = location.state?.from?.pathname || '/private/my-lessons';

    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginSchema),
        mode: 'onBlur',
    });

    const onSubmit = (formValues) => {
        props.login(formValues.email.toLowerCase(),
            formValues.password,
            () => navigate(fromPage, {replace: true}));
    };


    return (

        <Box
            sx={{
                margin: '0 25% 0% 25%',
                py: 10,
                display: 'grid',
                gap: 2,
                alignItems: 'center',
                flexWrap: 'wrap',
                paddingTop: '0px'
            }}
            component="form"
            onSubmit={handleSubmit(onSubmit)}
        >

                    <h2>Welcome back!</h2>

                    <TextField

                        margin="normal"
                        id="email"
                        helperText={errors.email?.message}
                        error={!!errors.email}
                        label="Email"
                        variant="outlined"
                        // fullWidth
                        // autoFocus
                        {...register('email')}
                    />

                    <TextField
                        margin="normal"
                        id="password"
                        helperText={errors.password?.message}
                        error={!!errors.password}
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        {...register('password')}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        edge="end"
                                        aria-describedby="component-error-text"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />


            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                        Log in
            </Button>

            <div style={{textAlign: 'right'}}>
                <Link type='button' to={appLinks.resetPassword} style={{textDecoration: 'none', color: '#0277bd'}}>
                    Забыл пароль
                </Link>
            </div>
            <Divider className="mt-4 mb-4">OR</Divider>

            <div
                 style={{textAlign: 'center'}}>
                Нет аккаунта?
                {' '}
                <Link type='button' to="/registration" style={{textDecoration: 'none', color: '#0277bd'}}>
                    Зарегистрироваться
                </Link>
            </div>


        </Box>

    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    registrateUser: (email, password) => dispatch(registrationAction(email, password)),
    login: (email, password, callback) => dispatch(login(email, password, callback))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);