import * as yup from 'yup';

export const userRegisterSchema = yup
    .object({
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup
            .string()
            .min(8, 'Must contain minimum 8 characters')
            .max(20, 'Should contain maximum 20 characters')
            .matches(/^[^🀀-\uFFFD]*$/, 'Password cannot contain emoji characters')
            .matches(RegExp('(.*[a-z].*)'), 'Must contain at least one lowercase letter')
            .matches(RegExp('(.*[A-Z].*)'), 'Must contain at least one uppercase letter')
            .matches(RegExp('(.*\\d.*)'), 'Must contain at least one digit')
            // .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Must contain special character')
            .matches(RegExp(/^\S*$/), 'This field cannot contain spaces')
            .required('Password is required'),
        confirmPassword: yup
            .string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required();


export const renewPasswordSchema = yup
    .object({
        password: yup
            .string()
            .min(8, 'Must contain minimum 8 characters')
            .max(20, 'Should contain maximum 20 characters')
            .matches(RegExp('(.*[a-z].*)'), 'Must contain at least one lowercase letter')
            .matches(RegExp('(.*[A-Z].*)'), 'Must contain at least one uppercase letter')
            .matches(RegExp('(.*\\d.*)'), 'Must contain at least one digit')
            // .matches(RegExp('[!@#$%^&*(),.?":{}|<>]'), 'Must contain special character')
            .matches(RegExp(/^\S*$/), 'This field cannot contain spaces')
            .required('Password is required'),

        confirmPassword: yup
            .string()
            .required('Confirm Password is required')
            .oneOf([yup.ref('password')], 'Passwords must match'),
    })
    .required();


export const loginSchema = yup
    .object({
        email: yup.string().email('Email is invalid').required('Email is required'),
        password: yup.string().required('Password is required'),
    })
    .required();

export const resetPasswordSchema = yup
    .object({
        email: yup.string().email('Email is invalid').required('Email is required'),
    })
    .required();