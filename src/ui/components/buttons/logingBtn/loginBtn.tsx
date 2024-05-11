import React from 'react';
import s from '../iconButtons.module.css';
import LoginIcon from '@/ui/components/icons/loginIcon';

const LoginBtn = () => {
    return (
        <button type="button" className={s.button}>
            <LoginIcon />
        </button>
    );
};

export default LoginBtn;
