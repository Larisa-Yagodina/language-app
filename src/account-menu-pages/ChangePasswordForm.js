import {renewPasswordSchema} from "../utils/Validation";
import {useForm} from "react-hook-form";
import React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {yupResolver} from "@hookform/resolvers/yup";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import {InputAdornment} from "@mui/material";
import Input from "@mui/joy/Input";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const ChangePasswordForm = () => {

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
        console.log("onSubmit");
        console.log(data);
    };

    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div style={{margin: '35px 20px'}}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box
                    component="form"
                    //sx={{ width: 350 }}
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '350'},
                    }}
                    autoComplete="off"
                >
                    <h2>Сменить пароль:</h2>
                    <TextField
                        required
                        id="outlined-required"
                        label="Password"
                        defaultValue=""
                        {...register("password")}
                        error={!!errors.password}
                        helperText={errors.password?.message}
                    />

                    <TextField
                        required
                        id="outlined-required"
                        label="ConfirmPassword"

                        defaultValue=""
                        {...register("confirmPassword")}
                        error={!!errors.confirmPassword}
                        helperText={errors.confirmPassword?.message}

                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                    />



                </Box>

                <Button type="submit" variant="outlined">Submit</Button>

            </form>
        </div>
    );
};

export default ChangePasswordForm;