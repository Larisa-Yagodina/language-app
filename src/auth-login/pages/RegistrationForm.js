import React, {useState} from 'react';
import Box from '@mui/joy/Box';
import Button from "@mui/material/Button";
import {Link, useNavigate} from "react-router-dom";
import {connect} from "react-redux";
import {registrationAction} from '../../redux/actionsAuthorisation'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {userRegisterSchema} from "../../utils/Validation";
import TextField from "@mui/material/TextField";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconButton, InputAdornment } from '@mui/material';
import Divider from "@mui/material/Divider";
import {appLinks} from "../../routes/appLinks";


const RegistrationForm = (props) => {


    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const handleClickShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        reValidateMode: 'onBlur',
        mode: 'onBlur',
        resolver: yupResolver(userRegisterSchema),
    });

    const navigate = useNavigate();

    const onSubmit = (formValues) => {
        props.registrateUser(
            formValues.email.toLowerCase(),
            formValues.password,
            () => navigate(appLinks.activationWaiting, {replace: true})
        );
    };

    return (

        <Box
            sx={{
                margin: '0 25% 5% 25%',
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

            <h2>Start your adventure!</h2>

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

            <TextField
                margin="normal"
                id="password"
                helperText={errors.confirmPassword?.message}
                error={!!errors.confirmPassword}
                label="Confirm password"
                variant="outlined"
                fullWidth
                type={showConfirmPassword ? 'text' : 'password'}
                {...register('confirmPassword')}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle password visibility"
                                onClick={handleClickShowConfirmPassword}
                                edge="end"
                                aria-describedby="component-error-text"
                            >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />

            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Create your account
            </Button>

            <Divider className="mt-4 mb-4">OR</Divider>

            <div style={{textAlign: 'center', margin: '0%'}}>
                <Link onClick={() => props.setOpenRegistrationForm(false)}
                      type='button'
                      to="/login"
                      style={{textDecoration: 'none', color: '#0277bd'}}
                >
                    Зайти в аккаунт
                </Link>
            </div>
        </Box>
    );
};

const mapStateToProps = (state) => ({
    user: state.currentUser,
})

const mapDispatchToProps = (dispatch) => ({
    registrateUser: (email, password, callback) => dispatch(registrationAction(email, password, callback)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);