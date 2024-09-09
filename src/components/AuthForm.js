import React from "react";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useFormik } from "formik";
import * as Yup from 'yup';
import { FormControl, FormErrorMessage } from '@chakra-ui/react'

export default function AuthForm({ isLogin }) { // isLogin defines if it's a login form or register
    const inputClass = 'input_style rounded_12px px_18px py_12px text_md transition_default w-100';
    const errorClass = "text_md fw_semiBold transition_default";
    const initialValues = isLogin
        ? { email: '', password: '' }
        : { fullName: '', email: '', password: '', confirmPassword: '' };

    const validationSchema = Yup.object(
        isLogin
            ? {
                email: Yup.string()
                    .email('Enter a valid email')
                    .required('Email is required'),
                password: Yup.string()
                    .required('Password is required'),
            }
            : {
                fullName: Yup.string()
                    .required('Full name is required'),
                email: Yup.string()
                    .email('Enter a valid email')
                    .required('Email is required'),
                password: Yup.string()
                    .min(8, 'Password must be at least 8 characters long')
                    .required('Password is required'),
                confirmPassword: Yup.string()
                    .oneOf([Yup.ref('password'), null], 'Passwords must match')
                    .required('Confirm your password'),
            }
    );
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    });
    const formField = (name, type, placeholder, autoComplete) => (
        <FormControl className="formControl"
            isInvalid={!!formik.errors[name] && formik.touched[name]}>
            <input
                className={inputClass}
                type={type}
                placeholder={placeholder}
                name={name}
                autoComplete={autoComplete}
                {...formik.getFieldProps(name)}
            />
            <FormErrorMessage className={errorClass}>
                {formik.errors[name]}
            </FormErrorMessage>
        </FormControl>
    )
    return (
        <form className={`${isLogin ? 'login_form' : 'register_form'} d-flex flex-column gap_24px`}
            onSubmit={formik.handleSubmit}>
            <div className='input_group d-flex flex-column gap_18px'>
                {!isLogin && formField('fullName', 'text', 'Full Name', 'name')}
                {formField('email', 'text', 'Email', isLogin ? 'email' : 'new-email')}
                {formField('password', 'password', 'Password', isLogin ? 'current-password' : 'new-password')}
                {!isLogin && formField('confirmPassword', 'password', 'Confirm Password', 'new-password')}
            </div>
            <button
                type='submit'
                className='default_btn shadow_on_state bg_main c_light rounded_12px w-100 h6 flex_center gap_12px transition_default'
            >
                {`${isLogin ? 'Login' : 'Register'}`}
                <FontAwesomeIcon icon={faRightToBracket} />
            </button>
        </form>
    );
}