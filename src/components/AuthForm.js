import React from "react";
import Input from "./Input";
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function AuthForm({ isLogin }) { // isLogin defines if it's a login form or register
    return (
        <form className={`${isLogin? 'login_form': 'register_form'} d-flex flex-column gap_24px`}>
            <div className='input_group d-flex flex-column gap_18px'>
                {!isLogin&& <Input type='text' placeholder='Full Name' />}
                <Input type='text' placeholder='Email' />
                <Input type='password' placeholder='Password' />
                {!isLogin&& <Input type='password' placeholder='Confirm Password' />}
            </div>
            <button
                type='button'
                className='default_btn shadow_on_state bg_main c_light rounded_12px w-100 h6 flex_center gap_12px transition_default'
            >
                {`${isLogin? 'Login': 'Register'}`}
                <FontAwesomeIcon icon={faRightToBracket} />
            </button>
        </form>
    );
}