import React from 'react';
import s from '../buttons.module.css';
import Link from 'next/link';
import { PiSignIn } from 'react-icons/pi';

const LoginBtn = () => {
    return (
        <Link className={s.iconBtn} href={'/login'}>
            <PiSignIn className={s.icon} />
        </Link>
    );
};

export default LoginBtn;
