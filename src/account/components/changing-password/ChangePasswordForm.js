import {renewPasswordSchema} from "../../../utils/Validation";
import {useForm} from "react-hook-form";
import React, {useState} from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {yupResolver} from "@hookform/resolvers/yup";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {InputAdornment} from "@mui/material";
import {connect} from "react-redux";
import {resetPassword} from "../../../redux/actionsAuthorisation";

const ChangePasswordForm = (props) => {

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
        formState: {errors}
    } = useForm({
        mode: 'onBlur',
        reValidateMode: 'onBlur',
        resolver: yupResolver(renewPasswordSchema)
    });

    const onSubmit = (data) => {
        const {password, oldPassword} = data;
        props.resetPassword(props.email, password, oldPassword)
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

                    <h2>Сменить пароль</h2>

                    <TextField
                        margin="normal"
                        id="oldPassword"
                        // helperText={errors.password?.message}
                        // error={!!errors.password}
                        label="Old Password"
                        variant="outlined"
                        fullWidth
                        type={showPassword ? 'text' : 'password'}
                        {...register('oldPassword')}
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

                    <Button type="submit" variant="outlined">Submit</Button>

                </Box>
    );
};

const mapStateToProps = (state) => ({
    email: state.currentUser.data.email
})
const mapDispatchToProps = (dispatch) => ({
    resetPassword: (email, password, oldPassword) => dispatch(resetPassword(email, password, oldPassword))
})

export default connect(mapStateToProps, mapDispatchToProps)(ChangePasswordForm);