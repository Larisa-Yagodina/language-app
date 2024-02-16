import Box from '@mui/joy/Box';
import Button from "@mui/material/Button";
import {Link} from "react-router-dom";
import { forgotPasswordSendEmail} from '../../redux/actionsAuthorisation'
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetPasswordSchema} from "../../utils/Validation";
import TextField from "@mui/material/TextField";
import { Divider } from '@mui/material';
import {connect} from "react-redux";

const ChangePasswordRequest = (props) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(resetPasswordSchema),
        mode: 'onBlur',
    });

    const onSubmit = (formValues) => {
        props.forgotPasswordSendEmail(formValues.email.toLowerCase());
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

            <h1>Reset password</h1>

            <p>Введите адрес электронной почты, который вы использовали при регистрации, и мы отправим вам инструкции по сбросу пароля.</p>

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

            <Button type="submit" fullWidth variant="outlined" sx={{ mt: 3, mb: 2 }}>
                Сбросить пароль
            </Button>


            <Divider className="mt-4 mb-4">OR</Divider>

            <div
                style={{textAlign: 'center'}}>
                Вспомнили пароль?
                {' '}
                <Link type='button' to="/login" style={{textDecoration: 'none', color: '#0277bd'}}>
                    Войти
                </Link>
            </div>
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

const mapDispatchToProps = (dispatch) => ({
    forgotPasswordSendEmail: (email) => dispatch(forgotPasswordSendEmail(email))
})


export default connect(null, mapDispatchToProps)(ChangePasswordRequest);

