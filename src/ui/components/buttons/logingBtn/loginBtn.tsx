import React from 'react';
import s from '../iconButtons.module.css';
import LoginIcon from '@/ui/components/icons/loginIcon';
import Link from 'next/link';

const LoginBtn = () => {
    return (
        <Link className={s.button} href={'/login'}>
            <LoginIcon />
        </Link>
    );
};

export default LoginBtn;
