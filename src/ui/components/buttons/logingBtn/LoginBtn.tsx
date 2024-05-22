import React from 'react';
import s from '../iconButtons.module.css';
import LoginIcon from '@/ui/components/icons/LoginIcon';
import Link from 'next/link';

const LoginBtn = () => {
    return (
        <Link className={s.button} href={'/login'}>
            <LoginIcon width={24} height={24} />
        </Link>
    );
};

export default LoginBtn;
